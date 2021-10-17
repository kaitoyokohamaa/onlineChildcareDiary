import {Flex, Text, Box} from '@chakra-ui/layout'
import {Input} from '@chakra-ui/react'
import {useState, useContext} from 'react'
import {MdEdit} from 'react-icons/md'
import {tablesRef} from '@/lib/firestore'
import {AuthContext} from '@/contexts/AuthContext'
export const DiaryDateForm = ({...props}) => {
  const [isEdit, setIsEdit] = useState<boolean>(true)
  const [date, setDate] = useState<string>(props.date)
  const {dockey} = useContext(AuthContext)
  let diaries = []
  const onSave = async () => {
    setIsEdit(true)
    await tablesRef(dockey).doc(props.id).update({date})
    tablesRef(dockey)
      .orderBy('createdAt', 'asc')
      .onSnapshot((res) => {
        res.forEach((item) => {
          if (item.data().projectID === props.projectID) {
            const id = item.id
            diaries.push({tableID: id, tableData: item.data()})
          }
        })
      })
    props.setTrainingContent(diaries)
  }

  return (
    <Box>
      {isEdit ? (
        <Flex>
          <Text value={date} whiteSpace="pre-wrap">
            {date}
          </Text>
          {!props.isTeacher && <MdEdit onClick={() => setIsEdit(false)} />}
        </Flex>
      ) : (
        <Box w="100%">
          <Input
            value={date}
            onBlur={onSave}
            type="time"
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />
        </Box>
      )}
    </Box>
  )
}
