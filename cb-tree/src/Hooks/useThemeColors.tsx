import { useColorModeValue } from '@chakra-ui/react'

//using specific colors instead of customized theme colors because some button components seem to ignore theme colors
const UseThemeColors = () => {
	const linkColor = useColorModeValue('blue.400', 'blue.200')

	const backgroundColor = useColorModeValue('teal.500', '#011627')
	const foregroundColor = useColorModeValue('white', 'gray.600')
	const textColor = useColorModeValue('black', 'white')

	return {
		textColor,
		linkColor,
		backgroundColor,
		foregroundColor,
	}
}

export default UseThemeColors
