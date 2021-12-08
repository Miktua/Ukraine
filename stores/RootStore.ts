
import { Container } from "inversify";
import { UserStore } from "./UserStore";
import {ModalStore} from "./ModalStore";
import { useMemo } from "react";
// import {WalletStore} from "./WalletStore";

// @ts-ignore
export class HistoryStore implements History {}
export class RootStore {
    public userStore: UserStore;
    public container: Container;
    public modalStore: ModalStore;
    // public walletStore: WalletStore;
    public constructor() {
        this.userStore = new UserStore(this);
        this.modalStore = new ModalStore(this);
        // this.walletStore = new WalletStore(this);
        this.container = new Container();
        this.container.bind(UserStore).toConstantValue(this.userStore);
        this.container.bind(ModalStore).toConstantValue(this.modalStore);
        // this.container.bind(WalletStore).toConstantValue(this.walletStore);
        this.container.bind(Container).toConstantValue(this.container);
    }
}

function initializeStore(initialData = null) {
    let store
    let _store:any = store ?? new RootStore()
  
    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
    if (initialData) {
      _store.hydrate(initialData)
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store
  
    return _store
  }

export function useStore(initialState?:any) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
  }
