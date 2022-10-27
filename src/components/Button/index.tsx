import { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import cx from 'clsx'
import classes from './button.module.css'

type COLOR = 'default' | 'primary' | 'danger'
type VARIANT = 'filled' | 'outline' | 'text'
type size = 'medium' | 'small'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isPrimary?: boolean
}

export const Button = ({ className, isPrimary = false, ...props }: ButtonProps) => {
  return <button className={cx(className, classes.button)} {...props} />
}
