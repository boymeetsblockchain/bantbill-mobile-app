import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput,Image } from 'react-native'
import { BackButton } from '../../components/backbutton'
import Ionicons from '@expo/vector-icons/Ionicons'
import tw from 'twrnc'
import { router } from 'expo-router';
import { useState } from 'react';
export default function SettingPage() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  return (
    <SafeAreaView style={tw `flex-1 p-6`}>
    {/* Header */}
    <View style={tw` gap-x-4 flex-row items-center my-3`} >
           <BackButton />
           <Text style={tw`text-2xl font-bold text-black`}>Change Password </Text>
       </View>


       <View>
         
       <View style={tw`relative mb-2`}>
          <TextInput
            placeholder="Old Password"
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
            placeholder="New Password"
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
        </View>
       </View>

       <TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}
      >
        <Pressable>
          <Text style={tw`text-white text-lg font-bold`}>Save</Text>
        </Pressable>
      </TouchableOpacity>

    </SafeAreaView>
  )
}