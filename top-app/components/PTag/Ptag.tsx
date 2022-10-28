import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import cn from "classnames";
import styles from './Ptag.module.css';

interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}

export const Ptag = ({size = 'm', children, className, ...props}: PtagProps) => {
  return <p
      className={cn(styles.p, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
      })}
      {...props}>
    {children}
  </p>
}
