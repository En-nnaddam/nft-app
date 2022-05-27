import { View, Text, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { COLORS, SIZES, SHADOWS, assets } from "../constants"
import { CircleButton, RectButton } from './Buttons'
import { SubInfos, EthPrice, NFTTitle } from './SubInfos'

const NFTCard = ({ data }) => {
  const navigation = useNavigation()

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>
      <SubInfos />
      <View style={{ padding: SIZES.font, width: "100%"}}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SIZES.font
      }}>
        <EthPrice price={data.price} />
        <RectButton
          minWidth={120}
          fontSize={SIZES.font}
          handelPress={() => navigation.navigate("Details", { data })}
        />
      </View>
    </View>
  )
}

export default NFTCard