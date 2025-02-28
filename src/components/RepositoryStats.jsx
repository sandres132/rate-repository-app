import { View } from "react-native"
import { StyledText } from "./StyledText"

const parseThousands = (value) => {
    return value > 1000 ? `${(value / 1000).toFixed(1)}k` : value
}

export const RepositoryStats = props => {
    return (
        <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around', alignItems: 'center' }}>
            <View>
                <StyledText align={'center'} fontWeight={'bold'} >Stars</StyledText>
                <StyledText align={'center'} >{parseThousands(props.stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText align={'center'} fontWeight={'bold'} >Forks</StyledText>
                <StyledText align={'center'} >{parseThousands(props.forksCount)}</StyledText>
            </View>
            <View>
                <StyledText align={'center'} fontWeight={'bold'} >Review</StyledText>
                <StyledText align={'center'} >{parseThousands(props.reviewCount)}</StyledText>
            </View>
            <View>
                <StyledText align={'center'} fontWeight={'bold'} >Rating</StyledText>
                <StyledText align={'center'} >{parseThousands(props.ratingAverage)}</StyledText>
            </View>
        </View>
    )
}