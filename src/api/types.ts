import {AxiosHeaders} from "axios";

export interface AxiosResponse<T> {
    headers: AxiosHeaders;
    request: XMLHttpRequest;
    status: number;
    config: any;
    data: T;
}