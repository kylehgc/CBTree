import { useState } from 'react'
import feelings from '../Data/feelings.json'
import FeelingSlider,{Mood} from './FeelingSlider'



const EmotionSlider = () => {
  const [moods, setMoods] = useState<Mood[]>([])
  const label = "Add any emotions you felt and rate them"

  const handleMoodSubmit = () => {

  }
  return (
    <FeelingSlider 
      moods={moods} 
      setMoods={setMoods} 
      selectOptions={feelings} 
      label={label}
      handleMoodSubmit={handleMoodSubmit} / >
    
  )
}

export default EmotionSlider

