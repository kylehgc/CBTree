import { useColorModeValue } from '@chakra-ui/react'

//using specific colors instead of customized theme colors because some button components seem to ignore theme colors
const UseThemeColors = () => {
	const backgroundColor = useColorModeValue('teal.500', '#011627')
	const foregroundColor = useColorModeValue('white', 'white')

	return { backgroundColor: backgroundColor, foregroundColor: foregroundColor }
}

export default UseThemeColors
