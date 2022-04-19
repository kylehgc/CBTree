import {CreatableSelect, ActionMeta} from 'chakra-react-select'
import { Dispatch, SetStateAction } from 'react'
import {Button,Box, FormLabel} from '@chakra-ui/react'
import {useState } from 'react'
import { Mood } from './types'
import MoodList from './MoodSlider'
import UseThemeColors from '../Hooks/useThemeColors'

type Option = {
  value: string,
  label: string
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

const SelectQuestion: React.FC<RecordProps> = ({moods,setMoods, selectOptions,label}: RecordProps) => {
  const {backgroundColor, foregroundColor} = UseThemeColors()
  const [selectedMood, setSelectedMood] = useState<string>("")
  
  const addMood = (mood: string) => {
    if(!(moods.map(mood => mood.mood)).includes(mood) && mood) {
      setMoods([...moods, {mood: mood, moodRating: 0}])
    }
  }

  const handleChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    if(option) {
      setSelectedMood(option.value)
    }
  }
  return (
    <>
      <Box p={2} bg={foregroundColor} mt={10} mx={7} >
        <FormLabel mb={2} fontSize={14}> {label} </FormLabel>
        <CreatableSelect
          size='md'
          onChange={handleChange}
          options={selectOptions}
        />
      </Box>
      <Button alignSelf={'center'} onClick={() => addMood(selectedMood)} w={"60%"} minH={10} mb={4} mt={7}> Add </Button>
      <MoodList moods={moods} setMoods={setMoods} />
    </>
  )
}


export default SelectQuestion