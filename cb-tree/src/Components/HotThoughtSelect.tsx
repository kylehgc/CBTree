
import {Center, Heading} from '@chakra-ui/react'
import UseThemeColors from '../Hooks/useThemeColors'

interface HotThoughtProps {
  thoughts: string[],
  onSelect: (value: string) => void,
  selected: string
} 

const HotThoughtSelect: React.FC<HotThoughtProps> = ({thoughts, onSelect, selected }) => {
  const {foregroundColor} = UseThemeColors()
  return (
    <>
      <Heading mt={4} mx={4} textAlign={"center"}> Choose the Hot Thought </Heading>
      <Center p={4} flexDirection={"column"} mx={2} w={"100%"} minHeight={"60%"} justifyContent={"space-evenly"}>
        {thoughts.map(thought => {
          return (  
            <Center 
              p={2}
              rounded={"2xl"} 
              fontSize={14}
              color={selected === thought ? foregroundColor : "inherit"} 
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