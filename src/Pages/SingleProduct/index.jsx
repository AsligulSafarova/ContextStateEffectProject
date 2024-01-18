import React, { useState, useEffect, useContext } from 'react'
import { singleProduct } from "../../FetchsAll/SingleProduct";
import { useParams } from 'react-router-dom';
import s from "./style.module.sass";
import Button from "../../components/UI/Button";
import { Context } from '../../components/context';
import { Flex, Rate } from 'antd';

export default function SingleProduct() {
    const [singleProd, setSingleProd] = useState([]);
    const { title, brand, category, description, discountPercentage, images, price, rating, thumbnail
    } = singleProd;
    const { addToBasket, setBasket } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        singleProduct(setSingleProd, id);
        setBasket(singleProd)
    }, []);

    return (
        <div className={s.container}>
            {singleProd.length === 0 ? <h1 className={s.loading}>Loading ......</h1> :
                <>
                    <h1>{category}</h1>
                    <h2>{title} </h2>
                    <h3>{description}</h3>
                    <p>{brand}</p>
                    <p className={s.price}>{price}$</p>
                    <p className={s.disc}>{discountPercentage}%</p>
                    <img src={thumbnail} alt="" />
                    <p>{rating}</p>
                    <Rate defaultValue={rating} allowHalf />
                    <div>
                        <Button onClick={() => addToBasket(title, description, price, discountPercentage, images)}>AddToBasket</Button>
                    </div></>
            }
        </div>
    )
}
