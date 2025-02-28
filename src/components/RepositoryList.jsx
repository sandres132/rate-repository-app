import { FlatList, Text, View } from "react-native"
import repositories from "../data/repositories"
import { RepositoryItem } from "./RepositoryItem"

export const RepositoryList = () => {
  return (
    <FlatList
        data={repositories}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <RepositoryItem { ...item } />
        )}
    />
  )
}
