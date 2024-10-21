import { TRepository } from "./Repository.interface";
import { TRootState } from '../store';
import { createSelector } from "@reduxjs/toolkit";


const repository = (state: TRootState) => state?.repository;

export const IsRepoLoading = createSelector(repository, (state: TRepository) => state?.isLoading);
export const RepoData = createSelector(repository, (state: TRepository) => state?.data);