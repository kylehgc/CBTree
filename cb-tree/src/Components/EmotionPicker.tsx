import { Button, useColorModeValue, Center, Heading, HStack, IconButton, VStack } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import {RiEmotionFill, RiEmotionNormalFill, RiEmotionHappyFill, RiEmotionUnhappyFill} from 'react-icons/ri'
import UseThemeColors from '../Hooks/useThemeColors'
import EmotionButton, { Emotion } from './EmotionButton'
import LoadingTextField from './LoadingTextField'
import useThoughtRecord from '../Hooks/UseThoughtRecord'
import {  } from '@chakra-ui/react'

export const emotions: Emotion[] = 
  [ {icon: RiEmotionUnhappyFill, emotionColor: "purple.900", emotionName: "Awful"},
    {icon: RiEmotionNormalFill, emotionColor: "blue.700", emotionName:"Meh"},
    {icon: RiEmotionHappyFill, emotionColor: "green.300", emotionName: "Good" },
    {icon: RiEmotionFill, emotionColor: "yellow.300", emotionName: "Awesome"}
    
  ]

const getEmotionColorByName = (emotionName: string) => {
  return emotions.filter(emotion => emotion.emotionName === emotionName)[0]?.emotionColor
}

const EmotionPicker: React.FC = () => {
  const [selected, setSelected] = useState<string>("")
  const emotionColor = getEmotionColorByName(selected)
  const {label, isSubmitting, onSubmit, thoughtRecord} = useThoughtRecord() 
  
  
  if(!thoughtRecord) {
    return <LoadingTextField/>
  }
  return (
    <>
      <Center rounded={"75px"} border={selected ? "15px solid" : "none"} borderColor={emotionColor} w={{lg: "100vw"}} p={4} height={"full"} minHeight={"90%"} flexDir={"column"}> 
        <Heading position={"fixed"} top={"25vh"}> {label} </Heading>
        <HStack height={"50%"} w={"100%"} spacing={8}> 
          {emotions.map(emotion => 
            <EmotionButton key={emotion.emotionName} emotion={emotion} selected={selected} setSelected={setSelected} />
          )}
        
        </HStack>
        <VStack p={2} w={"full"} height={"15vh"} spacing={12}>
          {selected
            ? 
            <>
              <Heading color={emotionColor}>  {selected} </Heading>
              <Button isLoading={isSubmitting} onClick={() => onSubmit(selected)} w={"60%"} minH={"60px"} bg={"white"} > Submit </Button>
            </>
            : null
          }
        </VStack>
       
      </Center>
    </>
  )
}

export default EmotionPicker
