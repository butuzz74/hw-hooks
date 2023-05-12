import React, { useEffect, useState } from "react";
import CollapseWrapper from "../common/collapse";
// import withFunctions from "./hocExercise/withFunctions";
import Card from "../common/Card";
// import SimpleComponent from "./hocExercise/SimpleComponent";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return !isAuth ? (
        <button className="btn btn-primary" onClick={onLogin}>
            Войти
        </button>
    ) : (
        <button className="btn btn-primary" onClick={onLogOut}>
            Выйти из системы
        </button>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

const withFunctions = (Component) => {
    return () => {
        const [isAuth, setIsAuth] = useState();
        useEffect(() => {
            const isAuth = localStorage.getItem("auth");
            isAuth && isAuth === "token" ? setIsAuth(true) : setIsAuth(false);
        }, [isAuth]);
        const handleIsLogin = () => {
            localStorage.setItem("auth", "token");
            setIsAuth(true);
        };
        const handleIsLogOut = () => {
            localStorage.removeItem("auth");
            setIsAuth(false);
        };
        return (
            <Card>
                <Component
                    isAuth={isAuth}
                    onLogin={handleIsLogin}
                    onLogOut={handleIsLogOut}
                />
            </Card>
        );
    };
};

const HocExercise = () => {
    const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                Вам необходимо реализовать компонент{" "}
                <code>SimpleComponent</code>, который:
            </p>
            <ul>
                <li>
                    В <code>props</code> принимает параметры:{" "}
                    <code>onLogin</code>, <code>onLogOut</code>,{" "}
                    <code>isAuth</code>
                </li>
                <li>
                    Отображает кнопку &quot;Войти&quot;, если пользователь НЕ
                    авторизован (зависит от параметра <code>isAuth</code> в{" "}
                    <code>props</code>)
                </li>
                <li>
                    Отображает кнопку с содержанием &quot;Выйти из
                    системы&quot;, если пользователь авторизован (зависит от
                    параметра <code>isAuth</code> в <code>props</code>)
                </li>
                <li>
                    При нажатии на &quot;Войти&quot;, вызывается функция{" "}
                    <code>onLogin</code>, а при нажатии на &quot;Выйти из
                    системы&quot; вызывается <code>onLogOut</code>
                </li>
            </ul>
            <p className="mt-3">
                Вам необходимо создать HOC с названием{" "}
                <code>withFunctions</code>, который будет принимать компонент{" "}
                <code>SimpleComponent</code> и делать следующее:
            </p>
            <ul>
                <li>
                    Добавит обертку на компонент в виде карточки boostrap
                    (компонент <code>components/common/Card.jsx</code>)
                </li>
                <li>
                    Передает параметр <code>isAuth</code>. Этот параметр
                    является обычной переменной <code>const</code> в функции{" "}
                    <code>withFunctions</code> и содержит в себе результат
                    проверки наличия данных в <code>localStorage</code> по ключу{" "}
                    <code>auth</code>. На текущий момент нам не важно, какие
                    данные там хранить (например можно проверять наличие строки{" "}
                    <code>&quot;token&quot;</code>)
                </li>
                <li>
                    Передает параметры <code>onLogin</code> и{" "}
                    <code>onLogOut</code>. Функции также находятся в{" "}
                    <code>withFunctions</code>. <br />
                    <code>onLogin</code> - добавляет <code>auth</code> в{" "}
                    <code>localStorage</code> с любым значением (например строку{" "}
                    <code>&quot;token&quot;</code>) <br />
                    <code>onLogOut</code> - удаляет <code>auth</code> из{" "}
                    <code>localStorage</code>
                </li>
            </ul>
            <p>
                Через <code>withFunctions</code> необходимо создать новый
                компонент <code>ComponentWithHoc</code> следующим образом:
                <br />
                <code>
                    const ComponentWithHoc = withFunctions(SimpleComponent);
                </code>
                <br />
                Затем его необходимо просто вывести в шаблон
            </p>
            <p>
                Примечание: при вызове <code>onLogin</code> или{" "}
                <code>onLogOut</code> кнопка в компоненте{" "}
                <code>SimpleComponent</code> обновится после перезагрузки
                страницы
            </p>
            <ComponentWithHoc />
        </CollapseWrapper>
    );
};

export default HocExercise;
