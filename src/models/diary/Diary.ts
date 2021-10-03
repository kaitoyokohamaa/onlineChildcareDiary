export type Table = {
	table: {
		activitesAndAwareness: string
		assistance: string
		childActivities: string
		createdAt: Date
		date: Date
		id: string
		projectID: string
	}
}

export type DiaryTabelProps = {
	projectID: string
	setTrainingContent: React.Dispatch<React.SetStateAction<Table[]>>
	trainingContent: Table[]
}
export type DiaryFormProps = {
	isChildActivities?: boolean
	isAssistance?: boolean
	isActivitesAndAwareness?: boolean
	content: string
	id: string
}
