import { StyleSheet, TextStyle } from "react-native";

interface Styles {
	T16: TextStyle,
	T18: TextStyle,
	T12: TextStyle,
	T7: TextStyle,
	T14: TextStyle,
	T24: TextStyle,
	T36: TextStyle,
	T48: TextStyle,
	bold: TextStyle,
	normal: TextStyle,
	sans: TextStyle
}

const styles = StyleSheet.create<Styles>({
	T16: {
		fontSize: 16,
	}, T18: {
		fontSize: 18,
	}, T12: {
		fontSize: 12,
	}, T7: {
		fontSize: 7,
	}, T14: {
		fontSize: 14,
	},
	T24: {
		fontSize: 24,
	}
	, T36: {
		fontSize: 36,
	}, T48: {
		fontSize: 48,
	},
	bold: {
		fontFamily: "DMSans-Bold",
		fontWeight: "600",
	},
	normal: {
		fontFamily: "DMSans",
		fontWeight: "normal",
	},
	sans: {
		fontFamily: "DMSans",
	},
});

export const align = StyleSheet.create<any>({
	center: {
		// flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default styles;
