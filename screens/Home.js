import { useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from "react-native"
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components"
import { COLORS, NFTData } from '../constants'

const Home = () => {
    const [nftData, setNftData] = useState(NFTData)

    const handelSearch = (search) => {
        if (!search.length) return setNftData(NFTData)

        const filtredData = NFTData.filter(
            data =>
                data.name.toLowerCase().includes(search.toLowerCase())
        )

        return filtredData.length
            ? setNftData(filtredData)
            : setNftData(NFTData)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={nftData}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handelSearch} />}
                    />
                </View>

                <View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }}
                    />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Home