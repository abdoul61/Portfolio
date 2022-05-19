import React from 'react'
import './Topbar.scss'
import { Person, Mail } from "@material-ui/icons"

export default function TopBar({ openMenu, setOpenMenu })
{
    
    return (
        <div className={"topbar " + (openMenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Cognito.</a>
                    <div className="itemContainer">
                        <Person  className="icon"/>
                        <span>+345 432 234</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>souleyamine@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/abdoul61" className="gith"><span>Github repo</span></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://linkedin.com/in/souley-abdoul-aziz" className="gith"><span>Linkedln Profile</span></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

  