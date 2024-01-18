import React, { useContext } from 'react';
import logo from "../images/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import s from "./style.module.sass";
import { Context } from "../context"

export default function NavBar() {
    const { basket } = useContext(Context);
    const counter = (basket.reduce((prev, item) => prev + item.count, 0))
    console.log(counter);
    const active_check = ({ isActive }) => isActive ? s.active : ""
    return (
        <nav className={s.nav}>
            <NavLink to="/" className={active_check}><img src={logo} alt="logo_img" /> </NavLink>
            <ul className={s.ul}>
                <NavLink to="category" className={active_check}> <li>Categories</li></NavLink>
                <NavLink className={active_check} to="contact"><li>Contacts</li></NavLink>
                <NavLink to="basket" className={active_check}><li>
                    <p className={s.counter}>{counter}</p>
                    <FontAwesomeIcon icon={faBasketShopping} className={s.icon} />
                </li> </NavLink>
            </ul>
        </nav>
    )
}
