import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import tw from 'twrnc'
import { BackButton } from '../../../components/backbutton'
import { router } from 'expo-router'

export default function SetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <View style={tw`flex-1 bg-white p-6`}>
      {/* Header */}
      <View style={tw`flex-row items-center my-5 gap-x-4`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold`}>Forgot Password</Text>
      </View>

   
      <View style={tw`flex-1 justify-center`}>
     
        <Text style={tw`text-3xl text-center font-bold mb-1`}>
          Set Your New Password
        </Text>
        <Text style={tw`text-sm  text-gray-700 text-center font-bold mb-4`}>
          Set Your New Password
        </Text>

      
        <View style={tw`relative mb-2`}>
          <TextInput
            placeholder="New Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={tw`border border-gray-300 rounded-lg py-4 px-4 w-full text-base`}
          />
          <TouchableOpacity
            style={tw`absolute right-4 top-4`}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>

     
        <View style={tw`relative mb-6`}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={tw`border border-gray-300 rounded-lg py-4 px-4 w-full text-base`}
          />
          <TouchableOpacity
            style={tw`absolute right-4 top-4`}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <View>
          <Text style={tw`text-sm  text-gray-700  font-bold mb-4`}>
          Password must have atleast one special character
        </Text>
          </View>
        </View>
  
      </View>

      {/* Button */}
      <TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center mt-6`}
        onPress={() => {
          // Handle password submission here
          if (password === confirmPassword) {
            router.push('/auth/login') // Example route
          } else {
            alert('Passwords do not match')
          }
        }}
      >
        <Pressable>
          <Text style={tw`text-white text-lg font-bold`}>Set Password</Text>
        </Pressable>
      </TouchableOpacity>
    </View>
  )
}
