import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
	ThoughtRecord,
	isThoughtRecord,
	isKeyOfThoughtRecord,
	QuestionType,
	question,
	thoughtRecordData,
	isQuestion,
	FormValues,
} from '../types'
import useThoughtRecordApi from './useThoughtRecordApi'

interface UseThoughtRecordReturn {
	label: string
	onSubmit: (data: FormValues) => void
	isSubmitting: boolean
	currentQuestion: string
	isValidQuestion: boolean | null
	thoughtRecord: ThoughtRecord | undefined
}

const getLastValid = (pathname: QuestionType, thoughtRecord: ThoughtRecord) => {
	for (let path of question) {
		let thoughtRecordKey = path.slice(1)
		if (path === pathname) {
			return path
		}
		if (isKeyOfThoughtRecord(thoughtRecordKey, thoughtRecord)) {
			if (thoughtRecord[thoughtRecordKey] === null) {
				return path
			}
		}
	}
	return pathname
}
const UseThoughtRecord = (): UseThoughtRecordReturn | never => {
	const toast = useToast()
	const navigate = useNavigate()
	const { pathname, state } = useLocation()
	const [thoughtRecord, setThoughtRecord] = useState<ThoughtRecord>()
	const [isValidQuestion, setIsValidQuestion] = useState<boolean | null>(null)
	const {
		updateThoughtRecord,
		getActiveThoughtRecord,
		isSubmitting,
		saveThoughtRecord,
	} = useThoughtRecordApi()

	useEffect(() => {
		if (!isValidQuestion && isQuestion(pathname)) {
			if (thoughtRecord) {
				const lastValid = getLastValid(pathname, thoughtRecord)
				if (lastValid !== pathname) {
					navigate(lastValid)
				} else {
					setIsValidQuestion(true)
				}
			}
		}
	}, [isValidQuestion, navigate, pathname, thoughtRecord])

	useEffect(() => {
		const getThoughtRecord = async () => {
			if (!thoughtRecord) {
				if (isThoughtRecord(state)) {
					setThoughtRecord(state)
				} else {
					setThoughtRecord(await getActiveThoughtRecord())
				}
			}
		}
		if (!thoughtRecord) {
			getThoughtRecord()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onSubmit = async (data: FormValues) => {
		if (isQuestion(pathname)) {
			if (pathname === '/submit') {
				try {
					await saveThoughtRecord()
					navigate('/thoughtrecords')
				} catch (error) {
					if (error instanceof Error) {
						toast({
							status: 'error',
							description: 'problem submitting',
						})
					}
				}
			} else {
				const updateKey = pathname.slice(1)
				const activeThoughtRecord: string = isThoughtRecord(thoughtRecord)
					? thoughtRecord.key
					: ''
				const NextLinkIndex = question.indexOf(pathname) + 1
				try {
					const updatedRecord = await updateThoughtRecord(
						data,
						activeThoughtRecord,
						updateKey,
					)
					navigate(question[NextLinkIndex], { state: { ...updatedRecord } })
				} catch {
					toast({
						status: 'error',
						description: 'problem with update',
					})
				}
			}
		}
	}
	let label: string = ''
	let currentQuestion: string = ''
	if (isQuestion(pathname)) {
		label = thoughtRecordData[pathname].label
		currentQuestion = pathname.slice(1)
	}
	return {
		label: label,
		onSubmit: onSubmit,
		isSubmitting: isSubmitting,
		currentQuestion: currentQuestion,
		thoughtRecord: thoughtRecord,
		isValidQuestion: isValidQuestion,
	}
}
export default UseThoughtRecord
