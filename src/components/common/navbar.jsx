import { useContext } from "react";
import "./nav.scss"
import { v4 as uuidv4 } from 'uuid';
import ContextMain from "../context/context";

export default function NavBar() {
    const { setIsTogg ,isTogg } = useContext(ContextMain);
    const icons = ['hash', 'home', 'bell'];

    function updateTogg(){
        setIsTogg(!isTogg)
    }

    return (
        <div className="nav_main_container">
            <div className="left_container">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img className="logo" src={require("../../assets/images/logo.png")} alt="Logo" />
                    <div className="cus_menu">
                        <label>
                            <input type="checkbox" id="check" onChange={()=>updateTogg()}/>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>

                    </div>

                </div>
            </div>

            <div className="right_container">
                <div className="inp_search">
                    <input placeholder="Search" type="search" name="" id="" />
                </div>
                <div className="right_subs">

                    {
                        icons.map((item) => {
                            return (
                                <div className="right_img" key={uuidv4()}>
                                    <img src={require(`../../assets/images/${item}.png`)} alt="" />
                                </div>
                            )
                        })
                    }
                    <div>
                        <img className="profile" src={require("../../assets/images/follower.png")} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}