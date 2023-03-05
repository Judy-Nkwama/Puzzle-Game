import { useMemo } from "react";
import Icon from "./Icon";

const ButtonableIconOpacityColored = ({ iconName, title, isButton, onClick, bs_theme_color, className, childrenWrapperClassName, faSize, style }) => {
    const Content = useMemo(() =>
        <div
            className={`
                h-100 w-100 d-inline-flex justify-content-center align-items-center rounded p-2
                bg-${bs_theme_color} text-${bs_theme_color} bg-opacity-10 ${childrenWrapperClassName}
            `}
        >
            {title && <span>{title}</span>}
            {iconName && <Icon iconName={iconName} color={bs_theme_color} faSize={faSize} />}
        </div>, [bs_theme_color, iconName, title, faSize, childrenWrapperClassName]);

    const Component = ({ children }) => isButton
        ? <button className={`border-0 p-0 bg-white ${className}`} onClick={onClick} style={style}> {children} </button>
        : <div className={className} style={style}>  {children} </div>;

    return <Component> {Content} </Component>;
};

export default ButtonableIconOpacityColored;