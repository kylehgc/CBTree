import { extendTheme, ThemeComponentProps } from "@chakra-ui/react";
import { mode, SystemStyleObject } from '@chakra-ui/theme-tools'
import {} from '@chakra-ui/react'

const theme: SystemStyleObject = extendTheme({
  colors:{
    theme: {
      100:"teal.400",
      foreground: "white"
    }
  },
  components: {
    Heading: {
      baseStyle: {
        color: "white"
      }
    },
    Button: {
      variants: {
        "submit": {
          minHeight: 10,
          w: "60%",
          bg: "white",
          rounded: "2xl",
          alignSelf: "center"}
      },
      "solid": {
        bg: 'white',
        rounded: "3xl"
      }
    }
    
  },
  styles: {
    global: (props: ThemeComponentProps) => ({
      body: {
        
        
        height: "100vh",
        bg: mode('teal.400', "primary")(props)
      }
    })
  }
})
export default theme