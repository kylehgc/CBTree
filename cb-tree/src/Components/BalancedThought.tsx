
import {Center, Heading, VStack, Badge, Input, Button, SlideFade} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useThoughtRecord from '../Hooks/UseThoughtRecord'
import useThemeColors from '../Hooks/useThemeColors'
import ArgumentButtons from './ArgumentAccordion'
import MoodSlider from './MoodSlider'
import { Mood } from './types'
import LoadingTextField from './LoadingTextField'

const BalancedThought: React.FC = () => {
  const {foregroundColor} = useThemeColors()
  const [balancedThought, setBalancedThought] = useState<string>("")
  const [moods, setMoods] = useState<Mood[]>([])
  const {onSubmit, thoughtRecord, isSubmitting} = useThoughtRecord() 
  
  useEffect (() => {
    if(thoughtRecord?.alternativeThoughts) {
      setMoods(thoughtRecord.alternativeThoughts)
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
    
    <VStack mt={1} spacing={8} p={1} h="full" w="full">
      <Heading m={0} textAlign={"center"}> Write a Balanced Thought </Heading> 
      <SlideFade in={!isSubmitting} 
        style={{flexDirection: "column", height:"full", width:"95vw", display:"flex"}}
        transition={{enter: {duration:0.5}, exit: {duration:0.5, delay: .5}}}
        offsetY={0} offsetX={100}>
        <VStack w={"full"} spacing={-1}>
          <Badge alignSelf={"end"} my={2} mr={6} colorScheme="red" variant={"solid"}>
           Hot Thought
          </Badge>
          <Center bg={"red.400"} p={2} color={foregroundColor}
            alignSelf={"center"} w={"90%"} textAlign={"center"} 
            minH={"80px"} rounded={"2xl"}
          >
            {hotThought}
          </Center>
        </VStack>
      </SlideFade>
      <SlideFade in={!isSubmitting} 
        style={{flexDirection: "column", height:"full", width:"95vw", display:"flex"}}
        transition={{enter: {duration:0.5, delay: 0.3}, exit: {duration:0.5, delay: 0.3}}}
        offsetY={0} offsetX={-100}>
        <ArgumentButtons argumentsText={argumentsText}/>
      </SlideFade>
      <SlideFade in={!isSubmitting} 
        style={{flexDirection: "column", alignContent:"center", height:"full", width:"95vw", display:"flex"}}
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
        <Button onClick={() => addMood(balancedThought)}  alignSelf={"center"} 
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
    </VStack>
  )
}

export default BalancedThought