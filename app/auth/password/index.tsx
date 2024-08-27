import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import tw from 'twrnc'
import { BackButton } from '../../../components/backbutton'
import { router } from 'expo-router'

export default function ForgotPassword() {
  const [input, setInput] = useState('')

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-6`}>
      
      <View style={tw`flex-row items-center my-5 gap-x-4`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold`}>Forgot Password</Text>
      </View>

  
      <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-3xl text-center font-bold mb-4`}>
          Verification Email or Phone Number
        </Text>
        <TextInput
          placeholder="Email or Phone Number"
          value={input}
          onChangeText={(text) => setInput(text)}
          style={tw`border border-gray-300 rounded-lg py-4 px-4 w-full text-base mb-6`}
        />
      </View>

   
      <TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center mt-6`}
        onPress={() => router.push('/auth/password/verify')}
      >
        <Pressable>
          <Text style={tw`text-white text-lg font-bold`}>Next</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
