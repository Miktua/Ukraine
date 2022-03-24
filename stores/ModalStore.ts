import { injectable } from "inversify";
import { RootStore } from "./RootStore";
import { action, computed, makeObservable, observable } from "mobx";
import { ModalsEnum } from "../modals";




export interface ModalEntry {
    key: ModalsEnum;
    data?: any;
}



@injectable()
export class ModalStore {
    @observable activeModals: ModalEntry[] = [];

    constructor(private readonly rootStore: RootStore) {
        makeObservable(this);
    }


    @action showModal = (key: ModalsEnum, data?: any) => {
        console.log('key', key);
        this.activeModals.push({ key, data });
        console.log(this.activeModals)
    }

    isVisible = (key: ModalsEnum) => {
        return this.activeModals.some(m => m.key === key);
    }

    @action hideModal = (idx: number) => {
        this.activeModals = this.activeModals.filter((m, i) => i !== idx);
    }

    @action hideAllModals = () => {
        this.activeModals = [];
    }
}
