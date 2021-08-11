import React, {CSSProperties, MouseEventHandler, ReactElement} from "react";

const SquareButton = (props: SquareButtonProps): ReactElement => {
    const {style, onMouseLeave, onMouseEnter, className, onClick} = props;
    return <button className={`base-button center ${className ?? ""}`}
                   style={style}
                   onMouseLeave={onMouseLeave}
                   onMouseEnter={onMouseEnter}
                   onClick={onClick}
    />
};

interface SquareButtonProps {
    className?: string;
    style?: CSSProperties;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export {SquareButton};
