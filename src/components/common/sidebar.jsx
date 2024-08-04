import { useContext, useEffect, useState } from "react";
import "./nav.scss"
import { v4 as uuidv4 } from 'uuid';
import ContextMain from "../context/context";

export default function SideBar() {

    const { setIsTogg ,isTogg } = useContext(ContextMain);

    useEffect(()=>{
        setIsActiveBar(isTogg)
    },[isTogg])

    const navIcons = ['home','list','bell','message'];
    const [activeIndex,setActiveIndex] = useState(0);
    const [isActiveBar,setIsActiveBar] = useState(false)

    return (<div className={`sidenav_subs ${isActiveBar ? 'active' : ''}`}>
        <div className="sides">
            <div className="icons_mains">
                {navIcons.map((item,i)=>{
                    return(
                        <div className={activeIndex == i ? 'active' : ''} key={uuidv4()} onClick={()=>setActiveIndex(i)}>
                            <img src={require(`../../assets/images/${item}.png`)} alt="" />
                        </div>
                    )
                })}
            </div>
            <div>
                <div className="logout">
                    <img src={require("../../assets/images/user-logout.png")} alt="Logout" />
                </div>
            </div>
        </div>
    </div>)
}