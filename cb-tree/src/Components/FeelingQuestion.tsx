import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import feelings from '../Data/feelings.json'
import UseThoughtRecord from '../Hooks/UseThoughtRecord'
import SelectQuestion from './SelectQuestion'
import {Mood} from './types'

interface Props {
  defaultMoods?: Mood[]
}
const FeelingQuestion: React.FC<Props> = ({defaultMoods = []}) => {
  const [moods, setMoods] = useState<Mood[]>(defaultMoods)
  const {label, onSubmit } = UseThoughtRecord()

  return (
    <>
      <SelectQuestion 
        moods={moods} 
        setMoods={setMoods} 
        selectOptions={feelings} 
        label={label}
      / >
      {moods.length > 0 ? <Button onClick={() => onSubmit(moods)} variant="submit"> Submit </Button> : null}
    </>
  )
}

export default FeelingQuestion

