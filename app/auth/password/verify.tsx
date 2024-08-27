import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import tw from 'twrnc'
import { BackButton } from '../../../components/backbutton'
import { router } from 'expo-router'
import { OTPInputComp } from '../../../components/otp'

export default function ForgotPassword() {
  const [input, setInput] = useState('')

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-6`}>
  
      <View style={tw`flex-row items-center mb-6 gap-x-4`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold`}>Forgot Password</Text>
      </View>


      <View style={tw`flex-1 justify-center items-center`}>
  
        <Text style={tw`text-3xl text-center font-bold mb-4`}>
          Phone Verification
        </Text>
              
        <Text style={tw`text-lg text-center text-gray-700 mb-6`}>
          Enter Your Otp
        </Text>
        <View style={tw `items-center gap-y-2`}>
            <OTPInputComp onChangeText={()=>[]} digits={5}/>
            <Text style={tw`text-base ml-2`}>
            Didnt receive any code ?{' '}
            <Text style={tw`text-[#5B00BF] underline`}>Resend</Text>{' '}
       
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center mt-6`}
        onPress={() => router.push('/auth/password/set')}
      >
        <Pressable>
          <Text style={tw`text-white text-lg font-bold`}>Next</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
