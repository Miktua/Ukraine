import axios from "axios";
import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import "reflect-metadata";
import {RootStore} from "./RootStore";
import {toast} from "react-toastify";

interface User {
    login: string,
    email: string,
    address?: string,
    id?: string
}

@injectable()
export class UserStore {
    @observable user?: User;
    @observable isAuth: boolean;
    @observable isError: boolean;
    @observable state: string = '123';

    public constructor(private readonly rootStore: RootStore) {
        makeObservable(this);
        this.isAuth = false;
        this.isError = false;
    }

    changeString = (newString:string) => {
        console.log(`newString`, newString)
        this.state = newString
    }

    async Login(sign:any, msg:any) {

    }

    //get user data
    async GetUser() {

    }
}