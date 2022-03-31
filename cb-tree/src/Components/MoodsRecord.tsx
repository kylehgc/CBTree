import {CreatableSelect, ActionMeta} from 'chakra-react-select'
import feelings from '../Data/feelings.json'
import {Button,Box, FormLabel} from '@chakra-ui/react'
import { useState } from 'react'



type Option = {
  value: string,
  label: string
}


const MoodsRecord: React.FC = () => {

  const [moods, setMoods] = useState<string[]>([])
  console.log(moods)

  const handleChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    if(option !== null) {
      console.log(moods)
      if(!(option.value in moods)) {
        
        setMoods((moods) => [...moods, option.value])
      }
    }
  }
  const handleOnClick = () => {
    // if(selectRef.current) {
    //   console.log(selectRef.current)
    // setMoods(selectRef.current.select.inputRef.)
  //  }
  }
  
  return (
    <>
      <Box p={2} bg="white" m={10} >
        <FormLabel mb={2} fontSize={14}> Add any emotions you felt and rate them </FormLabel>
        <CreatableSelect
          size='md'
          onChange={handleChange}
          options={feelings}
        />
      </Box>
      <Button onClick={handleOnClick} variant='solid' mx={10}> Add </Button>
    </>
  )
}


export default MoodsRecord