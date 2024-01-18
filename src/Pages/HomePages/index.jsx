import React, { useContext } from 'react';
import { Context } from "../../components/context";
import Home from '../../components/Home';
import s from "./style.module.sass";

export default function HomePages() {
    const { product } = useContext(Context);

    return (
        <div className={s.container}>
            {
                product.map(el => (<Home key={el.id} {...el} />))
            }


        </div>
    )
}
