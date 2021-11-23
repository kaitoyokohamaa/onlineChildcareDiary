import {VFC} from 'react';
import GenShinNormal from '@/fonts/GenShinGothic-Normal.ttf';
import {
  Document,
  Page,
  View,
  StyleSheet,
  Text,
  Font,
  PDFViewer,
} from '@react-pdf/renderer';
import {DetailDiary} from '@/models/diary/register';
const styles = StyleSheet.create({
  page: {
    width: '100%',
    backgroundColor: '#fff',
    fontFamily: '源真ゴシック',
    margin: 10,
    padding: 10,
    display: 'flex',
    fontSize: '12px',
  },
  wrapper: {
    width: '96%',
    border: '1px',
    marginTop: '20',
  },
  section: {
    flexDirection: 'row',
  },
  dayContainer: {
    width: '80%',
    border: 1,
    borderLeft: 0,
    borderTop: 0,
    borderRightWidth: 0,
    textAlign: 'center',
    paddingVertical: 4,
  },
  content: {
    width: '40%',
    border: 1,
    borderTop: 0,
    borderRightWidth: 0,
    textAlign: 'left',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  leader: {
    width: '40%',
    border: 1,
    borderRightWidth: 0,
    borderTop: 0,
    textAlign: 'left',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  name: {
    width: '40%',
    border: 1,
    borderTop: 0,
    borderRightWidth: 0,
    textAlign: 'center',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  children: {
    width: '40%',
    border: 1,
    borderColo: 'black',
    borderLeft: 0,
    borderTop: 0,
    borderRightWidth: 0,
    textAlign: 'center',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  assignedTeameTitle: {
    width: '21%',
    borderLeft: 0,
    borderBottom: 1,
    paddingVertical: 4,
    textAlign: 'center',
  },
  assignedTeameContent: {
    width: '59.5%',
    borderLeft: 1,
    borderBottom: 1,
    border: 1,
    borderTop: 0,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  aimTitle: {
    width: '15%',
    borderLeft: 0,
    borderBottom: 0,
    borderRight: 0,
    paddingVertical: 4,
    textAlign: 'center',
  },
  aimContent: {
    width: '100%',
    border: 1,
    borderTop: 0,
    borderRight: 0,
    borderBottom: 0,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  pdfWrapper: {
    margin: 'auto',
    padding: '10px',
  },
  impressions: {
    padding: 10,
    width: '100%',
    border: 1,
    borderLeft: 0,
    borderBottom: 0,
    borderRightWidth: 0,
    paddingVertical: 6,
  },
  dodText: {
    backgroundImage:
      'linearGradient(180deg, #ccc 1px, transparent 1px)' /* 罫線の色と太さ */,
    backgroundSize: '100% 3em' /* 行の高さ */,
    lineHeight: '3em' /* 文字の高さ */,
    paddingBottom: '1px' /* 最終行の下にも罫線を引く */,
    borderBottom: 'dotted 1px solid',
  },
  // table
  table: {
    width: '100%',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  dayTableCol: {
    width: '10%',
    borderStyle: 'solid',
    whiteSpace: 'pre-wrap',
    border: 1,
    borderRightWidth: 0,
    borderTopWidth: 1,
    borderBottom: 1,
    borderLeft: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  dayTableContentCol: {
    width: '10%',
    borderStyle: 'solid',
    whiteSpace: 'pre-wrap',

    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  tableCol: {
    width: '30%',
    borderStyle: 'solid',
    whiteSpace: 'pre-wrap',
    border: 1,
    borderRightWidth: 0,
    borderTopWidth: 1,
    borderBottom: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  tableContentCol: {
    width: '30%',
    borderStyle: 'solid',
    whiteSpace: 'pre-wrap',
    border: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottom: 0,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  textWrapper: {
    whiteSpace: 'pew-line',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  correct: {
    color: 'red',
  },
});
const Pages: VFC<{detailDiary: DetailDiary}> = ({detailDiary}) => {
  Font.register({
    family: '源真ゴシック',
    fonts: [
      {
        src: GenShinNormal,
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
    ],
  });
  Font.registerHyphenationCallback((word) =>
    word.length === 1 ? [word] : Array.from(word).map((char) => char),
  );

  return (
    <Document title="実習日誌の記録">
      <Page size="A4" style={styles.page}>
        <View>
          <Text>実習記録(第1日目)</Text>
          <Text>東洋大学</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.section}>
            <View style={styles.dayContainer}>
              <Text>9月23日目曜日</Text>
            </View>
            <View style={styles.name}>
              <Text>実習生氏名</Text>
            </View>
            <View style={styles.content}>
              <Text>{detailDiary?.studentName}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.assignedTeameTitle}>
              <Text>配属先</Text>
            </View>
            <View style={styles.assignedTeameContent}>
              <Text>{detailDiary?.assignedName}</Text>
            </View>
            <View style={styles.children}>
              <Text>指導者氏名</Text>
            </View>
            <View style={styles.leader}>
              <Text>{detailDiary?.leader}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.aimTitle}>
              <Text>本日の目標</Text>
            </View>
            <View style={styles.aimContent}>
              <Text>{detailDiary?.goal}</Text>
            </View>
          </View>

          {/* 実習内容 */}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.dayTableCol}>
                <Text>時間</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{`入所児・利用者の 
                  生活の様子`}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>職員の対応</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>実習生としての対応</Text>
              </View>
            </View>
            {/* tableの中身 */}
            {detailDiary?.trainingContent.map((res, i) => {
              return (
                <View key={i} style={styles.tableRow}>
                  <View style={styles.dayTableContentCol}>
                    <Text>{res.tableData.date}</Text>
                  </View>
                  <View style={styles.tableContentCol}>
                    <View style={styles.textWrapper}>
                      <Text key={i}>{res.tableData.childActivities}</Text>
                    </View>
                    <View style={styles.textWrapper}>
                      <Text style={styles.correct} key={i}>
                        {res.tableData.childActivitiesFeedback}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableContentCol}>
                    <View style={styles.textWrapper}>
                      <Text>{`${res.tableData.assistance}`}</Text>
                    </View>
                    <View style={styles.textWrapper}>
                      {res.tableData.assistanceFeedback &&
                        Array.from(res.tableData.assistanceFeedback).map(
                          (char, i) => (
                            <Text style={styles.correct} key={i}>
                              {char}
                            </Text>
                          ),
                        )}
                    </View>
                  </View>

                  <View style={styles.tableContentCol}>
                    <View style={styles.textWrapper}>
                      <Text s>{res.tableData.activitesAndAwareness}</Text>
                    </View>
                    <View style={styles.textWrapper}>
                      <Text style={styles.correct} key={i}>
                        {res.tableData.activitesAndAwarenessFeedback}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
            <View style={styles.section}>
              <View style={styles.impressions}>
                <Text>
                  実習所感（特に印象に残ったこと、考察、課題、反省など）
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.impressions}>
                <View style={styles.textWrapper}>
                  {detailDiary?.feeling &&
                    Array.from(detailDiary?.feeling).map((char, i) => (
                      <Text key={i}>{char}</Text>
                    ))}
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.impressions}>
                <Text>指導者からのことば</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.impressions}>
                <View style={styles.textWrapper}>
                  {detailDiary?.feedback ? (
                    Array.from(detailDiary?.feedback).map((char, i) => (
                      <View key={i}>
                        <Text>{char}</Text>
                      </View>
                    ))
                  ) : (
                    <Text>指導者からのことばをいただきましょう。</Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export const Pdf: VFC<{detailDiary: DetailDiary}> = ({detailDiary}) => {
  return (
    <PDFViewer width="80%" height="642" style={styles.pdfWrapper}>
      <Pages detailDiary={detailDiary} />
    </PDFViewer>
  );
};
