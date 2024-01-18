import React from 'react';
import NavBar from '../NavBar';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import s from "./style.module.sass";
import Footer from '../Footer';

export default function Layout() {
    return (
        <Fragment>
            <NavBar />
            <div className={s.layout}>
                <Outlet />
            </div>
            <Footer />
        </Fragment>
    )
};
