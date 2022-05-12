import { Badge, Center, VStack } from '@chakra-ui/react'
interface Props {
	hotThought: string
}

const HotThoughtDisplay: React.FC<Props> = ({ hotThought }) => {
	return (
		<VStack w={'full'} spacing={-1}>
			<Badge
				alignSelf={'end'}
				my={2}
				mr={6}
				colorScheme="red"
				variant={'solid'}
			>
				Hot Thought
			</Badge>
			<Center
				color={'white'}
				bg={'red.500'}
				p={2}
				alignSelf={'center'}
				w={{ base: '90%', lg: '93%' }}
				textAlign={'center'}
				minH={{ base: '80px', lg: '20vh' }}
				rounded={'2xl'}
			>
				{hotThought}
			</Center>
		</VStack>
	)
}

export default HotThoughtDisplay
