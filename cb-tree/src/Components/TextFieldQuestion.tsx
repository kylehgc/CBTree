
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
        mb={'10'}
        spacing={8}
        justifyContent='center' 
        mx={'auto'} 
        pb={1} 
        mt={10} 
        px={7} 
        pt={4} 
      >        
        <Textarea 
          placeholder={label} 
          onChange={onChange}
          value={fieldState}
          _placeholder={{color: 'blackAlpha.800', fontSize: "3xl"}}
          p={4} 
          m={4} 
          bg={foregroundColor} 
          h={'full'}  
          rounded={"xl"} 
          size="lg"
        />
        <Button onClick={onSubmit} variant="submit">Submit</Button> 
      </VStack>
        
      
          
      
    </>
      
  );
}

export default TextFieldQuestion
