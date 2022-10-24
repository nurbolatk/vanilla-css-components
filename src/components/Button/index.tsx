import { HTMLAttributes } from 'react'
import cx from 'clsx'
import classes from './button.module.pcss'

export type ButtonProps = HTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={cx(className, classes.button)} {...props} />
}
