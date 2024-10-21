type TError = string | null;

export interface TRepository {
    isLoading: boolean;
    data: Array<any>;
    error: TError
}