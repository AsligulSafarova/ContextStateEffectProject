import React from 'react';
import s from "./style.module.sass";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function CategoriesItem({ title }) {
  const link = `/categoryProuct/${title}`
  return (
    <div className={s.container}>
      <Link to={link} className={s.link}>
        <h1>{title} </h1>
        <p><FontAwesomeIcon icon={faAngleRight} /></p>
      </Link>
    </div>
  )
}
