import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ContainerComponents = ({ children }) => {
    // return React.Children.map(children, (child, i) => (
    //     <div className="d-flex">
    //         {(i + 1) + "."}{child}
    //     </div>
    // ));
    return React.Children.map(children, (child, i) =>
        React.cloneElement(child, { }, <span>{(i + 1) + "."}</span>)
    );
};

ContainerComponents.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ContainerComponents>
                <Component />
                <Component />
                <Component />
            </ContainerComponents>
        </CollapseWrapper>
    );
};

const Component = ({ children }) => {
    return <div>{children} Компонент списка</div>;
};
Component.propTypes = {
    children: PropTypes.node
};

export default ChildrenExercise;
