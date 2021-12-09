import {VFC} from 'react';
import {Box} from '@chakra-ui/react';

import {useState, useEffect} from 'react';

import {DiaryFormProps} from '@/models/diary';
import {PopoverForm} from '@/components/diary/register/popover-form';
export const DiaryForm: VFC<DiaryFormProps> = ({...props}) => {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    setState(props.content);
  }, [props.content]);

  return (
    <Box wordBreak="break-all">
      {!props.isTeacher ? (
        <PopoverForm isTeacher={true} state={state} {...props} />
      ) : (
        <PopoverForm isTeacher state={state} {...props} />
      )}
    </Box>
  );
};
