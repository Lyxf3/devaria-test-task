import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {tEntriesState} from "../app/types";


const initialState: tEntriesState = {
    sortField: "API",
    sortType: "asc",
    filter: ""
}

export const entriesSlice = createSlice({
    name: "entries",
    initialState,
    reducers: {
        filter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
        sort: (state, action: PayloadAction<"API" | "Category">) => {
            if (state.sortField === action.payload) {
                state.sortType = "asc" === state.sortType ? "desc" : "asc"
            } else {
                state.sortType = "asc"
            }
            state.sortField = action.payload
        }
    }
})

export const selectEntries = (state: RootState) => state.entries;
export const { actions } = entriesSlice;
export const entriesReducer = entriesSlice.reducer;
