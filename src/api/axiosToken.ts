import axios from 'axios'

const axiosInstance = axios.create({
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
})
// Add a response interceptor
axiosInstance.interceptors.response.use(
	response => response,
	async error => {
		console.log(error)
		if (error.response.status === 401) {
			setTimeout(() => {
				window.location.href = '/login'
			})
		}
		throw error
	}
)

export default axiosInstance
