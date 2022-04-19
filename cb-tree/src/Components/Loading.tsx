import { Skeleton, Flex, SkeletonText } from "@chakra-ui/react"

const Loading = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} m={4} p={4} w={"100%"} h={"100%"}>
      <SkeletonText noOfLines={5} w={"70%"} h={"20%"}/>
      <Skeleton rounded="2xl" h={"70%"} my={4} w={"90%"} />
      <Skeleton mt={4} h={20} w={"70%"} />
    </Flex>
  )
}

export default Loading