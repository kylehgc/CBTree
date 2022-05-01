import useThoughtRecord from '../Hooks/UseThoughtRecord'
import { Icon, Flex,Box, Progress, List, ListItem, Text, HStack, ListIcon, Heading, Spacer, VStack } from '@chakra-ui/react'
import LoadingTextField from './LoadingTextField'
import { Mood, isFullThoughtRecord } from './types'
import UseThemeColors from '../Hooks/useThemeColors'
import {RiNodeTree} from 'react-icons/ri'
import {GiEvilTree} from 'react-icons/gi'
import { sliderColor } from './MoodSlider'
import { IconType } from 'react-icons'
import { Collapse, Accordion} from '@chakra-ui/react'
import AccordionElement from './AccordianElement'
import HotThoughtDisplay from './HotThoughtDisplay'
import ArgumentAccordion from './ArgumentAccordion'
import {emotions} from './EmotionPicker'

interface MoodDisplayProps {
  moods: Mood[],
  label: string
} 
const MoodDisplay: React.FC<MoodDisplayProps> = ({moods,label}) => {
  const {foregroundColor} = UseThemeColors() 
  return (
    <Flex flexDirection={"column"} m={2} alignItems={"flexStart"} justifyContent={"left"} w={"100%"}>
      <Heading m={2} ml={4} textAlign={"center"}> {label} </Heading>
      <List m={2} w={"80%"} alignItems={"center"} alignSelf={"center"} bg={foregroundColor} p={2} pb={4}>
        {moods.map(({mood, moodRating}) => {
          return (
            <ListItem p={2} width={"full"} key={mood}> 
              <ListIcon boxSize={8} color={sliderColor(moodRating)} as={RiNodeTree}/> 
              <Text m={2} color={"black"} position={"relative"} bottom={2} textAlign={"right"} display={"inline-flex"}>{mood}</Text>
              <Progress size={"xs"} colorScheme={sliderColor(moodRating).slice(0,-4)} value={moodRating}/>
            </ListItem>
          )
        })}
      </List>
    </Flex>
      
  )
}

interface EmotionDisplayProps {
  emotionName: string,
  label: string
}

const EmotionDisplay: React.FC<EmotionDisplayProps> = ({emotionName,label}) => {
  const emotion = emotions.filter(emotion => emotionName === emotion.emotionName)[0]
  const {icon, emotionColor} = emotion
  return (
    <>
      <VStack spacing={2}>
        <Heading textAlign={"center"}> {label} </Heading>
        <Icon boxSize={36} as={icon} color={emotionColor} />
        <Heading color={emotionColor}> {emotionName} </Heading>
      </VStack>
    </>
  )
}

const ThoughtRecordDisplay = () => {
  const {thoughtRecord} = useThoughtRecord() 
  if(!isFullThoughtRecord(thoughtRecord)) {
    return <LoadingTextField/>
  }
  const argumentsText = {argFor: thoughtRecord.evidencefor, argAgainst: thoughtRecord.evidenceagainst}

  return (
    <>
      <VStack m={0} overflow={{base:"auto", lg:"visible"}} spacing={10} width={{base:"100%",lg:"70%"}}>
        <EmotionDisplay label="Emotion" emotionName={thoughtRecord.emotion} />
        <Accordion allowToggle w={"100%"}>
          <AccordionElement label="The Situation" popoverText={thoughtRecord.situationquestion}/> 
        </Accordion>
        <MoodDisplay moods={thoughtRecord.mood} label={"Moods"} />
        <MoodDisplay moods={thoughtRecord.thoughts.thoughts} label={"Thoughts"} />
        <HotThoughtDisplay hotThought={thoughtRecord.thoughts.hotThought}/>
        <ArgumentAccordion argumentsText={argumentsText}/>
        <MoodDisplay moods={thoughtRecord.alternativethought} label={"Alternative thoughts"}/>
        <EmotionDisplay label="After Emotion" emotionName={thoughtRecord.rerateemotion} />
      </VStack>
    </>
  )
}


export default ThoughtRecordDisplay

