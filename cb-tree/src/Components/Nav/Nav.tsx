import logo from '../../media/logo.png'
import {
	Link,
	Center,
	Image,
	useColorMode,
	HStack,
	IconButton,
} from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import UseThemeColors from '../../Hooks/useThemeColors'
import useAuth from '../../Hooks/useAuth'
import { Suspense, useEffect, useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import React from 'react'

export default function Nav() {
	const { backgroundColor, foregroundColor } = UseThemeColors()
	const { colorMode, toggleColorMode } = useColorMode()
	const { currentUser } = useAuth()
	const [displayName, setDisplayName] = useState<string | null>(null)
	const LoggedInNav = React.lazy(() => import('./LoggedInNav'))
	useEffect(() => {
		if (currentUser) {
			if (currentUser?.firstName) {
				setDisplayName(currentUser.firstName)
			} else {
				setDisplayName(currentUser.username)
			}
		} else {
			setDisplayName(null)
		}
	}, [currentUser])

	return (
		<Center flexDir={{ base: 'row' }} m={2}>
			<Image
				w={{ base: '50%', lg: '40%' }}
				p={2}
				pt={4}
				ml={0}
				fit={'fill'}
				src={logo}
			/>
			<HStack
				mr={{ lg: 7 }}
				mt={{ lg: 4 }}
				spacing={{ base: 6, lg: 4 }}
				justifyContent={{ base: 'center', lg: 'end' }}
				bg={backgroundColor}
				h={'100%'}
				pt={{ base: 3, lg: 0 }}
				pb={{ lg: 2 }}
				w={'100%'}
			>
				<IconButton
					aria-label="Light and dark Switch"
					color={foregroundColor}
					bg={backgroundColor}
					size="lg"
					_hover={{ background: backgroundColor }}
					_active={{ background: backgroundColor }}
					icon={
						colorMode === 'light' ? <MoonIcon /> : <SunIcon color={'white'} />
					}
					onClick={toggleColorMode}
				/>
				{displayName ? (
					<Suspense fallback={null}>
						<LoggedInNav displayName={displayName} />
					</Suspense>
				) : (
					<Link fontSize={15} color={'white'} to={'/'} as={ReactRouterLink}>
						Login
					</Link>
				)}
			</HStack>
		</Center>
	)
}
