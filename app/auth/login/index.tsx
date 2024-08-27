import { View, Text,SafeAreaView, TouchableOpacity, Pressable, TextInput, Image} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc'
import { Link, router } from 'expo-router';
import { useState } from 'react';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

export default function LoginPage() {
  const [countryCode, setCountryCode] = useState<CountryCode>('NG');
  const [callingCode, setCallingCode] = useState<string>('234');
  const [phone, setPhone] = useState<string>('');
  const handleCountrySelect = (country: Country) => {
    setCountryCode(country.cca2 as CountryCode);
    setCallingCode(country.callingCode[0]);
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white p-6`}>
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`text-center text-4xl font-bold text-black mb-8`}>Welcome Back</Text>

        <View style={tw`gap-y-4`}>
         
    
        <View style={tw`flex-row items-center border-b border-[#0000004D] px-3 py-1 rounded`}>
          <CountryPicker
            countryCode={countryCode}
            withFlag
            withCallingCode
            withEmoji
            onSelect={handleCountrySelect}
          /> 
          <Text style={tw`mx-2 text-sm`}>+{callingCode}</Text>
          <TextInput
            style={tw`flex-1`}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>


      
          <View style={tw`relative`}>
            <TextInput
              placeholder="Password"
              style={tw`border-b border-gray-300 rounded-lg py-3 pl-12 pr-4 text-base`}
              secureTextEntry
            />
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="black"
              style={tw`absolute top-3 left-3`}
            />
          </View>
        
          <View style={tw `flex-row justify-between items-center`}>
            <View style={tw `flex-row gap-x-3 items-center`}>
            <Ionicons name="square-outline" size={24} color="black" />
            <Text style={tw`text-lg text-gray-700`}>Remember Me</Text>
            </View>
            <View>
                <Link href={'/auth/password/'}>
                <Text style={tw`text-lg text-[#5B00BF]`}>Forgot Password?</Text>
                </Link>
            </View>
          </View>

        </View>

     
        <TouchableOpacity
          style={tw`mt-8 bg-[#5B00BF] py-4 rounded-lg items-center`}
        >
          <Pressable onPress={()=>router.push('/dashboard/')}>
            <Text style={tw`text-white text-lg font-bold`}>Login</Text>
          </Pressable>
        </TouchableOpacity>

      


        <View style={tw`mt-8 items-center`}>
          <Text style={tw`text-lg text-gray-700`}>Dont have an Account?</Text>
          <Link href={'/auth/register'}>
            <Text style={tw`text-[#5B00BF] text-lg  mt-4`}>
              Click here to create an Account
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}