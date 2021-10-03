export type User = {
	address: string
	birthday: string
	cellphoneNumber: string
	dispayImage: string
	name: string
	practicalTraining: string
	selfIntroduction: string
	sex: string
	uid: string[]
}

export type EditUser = {
	user: User
	id: string
}
