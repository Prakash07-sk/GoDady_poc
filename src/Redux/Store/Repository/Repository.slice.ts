import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRepository } from "./Repository.interface";


const initialState: TRepository = {
    isLoading: false,
    data: [],
    error: null
}

const RepositorySlice = createSlice({
    name: "Repository",
    initialState,
    reducers: {
        LoadingReducer: (state: any): TRepository => ({
            ...state,
            isLoading: true
        }),
        UpdateRepoData: (state, action: PayloadAction<Array<any>>): TRepository => ({
            ...state,
            isLoading: false,
            data: action?.payload
        }),
        RevertData: () => initialState
    }
})

export const { LoadingReducer, UpdateRepoData, RevertData } = RepositorySlice.actions;
export default RepositorySlice.reducer;