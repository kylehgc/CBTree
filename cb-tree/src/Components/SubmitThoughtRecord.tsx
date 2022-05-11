import { Button, Heading } from '@chakra-ui/react'
import UseThoughtRecord from '../Hooks/UseThoughtRecord'
import LoadingTextField from './LoadingTextField'
import ThoughtRecordDisplay from './ThoughtRecordDisplay'

const SubmitThoughtRecord: React.FC = () => {
	const { thoughtRecord, onSubmit, isSubmitting, isValidQuestion } =
		UseThoughtRecord()
	if (!isValidQuestion || !thoughtRecord) {
		return <LoadingTextField />
	}
	return (
		<>
			<Heading my={4}>Your Thought Record</Heading>
			<ThoughtRecordDisplay thoughtRecord={thoughtRecord} />
			<Button
				mt={2}
				variant={'submit'}
				isLoading={isSubmitting}
				onClick={() => onSubmit(thoughtRecord)}
			>
				Submit
			</Button>
		</>
	)
}

export default SubmitThoughtRecord
