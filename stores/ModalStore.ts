import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import { injectable } from "inversify";

export enum Modals {
    _,
    Connect,
    Pool,
    Migrate,
    Token,
}

export const PERSISTENT_MODALS = [];

@injectable()
export class ModalStore {
    @observable activeModal?: Modals;
    @observable tempStorage?: any;

    public constructor(protected rootStore: RootStore) {
        makeObservable(this);
    }

    @action showModal(modal: Modals, data?: any) {
        this.activeModal = modal;
        this.tempStorage = data;
    }

    @action hideModals() {
        this.activeModal = undefined;
    }
}