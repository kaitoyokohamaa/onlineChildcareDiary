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
  Text
} from '@chakra-ui/react'
import {EditIcon} from '@chakra-ui/icons'
import {useState, useContext, useRef, forwardRef} from 'react'
import FocusLock from 'react-focus-lock'
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

export const PopoverForm = ({state, ...props}) => {
  const {onOpen, onClose, isOpen} = useDisclosure()
  const [text, setText] = useState<string>('')
  const firstFieldRef = useRef(null)
  let diaries = []
  const onSave = async () => {
    props.isChildActivities &&
      (await tablesRef(props.dockey)
        .doc(props.id)
        .update({childActivitiesFeedback: text}))
    props.isAssistance &&
      (await tablesRef(props.dockey)
        .doc(props.id)
        .update({assistanceFeedback: text}))
    props.isActivitesAndAwareness &&
      (await tablesRef(props.dockey)
        .doc(props.id)
        .update({activitesAndAwarenessFeedback: text}))

    tablesRef(props.dockey)
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
      <Box display="block">
        <Text whiteSpace="pre-wrap">{state}</Text>
      </Box>
      <Box>
        <Text color="red" whiteSpace="pre-wrap">
          {text}
        </Text>
      </Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton aria-label="" size="sm" icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <Textarea
            rows={10}
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form onCancel={onClose} onSave={onSave} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}
