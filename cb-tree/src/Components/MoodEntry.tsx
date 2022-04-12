import { 
  Tooltip,
  Box, 
  Slider, Text, IconButton, HStack, SliderFilledTrack, SliderThumb, SliderTrack, VStack} from "@chakra-ui/react"
import {CloseIcon} from '@chakra-ui/icons'



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
const MoodEntry: React.FC<MoodEntryProps> =
  ( {deleteHandler,mood, moodRating, sliderChange}: MoodEntryProps ) => {
    
    return (
      <>
        <Box w={{base:"full", lg:"50%"}} alignSelf={"center"}>
          <HStack mx={3} pl={2} my={4} minH={20} bg={"white"} justifyContent={"center"}>
            <VStack ml={2} spacing={1} w={"100%"}>
              <Text p={1} w={"100%"} textAlign={"left"}>
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

export default MoodEntry