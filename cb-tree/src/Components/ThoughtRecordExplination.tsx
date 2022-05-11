import { AspectRatio, Center, Heading } from '@chakra-ui/react'
import AboutText from './AboutText'

const ThoughtRecordExplination: React.FC = () => {
	return (
		<>
			<Center flexDirection={'column'} w={'100%'} p={2}>
				<Heading textAlign={'center'}>What and Why of Thought Records </Heading>
				<AspectRatio my={4} maxW={'400px'} minW={'200px'} ratio={313 / 716}>
					<iframe
						title="CBTree explination"
						width="516"
						height="315.7"
						src="https://www.youtube.com/embed/9WJ-ypsaqP4"
						frameBorder="1"
						allow="accelerometer; autoplay; clipboard-write; controls=0; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</AspectRatio>
				<AboutText />
			</Center>
		</>
	)
}

export default ThoughtRecordExplination
