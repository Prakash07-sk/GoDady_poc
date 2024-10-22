import { Container, ToastContainer } from "react-bootstrap";
import AppNavigation from "../AppNavigation/appnav";
import NavBar from "../Pages/NavBar";

export default function AppLayout() {
    return (
        <NavBar>
            <AppNavigation />
            <ToastContainer />
        </NavBar>
    );
}