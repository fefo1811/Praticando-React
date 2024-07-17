import React from 'react';
import styles from './styles.module.scss';
import {Cards} from "../Cards/Cards";



export const Header: React.FC = () => {
    return (
        <header className={ styles.header }>
            <div className={styles.container}>
                <div>
                    <h1> MyTo-do </h1>

                    <span> Bem-vindo, Felipe </span>
                </div>

                <div>
                    <Cards
                        titulo={"Total de Tarefas"}
                        valor={ 5 }
                    />
                    <Cards
                        titulo={"Tarefas Pendentes"}
                        valor={ 4 }
                    />
                    <Cards
                        titulo={"Tarefas Concluídas"}
                        valor={ 1 }
                    />
                </div>
            </div>


        </header>
    )
}