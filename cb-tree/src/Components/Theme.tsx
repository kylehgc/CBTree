import { extendTheme, ThemeComponentProps } from "@chakra-ui/react";
import { mode, SystemStyleObject } from '@chakra-ui/theme-tools'


const theme: SystemStyleObject = extendTheme({
  fonts: {
    body: 'inter, sans-serif',
    heading: 'inter, sans-serif'
  },
  colors:{
    theme: {
      background:'teal.500',
      backgroundDark: "#011627",
      foreground: "white",
      foregroundDark: "white",
    }
  },
  components: {
    Text: {
      baseStyle: (props: ThemeComponentProps) => ({
        color: "black"
      })
    },
    FormLabel: {
      color: "black"
    },
    Heading: {
      baseStyle: (props: ThemeComponentProps) => ({
        color: mode("theme.foreground","theme.foregroundDark")(props)
      })
    },
    Button: {
      baseStyle: {
        color: "black",
        rounded: "2xl",
      },
      variants: {
        "submit": (props: ThemeComponentProps) => ({
          color: "black",
          minHeight: 10,
          w: "60%",
          _loading: {bg: "white"},
          bg: mode("theme.foreground","theme.foregroundDark")(props),
          rounded: "2xl",
          alignSelf: "center"})
      },
      "loginSubmit": (props: ThemeComponentProps) => ({
        bg: mode("theme.background","theme.backGroundDark")(props)
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
        bg: mode('teal.500', "#011627")(props)
      }
    })
  }
})
export default theme