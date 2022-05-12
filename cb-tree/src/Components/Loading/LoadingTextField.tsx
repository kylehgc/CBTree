import { Skeleton, VStack } from '@chakra-ui/react'

const LoadingTextField = () => {
	return (
		<VStack
			rounded={'3xl'}
			w={'full'}
			minH={'100%'}
			flexDirection="column"
			spacing={8}
			justifyContent="center"
			mx={2}
			pb={6}
			px={5}
			pt={2}
		>
			<Skeleton rounded={'xl'} h={'80%'} w="full" p={4} m={2} />

			<Skeleton minHeight={10} w="60%" alignSelf={'center'} />
		</VStack>
	)
}
export default LoadingTextField
