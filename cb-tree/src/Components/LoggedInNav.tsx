import {
	Menu,
	MenuButton,
	Button,
	Avatar,
	MenuList,
	Center,
	MenuDivider,
	MenuItem,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import UseThemeColors from '../Hooks/useThemeColors'
import useThoughtRecordApi from '../Hooks/useThoughtRecordApi'

interface Props {
	displayName: string
}

const LoggedInNav: React.FC<Props> = ({ displayName }) => {
	const { getNewThoughtRecord } = useThoughtRecordApi()
	const { backgroundColor, foregroundColor } = UseThemeColors()
	const navigate = useNavigate()
	const { logout } = useAuth()

	const handleNewThoughtRecord = async () => {
		await getNewThoughtRecord()
		navigate('/emotion')
	}

	const handleLogout = () => {
		logout()
		navigate('/')
	}

	return (
		<Menu>
			<MenuButton
				bg={backgroundColor}
				as={Button}
				rounded={'full'}
				variant={'link'}
				cursor={'pointer'}
				minW={0}
			>
				<Avatar
					name={displayName}
					size="md"
					color={backgroundColor}
					bg={foregroundColor}
				/>
			</MenuButton>
			<MenuList p={2} alignItems={'center'} zIndex={'overlay'}>
				<br />
				<Center>
					<Avatar
						size={'2xl'}
						bg={backgroundColor}
						color={foregroundColor}
						name={displayName}
					/>
				</Center>
				<br />
				<Center>
					<p>{displayName}</p>
				</Center>
				<br />
				<MenuDivider />
				<MenuItem onClick={handleNewThoughtRecord}>New Thought Record</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default LoggedInNav
