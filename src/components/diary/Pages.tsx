import { useRouter } from 'next/router';
import { VFC, useState } from 'react';
import { MdLocalLibrary } from 'react-icons/md';
import { Box, Flex, Text, Divider, Stack } from '@chakra-ui/layout';
import HighchartsReact from 'highcharts-react-official';
import { useCollection } from '@nandorojo/swr-firestore';
import { Line } from "react-chartjs-2";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  useToast,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AlertDialogPop } from '@/components/common/dialog/alertDialog';
import { Register, DetailDiary } from '@/models/diary/register';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Layout } from '@/components/common/layout';
import { MdContentCopy } from 'react-icons/md';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export const Pages: VFC<{ diary: Register }> = ({ diary }) => {
  const labels = ["10:00", "12:00", "14:00", "16:00", "18:00"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "横浜海斗",
        data: [65, 59, 60, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "阿部寛",
        data: [60, 55, 57, 61, 75, 50],
        borderColor: "rgb(75, 100, 192)",
      },
      {
        label: "山田花子",
        data: [70, 65, 77, 61, 95, 50],
        borderColor: "red",
      },
      {
        label: "namiki",
        data: [80, 65, 57, 56, 85, 60],
        borderColor: "black",
      },
    ],
  };

  const options: {} = {
    maintainAspectRatio: false,
  };


  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [currentCheckedId, setCurrentCheckedId] = useState<string>('');
  const toast = useToast();

  const router = useRouter();
  const userKey = router.query.diary;
  const onClickHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    if (e.target.checked) {
      setIsClicked(true);
      setCurrentCheckedId(id);
    } else {
      setIsClicked(false);
      setCurrentCheckedId('');
    }
  };

  const { data: diaryData } = useCollection<DetailDiary>(
    `User/${userKey}/register/`,
    {
      listen: true,
      orderBy: ['createdAt', 'asc'],
      initialData: diary,
    },
  );

  return (
    <Layout>
      <Box px={16} h="85vh" overflow="scroll">
        <Box>
          <Flex alignItems="center">
            <Text ml="7" fontWeight="bold">
              本日の社員ストレスグラフ
            </Text>
          </Flex>
        </Box>
        <Line
          height={300}
          width={300}
          data={graphData}
          options={options}
          id="chart-key"
        />
      </Box>

    </Layout>
  );
};
