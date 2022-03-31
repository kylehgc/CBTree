import {ChakraStylesConfig, CreatableSelect} from 'chakra-react-select'
import feelings from '../Data/feelings.json'
import {Button,Box, FormLabel} from '@chakra-ui/react'
import { useRef, useState } from 'react'
const moodStyles: ChakraStylesConfig = {
  option: (provided) => {
    return {

      ...provided
      
      
      
    }
  }
}



const MoodsRecord: React.FC = () => {
  const [moods, setMoods] = useState()
  const selectRef = useRef()
  return (
    <>
      <Box p={2} bg="white" m={10} >
        <FormLabel mb={2} fontSize={14}> Add any emotions you felt and rate them </FormLabel>
        <CreatableSelect
          chakraStyles={moodStyles}
          options={feelings}
        />
      </Box>
      <Button variant='solid' mx={10}> Add </Button>
    </>
  )
}


export default MoodsRecord