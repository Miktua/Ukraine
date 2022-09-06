import request, { IResponse } from "../service";

export interface IFetchProfileResponseData {
  address: string;
  account: any;
  exp: number;
  iat: number;
  permissions: string[];
}

export function fetchProfile() {
  return request<IResponse<IFetchProfileResponseData>>({
    url: `user`,
  });
}

export function updateProfile(data: Partial<any>) {
  return request<IResponse<IFetchProfileResponseData>>({
    url: `user`,
    method: "PUT",
    data,
  });
}
