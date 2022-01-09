

import styles from '../lab1/index.module.css'
import { Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { getRenderer } from './code';




export default function Lab2() {
    const [text, setText] = useState('');

    const textRenderer = getRenderer(text);
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
            <Button variant="primary" onClick={() => setText('')}>Сбросить</Button>{' '}
            <Button variant="secondary" onClick={() => setText('purpose')} >Назначение</Button>{' '}
            <Button variant="secondary" onClick={() => setText('description')}>Пояснение к коду</Button>{' '}
            <Button variant="secondary" onClick={() => setText('conclusion')}>Вывод</Button>{' '}
        </div>

        <hr/>

        {textRenderer.getText()}

    </div>;
}