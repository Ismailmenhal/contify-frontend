import axios from 'axios'
import type ISignUp from 'types/ISignUp'

export default async function SignUpRequest(newAccount: ISignUp): Promise<any> {
	const response = await axios.post('/api/auth/signup', newAccount)
	return response.data
}
