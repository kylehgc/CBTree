import { useState } from 'react'
import partialThoughtData from './../Data/thoughts.json'
import FeelingSlider, {Mood} from './FeelingSlider'


const ThoughtQuestion = () => {
  const thoughtData = partialThoughtData.map(thought => ({...thought, value: thought.label}))
  const [thoughts, setThoughts] = useState<Mood[]>([])
  const label = "List any thoughts and rate your Belief"
  
  const handleMoodSubmit = () => {
    
  }

  return (
    <FeelingSlider 
      moods={thoughts} 
      setMoods={setThoughts} 
      selectOptions={thoughtData} 
      label={label}
      handleMoodSubmit={handleMoodSubmit} />
  )

}

export default ThoughtQuestion