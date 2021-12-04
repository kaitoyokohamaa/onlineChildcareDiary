import {VFC} from 'react';
import {Box} from '@chakra-ui/react';

import {useState, useEffect} from 'react';

import {PopoverDateForm} from '@/components/diary/register/popover-form/PopoverDateForm';
export const DiaryDateForm = ({...props}) => {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    setState(props.date);
  }, [props.date]);

  return (
    <Box>
      {!props.isTeacher ? (
        <PopoverDateForm isTeacher={true} state={state} {...props} />
      ) : (
        <PopoverDateForm isTeacher state={state} {...props} />
      )}
    </Box>
  );
};
