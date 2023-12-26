import type IContact from 'types/IContact'
import axiosInstance from './axiosToken'

export default async function getContacts(): Promise<IContact[]> {
	const response = await axiosInstance.get('/api/contact/getAllContacts')
	return response.data
}
