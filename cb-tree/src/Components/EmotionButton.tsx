import { useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { emotions } from './EmotionPicker'

export interface Emotion {
	icon: IconDefinition
	emotionColor: string
	emotionName: string
}

type ButtonSizes = '3x' | '5x'

interface EmotionButtonProps {
	emotionName: string
	setSelected: Dispatch<SetStateAction<string>>
	selected: string
}

const EmotionButton: React.FC<EmotionButtonProps> = ({
	emotionName,
	setSelected,
	selected,
}) => {
	const emotion = emotions.filter(
		(emotion) => emotionName === emotion.emotionName,
	)[0]
	const { emotionColor, icon } = emotion
	const iconColor = useColorModeValue('black', 'white')
	const buttonSize = useBreakpointValue<string>({
		base: '3x',
		md: '5x',
		lg: '9x',
	}) as ButtonSizes

	const getIconColor = (emotionName: string) => {
		if (selected && emotionName !== selected) {
			return iconColor
		} else {
			return emotionColor
		}
	}

	const handleOnClick = (emotionName: string) => {
		if (emotionName === selected) {
			setSelected('')
		} else {
			setSelected(emotionName)
		}
	}
	const displayColor = getIconColor(emotionName)

	return (
		<>
			<FontAwesomeIcon
				size={buttonSize}
				onClick={() => handleOnClick(emotionName)}
				aria-label={`${emotionName} button`}
				color={displayColor}
				icon={icon}
			/>
		</>
	)
}

export default EmotionButton
