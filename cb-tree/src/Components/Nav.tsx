import logo from '../media/logo.png'
import {Avatar, Button, Center,Text, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorMode, useColorModeValue, HStack, IconButton} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import UseThemeColors from '../Hooks/useThemeColors';

   

export default function Nav() {
  const {backgroundColor, foregroundColor} = UseThemeColors()
  const {colorMode, toggleColorMode } = useColorMode();

  return (
    <Center flexDir={{base: "row"}}  m={2}> 
      <Image w={{base:"50%", lg: "25%"}}  pt={4} ml={5} src={logo}/>
      <HStack 
        ml={2}
        mr={{lg:4}}
        spacing={{base:2, lg: 4}} 
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
          _hover={{bg: backgroundColor}}
          _active={{bg: backgroundColor}}
          icon={colorMode === 'light' ? <MoonIcon  /> : <SunIcon />}
          onClick={toggleColorMode}/>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Text
              mr={1}
              size={'sm'}
              color={useColorModeValue("theme.foreground", "theme.foregroundDark")}
            >
                 UserName 
            </Text>
          </MenuButton>
          <MenuList alignItems={'center'} zIndex={"overlay"} >
            <br />
            <Center>
              <Avatar
                size={'2xl'}
                src={'https://avatars.dicebear.com/api/male/username.svg'}
              />
            </Center>
            <br />
            <Center>
              <p>Username</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>New Thought Record</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>

      </HStack>
    </Center>
  );
}
   
  
