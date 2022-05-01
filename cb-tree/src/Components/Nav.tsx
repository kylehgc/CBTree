import logo from '../media/logo.png'
import {Avatar, Link, Button, Center,Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorMode,  HStack, IconButton} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import UseThemeColors from '../Hooks/useThemeColors';
import useAuth from '../Hooks/useAuth'
import { useEffect, useState } from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom'



export default function Nav() {
  const {backgroundColor, foregroundColor} = UseThemeColors()
  const {colorMode, toggleColorMode } = useColorMode();
  const {currentUser, logout} = useAuth()
  const [displayName, setDisplayName] = useState<string | null>(null)
  const navigate = useNavigate() 
  useEffect(() => {
    if(currentUser?.username) {
      if(currentUser?.firstName){
        setDisplayName(currentUser.firstName)
      } else {
        setDisplayName(currentUser.username)
      }
    } else {
      setDisplayName(null)
    }
  },[currentUser?.firstName, currentUser?.username])
  const handleLogout = () => {
    logout()
    navigate("/")
  }
  return (
    <Center flexDir={{base: "row"}}  m={2}> 
      <Image w={{base:"50%", lg: "40%"}} p={2} pt={4} ml={0} fit={"fill"} src={logo}/>
      <HStack 
        mr={{lg:7}}
        mt={{lg:4}}
        spacing={{base:6, lg: 4}} 
        justifyContent={{base: "center", lg:"end"}}
        bg={backgroundColor} 
        h={"100%"} 
        pt={{base: 3, lg:0}}
        pb={{lg:2}} 
        w={"100%"}
      >
        <IconButton
          aria-label="Light and dark Switch"
          color={foregroundColor}
          bg={backgroundColor}
          size="lg"
          _hover={{background: backgroundColor}}
          _active={{background: backgroundColor}}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}/>
        {displayName ? 
          <Menu>
            <MenuButton
              maxW={"10%"}
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar 
                name={displayName}
                size="md"
                color={backgroundColor}
                bg={foregroundColor}
              />
            </MenuButton>
            <MenuList alignItems={'center'} zIndex={"overlay"} >
              <br />
              <Center>
                <Avatar
                  size={'2xl'}
                  bg={backgroundColor}
                  color={foregroundColor}
                  name={displayName}
                />
              </Center>
              <br />
              <Center>
                <p>{displayName}</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>New Thought Record</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu> : 
          <Link fontSize={15} color={foregroundColor} to={`/`} as={RouterLink}> 
            Login 
          </Link>}
      </HStack>
    </Center>
  );
}
   
  
