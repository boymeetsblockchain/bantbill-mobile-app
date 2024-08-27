import { Text, View } from "react-native"
import tw from 'twrnc'
import { BackButton } from "./backbutton"


interface HeaderProps {
    heading:string
}

export const Header =({heading}:HeaderProps)=>{
    return(
        <View style={tw`gap-x-4 flex-row items-center my-3`}>
        <BackButton />

        <Text style={tw`text-2xl font-bold text-black`}> {heading} </Text>
      </View>
    )
}