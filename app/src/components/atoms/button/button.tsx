import clsx from "clsx"
import * as React from "react"

import { Spinner } from "../spinner"

const variants = {
	primary: 'bg-blue-400 text-white',
	inverse: '',
	danger: 'bg-red-500 text-white',
}

const sizes = {
	sm: '',
	md: '',
	lg: '',
}

type IconProps =
	| { startIcon: React.ReactElement; endIcon?: never }
	| { endIcon: React.ReactElement; startIcon?: never }
	| { endIcon?: undefined; startIcon?: undefined }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof variants
	size?: keyof typeof sizes
	isLoading?: boolean
} & IconProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps> (
	(
		{
			type = 'button',
			className = '',
			variant = 'primary',
			size = 'md',
			isLoading = false,
			startIcon,
			endIcon,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ ref }
				type={ type }
				className={ clsx(

				)}
				{ ...props }
			>
				{ isLoading && <Spinner size="sm" className="" /> }
				{ !isLoading && startIcon }
				<span className="">{ props.children }</span> { !isLoading && endIcon }
			</button>
		)
	}
) 