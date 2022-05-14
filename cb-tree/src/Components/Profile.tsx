import {
	Button,
	ButtonGroup,
	Heading,
	VStack,
	Text,
	Link,
	Center,
} from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
import { useNavigate, Link as BrowserLink } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import useThoughtRecordApi from '../Hooks/useThoughtRecordApi'

const Profile = () => {
	const { getNewThoughtRecord, editThoughtRecord, isSubmitting } =
		useThoughtRecordApi()
	const navigate = useNavigate()
	const handleEdit = async (thoughtRecordId: string) => {
		const thoughtRecord = await editThoughtRecord(thoughtRecordId)
		navigate('/emotion', { state: { ...thoughtRecord } })
	}
	const handleNewThoughtRecord = async () => {
		await getNewThoughtRecord()
		navigate('/emotion')
	}
	const { currentUser } = useAuth()
	if (!currentUser) {
		navigate('/')
		return <></>
	}

	const userName = currentUser.firstName || currentUser.username.split('@')[0]
	const { thoughtRecords, activeThoughtRecord } = currentUser
	return (
		<>
			<Center minH={'70vh'}>
				<VStack textAlign={'center'} spacing={10} mt={2}>
					<Heading>Welcome to CBTree {userName}</Heading>

					<Link as={BrowserLink} to={'/about'}>
						<Text color="whiteAlpha.800" as="u">
							What is a thought record?
						</Text>
					</Link>
					<ButtonGroup spacing={6} size={'lg'}>
						<Link as={BrowserLink} to="/thoughtrecords">
							<Button disabled={!!thoughtRecords} isLoading={isSubmitting}>
								View
							</Button>
						</Link>
						<Button isLoading={isSubmitting} onClick={handleNewThoughtRecord}>
							New
						</Button>
						<Button
							disabled={!activeThoughtRecord}
							onClick={() => handleEdit(activeThoughtRecord || '')}
							isLoading={isSubmitting}
						>
							Edit
						</Button>
					</ButtonGroup>
					<Text color={'white'} p={2} fontSize={14}>
						If you have any questions or concerns Contact us at:{' '}
						<Link href={'mailto:kylehgc@gmail.com'}>
							<Text color={'whiteAlpha.800'} as="u">
								kylehgc@gmail.com
							</Text>
						</Link>
					</Text>
					<Link href="https://github.com/kylehgc/CBTree">
						<BsGithub size={80} />
					</Link>
				</VStack>
			</Center>
		</>
	)
}

export default Profile
