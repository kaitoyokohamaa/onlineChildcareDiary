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
import {Introspection} from '@/models/diary/introspection';
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
});
const Pages: VFC<{introspection: Introspection}> = ({introspection}) => {
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

  return (
    <Document title="反省会の記録">
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>反省会の記録</Text>
            <Text style={styles.text}>{introspection.introspection}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export const Pdf: VFC<{introspection: Introspection}> = ({introspection}) => {
  return (
    <PDFViewer width="80%" height="642">
      <Pages introspection={introspection} />
    </PDFViewer>
  );
};
