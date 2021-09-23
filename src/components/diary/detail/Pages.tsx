import {VFC} from 'react'
import GenShinNormal from '../../../fonts/GenShinGothic-Normal.ttf'
import {PDFViewer} from '@react-pdf/renderer'
import {Document, Page, View, StyleSheet, Text, Font} from '@react-pdf/renderer'

const Pages: VFC = () => {
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
	const styles = StyleSheet.create({
		page: {
			flexDirection: 'row',
			backgroundColor: '#E4E4E4',
			fontFamily: '源真ゴシック'
		},
		section: {
			margin: 10,
			padding: 10,
			flexGrow: 1
		}
	})

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>桜保育園</Text>
				</View>
				<View style={styles.section}>
					<Text>Section #2</Text>
				</View>
			</Page>
		</Document>
	)
}
export const ClientDetails = () => {
	return (
		<PDFViewer>
			<Pages />
		</PDFViewer>
	)
}
