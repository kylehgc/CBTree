
import {Center, Heading, VStack, Badge, Input, Button} from '@chakra-ui/react'
import { useState } from 'react'
import useThemeColors from '../Hooks/useThemeColors'
import ArgumentButtons from './ArgumentAccordion'
import MoodSlider from './MoodSlider'
import { Mood } from './types'

interface Props {
  hotThought?: string
}

const testData1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin nulla sit amet neque imperdiet, quis dapibus enim dignissim. Donec suscipit non dolor vitae sodales. Fusce viverra tincidunt dolor sit amet interdum. Nullam sit amet fringilla ante. Sed quis ex neque. Donec cursus ornare elit et tincidunt. Mauris eu augue efficitur, ornare metus eget, condimentum augue. Pellentesque consectetur, eros ut euismod efficitur, tellus arcu porttitor lectus, eget ornare ante risus tempor nulla. Nam ut ex metus. Nulla dignissim eleifend arcu ut vehicula. Nunc elementum efficitur tortor id interdum. Donec eu aliquam quam. Morbi consequat, lectus et sodales ultrices, erat purus tempus lectus, nec dictum mauris lacus sit amet neque. Nunc euismod elit leo, vitae luctus libero efficitur id. Etiam consequat tortor libero, eget tempus est placerat sit amet. Praesent pretium volutpat malesuada. Ut in erat in ipsum tincidunt tincidunt a bibendum diam."
const testData2 = "Pellentesque consectetur, eros ut euismod efficitur, tellus arcu porttitor lectus, eget ornare ante risus tempor nulla. Nam ut ex metus. Nulla dignissim eleifend arcu ut vehicula. Nunc elementum efficitur tortor id interdum. Donec eu aliquam quam. Morbi consequat, lectus et sodales ultrices, erat purus tempus lectus, nec dictum mauris lacus sit amet neque. Nunc euismod elit leo, vitae luctus libero efficitur id. Etiam consequat tortor libero, eget tempus est placerat sit amet. Praesent pretium volutpat malesuada. Ut in erat in ipsum tincidunt tincidunt a bibendum diam."
const argumentsText = {argFor: testData1, argAgainst: testData2}

const BalancedThought: React.FC<Props> = ({hotThought="We testing some really hot thoughts"}) => {
  const {backgroundColor, foregroundColor} = useThemeColors()
  const [balancedThought, setBalancedThought] = useState<string>("")
  const [moods, setMoods] = useState<Mood[]>([])
  const handleOnChange:  React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setBalancedThought(event.target.value)
  }
  
  const addMood = (mood: string) => {
    if(!(moods.map(mood => mood.mood)).includes(mood) && mood) {
      setMoods([...moods, {mood: mood, moodRating: 0}])
    }
    setBalancedThought("")
  }
  return (
    <VStack mt={1} spacing={8} p={1} h="full" w="full">
      <Heading m={0} textAlign={"center"}> Write a Balanced Thought </Heading> 
      <VStack w={"full"} spacing={-1}>
        <Badge alignSelf={"end"} my={2} mr={6} colorScheme="red" variant={"solid"}>
           Hot Thought
        </Badge>
        <Center bg={"red.400"} p={2} color={foregroundColor} alignSelf={"center"} w={"90%"} textAlign={"center"} minH={"80px"} rounded={"2xl"}>
          {hotThought}
        </Center>
      </VStack>
      <ArgumentButtons argumentsText={argumentsText}/>
      <Input
        onChange={handleOnChange}
        value={balancedThought}
        size="lg"
        p={1}
        alignSelf={"center"}
        variant="outlined"
        bg={foregroundColor}
        w={"90%"} 
        _placeholder={{color:"blackAlpha.800", textAlign: "center"}}
        placeholder='What are some Balanced Thoughts?'/>
      <Button onClick={() => addMood(balancedThought)} w={"60%"} minH={10} mb={4} mt={7}> Add Thought </Button>
      <MoodSlider moods={moods} setMoods={setMoods} />
      {moods.length > 0 ? <Button mb={2} variant="submit"> Submit </Button> : null}
    </VStack>
  )
}

export default BalancedThought