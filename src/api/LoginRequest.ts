import axios from 'axios'
import type ISignIn from 'types/ISignIn'

export default async function LoginRequest(signin: ISignIn): Promise<any> {
	const response = await axios.post('/api/auth/signin', signin)
	return response.data
}
