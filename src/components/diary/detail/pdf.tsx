import {VFC} from 'react'
import GenShinNormal from '@/fonts/GenShinGothic-Normal.ttf'

import {Document, Page, View, StyleSheet, Text, Font, PDFViewer} from '@react-pdf/renderer'

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
		borderRightWidth: 0,
		padding: '10 50'
	},
	// table
	table: {
		width: '96%'
	},
	tableRow: {
		margin: 'auto',
		flexDirection: 'row'
	},
	tableCol: {
		width: '26.1%',
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
	}
})
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
							<Text>横浜海斗</Text>
						</View>
					</View>
					<View style={styles.section}>
						<View style={styles.children}>
							<Text>配属先</Text>
						</View>
						<View style={styles.children}>
							<Text>たんぽぽ組</Text>
						</View>
						<View style={styles.children}>
							<Text>指導者氏名</Text>
						</View>
						<View style={styles.children}>
							<Text>横浜海斗</Text>
						</View>
					</View>
					<View style={styles.section}>
						<View style={styles.aimContent}>
							<Text>本日の目標</Text>
						</View>
					</View>
					<View style={styles.section}>
						<View style={styles.aimContent}>
							<Text>
								本日の目標としてあんなことやこんなことに注意して実習に行いたいです。
								そのためには自分がもう少し周りに配慮ができるようになることが必須条件
								なのかなと思いました。
							</Text>
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
						{[...Array(8)].map(() => {
							return (
								<View style={styles.tableRow}>
									<View style={styles.tableCol}>
										<Text>9:00</Text>
									</View>
									<View style={styles.tableCol}>
										<Text>○おやつ 今日のおやつは何かとワクワクした表情で待つ。</Text>
										<Text>・友達と「とうもろこしだね」。</Text>
										<Text>と話し合う癖がある。</Text>
										<Text>・いただきますの挨拶をし、</Text>
										<Text>味わいながら食べる。 </Text>
										<Text>・「とうもろこしが繋がってる」 「歯みたい」と会話する。</Text>
									</View>
									<View style={styles.tableCol}>
										<Text>○おやつ 今日のおやつは何かとワクワクした表情で待つ。</Text>
										<Text>・友達と「とうもろこしだね」。</Text>
										<Text>と話し合う癖がある。</Text>
										<Text>・いただきますの挨拶をし、</Text>
										<Text>味わいながら食べる。 </Text>
										<Text>・「とうもろこしが繋がってる」 「歯みたい」と会話する。</Text>
									</View>
									<View style={styles.tableCol}>
										<Text>○おやつ 今日のおやつは何かとワクワクした表情で待つ。</Text>
										<Text>・友達と「とうもろこしだね」。</Text>
										<Text>と話し合う癖がある。</Text>
										<Text>・いただきますの挨拶をし、</Text>
										<Text>味わいながら食べる。 </Text>
										<Text>・「とうもろこしが繋がってる」 「歯みたい」と会話する。</Text>
									</View>
								</View>
							)
						})}
						<View style={styles.section}>
							<View style={styles.impressions}>
								<Text>実習所感（特に印象に残ったこと、考察、課題、反省など）</Text>
							</View>
						</View>
						<View style={styles.section}>
							<View style={styles.impressions}>
								<Text>
									本日の目標としてあんなことやこんなことに注意して実習に行いたいです。
									そのためには自分がもう少し周りに配慮ができるようになることが必須条件
									なのかなと思いました。
								</Text>
							</View>
						</View>
					</View>
				</View>
			</Page>
		</Document>
	)
}
export const Pdf = () => {
	return (
		<PDFViewer width="80%" height="642" style={styles.pdfWrapper}>
			<Pages />
		</PDFViewer>
	)
}
