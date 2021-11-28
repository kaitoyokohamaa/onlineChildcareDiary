import {Box, Flex, Text} from '@chakra-ui/layout';

import Linkify from 'react-linkify';

const componentDecorator = (href: string, text: string, key: number) => (
  <a
    style={{
      color: '#273673',
    }}
    rel="noreferrer"
    href={href}
    key={key}
    target="_blank">
    {text}
  </a>
);
export const ChatText = ({isSender, text}) => {
  return (
    <>
      {isSender ? (
        <Flex justifyContent="flex-end">
          <Box bgColor="#56A9D3" color="#fff" p="3" mt="4" pointerEvents="none">
            <Linkify componentDecorator={componentDecorator}>
              <Text whiteSpace="pre-line">{text}</Text>
            </Linkify>
          </Box>
        </Flex>
      ) : (
        <Flex justifyContent="flex-start">
          <Box bgColor="#E9E9E9" p="3" mt="4">
            <Linkify componentDecorator={componentDecorator}>
              <Text whiteSpace="pre-line">{text}</Text>
            </Linkify>
          </Box>
        </Flex>
      )}
    </>
  );
};
