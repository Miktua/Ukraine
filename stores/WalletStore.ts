import { observable, action, makeObservable, reaction, IReactionDisposer, computed } from 'mobx';
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";
import contractsData from '../utils/contracts.json'
import type { Contract } from 'web3-eth-contract'
import type { AbiItem } from 'web3-utils'
import { BaseProvider } from '@metamask/providers';
import type { AbstractProvider, WebsocketProvider } from 'web3-core'
import { login } from '../api/auth';
import { getAuthToken, getAuthTokenTTL } from '../service';
import { injectable } from "inversify";
import 'reflect-metadata'
import {CHAIN_ID, NETWORKS, PROVIDER_ETH} from "../utils/config";
import Web3Modal from "web3modal";
import {RootStore} from "./RootStore";


@injectable()
export class Web3Store {
    @observable user: { wallet: string | undefined } = {
        wallet: undefined
    }
    @observable market: Contract | null = null;
    @observable nft: Contract | null = null;
    @observable treasure: Contract | null = null;
    @observable erc20: Contract | null = null;
    @observable web3: Web3 | null = null;
    @observable provider: BaseProvider | null = null;
    @observable requireInstall: boolean = false;
    @observable web3infura: Web3;
    @observable web3Modal: Web3Modal | null = null;
    @observable connected: boolean = false;
    providerDisposer: IReactionDisposer | null = null;

    public constructor(private readonly rootStore: RootStore) {
        makeObservable(this)
        //TODO change this to dynamic value
        this.web3infura = new Web3(NETWORKS[4])
    }

    @action
    async connectWallet() {
        try {
            this.web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions: {
                    walletconnect: {
                        package: WalletConnectProvider, // required
                        options: {
                            // infuraId: '691acffdf09f4911ae072eb220057328',
                            rps: NETWORKS
                        }}

                },
            });

            this.provider = await this.web3Modal.connect();

            this.providerDisposer = reaction(() => this.provider, provider => {
                provider && provider.on("accountsChanged", this.onAccountChanged);
            })

            const web3 = new Web3(this.provider as BaseProvider & WebsocketProvider);

            this.web3 = web3

            const accounts: string[] = await web3.eth.getAccounts()

            const [wallet] = accounts;

            //contract setup
            this.erc20 = new web3.eth.Contract(contractsData.erc20.abi as AbiItem[], contractsData.erc20.address);
            this.web3 = web3;

            this.user = {
                wallet
            }
            this.connected = true;
        } catch (error) {
            console.error(error)
        }
    }

    onAccountChanged = async (newAccounts: unknown) => {
        console.log('onAccountChanged', { newAccounts })
        if (newAccounts instanceof Array) {
            this.setWallet(newAccounts[0]);
            await this.sign()
        }
    }

    @action resetWallet = () => {
        if(this.web3Modal){
            this.web3Modal.clearCachedProvider();
            localStorage.clear();
        }

        this.connected = false;
    }

    @action.bound
    async setWallet(w: string | undefined) {
        this.user.wallet = w
    }

    async login() {
        await this.connectWallet()
        const jwtTTL = getAuthTokenTTL();
        if (jwtTTL) {
            const isTokenExpired = parseInt(jwtTTL) < Date.now();
            if (!getAuthToken() || isTokenExpired) {
                await this.sign()
            }
            this.connected = true;
        } else {
            const web3 = this.web3;
            if (web3) {
                await this.sign()
            }
        }
    }

    async tryReconnect() {
        const jwtTTL = getAuthTokenTTL();
        if (jwtTTL) {
            await this.login();
            this.connected = true;
        }
    }

    convertFromWei(value: number | undefined | null) {
        if (!value) return ''
        else {
            const price = this.web3infura?.utils.fromWei(value.toString(), 'ether')
            return Number(price).toFixed(3);
        }
    }

    sign = async () => {
        if (this.user.wallet && this.web3) {
            const res = await login(this.user.wallet, this.web3)
            this.connected = true;
            return res
        }
    }

    @computed
    get isLoggedIn() {
        const jwtTTL = getAuthTokenTTL();
        const isTokenExpired = jwtTTL && parseInt(jwtTTL) < Date.now()
        return Boolean(this.user.wallet) && Boolean(getAuthToken()) && !isTokenExpired
    }
}

export default Web3Store;
