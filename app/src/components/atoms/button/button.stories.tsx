
import { Meta, Story } from "@storybook/react"

import { Button, ButtonProps } from "./button"


const meta: Meta = {
	title: 'components/atoms/button',
	component: Button,
	parameters: {
		controls: { espanded: true },
	},
}

export default meta


const Template: Story<ButtonProps> = (props) => <Button { ...props } />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Primary Button',
	variant: 'primary',
}

export const Inverse = Template.bind({})
Inverse.args = {
	children: 'Inverse Button',
	variant: 'inverse',
}

export const Danger = Template.bind({})
Danger.args = {
	children: 'Danger Button',
	variant: 'danger',
}