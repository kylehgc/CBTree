import { extendTheme, ThemeComponentProps } from "@chakra-ui/react";
import { mode, SystemStyleObject } from '@chakra-ui/theme-tools'


const theme: SystemStyleObject = extendTheme({
  colors:{
    theme: {
      background:'teal.400',
      backgroundDark: "black",
      foreground: "white",
      foregroundDark: "black",
    }
  },
  components: {
    Heading: {
      baseStyle: (props: ThemeComponentProps) => ({
        color: mode("theme.foreground","theme.foregroundDark")(props)
      })
    },
    Button: {
      baseStyle: {
        rounded: "2xl",
      },
      variants: {
        "submit": (props: ThemeComponentProps) => ({
          minHeight: 10,
          w: "60%",
          _loading: {bg: "white"},
          bg: mode("theme.foreground","theme.foregroundDark")(props),
          rounded: "2xl",
          alignSelf: "center"})
      },
      "loginSubmit": (props: ThemeComponentProps) => ({
        bg: mode("theme.background","theme.backGroundDark")(props),
      }),
      "solid":(props: ThemeComponentProps) => ({
        bg: mode("theme.foreground","theme.foregroundDark")(props),
        rounded: "2xl"
      })
    }
    
  },
  styles: {
    global: (props: ThemeComponentProps) => ({
      body: {
        minHeight: "100vh",
        bg: mode('teal.400', "black")(props)
        
      }
    })
  }
})
export default theme