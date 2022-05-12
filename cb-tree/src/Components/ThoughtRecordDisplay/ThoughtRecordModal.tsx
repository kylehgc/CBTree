import {
	Button,
	HStack,
	Modal,
	ModalContent,
	Popover,
	ModalOverlay,
	PopoverTrigger,
	useBreakpointValue,
	PopoverContent,
} from '@chakra-ui/react'
import { ThoughtRecord } from '../../types'
import ThoughtRecordDisplay from './ThoughtRecordDisplay'
import UseThemeColors from '../../Hooks/useThemeColors'
import useThoughtRecordApi from '../../Hooks/useThoughtRecordApi'
import { useNavigate } from 'react-router-dom'

interface Props {
	thoughtRecord: ThoughtRecord | undefined
	isOpen: boolean
	onClose: () => void
	onOpen: () => void
	setThoughtRecords: React.Dispatch<
		React.SetStateAction<ThoughtRecord[] | undefined>
	>
}

const ThoughtRecordModal: React.FC<Props> = ({
	onClose,
	isOpen,
	onOpen,
	thoughtRecord,
	setThoughtRecords,
}) => {
	const {
		deleteThoughtRecord,
		getAllThoughtRecords,
		editThoughtRecord,
		isSubmitting,
	} = useThoughtRecordApi()
	const navigate = useNavigate()

	const handleEdit = async (thoughtRecordId: string) => {
		const thoughtRecord = await editThoughtRecord(thoughtRecordId)
		navigate('/emotion', { state: { ...thoughtRecord } })
	}
	const handleDelete = async (thoughtRecordId: string) => {
		await deleteThoughtRecord(thoughtRecordId)
		const thoughtRecords = await getAllThoughtRecords()
		setThoughtRecords(thoughtRecords)
		onClose()
	}
	const modelSize = useBreakpointValue<string>({ base: 'xs', lg: 'xl' })
	const { backgroundColor } = UseThemeColors()
	if (!thoughtRecord) {
		return <></>
	}
	return (
		<>
			<Modal size={modelSize} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay backdropFilter="blur(5px)" />
				<ModalContent bg={backgroundColor} p={4}>
					<HStack m={2} spacing={'auto'}>
						<Button
							onClick={() => handleEdit(thoughtRecord.key)}
							isLoading={isSubmitting}
							w={{ base: '40%', lg: '30%' }}
							minH={'full'}
						>
							Edit
						</Button>
						<Popover placement="bottom">
							<PopoverTrigger>
								<Button isLoading={isSubmitting} w={{ base: '40%', lg: '30%' }}>
									Delete
								</Button>
							</PopoverTrigger>
							<PopoverContent
								m={2}
								w={'65%'}
								alignItems={'center'}
								p={2}
								textAlign={'center'}
							>
								Are you sure you want to delete this record? It can't be undone
								<Button
									isLoading={isSubmitting}
									onClick={() => handleDelete(thoughtRecord?.key)}
									w={'70%'}
									m={2}
								>
									Yes
								</Button>
								<Button isLoading={isSubmitting} w={'70%'} m={2}>
									No
								</Button>
							</PopoverContent>
						</Popover>
					</HStack>
					{thoughtRecord && (
						<ThoughtRecordDisplay thoughtRecord={thoughtRecord} />
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default ThoughtRecordModal
