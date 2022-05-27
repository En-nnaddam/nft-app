import { View, Text, SafeAreaView, FlatList, Image, StatusBar } from "react-native"
import FocusedStatusBar from "../components/FocusedStatusBar"

import { CircleButton, RectButton } from '../components/Buttons'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants"
import DetailsBid from "../components/DetailsBid"
import { SubInfos } from "../components"
import DetailsDesc from "../components/DetailsDesc"

const DetailsHeader = ({ data, navigation }) => {

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", }}
      />

      <CircleButton
        imgUrl={assets.left}
        top={StatusBar.currentHeight + 10}
        left={10}
        handelPress={goBack}
      />

      <CircleButton
        imgUrl={assets.heart}
        top={StatusBar.currentHeight + 10}
        right={10}
      />
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.whiteAlpha5,
        zIndex: 1,
      }}>
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfos />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc
                data={data}
              />

              {
                data.bids.length > 0 &&
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}>
                  Current Bids
                </Text>
              }
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}


export default Details