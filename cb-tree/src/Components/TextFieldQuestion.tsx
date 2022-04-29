
import useThoughtRecord from '../Hooks/UseThoughtRecord'

import {
  Textarea,
  Button,
  VStack,
  SlideFade
} from '@chakra-ui/react'

import { useEffect, useState } from "react"
import UseThemeColors from '../Hooks/useThemeColors'
import {isKeyOfThoughtRecord} from './types'
import LoadingTextField from './LoadingTextField'


const TextFieldQuestion: React.FC = () => {
  const {foregroundColor} = UseThemeColors()
  const [fieldState, setFieldState] = useState<string>("")
  const {label, onSubmit, isSubmitting, thoughtRecord,currentQuestion} = useThoughtRecord()  

  useEffect (() => {
    if(thoughtRecord) {
      if(isKeyOfThoughtRecord(currentQuestion, thoughtRecord) && !fieldState) {
        const value = thoughtRecord[currentQuestion]
        if(typeof value === 'string'){
          setFieldState(value)
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion, thoughtRecord])
  const onChange:  React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFieldState(event.target.value)
  }
  if(!thoughtRecord) {
    return <LoadingTextField/>
  }
  return (
    <VStack 
      spacing={0}
      rounded={'3xl'} 
      w={"full"} minH={"100%"} 
      flexDirection='column' 
      mt={6}
      alignContent='center'
      justifyContent='center' 
      mx={2} 
      px={5} 
      py={0} 
    >        
      <SlideFade offsetY={0} 
        offsetX={"50%"} 
        transition={{enter: {duration: 0.4}, 
          exit: {delay: 0.7, duration: 0.3}}} 
        style={{display: "flex", flexDirection: "column", height: "90%", width: "100%"}} in={!isSubmitting}>
        <Textarea 
          placeholder={label} 
          onChange={onChange}
          value={fieldState}
          _placeholder={{color: 'blackAlpha.800', fontSize: "3xl"}}
          p={4} 
          bg={foregroundColor} 
          h={'90%'}  
          w={"full"}
          rounded={"xl"} 
          size="lg"
        />
      </SlideFade>
      <SlideFade in={!isSubmitting} 
        offsetY={0} 
        transition={{enter: {delay: 0.2, duration: 0.4}, 
          exit:{delay: 0.3, duration: 0.3}}} offsetX={"100px"} 
        style={{flexDirection: "column", display: "flex", height: "10%", width:"100%"}}>
        <Button 
          height={10}
          w="70%"
          mt={0}
          alignSelf={'center'}
          isLoading={isSubmitting}
          background={foregroundColor}
          loadingText={"Submitting"}
          onClick={() => onSubmit(fieldState)}  
        >
          Submit
        </Button> 
      </SlideFade>
      
     
      
      
      

      
 
    </VStack>
    
  );
}

export default TextFieldQuestion
