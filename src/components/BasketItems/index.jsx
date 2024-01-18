import React, { useContext } from 'react';
import { Context } from "../context"
import s from "./style.module.sass";

export default function BasketItems({ id, title, price, description, discountPercentage, images, count }) {
    const { basketIncrement, basket, setBasket, basketDecrement } = useContext(Context);


    return (
        <div className={s.container}>
            <div>
                <h1>{title} </h1>
                <h2>{description}</h2>
                <p className={s.price}>{price}$</p>
                <p className={s.discount}>{discountPercentage}%</p>
                <img src={images[0]} alt="" />
            </div>
            <div className={s.anzahl}>
                Anzahl: <span className={s.span_count}>{count}</span>
            </div>
            <div >
                <button className={s.buttons} onClick={() => basketIncrement(id)}>+</button>
                <button className={s.buttons} onClick={() => basketDecrement(id)}>-</button>
            </div>
        </div>
    )
}
