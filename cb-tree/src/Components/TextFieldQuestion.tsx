import { useForm, SubmitHandler } from "react-hook-form"
import useThoughtRecord from '../Hooks/UseThoughtRecord'

import {
  FormLabel,
  Textarea,
  Button,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { useLocation } from "react-router-dom"




const TextFieldQuestion: React.FC = () => {
  const [label, onSubmit] = useThoughtRecord()
  
  

  

  return (
    
    <>
      
      
      <VStack 
        rounded={'3xl'} 
        w={"full"} minH={"100%"} 
        flexDirection='column' 
        mb={'10'}
        spacing={8}
        justifyContent='center' 
        mx={'auto'} 
        pb={1} 
        mt={10} 
        px={7} 
        pt={4} 
      >        
        {/* <Heading mt={6} color="white"textAlign={"center"} fontSize={"3xl"}> {question} </Heading> */}
        <Textarea placeholder={label} _placeholder={{color: 'blackAlpha.800', fontSize: "3xl"}}p={4} m={4} bg='theme.primary' h={'full'}  rounded={"xl"} size="lg"/>
        <Button onClick={onSubmit} variant="submit">Submit</Button> 
      </VStack>
        
      
          
      
    </>
      
  );
}

export default TextFieldQuestion
