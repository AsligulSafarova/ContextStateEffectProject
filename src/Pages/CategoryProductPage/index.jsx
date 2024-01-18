import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../../components/context";
import { useParams } from 'react-router-dom';
import { getCategoriesTittle } from "../../FetchsAll/getCategoriesTittle";
import CategoryProductItem from "../../components/CategoryProductItem";
import s from "./style.module.sass"

export default function CategoryProductPage() {
    const [categoryproduct, setCategoryproduct] = useState([]);
    const { setBasket } = useContext(Context);
    const { title } = useParams();

    useEffect(() => {
        setBasket(categoryproduct)
    }, []);

    useEffect(() => {
        getCategoriesTittle(setCategoryproduct, title)
    }, [])
    return (
        <div className={s.cont}>
            {
                categoryproduct.map(el => (<CategoryProductItem key={el.id}{...el} />))
            }
        </div>
    )
}
