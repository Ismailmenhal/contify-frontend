import type ITag from 'types/ITag'
import axiosInstance from './axiosToken'

export default async function getTags(): Promise<ITag[]> {
	const response = await axiosInstance.get('/api/tag/getAllTags')
	return response.data
}
