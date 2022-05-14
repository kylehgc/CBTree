import { AspectRatio, Center, Heading } from '@chakra-ui/react'
import AboutText from './AboutText'

const ThoughtRecordExplination: React.FC = () => {
	return (
		<>
			<Center flexDirection={'column'} w={'100%'} p={4}>
				<Heading textAlign={'center'}>What and Why of Thought Records </Heading>
				<AspectRatio my={4} minW={'250px'} ratio={1072 / 1920}>
					<iframe
						title="CBTree explination"
						src="https://www.youtube.com/embed/nypalgwSou0"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
						allowFullScreen
					/>
				</AspectRatio>
				<AboutText />
			</Center>
		</>
	)
}

export default ThoughtRecordExplination
