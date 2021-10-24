import {Textarea} from '@chakra-ui/react'
import ResizeTextarea from 'react-textarea-autosize'
import React from 'react'
type Props = {
  text: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
export const AutoResizeTextarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({...props}, ref) => {
    return (
      <Textarea
        minH="unset"
        overflow="hidden"
        w="100%"
        resize="none"
        ref={ref}
        minRows={1}
        as={ResizeTextarea}
        value={props['text']}
        {...props}
      />
    )
  }
)
AutoResizeTextarea.displayName = 'AutoResizeTextarea'
