import { useState } from 'react';
import styles from './index.module.css'
import { Button } from 'react-bootstrap';
import { getMonkey, WhiteMonkey } from './fabrics';

const WHITE = true;

export default function Lab1 () {
    const [fabricType, setFabricType] = useState<boolean | undefined>(WHITE);

    return <div className={styles.main}>
        <h2>Лабораторная работа 1</h2>
        <p>
            Паттерн "Абстрактная фабрика" можно применять для парсинга параметров url и подставлять нужный контекст (React.Context) в реактивный компонент, или например делать разное меню или картинки разного размера в зависимости от устройства, но это слишком долго.
            <br/>
            Так как у меня кризис идей - буду описывать белую / черную обезьяну. <br/>
            По нажатию кнопки она будет говорить о своём цвете и цвете фона.
        </p>
        <h3>Пояснения к коду</h3>
        <p>
            По нажатию кнопки применяется другая фабрика. <br/>
            Наследник Monkey имеет экземпляры Caption и IBackground, жёстко прописанные в нём. <br/>
            <code>abstract class</code> - это функция, вызываемая наследником как <code>this.prototype.call(this)</code>. Абстрактные свойства при этом существуют только при анализе типов <code>typescrypt</code>, при выполнении подставляясь из экземпляра наследника. <br/>
            Т.о. <code>monkey.getBackground = (monkey as WhiteMonkey).(caption as WhiteCaption).prototype.getCaption</code>. При этом свойство <code>selfColor</code> берется из <code>monkey.caption as WhiteCaption</code>
        </p>
        <p>
            Я отделил логику в файл <code>./fabrics.ts</code>. Функция <code>getMonkey</code> делает экземпляр <code>Monkey</code> и передает обратно его свойства. <br/>
            <br/>
            Я не стал описывать отрисовку обезьяны в фабриках, чтобы не смешивать представление здесь и логиу там. Но в принципе, можно было бы отрисовывать (например) картинку животного одним классом, а контейнер (его вид и цвет) - другим.
        </p>
        <h6>Об особенностях JS</h6>
        <p>
            <code>WhiteMonkey</code> использует методы <code>Monkey</code> через <code>WhiteMonkey.prototype = Monkey</code> (прототипное наследование). Это легко увидеть, если поменять <code>WhiteMonkey.prototype</code> на <code>BlackMonkey</code>. Тогда поведение будет противоположно.
        </p>
        <h3>Вывод</h3>
        <p>
            Сам паттерн отдельно я не использовал и использовать не собираюсь. Это основа для других паттернов - в т.ч. для фабричного метода и одиночки.
        </p>
        <p>
            Вариация развития данного паттерна - передача Caption и Background в Monkey - что позволяет говорить о композиции - более гибком подходе. В таком виде я использовал его в работе.
        </p>

        <div className={styles.buttonContainer}>
            <Button onClick={toggleFabricType}>Рисовать обезьяну!</Button>
        </div>
        {drawMonkey(fabricType)}
    </div>;

    function toggleFabricType() {
        setFabricType(!fabricType);
    }
}


function drawMonkey(isWhiteColor?: boolean) {
    const { background, caption, color } = getMonkey(!!isWhiteColor);

    return <div style={{ background, color }} className={styles.drawLab}>
        {caption}
    </div>
}