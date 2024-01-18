import React, { useContext } from "react";
import { Context } from "../context";
import s from "./style.module.sass";
import Button from "../UI/Button";
import { Link, } from "react-router-dom";
import { Flex, Rate } from 'antd';


export default function Home({ id, title, description, rating, price, discountPercentage, images, }) {
    const link = `/Singleproduct/${id}`;
    const { addToBasket } = useContext(Context);

    return (
        <div className={s.container}>
            <Link to={link} className={s.link}><h1>{title} </h1>
                <h2>{description}</h2>
                <p className={s.price}>{price}$</p>
                <p className={s.disc}>{discountPercentage}%</p>
                <img src={images[0]} alt="product_img" /></Link>
            <p><Rate defaultValue={rating} allowHalf />{rating}</p>
            <div>
                <Button onClick={() => addToBasket(title, description, discountPercentage, price, images)}>AddToBasket</Button>
            </div>

        </div>
    )
}
