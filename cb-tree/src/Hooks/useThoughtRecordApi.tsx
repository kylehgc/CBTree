import { useState } from 'react'
import {
	thoughtRecordEndPoint,
	getAuthHeader,
	userEndPoint,
} from '../utils/api'
import useAuth, { Token } from './useAuth'
import { FormValues, ThoughtRecord, isThoughtRecord } from '../Components/types'
/* returns a function that takes in the current path and active thought record 
to update and a piece of state that shows if the data is currently being fetched */

export const useThoughtRecordApi = () => {
	const { logout } = useAuth()
	const authHeader = getAuthHeader()
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleFetch = async (endPoint: string, fetchOptions: RequestInit) => {
		if (isSubmitting) {
			return
		}
		await setIsSubmitting(true)
		const response = await fetch(endPoint, fetchOptions)
		if (response.ok) {
			const data = await response.json()
			setIsSubmitting(false)
			return data
		}
		if (response.status === 401 || 403) {
			logout()
		} else throw Error(response.statusText)
	}

	const getActiveThoughtRecord = async (
		token: Token,
	): Promise<ThoughtRecord> => {
		const data = await handleFetch(thoughtRecordEndPoint, authHeader)
		if (isThoughtRecord(data)) {
			return data
		}
		throw Error('not a thought record')
	}
	const getNewThoughtRecord = async (): Promise<ThoughtRecord> => {
		const options = { method: 'POST', ...authHeader }
		const thoughtRecord = await handleFetch(thoughtRecordEndPoint, options)

		if (isThoughtRecord(thoughtRecord)) {
			return thoughtRecord
		} else {
			throw Error('response isnt valid')
		}
	}

	const saveThoughtRecord = async () => {
		const saveOptions: RequestInit = {
			headers: {
				...getAuthHeader().headers,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}

		return await handleFetch(`${userEndPoint}/thoughtrecord`, saveOptions)
	}

	const updateThoughtRecord = async (
		data: FormValues,
		activeThoughtRecord: string,
		updateKey: string,
	) => {
		const updateOptions: RequestInit = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...authHeader.headers,
			},
			method: 'PATCH',
		}
		updateOptions.body = JSON.stringify({ [updateKey]: data })
		return await handleFetch(
			`${thoughtRecordEndPoint}/${activeThoughtRecord}`,
			updateOptions,
		)
	}
	return {
		updateThoughtRecord,
		getActiveThoughtRecord,
		getNewThoughtRecord,
		isSubmitting,
		saveThoughtRecord,
	}
}
