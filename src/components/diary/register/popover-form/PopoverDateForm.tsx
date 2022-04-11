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
} from '@chakra-ui/react';
import {EditIcon} from '@chakra-ui/icons';
import {useState, useRef, useEffect, useContext} from 'react';

import {Input} from '@chakra-ui/react';

import {tablesRef} from '@/lib/firestore';
import {AuthContext} from '@/contexts/AuthContext';

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
  );
};

export const PopoverDateForm = ({state, isTeacher, ...props}) => {
  const {onOpen, onClose, isOpen} = useDisclosure();

  const [date, setDate] = useState<string>(props.date);
  const {dockey} = useContext(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setDate(state);
  }, [state]);
  const firstFieldRef = useRef(null);

  const onSave = async () => {
    await tablesRef(dockey).doc(props.id).update({date});
    tablesRef(dockey)
      .orderBy('createdAt', 'asc')
      .onSnapshot((res) => {
        let diaries = [];
        res.forEach((item) => {
          if (item.data().projectID === props.projectID) {
            const id = item.id;
            diaries.push({tableID: id, tableData: item.data()});
          }
        });
        props.setTrainingContent(diaries);
      });
    onClose();
  };
  return (
    <>
      <Box display="block">
        <Text whiteSpace="pre-wrap">{date}</Text>
      </Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}>
        <PopoverTrigger>
          <IconButton
            onClick={() => setOpen(!open)}
            aria-label=""
            size="sm"
            icon={<EditIcon />}
          />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <Input
            value={date}
            onBlur={onSave}
            type="time"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <PopoverArrow />
          <PopoverCloseButton />
          <Form onCancel={onClose} onSave={onSave} />
        </PopoverContent>
      </Popover>
    </>
  );
};
