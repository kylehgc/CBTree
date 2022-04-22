
import useThoughtRecord from '../Hooks/UseThoughtRecord'

import {
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react'

import { useState } from "react"
import UseThemeColors from '../Hooks/useThemeColors'


const TextFieldQuestion: React.FC = () => {
  const {foregroundColor} = UseThemeColors()
  const [fieldState, setFieldState] = useState<string>("")
  const {label, onSubmit, isLoading} = useThoughtRecord()  
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
          placeholder={label} 
          onChange={onChange}
          value={fieldState}
          _placeholder={{color: 'blackAlpha.800', fontSize: "3xl"}}
          p={4} 
          m={2}
          bg={foregroundColor} 
          h={'80%'}  
          w={"full"}
          rounded={"xl"} 
          size="lg"
        />
        <Button isLoading={isLoading}
          bg={foregroundColor}
          _disabled={{_hover: {
            "bg": "white"}}}
          
          
          loadingText={"Submitting"}
          onClick={() => onSubmit(fieldState)} 
          variant="submit">Submit</Button> 
      </VStack>
        
      
          
      
    </>
      
  );
}

export default TextFieldQuestion
