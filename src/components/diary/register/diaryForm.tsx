import {VFC} from 'react'
import {Flex, Text} from '@chakra-ui/layout'
import {Textarea, Box} from '@chakra-ui/react'

import {useState} from 'react'
import {MdEdit} from 'react-icons/md'
import {tablesRef} from '@/lib/firestore'

import {DiaryFormProps} from '@/models/diary'
import {PopoverForm} from '@/components/common/popover-form'
export const DiaryForm: VFC<DiaryFormProps> = ({...props}) => {
  const [isEdit, setIsEdit] = useState<boolean>(true)
  const [state, setState] = useState<string>(props.content)

  const CustomWrapper = ({children}) =>
    props.isTeacher ? <Box>{children}</Box> : <Flex>{children}</Flex>

  const onSave = async () => {
    setIsEdit(true)
    props.isChildActivities &&
      (await tablesRef(props.dockey)
        .doc(props.id)
        .update({childActivities: state}))
    props.isAssistance &&
      (await tablesRef(props.dockey).doc(props.id).update({assistance: state}))
    props.isActivitesAndAwareness &&
      (await tablesRef(props.dockey)
        .doc(props.id)
        .update({activitesAndAwareness: state}))

    tablesRef(props.dockey)
      .orderBy('createdAt', 'asc')
      .onSnapshot((res) => {
        let diaries = []
        res.forEach((item) => {
          if (item.data().projectID === props.projectID) {
            const id = item.id
            diaries.push({tableID: id, tableData: item.data()})
          }
        })
        props.setTrainingContent(diaries)
      })
  }

  return (
    <>
      {isEdit ? (
        <CustomWrapper>
          {!props.isTeacher && <Text whiteSpace="pre-wrap">{state}</Text>}
          <>
            {!props.isTeacher ? (
              <MdEdit onClick={() => setIsEdit(false)} />
            ) : (
              <PopoverForm state={state} {...props} />
            )}
          </>
        </CustomWrapper>
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
