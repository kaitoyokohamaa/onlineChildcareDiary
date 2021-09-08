import { Box, Flex, Text, Divider } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
export const DiaryTabel = () => {
  return (
    <Table border="2px">
      <Thead border="1px">
        <Tr>
          <Th>時間</Th>
          <Th>子供の活動</Th>
          <Th>指導者の援助環境構成</Th>
          <Th>実習生の活動気づき</Th>
        </Tr>
      </Thead>
      <Tbody border="2px">
        {[...Array(10)].map(() => {
          return (
            <Tr border="1px">
              <Td border="1px">9:00</Td>
              <Td border="1px">
                ○登園・自由遊び <br></br>・朝の支度をする。 <br></br>
                ・好きな遊びをする(飯事、鬼ごっこ、積み木、年度、等。)<br></br>
                ○自由遊び(ままごと)<br></br>
                ・キッチンやテーブルを並べておうちつくり、遊びを始める。
                <br></br>
                ・「今日は〇〇ちゃんの誕生日にしよう」と話している。<br></br>
                ・ゼリーカップをカップケーキに見立てて、誕生日ごっこする。
              </Td>
              <Td border="1px">
                ・環境を整えて、子ども達を迎え入れる。<br></br>
                ・おうちの場所を十分に確保し、クラス全体が見える場所で遊びを見守る。
                <br></br>
                ・飯事のルールやイメージが広がるように「遊びに使ってもいいよ」とゼリーのカップを渡す。
              </Td>
              <Td border="1px">
                ・廃材入れの中に入ってるものを確認する。<br></br>
                *カップやペーパー芯などを遊びに合わせてすぐに出せるように準備していた。
                <br></br>
                ・「おじゃまします」と声をかけて、ままごとの遊びに入る。
                <br></br>
                ・買い物に行く役を演じながら他の遊びの様子を観察する。<br></br>
                *遊びの雰囲気を壊さないように参加する。
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
