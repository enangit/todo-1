import React, { ComponentPropsWithRef, forwardRef } from "react";

interface Props extends ComponentPropsWithRef<"button"> {
    children: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | null
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button({ children, onClick = null, ...rest }: Props, ref) {
    return (
        <button className="button" onClick={onClick} {...rest} ref={ref ? ref : null}>
            {children}
        </button>
    )


});
export default Button;
