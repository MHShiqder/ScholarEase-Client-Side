import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ChatBox from "../Component/ChatBox/ChatBox";


const Root = () => {
    return (
        <div>
            <ChatBox></ChatBox>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;