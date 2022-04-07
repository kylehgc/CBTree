import logo from '../media/logo.png'
import {Image} from '@chakra-ui/react'
const Logo = () => {
  return (
    <Image w={{base:"50%", lg: "25%"}} mt={4} ml={5} src={logo}/>
  )
}

export default Logo