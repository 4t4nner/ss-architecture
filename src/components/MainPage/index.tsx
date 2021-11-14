import React from 'react';
import styles from './index.module.css'

const MainPage = () => <div className={styles.Description}>
    <p>
        Лабы разложены по меню. Всё делалось в соответствие с описанием из книги "Приемы объектно-ориентированного
        проектирования. Паттерны проектирования (2016)", Авторы: Эрих Гамма, Ричард Хелм, Ральф Джонсон, Джон Влиссидес.
    </p>
    <p>
        Навигация по меню.
    </p>
    <p>
        Подробно смотреть лабу можно в IDE Phpstorm или бесплатной - VSCode
    </p>
    <p>
        Скачать лабу для просмотра можно командой
    </p>
    <p>
        <code>
            git clone https://github.com/4t4nner/ss-architecture.git
        </code>
    </p>

</div>;
export default MainPage;