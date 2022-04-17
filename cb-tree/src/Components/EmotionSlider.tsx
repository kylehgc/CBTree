import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import feelings from '../Data/feelings.json'
import UseThoughtRecord from '../Hooks/UseThoughtRecord'
import FeelingSlider,{Mood} from './FeelingSlider'



const EmotionSlider = () => {
  const [moods, setMoods] = useState<Mood[]>([])
  const [label,onSubmit] = UseThoughtRecord({moods})

  
  return (
    <>
      <FeelingSlider 
        moods={moods} 
        setMoods={setMoods} 
        selectOptions={feelings} 
        label={label}
      / >
      {moods.length > 0 ? <Button onClick={onSubmit} variant="submit"> Submit </Button> : null}
    </>
  )
}

export default EmotionSlider

