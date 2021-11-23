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
    display: 'flex',
    fontSize: '12px',
  },
  topTitle: {
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 10,
    borderBottom: '1px',
    marginHorizontal: 10,
  },
  topTitleBorder: {
    borderBottom: '1px',
    marginHorizontal: 250,
  },
  student: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  name: {
    marginHorizontal: 10,
  },
  container: {
    display: 'flex',
    border: '1px',
    borderTop: 0,
    margin: '10px',
  },
  title: {
    borderBottom: '1px',
    borderTop: '1px',
    padding: '10px',
  },
  text: {
    padding: '10px',
    textAlign: 'justify',
  },
});
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
  });
  Font.registerHyphenationCallback((word) => {
    // Return entire word as unique part
    return [word];
  });
  return (
    <Document title="実習のまとめ">
      <Page size="A4" style={styles.page}>
        <View style={styles.topTitle}>
          <Text style={styles.topTitleBorder}>実習のまとめ</Text>
        </View>
        <View style={styles.student}>
          <Text>東洋大学ライフデザイン学部</Text>
          <Text style={styles.name}>氏名:{summary.displayName}</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>1. 実習目標とその達成度</Text>
            <Text style={styles.text}>{summary.goalAndAchievement}</Text>
          </View>
          <View>
            <Text style={styles.title}>2. 実習で感銘を受けた体験</Text>
            <Text wrap={true} style={styles.text}>
              {summary.experience}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              3. 実習の反省および新しく発見した課題
            </Text>
            <Text wrap={true} style={styles.text}>
              {summary.reflection.replace('-', '')}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>4. その他気づいたこと</Text>
            <Text style={styles.text}>{summary.notice}</Text>
          </View>
          <View>
            <Text style={styles.title}>5. 実習指導者からのコメント</Text>
            <Text style={styles.text}>
              {summary.comment
                ? summary.comment
                : '実習指導者からのコメントをもらいましょう'}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export const Pdf = ({summary}) => {
  return (
    <PDFViewer width="80%" height="642">
      <Pages summary={summary} />
    </PDFViewer>
  );
};
