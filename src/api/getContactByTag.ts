import type IContact from 'types/IContact'
import axiosInstance from './axiosToken'

export default async function getContactByTag({
	queryKey
}): Promise<IContact[]> {
	const [_, id] = queryKey
	const response = await axiosInstance.get(
		`/api/contact/getContactsByTag/${id}`
	)
	return response.data
}
