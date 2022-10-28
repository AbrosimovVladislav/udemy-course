import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import cn from "classnames";
import styles from './Tag.module.css';

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href? : string;
  children: ReactNode;
}

export const Tag = ({size='m', color='ghost', href, children, className, ...props}: TagProps) => {
  return (
      <div
          className={cn(styles.tag, className, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.grey]: color == 'grey',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary',
          })}
          {...props}
      >
        {
          href
              ? <a href={href}>{children}</a>
              : <>{children}</>
        }
      </div>
  );
};
