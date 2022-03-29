import { extendTheme, ThemeComponentProps } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import {} from '@chakra-ui/react'



const theme = extendTheme({

  components: {
    Button: {
      variants: {
        "solid": {
          bg: 'blue.400',
          rounded: "2xl"
        }
      }
    }
  },

  styles: {
    global: (props: ThemeComponentProps) => ({
      body: {
        bg: mode('blue.400', 'black')(props)
      }
    })
  }
})

export default theme