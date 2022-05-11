import { Heading, VStack } from '@chakra-ui/react'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeProps } from 'chakra-react-select'
import { emotions } from './EmotionPicker'

interface EmotionDisplayProps {
	emotionName: string
	label?: string
	size?: SizeProp
}

const EmotionDisplay: React.FC<EmotionDisplayProps> = ({
	emotionName,
	label,
	size,
}) => {
	if (!size) {
		size = '5x' as SizeProp
	}
	const emotion = emotions.filter(
		(emotion) => emotionName === emotion.emotionName,
	)[0]
	const { icon, emotionColor } = emotion
	return (
		<>
			<VStack spacing={4}>
				{label && <Heading textAlign={'center'}> {label} </Heading>}
				<FontAwesomeIcon size={size} icon={icon} color={emotionColor} />
				{label && <Heading color={emotionColor}> {emotionName} </Heading>}
			</VStack>
		</>
	)
}

export default EmotionDisplay
