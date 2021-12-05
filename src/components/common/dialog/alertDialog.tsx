import React, {VFC} from 'react';
import {
  AlertDialogOverlay,
  AlertDialog,
  Button,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import {adminRegisterDetailRef} from '@/lib/firestore';
import {useRouter} from 'next/router';
type Props = {
  currentCheckedId: string;
  userKey: string | string[];
};
export const AlertDialogPop: VFC<Props> = ({currentCheckedId, userKey}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const onDeleteHandler = async () => {
    await adminRegisterDetailRef(String(userKey), currentCheckedId).delete();
    router.push(`/user/diary/${userKey}`);
    setIsOpen(false);
  };
  const cancelRef = React.useRef();

  return (
    <>
      <Button
        color="#555d65"
        border="1px solid #d9e0e8"
        background="#fff"
        onClick={() => setIsOpen(true)}>
        日誌を削除する
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              日誌を削除
            </AlertDialogHeader>

            <AlertDialogBody>本当に削除してよろしいですか？</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button colorScheme="red" onClick={onDeleteHandler} ml={3}>
                削除
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
