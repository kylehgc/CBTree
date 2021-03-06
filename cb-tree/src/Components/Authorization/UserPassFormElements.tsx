import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
} from '@chakra-ui/react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import React from 'react'

interface FormValues {
	username: string
	password: string
}
interface IProps {
	errors: Errors
	register: UseFormRegister<FormValues>
}
interface Errors {
	username?: FieldError | undefined
	password?: FieldError | undefined
}

const UserPassFormElements: React.FC<IProps> = ({
	errors,
	register,
}: IProps) => {
	return (
		<>
			<FormControl isRequired isInvalid={!!errors?.username} id="email">
				<FormLabel>Email address</FormLabel>
				<Input
					_hover={{ borderColor: 'gray.300' }}
					borderColor={'gray.300'}
					type="text"
					placeholder="Email"
					{...register('username', {
						required: true,
						pattern: {
							value: /^\S+@\S+$/i,
							message: 'Not a valid email address',
						},
					})}
				/>
				<FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors?.password?.message} id="password">
				<FormLabel my={2}>Password</FormLabel>
				<Input
					borderColor={'gray.300'}
					color={'black'}
					type="password"
					placeholder="password"
					{...register('password', {
						required: true,
						maxLength: {
							value: 24,
							message: 'Your password is too long',
						},
						minLength: {
							value: 4,
							message: 'Your password is too short',
						},
					})}
				/>
				<FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
			</FormControl>
		</>
	)
}

export default UserPassFormElements
