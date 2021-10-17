export type Table = {
  tableData?: {
    activitesAndAwareness?: string
    assistance?: string
    childActivitiesFeedback: string
    assistanceFeedback: string
    childActivities?: string
    activitesAndAwarenessFeedback: string
    createdAt?: Date
    date?: Date
    id?: string
    projectID?: string
  }
  tableID?: string
}
export type DiaryTabelProps = {
  projectID?: string
  setTrainingContent: React.Dispatch<React.SetStateAction<Table[]>>
  trainingContent: Table[]
  isTeacher?: boolean
}
export type DiaryFormProps = {
  isChildActivities?: boolean
  isAssistance?: boolean
  isActivitesAndAwareness?: boolean
  content: string
  id: string
  projectID?: string
  setTrainingContent?: React.Dispatch<React.SetStateAction<Table[]>>
  trainingContent?: Table[]
  isTeacher?: boolean
  dockey: string
  correctedContent: string
}
