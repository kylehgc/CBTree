
import {Box, Heading, VStack, Badge, Input, Button, SlideFade} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useThoughtRecord from '../Hooks/UseThoughtRecord'
import useThemeColors from '../Hooks/useThemeColors'
import ArgumentButtons from './ArgumentAccordion'
import MoodSlider from './MoodSlider'
import { Mood } from './types'
import LoadingTextField from './LoadingTextField'
import HotThoughtDisplay from './HotThoughtDisplay'

const AlternativeThought: React.FC = () => {
  const {foregroundColor} = useThemeColors()
  const [balancedThought, setBalancedThought] = useState<string>("")
  const [moods, setMoods] = useState<Mood[]>([])
  const {onSubmit, thoughtRecord, isSubmitting} = useThoughtRecord() 
  
  useEffect (() => {
    if(thoughtRecord?.alternativethought) {
      setMoods(thoughtRecord.alternativethought)
    }
  },[thoughtRecord,setMoods])

  const argFor = thoughtRecord?.evidencefor ? thoughtRecord.evidencefor : ""
  const argAgainst = thoughtRecord?.evidenceagainst ? thoughtRecord.evidenceagainst : ""
  const argumentsText = {argFor: argFor, argAgainst: argAgainst}
  const hotThought = thoughtRecord?.thoughts ? thoughtRecord.thoughts.hotThought : ""
  const handleOnChange:  React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setBalancedThought(event.target.value)
  }
 
  const addMood = (mood: string) => {
    if(!(moods.map(mood => mood.mood)).includes(mood) && mood) {
      setMoods([...moods, {mood: mood, moodRating: 0}])
    }
    setBalancedThought("")
  }

  if(!thoughtRecord) {
    return <LoadingTextField/>
  }
  return (
    <VStack overflow={"visible"} mt={1} spacing={8} p={1} h="full" w={{base:"full", lg:"full"}}>
      <Heading m={0} textAlign={"center"}> Write a Balanced Thought </Heading> 
      <SlideFade in={!isSubmitting} 
        style={{flexDirection: "column", height:"full", width:"95%", display:"flex"}}
        transition={{enter: {duration:0.5}, exit: {duration:0.5, delay: .5}}}
        offsetY={0} offsetX={100}>
        <HotThoughtDisplay hotThought={hotThought} />
      </SlideFade>
      <SlideFade in={!isSubmitting} 
        style={{flexDirection: "column", height:"full", width:"95%", display:"flex"}}
        transition={{enter: {duration:0.5, delay: 0.3}, exit: {duration:0.5, delay: 0.3}}}
        offsetY={0} offsetX={-100}>
        <ArgumentButtons argumentsText={argumentsText}/>
      </SlideFade>
      <SlideFade in={!isSubmitting} 
        style={{flexDirection: "column", alignContent:"center", height:"full", width:"95%", display:"flex"}}
        transition={{enter: {duration:0.5, delay: 0.5}, exit: {duration:0.5}}}
        offsetY={0} offsetX={100}>
        <Input
          onChange={handleOnChange}
          value={balancedThought}
          size="lg"
          p={1}
          alignSelf={"center"}
          variant="outlined"
          bg={foregroundColor}
          w={"90%"} 
          _placeholder={{color:"blackAlpha.700", textAlign: "center"}}
          placeholder='What are some Balanced Thoughts?'/>
        <Button onClick={() => addMood(balancedThought)} bg={foregroundColor} alignSelf={"center"} 
          w={"60%"} minH={10} mb={4} mt={7}
        > 
        Add Thought 
        </Button>
      </SlideFade>

      <MoodSlider moods={moods} setMoods={setMoods} />
      {moods.length > 0 ? <Button 
        minH={10}
        w="60%"
        isLoading={isSubmitting}
        bg={foregroundColor}
        loadingText={"Submitting"}
        onClick={() => onSubmit(moods)} 
      > Submit </Button> : null}
      <Box h={"10vh"} />
    </VStack>
  )
}

export default AlternativeThought