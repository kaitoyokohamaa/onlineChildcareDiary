import {Table} from '@/models/diary'
export type Register = {
  diaryData: {
    feeling: string
    trainingContent: [Table]
    assignedName: string
    count: string
    studentName: string
    goal: string
    day: string
    leader: string
  }
  id: string
}[]

export type DetailDiary = {
  feeling: string
  trainingContent: Table[]
  assignedName: string
  count: string
  studentName: string
  goal: string
  day: string
  leader: string
}

export type isUserDetailDiary = {
  detailDiary: DetailDiary
}
