import { Badge, Center, VStack } from "@chakra-ui/react"
import useThemeColors from '../Hooks/useThemeColors'
interface Props {
  hotThought: string
}

const HotThoughtDisplay: React.FC<Props> = ({hotThought}) => {
  const {foregroundColor} = useThemeColors()
  return (
    <VStack w={"full"} spacing={-1}>
      <Badge alignSelf={"end"} my={2} mr={6} colorScheme="red" variant={"solid"}>
           Hot Thought
      </Badge>
      <Center bg={"red.500"} p={2} color={foregroundColor}
        alignSelf={"center"} w={"90%"} textAlign={"center"} 
        minH={{base:"80px",lg:"20vh"}} rounded={"2xl"}
      >
        {hotThought}
      </Center>
    </VStack>
  )
}

export default HotThoughtDisplay