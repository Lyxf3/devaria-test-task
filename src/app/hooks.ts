import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import {AxiosError, AxiosResponse} from "axios";
import {useEffect, useState} from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useRequest = (request: any): Array<null | boolean | any> => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | any>(null)
    const [data,  setData] = useState<any>(null)

    useEffect(() => {
        setLoading(true)
        request()
            .then((response: AxiosResponse)  => setData(response.data))
            .catch((reason: AxiosError) => setError(reason.cause))
            .finally(() => setLoading(false))
    }, [])

    return [data, loading, error]
}