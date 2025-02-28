import { StyleSheet, Text, View } from "react-native"
import { StyledText } from "./StyledText"
import { RepositoryStats } from "./RepositoryStats"

export const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={ styles.container}>
        <StyledText fontSize={'subheading'} fontWeight={'bold'} >{props.fullName}</StyledText>
        <StyledText >{props.description}</StyledText>
        <StyledText >{props.language}</StyledText>
        <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    text: {
        color: '#0366d6',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    }
})
