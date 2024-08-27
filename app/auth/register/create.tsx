import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native'
import tw from 'twrnc'
import { BackButton } from '../../../components/backbutton'
import { OTPInputComp } from '../../../components/otp'
import { router } from 'expo-router'

export default function Create() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white p-6`}>
     
      <View style={tw`flex-row items-center mb-6 gap-x-4`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold`}>Create Pin</Text>
      </View>

   
      <View style={tw`flex-1 justify-center items-center`}>
     
        <Image source={require('../../../assets/auth.png')} style={tw`mb-8`} />

        <Text style={tw`text-3xl text-center font-bold mb-4`}>
          Create Your Bant Bill PIN
        </Text>

   
        <Text style={tw`text-lg text-center text-gray-700 mb-6`}>
          Enter a 4-digit code you won’t forget
        </Text>


        <OTPInputComp onChangeText={() => {}} digits={4} />
      </View>

   
      <TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center mt-6`}
        onPress={() => router.push('/auth/register/confirm')}
      >
        <Text style={tw`text-white text-lg font-bold`}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
