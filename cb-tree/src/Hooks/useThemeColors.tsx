import {useColorModeValue} from "@chakra-ui/react"

//using specific colors instead of customized theme colors because some button components seem to ignore theme colors

const UseThemeColors = () => {
  const backgroundColor = useColorModeValue("teal.400","black")
  const foregroundColor = useColorModeValue("white","black")
  
  return {backgroundColor: backgroundColor, foregroundColor: foregroundColor}

}

export default UseThemeColors