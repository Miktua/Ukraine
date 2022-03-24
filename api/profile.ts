import request, { IResponse } from '../service'
// import { IAccount } from 'types/account.types'
// import { IProfile } from 'types/profile.types'

export interface IFetchProfileResponseData {
    address: string;
    account: any;
    exp: number;
    iat: number;
    permissions: string[]
}

export function fetchProfile() {
    return request<IResponse<IFetchProfileResponseData>>({
        url: `user`
    })
}

export function updateProfile(data: Partial<any>) {
    return request<IResponse<IFetchProfileResponseData>>({
        url: `user`,
        method: 'PUT',
        data
    })
}
