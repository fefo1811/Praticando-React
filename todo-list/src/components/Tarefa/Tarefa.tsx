import React from "react";
import styles from './styles.module.scss'

export const Tarefa: React.FC = () => {
    return (
        <section className={styles.container}>
            <form>
                <div>
                    <label htmlFor="titulo-tarefa"> Adicionar Tarefa </label>
                    <input type="text" id="titulo-tarefa" placeholder="Título da Tarefa"/>
                </div>

                <button> Adicionar </button>
            </form>
        </section>
    )
}