import { Button, Heading, Input, useToast, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userEndPoint } from '../utils/api'

const PasswordReset: React.FC = () => {
	const { resetKey } = useParams()
	const [newPassword, setNewPassword] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const toast = useToast()
	const navigate = useNavigate()

	const handleOnClick = async () => {
		if (newPassword.length > 3) {
			setIsSubmitting(true)
			const options: RequestInit = {
				method: 'POST',
				body: JSON.stringify({ password: newPassword }),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
			const response = await fetch(`${userEndPoint}/reset/${resetKey}`, options)
			if (response.ok) {
				toast({
					status: 'success',
					description: 'Password Successfully changed redirecting to login',
				})
				navigate('/')
			} else {
				toast({ status: 'error', description: 'reset has expired' })
				setIsSubmitting(false)
			}
		} else {
			toast({ status: 'warning', description: 'Password is too short' })
		}
	}
	const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setNewPassword(event.target.value)
	}
	return (
		<>
			<VStack
				p={2}
				spacing={8}
				justifyContent={'center'}
				height={'60vh'}
				flexDir={'column'}
			>
				<Heading>Enter a new Password</Heading>
				<Input
					color="white"
					value={newPassword}
					type="password"
					onChange={handleOnChange}
					placeholder="New Password"
				/>
				<Button
					variant="submit"
					isLoading={isSubmitting}
					onClick={handleOnClick}
				>
					New Password
				</Button>
			</VStack>
		</>
	)
}

export default PasswordReset
