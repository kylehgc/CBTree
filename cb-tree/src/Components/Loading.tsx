import { Skeleton, Center, SkeletonText, VStack } from "@chakra-ui/react"

const Loading = () => {
  return (
    <VStack spacing={3} mt={8} flexDirection={"column"} alignItems={"center"} p={4} w={"100%"} h={"100%"}>
      <SkeletonText noOfLines={5} w={"70%"} h={"20%"}/>
      <Skeleton rounded="2xl" h={"100%"} my={4} w={"70%"} />
      <Skeleton mt={4} h={20} w={"70%"} />
    </VStack>
  )
}

export default Loading