import React, { useContext } from 'react';
import { Context } from "../../components/context";
import CategoriesItem from '../../components/CategoriesItem';
import s from "./style.module.sass";

export default function CategoryPages() {
    const { category } = useContext(Context);
    return (
        <div className={s.container}>
            {
                category.map(el => (<CategoriesItem key={el} title={el} />))
            }
        </div>
    )
}
