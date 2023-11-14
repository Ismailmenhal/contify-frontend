import { Box, Typography } from '@mui/material'
import type { ReactElement } from 'react'

export default function AllPeople(): ReactElement {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start'
			}}
		>
			<Typography
				variant='h4'
				style={{
					fontWeight: 'bold',
					fontFamily: 'system-ui',
					color: '#494848',
					mb: 4 // Add margin-bottom for spacing
				}}
			>
				Contacts
			</Typography>
			{/* Rest of your AllPeople component content */}
		</Box>
	)
}
