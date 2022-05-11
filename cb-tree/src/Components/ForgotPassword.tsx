import { Button, Flex, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { userEndPoint } from '../utils/api'

const ForgotPassword: React.FC = () => {
	const [emailAddress, setEmailAddress] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const toast = useToast()
	const handleOnclick = async () => {
		if (emailAddress.length > 0) {
			setIsSubmitting(true)
			const options: RequestInit = {
				method: 'POST',
				body: JSON.stringify({ user_name: emailAddress }),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
			try {
				const response = await fetch(`${userEndPoint}/reset/`, options)
				if (response.ok) {
					toast({
						status: 'success',
						description: 'Check your email for your reset link',
					})
				}
				if (response.status === 422) {
					toast({ status: 'warning', description: 'invalid email address' })
				}
				setIsSubmitting(false)
			} catch {
				toast({
					status: 'error',
					description: 'Something went wrong try again',
				})
			}
		}
	}
	const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setEmailAddress(event.target.value)
	}
	return (
		<>
			<Flex p={2} flexDir={'column'} height={'70vh'} justifyContent={'center'}>
				<Heading>Forgot your Password </Heading>
				<Text
					color="white"
					m={2}
					size={'md'}
					mt={8}
					w={'full'}
					textAlign={'left'}
				>
					You'll get an email with a reset link
				</Text>
				<Input
					color="white"
					type={'email'}
					placeholder="email address"
					value={emailAddress}
					onChange={handleOnChange}
				/>
				<Button
					isLoading={isSubmitting}
					onClick={handleOnclick}
					mt={10}
					variant={'submit'}
				>
					Submit
				</Button>
			</Flex>
		</>
	)
}

export default ForgotPassword
