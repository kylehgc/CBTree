import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ThoughtRecord } from './types'
import ThoughtRecordTable from './ThoughtRecordTable'

const Profile = () => {
	return (
		<>
			<ThoughtRecordTable />
		</>
	)
}

export default Profile
