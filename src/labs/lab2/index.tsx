

import styles from '../lab1/index.module.css'
import { Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';




export default function Lab2() {


    return <div className={styles.main}>
        <h2>Лабораторная работа 2</h2>
        <h4>Паттерн "Фабричный метод"</h4>
        <p>
            Навигация по лабе осуществляется кнопками.
        </p>
        <p>
            Страница является иллюстрацией паттерна.
        </p>
        <div className={styles.lab2LinkButtons}>

            <Button variant="primary"><NavLink to='/lab2'>Сбросить</NavLink></Button>{' '}
            <Button variant="secondary"><NavLink to='/lab2/purpose'>Назначение</NavLink></Button>{' '}
            <Button variant="secondary"><NavLink to='/lab2/description'>Пояснение к коду</NavLink></Button>{' '}
            <Button variant="secondary"><NavLink to='/lab2/conclusion'>Вывод</NavLink></Button>{' '}

        </div>


    </div>;
}