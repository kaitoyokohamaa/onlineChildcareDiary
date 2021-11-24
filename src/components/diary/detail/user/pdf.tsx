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
});
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

export const Pdf = () => {
  return (
    <PDFViewer width="80%" height="642">
      <Document title="実習日誌の記録">
        <Page size="A4" style={styles.page}>
          <View>
            <Text>Section #1</Text>
          </View>
          <View>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
