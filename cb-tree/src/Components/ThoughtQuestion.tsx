import { useState } from 'react'
import partialThoughtData from './../Data/thoughts.json'
import SelectQuestion from './SelectQuestion'
import {Mood} from './types'
import {Button, ModalCloseButton, useToast, VStack} from '@chakra-ui/react'
import HotThoughtSelect from './HotThoughtSelect'
import UseThoughtRecord from '../Hooks/UseThoughtRecord'

const ThoughtQuestion = () => {
  const thoughtData = partialThoughtData.map(thought => ({...thought, value: thought.label}))
  const [thoughts, setThoughts] = useState<Mood[]>([])
  const [selected, SetSelected] = useState<string>("")
  const [label, onSubmit] = UseThoughtRecord()
  const [doneThoughts, setDoneThoughts] = useState<Boolean>(false)
  
  const onSelect = (value: string) => {
    SetSelected(value)
  }
  const handleMoodSubmit = () => {
    if(!doneThoughts) {
      setDoneThoughts(true)
    } else {
      onSubmit()
    }
  }
  const thoughtIDs = thoughts.map(thought => thought.mood)
  return (
    <>
      { !doneThoughts 
        ?
        <SelectQuestion 
          moods={thoughts} 
          setMoods={setThoughts} 
          selectOptions={thoughtData} 
          label={label}
        /> 
        : 
        <HotThoughtSelect thoughts={thoughtIDs} onSelect={onSelect} selected={selected} /> 
      }
      {thoughts.length > 0 ? <Button onClick={handleMoodSubmit} variant="submit"> Submit </Button> : null}
    </>
    
  )
}

export default ThoughtQuestion