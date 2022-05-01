import { Button, Center, Heading, HStack, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import EmotionButton, { Emotion } from './EmotionButton'
import LoadingTextField from './LoadingTextField'
import useThoughtRecord from '../Hooks/UseThoughtRecord'
import {
	faFaceMeh,
	faFaceFrownOpen,
	faFaceGrin,
	faFaceSmile,
} from '@fortawesome/free-solid-svg-icons'

export const emotions: Emotion[] = [
	{ icon: faFaceFrownOpen, emotionColor: '#322659', emotionName: 'Awful' },
	{ icon: faFaceMeh, emotionColor: '#2C5282', emotionName: 'Meh' },
	{ icon: faFaceSmile, emotionColor: '#68D391', emotionName: 'Good' },
	{ icon: faFaceGrin, emotionColor: '#F6E05E', emotionName: 'Awesome' },
]

const getEmotionColorByName = (emotionName: string) => {
	return emotions.filter((emotion) => emotion.emotionName === emotionName)[0]
		?.emotionColor
}

const EmotionPicker: React.FC = () => {
	const [selected, setSelected] = useState<string>('')
	const emotionColor = getEmotionColorByName(selected)
	const { label, isSubmitting, onSubmit, thoughtRecord } = useThoughtRecord()

	if (!thoughtRecord) {
		return <LoadingTextField />
	}

	return (
		<>
			<Center
				rounded={'75px'}
				border={selected ? '15px solid' : 'none'}
				borderColor={emotionColor}
				m={0}
				mx={-20}
				w={{ base: 'auto', lg: '100vw' }}
				p={2}
				height={'150vh'}
				flexDir={'column'}
			>
				<Heading position={'fixed'} top={40} p={0}>
					{label}
				</Heading>
				<HStack
					height={'50%'}
					p={2}
					w={{ base: '100%', lg: '50%' }}
					spacing={{ base: 8, lg: 'auto' }}
				>
					{emotions.map(({ emotionName }) => (
						<EmotionButton
							key={emotionName}
							emotionName={emotionName}
							selected={selected}
							setSelected={setSelected}
						/>
					))}
				</HStack>
				<VStack p={2} w={'full'} height={'10vh'} spacing={6}>
					{selected ? (
						<>
							<Heading color={emotionColor}> {selected} </Heading>
							<Button
								m={2}
								isLoading={isSubmitting}
								onClick={() => onSubmit(selected)}
								w={'60%'}
								minH={'40px'}
								bg={'white'}
							>
								Submit
							</Button>
						</>
					) : null}
				</VStack>
			</Center>
		</>
	)
}

export default EmotionPicker
