import { useEffect, useState } from 'react'
import partialThoughtData from './../Data/thoughts.json'
import SelectQuestion from './SelectQuestion'
import {Mood} from './types'
import {Button, SlideFade} from '@chakra-ui/react'
import HotThoughtSelect from './HotThoughtSelect'
import UseThoughtRecord from '../Hooks/UseThoughtRecord'
import UseThemeColors from '../Hooks/useThemeColors'
import LoadingTextField from './LoadingTextField'

const ThoughtQuestion = () => {
  const thoughtData = partialThoughtData.map(thought => ({...thought, value: thought.label}))
  const [thoughts, setThoughts] = useState<Mood[]>([])
  const [selected, SetSelected] = useState<string>("")
  const {label, onSubmit, isSubmitting, thoughtRecord} = UseThoughtRecord()
  const [doneThoughts, setDoneThoughts] = useState<Boolean>(false)
  const {foregroundColor} = UseThemeColors()
  const onSelect = (value: string) => {
    SetSelected(value)
  }
  useEffect (() => {
    console.log(thoughtRecord)
    if(thoughtRecord?.thoughts) {
      setThoughts(thoughtRecord.thoughts.thoughts)
    }
  },[thoughtRecord, setThoughts])
  const handleMoodSubmit = () => {
    if(!doneThoughts) {
      setDoneThoughts(true)
    } else {
      if(selected) {
        onSubmit({thoughts: thoughts, hotThought: selected})
      }
    }
  }
  const thoughtIDs = thoughts.map(thought => thought.mood)
  if(!thoughtRecord) {
    return <LoadingTextField/>
  }
  return (
    <>
      { !doneThoughts 
        ?
        <SelectQuestion 
          moods={thoughts} 
          isSubmitting={isSubmitting}
          setMoods={setThoughts} 
          selectOptions={thoughtData} 
          label={label}
        /> 
        : 
        <SlideFade in={!isSubmitting} offsetY={-100} transition={{enter: {delay: 0.3, duration: 0.5}, exit: {delay: 0.5, duration: 0.5}}}
          style={{flexDirection: "column" , alignItems:"center", display:"flex", minHeight:"50%",width:"100%"}}>
          <HotThoughtSelect thoughts={thoughtIDs} onSelect={onSelect} selected={selected} /> 
        </SlideFade>
      }
      {thoughts.length > 0 ?
        <SlideFade offsetY={50} transition={{enter: {delay: 0.4, duration: 0.5}, exit:{delay: 0.3, duration: 0.5}}} style={{flexDirection: "column" , alignItems:"center", display:"flex", minHeight:"auto",width:"100%"}} in={!isSubmitting}>
          <Button 
            minH={10}
            w="60%"
            mt={8}
            isLoading={isSubmitting}
            bg={foregroundColor}
            loadingText={"Submitting"}
            onClick={handleMoodSubmit} 
          >Submit </Button> </SlideFade>
        : null}
        
    </>
    
  )
}

export default ThoughtQuestion