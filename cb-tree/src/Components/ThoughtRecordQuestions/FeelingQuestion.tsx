import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import feelings from '../../Data/feelings.json'
import UseThoughtRecord from '../../Hooks/UseThoughtRecord'
import LoadingTextField from '../Loading/LoadingTextField'
import SelectQuestion from './SelectQuestion'
import { isKeyOfThoughtRecord, Mood } from '../../types'

interface Props {
	defaultMoods?: Mood[]
}
export const isMood = (value: any): value is Mood[] => {
	if (Array.isArray(value) && value.length > 0) {
		return 'mood' in value[0]
	}
	return false
}
const FeelingQuestion: React.FC<Props> = () => {
	const [moods, setMoods] = useState<Mood[]>([])
	const { label, onSubmit, thoughtRecord, currentQuestion, isSubmitting } =
		UseThoughtRecord()

	useEffect(() => {
		if (currentQuestion === 'reratemoods') {
			if (thoughtRecord?.mood) {
				setMoods(thoughtRecord.mood)
			}
		}
	}, [currentQuestion, setMoods, thoughtRecord])
	useEffect(() => {
		if (thoughtRecord) {
			if (isKeyOfThoughtRecord(currentQuestion, thoughtRecord)) {
				const thoughtRecordMood = thoughtRecord[currentQuestion]
				if (isMood(thoughtRecordMood)) {
					setMoods(thoughtRecordMood)
				}
			}
		}
	}, [currentQuestion, thoughtRecord])
	if (!thoughtRecord) {
		return <LoadingTextField />
	}
	return (
		<>
			<SelectQuestion
				isSubmitting={isSubmitting}
				moods={moods}
				setMoods={setMoods}
				selectOptions={feelings}
				label={label}
			/>
			{moods.length > 0 ? (
				<Button
					mt={8}
					mb={2}
					minH={10}
					w="60%"
					isLoading={isSubmitting}
					loadingText={'Submitting'}
					onClick={() => onSubmit(moods)}
				>
					Submit
				</Button>
			) : null}
		</>
	)
}
export default FeelingQuestion
