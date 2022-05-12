import {
	Flex,
	Progress,
	ScaleFade,
	LightMode,
	List,
	ListItem,
	Text,
	ListIcon,
	Heading,
	VStack,
} from '@chakra-ui/react'
import LoadingTextField from '../Loading/LoadingTextField'
import EmotionDisplay from './EmotionDisplay'
import { Mood, ThoughtRecord } from '../../types'
import UseThemeColors from '../../Hooks/useThemeColors'
import { sliderColor } from '../ThoughtRecordQuestions/MoodSlider'
import { Accordion } from '@chakra-ui/react'
import { RiNodeTree } from 'react-icons/ri'
import AccordionElement from '../ThoughtRecordQuestions/AccordianElement'
import HotThoughtDisplay from './HotThoughtDisplay'
import ArgumentAccordion from '../ThoughtRecordQuestions/ArgumentAccordion'

interface MoodDisplayProps {
	moods: Mood[]
	label: string
}
const MoodDisplay: React.FC<MoodDisplayProps> = ({ moods, label }) => {
	const { foregroundColor, textColor } = UseThemeColors()
	return (
		<Flex
			flexDirection={'column'}
			m={2}
			alignItems={'flexStart'}
			justifyContent={'left'}
			w={{ base: '100%', lg: '75vw' }}
		>
			<Heading m={2} ml={4} textAlign={'center'}>
				{label}
			</Heading>
			<List
				m={2}
				w={{ base: '85%', lg: '50%' }}
				alignItems={'center'}
				alignSelf={'center'}
				bg={foregroundColor}
				p={2}
				pb={4}
			>
				{moods.map(({ mood, moodRating }) => {
					return (
						<ListItem p={2} width="full" key={mood}>
							<ListIcon
								boxSize={8}
								color={sliderColor(moodRating)}
								as={RiNodeTree}
							/>
							<Text
								m={2}
								color={textColor}
								position={'relative'}
								bottom={2}
								textAlign={'center'}
								display={'inline-flex'}
							>
								{mood}
							</Text>
							<LightMode>
								<Progress
									size={'sm'}
									colorScheme={sliderColor(moodRating).slice(0, -4)}
									value={moodRating}
								/>
							</LightMode>
						</ListItem>
					)
				})}
			</List>
		</Flex>
	)
}

interface ThoughtRecordDisplayProps {
	thoughtRecord: ThoughtRecord | undefined
}
const ThoughtRecordDisplay: React.FC<ThoughtRecordDisplayProps> = ({
	thoughtRecord,
}) => {
	const { backgroundColor } = UseThemeColors()
	if (!thoughtRecord) {
		return <LoadingTextField />
	}

	const argFor = thoughtRecord.evidencefor ? thoughtRecord.evidencefor : ''
	const argAgainst = thoughtRecord.evidenceagainst
		? thoughtRecord.evidenceagainst
		: ''
	const argumentsText = {
		argFor: argFor,
		argAgainst: argAgainst,
	}
	return (
		<>
			<ScaleFade in delay={{ enter: 0.3 }}>
				<VStack
					m={0}
					bg={backgroundColor}
					overflow={{ base: 'auto', lg: 'visible' }}
					spacing={10}
					width={{ base: '100%', lg: '100%' }}
				>
					{thoughtRecord.emotion && (
						<EmotionDisplay
							label="Emotion"
							emotionName={thoughtRecord.emotion}
						/>
					)}
					{thoughtRecord.situationquestion && (
						<Accordion allowToggle w={'100%'}>
							<AccordionElement
								label="The Situation"
								popoverText={thoughtRecord.situationquestion}
							/>
						</Accordion>
					)}

					{thoughtRecord.mood && (
						<MoodDisplay moods={thoughtRecord.mood} label={'Moods'} />
					)}

					{thoughtRecord.thoughts && (
						<MoodDisplay
							moods={thoughtRecord.thoughts.thoughts}
							label={'Thoughts'}
						/>
					)}

					{thoughtRecord.thoughts && (
						<HotThoughtDisplay hotThought={thoughtRecord.thoughts.hotThought} />
					)}

					<ArgumentAccordion argumentsText={argumentsText} />
					{thoughtRecord.alternativethought && (
						<MoodDisplay
							moods={thoughtRecord.alternativethought}
							label={'Alternative thoughts'}
						/>
					)}

					{thoughtRecord.rerateemotion && (
						<EmotionDisplay
							label="After Emotion"
							emotionName={thoughtRecord.rerateemotion}
						/>
					)}
				</VStack>
			</ScaleFade>
		</>
	)
}
export default ThoughtRecordDisplay
