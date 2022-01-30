import { injectable } from 'inversify'
import {  makeObservable, observable } from 'mobx'
import 'reflect-metadata'
import { RootStore } from './RootStore'
import {fetchProfile, IFetchProfileResponseData} from "../api/profile";


@injectable()
export class UserStore {
    @observable user?: IFetchProfileResponseData | null = null

    public constructor(private readonly rootStore: RootStore) {
        makeObservable(this)
    }

    //get user data
    async getUser() {
        const { data } = await fetchProfile()
        //@ts-ignore
        this.user = data.user
    }
}
