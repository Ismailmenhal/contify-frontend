import type ITag from './ITag'

export default interface IContact {
	id: string
	fullName: string
	email: string
	phoneNumber: string
	address: string
	imagePath: string
	favorite: boolean
	tags: ITag[]
}
