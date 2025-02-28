import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export const StyledText = ({ align, color, children, medium, fontSize, fontWeight, style, ...restOfProps }) => {
    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'secondary' && styles.colorSecondary,
        color === 'primary' && styles.colorPrimary,
        medium && styles.medium,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
    ]

    return (
        <View>
            <Text style={[ style, textStyles]} {...restOfProps}>
                { children }
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    medium: {
        fontSize: 14,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    textAlignCenter: {
        textAlign: 'center',
    },
})