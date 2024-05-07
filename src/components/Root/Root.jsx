import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="">
            <div className="md:max-w-7xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;