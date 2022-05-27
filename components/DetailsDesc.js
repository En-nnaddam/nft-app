import { View, Text, } from 'react-native'
import { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfos'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsDesc = ({ data }) => {
    const subText = data.description.substr(0, 100)
    const [text, setText] = useState(subText)
    const [isShowMore, setIsShowMore] = useState(false)

    const showMore = () => {
        setText(data.description)
        setIsShowMore(true)
    }

    const showLess = () => {
        setIsShowMore(false)
        setText(subText)
    }

    const handelPress = () => {
        isShowMore
            ? showLess()
            : showMore()
    }

    return (
        <>
            <View style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <EthPrice
                    price={data.price}
                />
            </View>
            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                    textTransform: "capitalize",
                }}>
                    description
                </Text>
                <View style={{ marginVertical: SIZES.base }}>
                    <Text style={{
                        fontSize: SIZES.small,
                        fontFamily: FONTS.regular,
                        color: COLORS.secondary,
                        lineHeight: SIZES.large,
                    }}>
                        {text}
                        {!isShowMore && '...'}

                        <Text style={{
                            fontSize: SIZES.small,
                            fontFamily: FONTS.bold,
                            color: COLORS.secondary,
                            textTransform: "capitalize"
                        }}
                            onPress={handelPress}
                        >
                            {isShowMore ? " show less" : " show more"}
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    )
}

export default DetailsDesc