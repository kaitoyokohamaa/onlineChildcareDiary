import {VFC} from 'react'
import GenShinNormal from '@/fonts/GenShinGothic-Normal.ttf'
import {
  Document,
  Page,
  View,
  StyleSheet,
  Text,
  Font,
  PDFViewer,
} from '@react-pdf/renderer'
import {DetailDiary} from '@/models/diary/register'
const styles = StyleSheet.create({
  page: {
    width: '100%',
    backgroundColor: '#fff',
    fontFamily: '源真ゴシック',
    display: 'flex',
    fontSize: '12px',
  },
  container: {
    display: 'flex',
    border: '1px',
    margin: '10px',
  },
  title: {
    border: '1px',
    padding: '10px',
  },
  text: {
    border: '1px',
    padding: '10px',
  },
})
const Pages = ({summary}) => {
  Font.register({
    family: '源真ゴシック',
    fonts: [
      {
        src: GenShinNormal,
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
    ],
  })

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>実習のまとめ</Text>
        </View>
        <View>
          <Text>東洋大学ライフデザイン学部</Text>
          <Text>氏名</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>1. 実習目標とその達成度</Text>
            <Text style={styles.text}>{summary.goalAndAchievement}</Text>
          </View>
          <View>
            <Text style={styles.title}>2. 実習で感銘を受けた体験</Text>
            <Text style={styles.text}>{summary.experience}</Text>
          </View>
          <View>
            <Text style={styles.title}>
              3. 実習の反省および新しく発見した課題
            </Text>
            <Text style={styles.text}>{summary.reflection}</Text>
          </View>
          <View>
            <Text style={styles.title}>4. その他気づいたこと</Text>
            <Text style={styles.text}>{summary.notice}</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}
export const Pdf = ({summary}) => {
  return (
    <PDFViewer width="80%" height="642">
      <Pages summary={summary} />
    </PDFViewer>
  )
}
