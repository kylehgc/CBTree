
import {Center, Heading} from '@chakra-ui/react'
import UseThemeColors from '../Hooks/useThemeColors'

interface HotThoughtProps {
  thoughts: string[],
  onSelect: (value: string) => void,
  selected: string
} 



const HotThoughtSelect: React.FC<HotThoughtProps> = ({thoughts, onSelect, selected }) => {
  const {foregroundColor, backgroundColor} = UseThemeColors()
  return (
    <>
      <Heading m={4} textAlign={"center"}> Choose the Hot Thought </Heading>
      <Center p={4} flexDirection={"column"} mx={4} my={4} minHeight={"80%"} justifyContent={"space-around"}>
      
        {thoughts.map(thought => {
          return (  
        
            <Center 
              p={4}
              rounded={"2xl"} 
              fontSize={14} 
              minH={"20%"} 
              width={"90%"} 
              bg={selected === thought ? "red.400" : foregroundColor} 
              onClick={()=> onSelect(thought)}>
              {thought}
            </Center>
          
          )
        })}
      </Center>
    </>
  )
}

export default HotThoughtSelect