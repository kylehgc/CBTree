import { 
  Tooltip,
  Box, 
  Slider, Text, IconButton, HStack, SliderFilledTrack, SliderThumb, SliderTrack} from "@chakra-ui/react"
import {CloseIcon} from '@chakra-ui/icons'



interface ButtonProps {
  deleteHandler: () => void
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
const MoodEntry: React.FC<MoodEntryProps> =
  ( {deleteHandler,mood, moodRating, sliderChange}: MoodEntryProps ) => {
    
    return (
      <>
        <Box w={{base:"full", lg:"50%"}} alignSelf={"center"}>
          <HStack mx={3} my={4} minH={20} p={2}  bg={"white"} justifyContent={"space-between"}>
            <Text p={1} w={"30%"}>
              {mood} 
            </Text>
            <Slider colorScheme={"teal"} onChange={(value) => sliderChange(value)} value={moodRating}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                fontSize={11}
                bg={sliderColor(moodRating)}
                color='white'
                placement='top'
                isOpen
                label={`${moodRating}%`}
              > 
                <SliderThumb /> 
              </Tooltip>
            </Slider>
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
      icon={<CloseIcon/>}
      onClick={deleteHandler}/>
  )
}

export default MoodEntry