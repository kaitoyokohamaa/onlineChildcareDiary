import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { DiaryForm } from "./diaryForm";
import { DiaryDateForm } from "./diaryDateForm";

export const DiaryTabel = ({
  rows,
  setDate,
  setChildActivities,
  setAssistance,
  setActivitesAndAwareness,
  date,
  childActivities,
  assistance,
  activitesAndAwareness,
}) => {
  console.log(assistance);
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
      {rows?.map(res => {
        return (
          <Tbody border="2px">
            <Tr>
              <Td border="1px" w="9">
                <DiaryDateForm setDate={setDate} date={date} />
              </Td>
              <Td border="1px">
                <DiaryForm
                  setState={setChildActivities}
                  contents={childActivities}
                />
              </Td>
              <Td border="1px">
                <DiaryForm setState={setAssistance} contents={assistance} />
              </Td>
              <Td border="1px">
                <DiaryForm
                  setState={setActivitesAndAwareness}
                  contents={activitesAndAwareness}
                />
              </Td>
            </Tr>
          </Tbody>
        );
      })}
    </Table>
  );
};
