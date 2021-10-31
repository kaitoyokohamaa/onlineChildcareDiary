import {
  Textarea,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
  Box,
  Stack,
  ButtonGroup,
  Button,
  Text,
} from '@chakra-ui/react'
import {EditIcon} from '@chakra-ui/icons'
import {useState, useRef, useEffect} from 'react'

import {tablesRef} from '@/lib/firestore'
const Form = ({onCancel, onSave}) => {
  return (
    <Stack spacing={4}>
      <ButtonGroup d="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onSave} colorScheme="teal">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export const PopoverForm = ({state, isTeacher, ...props}) => {
  const {onOpen, onClose, isOpen} = useDisclosure()
  const [text, setText] = useState<string>(props.correctedContent)
  const [studentText, setStudentText] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  useEffect(() => {
    setStudentText(state)
  }, [state])
  const firstFieldRef = useRef(null)

  const onSave = async () => {
    // teacherとuserでアップデートする箇所の変更
    props.isChildActivities && isTeacher
      ? await tablesRef(props.dockey)
          .doc(props.id)
          .update({childActivitiesFeedback: text})
      : props.isChildActivities
      ? await tablesRef(props.dockey)
          .doc(props.id)
          .update({childActivities: studentText})
      : null

    props.isAssistance && isTeacher
      ? await tablesRef(props.dockey)
          .doc(props.id)
          .update({assistanceFeedback: text})
      : props.isAssistance
      ? await tablesRef(props.dockey)
          .doc(props.id)
          .update({assistance: studentText})
      : null

    props.isActivitesAndAwareness && isTeacher
      ? await tablesRef(props.dockey)
          .doc(props.id)
          .update({activitesAndAwarenessFeedback: text})
      : props.isActivitesAndAwareness
      ? await tablesRef(props.dockey)
          .doc(props.id)
          .update({activitesAndAwareness: studentText})
      : null
    // dataのアップデート
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
    setOpen(false)
  }

  return (
    <>
      <Box display="block">
        <Text value={studentText} whiteSpace="pre-wrap">
          {studentText}
        </Text>
      </Box>
      <Box>
        <Text color={'red'} whiteSpace="pre-wrap">
          {text}
        </Text>
      </Box>
      <Popover
        isOpen={open}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton
            onClick={() => setOpen(!open)}
            aria-label=""
            size="sm"
            icon={<EditIcon />}
          />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <Textarea
            rows={10}
            value={isTeacher ? text : studentText}
            onChange={(e) => {
              isTeacher
                ? setText(e.target.value)
                : setStudentText(e.target.value)
            }}
          />

          <PopoverArrow />
          <PopoverCloseButton />
          <Form onCancel={onClose} onSave={onSave} />
        </PopoverContent>
      </Popover>
    </>
  )
}
