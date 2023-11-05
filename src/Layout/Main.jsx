import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import NavBar from "../SharedComponents/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;