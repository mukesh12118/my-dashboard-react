import NavBar from "./common/navbar";
import "../components/main.scss"
import Dashboard from "./pages/dashboard";
import SideBar from "./common/sidebar";

export default function Main() {


    return (
        <div className="main_container">
            <div className="nav_main_container">
                <NavBar />
            </div>
            <div className="sec_container">
                <div className="sideNav">
                    <SideBar />
                </div>
                <div className="mainRight">
                    <div className="mainRight_subs">
                        <h3>Dashboard</h3>
                        <Dashboard />

                    </div>
                </div>
            </div>
        </div>
    )
}