import {CreatableSelect, ActionMeta} from 'chakra-react-select'
import { Dispatch, SetStateAction } from 'react'
import {Button,Box, FormLabel} from '@chakra-ui/react'
import {useState } from 'react'

import MoodEntry from './MoodEntry'


type Option = {
  value: string,
  label: string
}

export type Mood = {
  mood: string,
  moodRating: number
}


interface SelectOption {
  label: string,
  value: string
}

interface RecordProps {
  moods: Mood[],
  setMoods: Dispatch<SetStateAction<Mood[]>>,
  selectOptions: SelectOption[],
  label:string,
}

const FeelingSlider: React.FC<RecordProps> = ({moods,setMoods,  selectOptions,label}: RecordProps) => {
  const [selectedMood, setSelectedMood] = useState<string>("")
  

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

  const onCreate = async(value: string) => { 
    addMood(value)
  }

  const addMood = (mood: string) => {
    
    if(!(moods.map(mood => mood.mood)).includes(mood) && mood) {
      setMoods([...moods, {mood: selectedMood, moodRating: 0}])
    }
  }
  
  return (
    <>
      
      <Box p={2} bg="white" mt={10} mx={10} >
        <FormLabel mb={2} fontSize={14}> {label} </FormLabel>
        <CreatableSelect
          size='md'
          onChange={handleChange}
          options={selectOptions}
        />
      </Box>
      <Button alignSelf={'center'} onClick={() => addMood(selectedMood)} w={"60%"} minH={10} mb={4} mt={7}> Add </Button>
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
      
      
    </>
  )
}


export default FeelingSlider