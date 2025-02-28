import { Text, View } from "react-native"
import Constants from "expo-constants"
import { RepositoryList } from "./RepositoryList"

export const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
        <RepositoryList/>
    </View>
  )
}
