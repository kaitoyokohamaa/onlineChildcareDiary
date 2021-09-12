import { Flex, Text, Box } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
export const DiaryForm = ({ contents, setState }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div>
      {isEdit ? (
        <Flex>
          <Text whiteSpace="pre-wrap">{contents}</Text>
          <MdEdit onClick={() => setIsEdit(false)} />
        </Flex>
      ) : (
        <div>
          <Textarea
            rows={10}
            value={contents}
            onBlur={() => setIsEdit(true)}
            onChange={e => {
              setState(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};
