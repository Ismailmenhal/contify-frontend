import type IContact from 'types/IContact'
import axiosInstance from './axiosToken'

export default async function getFavorites(): Promise<IContact[]> {
	const response = await axiosInstance.get('/api/contact/getAllFavorites')
	return response.data
}
