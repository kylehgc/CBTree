import { extendTheme, ThemeComponentProps } from "@chakra-ui/react";
import { mode, SystemStyleObject } from '@chakra-ui/theme-tools'
import UseThemeColors from "../Hooks/useThemeColors";


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
      variants: {
        "submit": (props: ThemeComponentProps) => ({
          minHeight: 10,
          w: "60%",
          bg: mode("theme.foreground","theme.foregroundDark")(props),
          rounded: "2xl",
          alignSelf: "center"})
      },
      "loginSubmit": (props: ThemeComponentProps) => ({
        bg: mode("theme.background","theme.backGroundDark")(props),
      }),
      "solid":(props: ThemeComponentProps) => ({
        bg: mode("theme.foreground","theme.foregroundDark")(props),
        rounded: "3xl"
      })
    }
    
  },
  styles: {
    global: (props: ThemeComponentProps) => ({
      body: {
        height: "100vh",
        bg: mode('teal.400', "black")(props)
        
      }
    })
  }
})
export default theme