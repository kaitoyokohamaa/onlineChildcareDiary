import {VFC} from 'react'
import GenShinNormal from '@/fonts/GenShinGothic-Normal.ttf'

import {
  Document,
  Page,
  View,
  StyleSheet,
  Text,
  Font,
  PDFViewer
} from '@react-pdf/renderer'
import {DetailDiary} from '@/models/diary/register'
const styles = StyleSheet.create({
  page: {
    width: '100%',
    backgroundColor: '#fff',
    fontFamily: '源真ゴシック',
    margin: 10,
    padding: 10,
    display: 'flex',
    fontSize: '12px'
  },
  wrapper: {
    width: '96%',
    border: '1px',
    borderLeft: 0,
    marginTop: '20'
  },
  section: {
    flexDirection: 'row'
  },
  children: {
    width: '100%',
    borderWidth: 1,
    borderRightWidth: 0,
    padding: '10 50'
  },
  aimContent: {
    width: '100%',
    borderLeft: 1,
    borderBottom: 0
  },
  pdfWrapper: {
    margin: 'auto',
    padding: '10px'
  },
  impressions: {
    width: '100%',
    borderWidth: 1,
    borderRightWidth: 0
  },
  // table
  table: {
    width: '100%'
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row'
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    whiteSpace: 'pre-wrap',
    border: 1,
    borderRightWidth: 0,
    borderTopWidth: 1,
    borderBottom: 0
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10
  },
  correct: {
    color: 'red'
  }
})
const Pages: VFC<{detailDiary: DetailDiary}> = ({detailDiary}) => {
  Font.register({
    family: '源真ゴシック',
    fonts: [
      {
        src: GenShinNormal,
        fontStyle: 'normal',
        fontWeight: 'normal'
      }
    ]
  })

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>実習記録(第1日目)</Text>
          <Text>東洋大学</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.section}>
            <View style={styles.children}>
              <Text>9月23日目曜日</Text>
            </View>
            <View style={styles.children}>
              <Text>実習生氏名</Text>
            </View>
            <View style={styles.children}>
              <Text>{detailDiary.studentName}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.children}>
              <Text>配属先</Text>
            </View>
            <View style={styles.children}>
              <Text>{detailDiary.assignedName}</Text>
            </View>
            <View style={styles.children}>
              <Text>指導者氏名</Text>
            </View>
            <View style={styles.children}>
              <Text>{detailDiary.leader}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.aimContent}>
              <Text>本日の目標</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.aimContent}>
              <Text>{detailDiary.goal}</Text>
            </View>
          </View>
          {/* 実習内容 */}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>時間</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>入所児・利用者の 生活の様子</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>職員の対応</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>実習生としての対応</Text>
              </View>
            </View>
            {/* tableの中身 */}
            {detailDiary.trainingContent.map((res, i) => {
              return (
                <View key={i} style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text>{res.tableData.date}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.tableData.childActivities}</Text>
                    <Text style={styles.correct}>
                      {res.tableData.childActivitiesFeedback &&
                        res.tableData.childActivitiesFeedback}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.tableData.activitesAndAwareness}</Text>
                    <Text style={styles.correct}>
                      {res.tableData.activitesAndAwarenessFeedback &&
                        res.tableData.activitesAndAwarenessFeedback}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.tableData.assistance}</Text>
                    <Text style={styles.correct}>
                      {res.tableData.assistanceFeedback &&
                        res.tableData.assistanceFeedback}
                    </Text>
                  </View>
                </View>
              )
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
                <Text>{detailDiary.feeling}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.impressions}>
                <Text>指導者からのことば</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.impressions}>
                <Text>
                  {detailDiary.feedback
                    ? detailDiary.feedback
                    : 'リンクを保育士に共有して添削と指導者からのことばを書いてもらいましょう。'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
export const Pdf: VFC<{detailDiary: DetailDiary}> = ({detailDiary}) => {
  return (
    <PDFViewer width="80%" height="642" style={styles.pdfWrapper}>
      <Pages detailDiary={detailDiary} />
    </PDFViewer>
  )
}
