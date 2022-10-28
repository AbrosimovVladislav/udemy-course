import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import styles from "./Button.module.css";
import cn from 'classnames';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
}

export const Button = ({appearance, children, className, ...props}: ButtonProps) => {

    const styleCLass = cn(styles.button, className,{
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost'
    })

    return <button
        className={styleCLass}
        {...props}
        >
        {children}
    </button>
}