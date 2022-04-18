
import useThoughtRecord, {ThoughtRecordState} from '../Hooks/UseThoughtRecord'

import {
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import UseThemeColors from '../Hooks/useThemeColors'




const TextFieldQuestion: React.FC = () => {
  const {foregroundColor} = UseThemeColors()
  const [fieldState, setFieldState] = useState<string>("")
  const [label, onSubmit] = useThoughtRecord({answer: fieldState})
  
  const onChange:  React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFieldState(event.target.value)
  }
  

  

  return (
    
    <>
      
      
      <VStack 
        rounded={'3xl'} 
        w={"full"} minH={"100%"} 
        flexDirection='column' 
        
        spacing={8}
        justifyContent='center' 
        mx={2} 
        pb={6} 
        px={5} 
        pt={2} 
      >        
        <Textarea 
          placeholder={"We're testing right now"} 
          onChange={onChange}
          value={fieldState}
          _placeholder={{color: 'blackAlpha.800', fontSize: "3xl"}}
          p={4} 
          m={2}
           
          bg={foregroundColor} 
          h={'85%'}  
          w={"full"}
          rounded={"xl"} 
          size="lg"
        />
        <Button onClick={onSubmit} variant="submit">Submit</Button> 
      </VStack>
        
      
          
      
    </>
      
  );
}

export default TextFieldQuestion
