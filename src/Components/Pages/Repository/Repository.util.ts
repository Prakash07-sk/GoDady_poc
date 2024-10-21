import axios from "axios";
import { TAppThunk, dispatch } from "../../../Redux/Store/store";
import { API } from "../../../Redux/Service/API";
import { toast } from "react-toastify";
import { LoadingReducer, RevertData, UpdateRepoData } from "../../../Redux/Store/Repository/Repository.slice";


export const  GetRepoDetails: any = () :TAppThunk => 
    async dispatch => {
        
        dispatch(LoadingReducer());
        axios.get(`${API?.rootAPI}/repos`)
        .then((res: any) => dispatch(UpdateRepoData(res?.data)))
        .catch((_: any) => {
            dispatch(RevertData())
            toast.error("Something went wrong");
        })
    }