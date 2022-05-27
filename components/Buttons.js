import { TouchableOpacity, Text, Image } from "react-native"
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants"

export const CircleButton = ({ imgUrl, handelPress, ...props }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.white,
            width: 40,
            height: 40,
            position: "absolute",
            borderRadius: SIZES.extraLarge,
            alignItems: "center",
            justifyContent: "center",
            ...SHADOWS.light,
            ...props
        }}
            onPress={handelPress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    )
}

export const RectButton = ({minWidth, fontSize, handelPress, ...props}) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth,
            padding: SIZES.small,
            ...props,
        }}
            onPress={handelPress}
        >
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize,
            color: COLORS.white,
            textAlign: "center",
        }}>
        Place a bid</Text>
        </TouchableOpacity>
    )
}