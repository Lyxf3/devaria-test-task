import axios, {AxiosResponse} from "axios";
import {DataItem} from "./types";

export const fetchItems = (): Promise<AxiosResponse<DataItem>> => {
    return axios.get("https://api.publicapis.org/entries")
}