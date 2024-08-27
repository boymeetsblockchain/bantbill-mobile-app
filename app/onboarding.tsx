import { View, SafeAreaView,Text,Image, Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import tw from 'twrnc'
import { router } from 'expo-router';
export default function OnBoarding() {
  return (
   <SafeAreaView style={tw`flex-1 items-center justify-center`}>
        <View>
          <Image source={require('../assets/indexx.png')} />
        </View>
        <View style={tw `mt-10 flex-col items-center justify-center gap-y-3`}>
          <Text style={tw `text-2xl text-[#414141] `}>
          Pay on Your Terms
          </Text>
          <Text style={tw `text-sm text-[#a0a0a0] px-4 `}>
          Take control of your finances with our convenient bill payment service
          </Text>
        </View>
        <Pressable
         onPress={()=>router.push('/auth/register/')}
        style={tw `h-13 w-13 border-[#5B00BF] border-2 mt-10 items-center justify-center rounded-full`}>
        <View style={tw `h-10 w-10 bg-[#5B00BF] rounded-full items-center justify-center`}>
            <Text style={tw `text-center text-white`}>Go</Text>
          </View> 
        </Pressable>
   </SafeAreaView>
  )
}