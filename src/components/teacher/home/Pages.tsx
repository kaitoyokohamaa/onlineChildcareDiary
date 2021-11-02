import {VFC} from 'react'
import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Input, Button, useToast} from '@chakra-ui/react'
import {MdLocalLibrary} from 'react-icons/md'
import Link from 'next/link'
import {Layout} from '@/components/common/layout'

export const Pages: VFC = () => {
  const toast = useToast()
  return (
    <Layout isTeacher>
      <Box px={16}></Box>
    </Layout>
  )
}
