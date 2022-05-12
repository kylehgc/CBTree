import {
	Tooltip,
	Box,
	Slider,
	Text,
	IconButton,
	HStack,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	VStack,
	Center,
	Fade,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { Mood } from '../../types'
import { SetStateAction, useState } from 'react'
import React from 'react'
import UseThemeColors from '../../Hooks/useThemeColors'
import UseThoughtRecord from '../../Hooks/UseThoughtRecord'
interface ButtonProps {
	deleteHandler: React.MouseEventHandler<HTMLButtonElement>
}
interface MoodEntryProps {
	mood: string
	moodRating: number
	sliderChange: (value: number) => void
	deleteHandler: () => void
}

export const sliderColor = (value: number): string => {
	if (value < 25) {
		return 'green.400'
	}
	if (value < 50) {
		return 'yellow.600'
	}
	if (value < 75) {
		return 'orange.400'
	}
	return 'red.800'
}
interface SliderProps {
	moods: Mood[]
	setMoods: (value: SetStateAction<Mood[]>) => void
}
const MoodSlider: React.FC<SliderProps> = ({ moods, setMoods }) => {
	const deleteHandler = (moodName: string) => {
		setMoods(moods.filter((mood) => mood.mood !== moodName))
	}
	const sliderChange = (moodName: string) => (value: number) => {
		setMoods((moods) =>
			moods.map((mood) => {
				if (mood.mood === moodName) {
					return { mood: mood.mood, moodRating: value }
				} else {
					return mood
				}
			}),
		)
	}
	return (
		<Center flexDirection={'column'} w={'100%'} mt={0} mb={0}>
			{moods.map(({ mood, moodRating }) => (
				<MoodEntry
					mood={mood}
					key={mood}
					deleteHandler={() => deleteHandler(mood)}
					sliderChange={sliderChange(mood)}
					moodRating={moodRating}
				/>
			))}
		</Center>
	)
}
const MoodEntry: React.FC<MoodEntryProps> = ({
	deleteHandler,
	mood,
	moodRating,
	sliderChange,
}: MoodEntryProps) => {
	const { currentQuestion } = UseThoughtRecord()
	const [isDeleting, setIsDeleting] = useState(false)
	const animateThenDelete = (deleteHandler: () => void) => {
		setIsDeleting(true)
		setTimeout(deleteHandler, 500)
	}
	const { foregroundColor } = UseThemeColors()
	return (
		<>
			<Fade
				in={!isDeleting}
				transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}
				style={{
					flexDirection: 'column',
					alignItems: 'center',
					display: 'flex',
					height: 'auto',
					width: '100%',
				}}
			>
				<Box w={{ base: 'full', lg: '80%' }} my={3} alignSelf={'center'}>
					<HStack
						rounded={'2xl'}
						mx={3}
						bg={foregroundColor}
						pl={2}
						minH={20}
						pr={1}
						justifyContent={'center'}
					>
						<VStack ml={2} spacing={2} p={1} w={'100%'}>
							<Text w={'100%'} textAlign={'left'}>
								{mood}
							</Text>
							<Slider
								colorScheme={sliderColor(moodRating).slice(0, -4)}
								ml={2}
								mr={1}
								mb={2}
								onChange={(value) => sliderChange(value)}
								value={moodRating}
							>
								<SliderTrack>
									<SliderFilledTrack />
								</SliderTrack>
								<Tooltip
									hasArrow
									zIndex={-9999}
									fontSize={'sm'}
									bg={sliderColor(moodRating)}
									color="white"
									placement="right"
									isOpen={!isDeleting}
									label={`${moodRating}%`}
								>
									<SliderThumb bg="teal.400" />
								</Tooltip>
							</Slider>
						</VStack>
						{currentQuestion !== 'reratemoods' ? (
							<DeleteButton
								deleteHandler={() => animateThenDelete(deleteHandler)}
							/>
						) : null}
					</HStack>
				</Box>
			</Fade>
		</>
	)
}
const DeleteButton: React.FC<ButtonProps> = ({ deleteHandler }) => {
	return (
		<IconButton
			color={'black'}
			aria-label="Delete Mood"
			variant="ghost"
			size={'sm'}
			icon={<CloseIcon />}
			onClick={deleteHandler}
		/>
	)
}

export default MoodSlider
