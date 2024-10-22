import { useEffect } from "react";
import Loader from "../../Common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { IsRepoLoading } from "../../../Redux/Store/Repository/Repository.selector";
import { GetRepoDetails } from "./Repository.util";
import RepoDetails from "./RepoDetails/RepoDetails";
import CardPlaceHolder from "../../Common/CardPlacholder";
import { Col, Nav, Row } from "react-bootstrap";
import SideBar from "../../Common/SideBar";


export default function Repository() {

    const isRepositoryLoading = useSelector(IsRepoLoading);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(GetRepoDetails());
    }, [])

    return isRepositoryLoading ? <CardPlaceHolder /> : <RepoDetails />
}