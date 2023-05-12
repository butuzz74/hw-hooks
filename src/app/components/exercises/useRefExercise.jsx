import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const refDiv = useRef();
    const handleChangeTextSize = () => {
        if (refDiv.current.textContent === "Блок") {
            refDiv.current.textContent = "Текст";
            refDiv.current.setAttribute(
                "style",
                "height: 150px; width: 80px; color: white;"
            );
        } else {
            refDiv.current.textContent = "Блок";
            refDiv.current.setAttribute(
                "style",
                "height: 40px; width: 80px; color: white;"
            );
        }
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={refDiv}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-primary mt-2"
                onClick={handleChangeTextSize}
            >
                Изменить
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
