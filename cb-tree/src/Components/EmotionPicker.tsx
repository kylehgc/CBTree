import { Button, Flex, Center, Heading, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import EmotionButton, { Emotion } from './EmotionButton'
import LoadingTextField from './LoadingTextField'
import useThoughtRecord from '../Hooks/UseThoughtRecord'
import {
	faFaceMeh,
	faFaceFrownOpen,
	faFaceGrin,
	faFaceSmile,
} from '@fortawesome/free-solid-svg-icons'
import { isKeyOfThoughtRecord } from './types'

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
	const { label, isSubmitting, onSubmit, currentQuestion, thoughtRecord } =
		useThoughtRecord()

	useEffect(() => {
		if (thoughtRecord) {
			if (isKeyOfThoughtRecord(currentQuestion, thoughtRecord)) {
				const value = thoughtRecord[currentQuestion]
				if (typeof value === 'string') {
					setSelected(value)
				}
			}
		}
	}, [currentQuestion, thoughtRecord])

	if (!thoughtRecord) {
		return <LoadingTextField />
	}
	return (
		<>
			<Flex p={4}>
				<Center
					mt={4}
					rounded={'75px'}
					border={selected ? '15px solid' : 'none'}
					borderColor={emotionColor}
					m={0}
					mx={-20}
					w={{ base: 'auto', md: '100vw' }}
					p={2}
					height={'70vh'}
					flexDir={'column'}
				>
					<Heading position={'fixed'} top={52} p={0}>
						{label}
					</Heading>
					<HStack
						height={'50%'}
						p={2}
						w={{ base: '100%', lg: '80%' }}
						spacing={{ base: 9, md: 'auto' }}
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
									variant={'submit'}
									isLoading={isSubmitting}
									onClick={() => onSubmit(selected)}
									w={'60%'}
									minH={'40px'}
								>
									Submit
								</Button>
							</>
						) : null}
					</VStack>
				</Center>
			</Flex>
		</>
	)
}

export default EmotionPicker
