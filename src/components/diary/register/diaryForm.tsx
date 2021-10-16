import {VFC, useEffect} from 'react'
import {Flex, Text} from '@chakra-ui/layout'
import {Textarea} from '@chakra-ui/react'
import {useState, useContext} from 'react'
import {MdEdit} from 'react-icons/md'
import {tablesRef} from '@/lib/firestore'
import {AuthContext} from '@/contexts/AuthContext'
import {DiaryFormProps} from '@/models/diary'
export const DiaryForm: VFC<DiaryFormProps> = ({...props}) => {
  const [isEdit, setIsEdit] = useState<boolean>(true)
  const [state, setState] = useState<string>(props.content)
  const {dockey} = useContext(AuthContext)
  let diaries = []
  const onSave = async () => {
    setIsEdit(true)
    props.isChildActivities &&
      (await tablesRef(dockey).doc(props.id).update({childActivities: state}))
    props.isAssistance &&
      (await tablesRef(dockey).doc(props.id).update({assistance: state}))
    props.isActivitesAndAwareness &&
      (await tablesRef(dockey)
        .doc(props.id)
        .update({activitesAndAwareness: state}))

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
    <>
      {isEdit ? (
        <Flex>
          <Text whiteSpace="pre-wrap">{state}</Text>
          {!props.isTeacher && <MdEdit onClick={() => setIsEdit(false)} />}
        </Flex>
      ) : (
        <div>
          <Textarea
            rows={10}
            value={state}
            onBlur={onSave}
            onChange={(e) => {
              setState(e.target.value)
            }}
          />
        </div>
      )}
    </>
  )
}
