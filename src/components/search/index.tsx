import {useEffect, useState} from "react";
import {useAppDispatch} from "../../app/hooks";
import { actions } from "../../redux/entriesSlice";
import styles from "./style.module.scss"

export const Search = () => {
    const [input, setInput] = useState<string>("")
    const dispatch = useAppDispatch();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(actions.filter(input))
        }, 1500)

        return () => clearTimeout(delayDebounceFn)
    }, [input])

    return (
        <>
            <div className={styles.form__group}>
                <input onChange={(event) => setInput(event.target.value)}
                       className={styles.form__input}
                       placeholder="Filter value"
                       value={input}
                       type="text"
                       id="name"/>
                <label className={styles.form__label}
                       htmlFor="name">
                    Filter value
                </label>
            </div>
        </>
    )
}