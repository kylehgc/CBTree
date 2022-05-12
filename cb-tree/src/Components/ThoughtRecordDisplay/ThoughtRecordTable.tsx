import {
	TableContainer,
	Table,
	TableCaption,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import EmotionDisplay from './EmotionDisplay'
import { ThoughtRecord } from '../../types'
import ThoughtRecordModal from './ThoughtRecordModal'
import useThoughtRecordApi from '../../Hooks/useThoughtRecordApi'
import LoadingTextField from '../Loading/LoadingTextField'
interface props {}

const getFormattedDate = (time: number) => {
	const date = new Date(time)
	return date.toLocaleDateString()
}

const ThoughtRecordTable: React.FC<props> = () => {
	const [recordToShow, setRecordToShow] = useState<ThoughtRecord>()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const toast = useToast()
	const { getAllThoughtRecords, isSubmitting } = useThoughtRecordApi()
	const [thoughtRecords, setThoughtRecords] = useState<ThoughtRecord[]>()

	useEffect(() => {
		const fetchThoughtRecords = async () => {
			try {
				const data = await getAllThoughtRecords()
				setThoughtRecords(data)
			} catch {
				toast({
					status: 'error',
					description: 'something went wrong getting thoughtrecords',
				})
			}
		}
		if (!isSubmitting && !thoughtRecords) {
			fetchThoughtRecords()
		}
	}, [getAllThoughtRecords, isSubmitting, thoughtRecords, toast])

	const handleOnClick = (thoughtRecordId: string) => {
		console.log(thoughtRecordId)
		if (thoughtRecords) {
			const chosenRecord = thoughtRecords.filter(
				(record) => record.key === thoughtRecordId,
			)[0]
			setRecordToShow(chosenRecord)
			onOpen()
		}
	}
	if (!thoughtRecords) {
		return <LoadingTextField />
	}
	return (
		<>
			<ThoughtRecordModal
				setThoughtRecords={setThoughtRecords}
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				thoughtRecord={recordToShow}
			/>
			<TableContainer overflowY={'auto'} w={'93%'}>
				<Table size="sm" variant="striped">
					<TableCaption> Your Thought Records </TableCaption>
					<Thead>
						<Tr>
							<Th>Recorded</Th>
							<Th> Felt Before </Th>
							<Th> Felt After </Th>
						</Tr>
					</Thead>
					<Tbody>
						{thoughtRecords.map((record) => (
							<Tr key={record.key} onClick={() => handleOnClick(record.key)}>
								<Td>
									<Text>{getFormattedDate(record.timeCreated)}</Text>
								</Td>
								<Td py={4}>
									{record.emotion && (
										<EmotionDisplay size={'3x'} emotionName={record.emotion} />
									)}
								</Td>
								<Td py={2}>
									{record.rerateemotion && (
										<EmotionDisplay
											size={'3x'}
											emotionName={record.rerateemotion}
										/>
									)}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	)
}

export default ThoughtRecordTable
