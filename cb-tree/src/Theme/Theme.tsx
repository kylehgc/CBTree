import { extendTheme, ThemeComponentProps } from '@chakra-ui/react'
import { mode, SystemStyleObject } from '@chakra-ui/theme-tools'

const theme: SystemStyleObject = extendTheme({
	fonts: {
		body: 'inter, sans-serif',
		heading: 'inter, sans-serif',
	},
	colors: {
		theme: {
			background: 'teal.500',
			backgroundDark: '#011627',
			foreground: 'white',
			foregroundDark: 'gray.400',
		},
	},
	components: {
		Table: {
			variants: {
				striped: (props: ThemeComponentProps) => ({
					...props,
					th: {
						color: mode('white', 'white')(props),
					},
					caption: {
						color: mode('white', 'white')(props),
					},
				}),
			},
		},

		Heading: {
			baseStyle: (props: ThemeComponentProps) => ({
				color: mode('theme.foreground', 'theme.foregroundDark')(props),
			}),
		},
		Button: {
			baseStyle: (props: ThemeComponentProps) => ({
				_hover: {
					_disabled: {
						bg: mode('white', 'gray.400')(props),
					},
				},
				bg: mode('gray.100', 'white')(props),
				rounded: '2xl',
			}),
			variants: {
				submit: (props: ThemeComponentProps) => ({
					background: mode('gray.100', 'whiteAlpha.400')(props),
					color: mode('black', 'white')(props),
					minHeight: 10,
					w: '60%',
					rounded: '2xl',
					alignSelf: 'center',
				}),
			},
			loginSubmit: (props: ThemeComponentProps) => ({
				bg: mode('theme.background', 'theme.backGroundDark')(props),
				_hover: {
					_disabled: {
						bg: mode('white', 'gray.400')(props),
					},
				},
			}),
			solid: (props: ThemeComponentProps) => ({
				bg: mode('theme.foreground', 'theme.foregroundDark')(props),
				color: mode('black', 'white')(props),
				rounded: '2xl',
			}),
		},
	},
	styles: {
		global: (props: ThemeComponentProps) => ({
			body: {
				minHeight: '100vh',
				bg: mode('teal.500', '#011627')(props),
			},
		}),
	},
})
export default theme
