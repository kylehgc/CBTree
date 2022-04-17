import {CreatableSelect, ActionMeta} from 'chakra-react-select'
import feelings from '../Data/feelings.json'
import {Button,Box, FormLabel} from '@chakra-ui/react'
import {useState } from 'react'

import MoodEntry from './MoodEntry'


type Option = {
  value: string,
  label: string
}

type Mood = {
  mood: string,
  moodRating: number
}

const MoodsRecord: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>("")
  const [moods, setMoods] = useState<Mood[]>([])

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

  const handleChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    if(option) {
      setSelectedMood(option.value)
    }
  }
  const addMood = () => {
    
    if(!(moods.map(mood => mood.mood)).includes(selectedMood) && selectedMood) {
      setMoods([...moods, {mood: selectedMood, moodRating: 0}])
    }
  }
  
  return (
    <>
      
      <Box p={2} bg="white" mt={10} mx={10} >
        <FormLabel mb={2} fontSize={14}> Add any emotions you felt and rate them </FormLabel>
        <CreatableSelect
          size='md'
          onChange={handleChange}
          options={feelings}
        />
      </Box>
      <Button alignSelf={'center'} onClick={addMood} w={"60%"} minH={10} mb={4} mt={7}> Add </Button>
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
      
      {moods.length > 0 ? <Button m={5} alignSelf={"center"} w={"60%"} minH={10}> Submit </Button> : null}
    </>
  )
}


export default MoodsRecord