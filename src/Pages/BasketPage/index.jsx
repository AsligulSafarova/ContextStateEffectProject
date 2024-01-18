import React, { useContext } from 'react';
import s from "./style.module.sass";
import { Context } from '../../components/context';
import BasketItems from '../../components/BasketItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal, faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

export default function BasketPage() {
    const { basket } = useContext(Context);
    const total = Math.round(basket.reduce((prev, { price, count }) => prev + price * count, 0))
    return (
        <div className={s.container}>
            {
                basket.length !== 0 ?
                    <>
                        {
                            basket.map(el => (<BasketItems key={el.id} {...el} />))
                        }
                        <div className={s.tottal}>
                            <h1 > Gesamtsumme:<span className={s.summe}>{total}$</span> </h1>
                            <button className={s.kasse}>Zur Kasse</button>
                            <div className={s.icons}>
                                <p><FontAwesomeIcon icon={faCcPaypal} /> </p>
                                <p><FontAwesomeIcon icon={faCcVisa} /></p>
                                <p><FontAwesomeIcon icon={faCcMastercard} /> </p>
                            </div>
                        </div>
                    </> :
                    <div className={s.leer}>
                        Dein Warenkorb ist leer
                        <p className={s.cry}><FontAwesomeIcon icon={faFaceSadTear} /></p>
                    </div>
            }
        </div>
    )
}
