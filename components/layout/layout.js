import {Fragment} from "react";
import MainNavigation from "./main-navigation";
import Footer from "../home-page/footer";
import Notification from "../ui/notification/notification";
function Layout(props){
    return <Fragment>
        <MainNavigation/>
        <main>{props.children} </main>
        <Footer/>
    </Fragment>
}
export default Layout;