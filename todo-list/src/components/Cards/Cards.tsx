import React from "react";
import styles from './styles.module.scss'

interface CardsProps {
    titulo: string;
    valor: number;
}

export const Cards: React.FC<CardsProps> = ({ titulo, valor }) => {
    return (
        <article className={ styles.statsCards }>
            <h2> { titulo } </h2>
            <span> { valor } </span>
        </article>
    )
}