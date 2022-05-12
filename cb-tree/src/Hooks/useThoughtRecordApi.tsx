import { useState } from 'react'
import {
	thoughtRecordEndPoint,
	getAuthHeader,
	userEndPoint,
} from '../Utils/api'
import useAuth from './useAuth'
import { FormValues, ThoughtRecord, isThoughtRecord, User } from '../types'
/* returns a function that takes in the current path and active thought record 
to update and a piece of state that shows if the data is currently being fetched */

type FetchThoughtRecord = () => Promise<ThoughtRecord>

interface useThoughtRecordReturn {
	deleteThoughtRecord: (thoughtRecord: string) => Promise<string>
	getActiveThoughtRecord: FetchThoughtRecord
	getNewThoughtRecord: FetchThoughtRecord
	getAllThoughtRecords: () => Promise<ThoughtRecord[]>
	updateThoughtRecord: (
		data: FormValues,
		activeThoughtRecord: string,
		updateKey: string,
	) => Promise<ThoughtRecord>
	saveThoughtRecord: () => Promise<User>
	editThoughtRecord: (thoughtRecordId: string) => Promise<ThoughtRecord>
	isSubmitting: boolean
}

const useThoughtRecordApi = (): useThoughtRecordReturn => {
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

	const getActiveThoughtRecord = async (): Promise<ThoughtRecord> => {
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

	const getAllThoughtRecords = async (): Promise<ThoughtRecord[]> => {
		const options: RequestInit = {
			...authHeader,
		}
		return await handleFetch(`${thoughtRecordEndPoint}/all`, options)
	}

	const saveThoughtRecord = async (): Promise<User> => {
		const saveOptions: RequestInit = {
			headers: {
				...authHeader.headers,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}

		return await handleFetch(`${userEndPoint}/thoughtrecord`, saveOptions)
	}
	const deleteThoughtRecord = async (
		thoughtRecord: string,
	): Promise<string> => {
		const deleteOptions: RequestInit = {
			...authHeader,
			method: 'DELETE',
		}
		return await handleFetch(
			`${thoughtRecordEndPoint}/${thoughtRecord}`,
			deleteOptions,
		)
	}

	const editThoughtRecord = async (thoughtRecordId: string) => {
		const editOptions: RequestInit = {
			...authHeader,
			method: 'POST',
		}
		const thoughtRecord = await handleFetch(
			`${thoughtRecordEndPoint}/edit/${thoughtRecordId}`,
			editOptions,
		)
		if (isThoughtRecord(thoughtRecord)) {
			return thoughtRecord
		}
		throw Error('Invalid return')
	}
	const updateThoughtRecord = async (
		data: FormValues,
		activeThoughtRecord: string,
		updateKey: string,
	): Promise<ThoughtRecord> => {
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
		deleteThoughtRecord,
		getAllThoughtRecords,
		updateThoughtRecord,
		getActiveThoughtRecord,
		getNewThoughtRecord,
		isSubmitting,
		saveThoughtRecord,
		editThoughtRecord,
	}
}

export default useThoughtRecordApi
