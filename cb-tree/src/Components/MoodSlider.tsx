import { 
  Tooltip,
  Box, 
  Slider, Text, IconButton, HStack, SliderFilledTrack, SliderThumb, SliderTrack, VStack} from "@chakra-ui/react"
import {CloseIcon} from '@chakra-ui/icons'
import { Mood } from "./types"
import { SetStateAction } from "react"
import React from 'react' 
interface ButtonProps {
  deleteHandler: React.MouseEventHandler<HTMLButtonElement>
}
interface MoodEntryProps {
  mood: string,
  moodRating: number,
  sliderChange: (value: number) => void,
  deleteHandler: () => void
}

const sliderColor = (value: number):string => {
  if(value < 25) {
    return "green.400"
  }
  if(value < 50) {
    return "yellow.300"
  }
  if(value < 75) {
    return "red.500"
  }
  return "red.800"
}

interface SliderProps {
  moods: Mood[],
  setMoods: (value: SetStateAction<Mood[]>) => void
}
const MoodSlider:React.FC<SliderProps> = ({moods, setMoods}) => {
  const deleteHandler = (moodName: string) => {
    setMoods(moods.filter(mood => mood.mood !== moodName))
  }
  const sliderChange = (moodName:string) => (value: number) => {
    setMoods(moods => moods.map(mood => {
      if(mood.mood === moodName) {
        return {mood: mood.mood, moodRating: value}
      } else {
        return mood
      }
    }))
  }
  return (
    <VStack w={"100%"} spacing={-1}>
      {moods.map(({mood,moodRating}) => 
        <MoodEntry 
          mood={mood} 
          key={mood}
          deleteHandler={() => deleteHandler(mood)}
          sliderChange={sliderChange(mood)} 
          moodRating={moodRating} 
        />
      )
      }
    </VStack>
  )
}

const MoodEntry: React.FC<MoodEntryProps> =
  ( {deleteHandler,mood, moodRating, sliderChange}: MoodEntryProps ) => {
    return (
      <>
        <Box w={{base:"full", lg:"50%"}} alignSelf={"center"}>
          <HStack mx={3} pl={2} my={4} minH={17} bg={"white"} justifyContent={"center"}>
            <VStack ml={2} spacing={1} p={1} w={"100%"}>
              <Text w={"100%"} textAlign={"left"}>
                {mood} 
              </Text>
              <Slider colorScheme={"teal"} ml={2} mb={2} onChange={(value) => sliderChange(value)} value={moodRating}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  fontSize={"sm"}
                  bg={sliderColor(moodRating)}
                  color='white'
                  placement='right'
                  isOpen
                  label={`${moodRating}%`}
                > 
                  <SliderThumb bg="teal.400"/>
                </Tooltip>
              </Slider>
            </VStack>
            {<DeleteButton deleteHandler={deleteHandler}/>}
          </HStack>
        </Box>
      </>
    )
  }
const DeleteButton : React.FC<ButtonProps> = ({deleteHandler}) => {
  return (
    <IconButton 
      aria-label='Delete Mood' 
      variant='ghost'
      size={"lg"}
      icon={<CloseIcon/>}
      onClick={deleteHandler}/>
  )
}

export default MoodSlider