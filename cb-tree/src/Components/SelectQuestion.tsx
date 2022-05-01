import {CreatableSelect, ActionMeta} from 'chakra-react-select'
import { Dispatch, SetStateAction } from 'react'
import {Button,Box, FormLabel, Heading, SlideFade, transition} from '@chakra-ui/react'
import {useState } from 'react'
import { Mood } from './types'
import MoodList from './MoodSlider'
import UseThemeColors from '../Hooks/useThemeColors'
import useThoughtRecord from '../Hooks/UseThoughtRecord'

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
  isSubmitting: boolean
}

const SelectQuestion: React.FC<RecordProps> = ({isSubmitting, moods,setMoods, selectOptions,label}: RecordProps) => {
  const {foregroundColor} = UseThemeColors()
  const {currentQuestion} = useThoughtRecord()
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
      {currentQuestion !== "reratemoods" ?
        <SlideFade offsetY={0} offsetX={50} 
          transition={{enter: {delay: 0.2, duration: .5}, exit: {delay: 0.4, duration: .5}}}
          style={{flexDirection: "column" , alignItems:"center", display:"flex", height:"auto",width:"100%"}} 
          in={!isSubmitting} > 
          <Box p={2} w={"92%"} mt={6} mb={2} mx={7} >
            <FormLabel mb={2} color={"white"} fontSize={14}> {label}  </FormLabel>
            <CreatableSelect
              size='md'
              onChange={handleChange}
              options={selectOptions}
            />
          </Box>
          <Button alignSelf={'center'} bg={"white"} onClick={() => addMood(selectedMood)} w={"60%"} minH={10} my={6}> Add </Button>
        </SlideFade>
        : <Heading> {label} </Heading>}
      
      <MoodList moods={moods} setMoods={setMoods} />
     
    </>
  )
}


export default SelectQuestion