import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput,Image } from 'react-native'

import { BackButton } from '../../components/backbutton'
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import tw from 'twrnc'
export default function EditProfile() {
  const [countryCode, setCountryCode] = useState<CountryCode>('NG');
  const [callingCode, setCallingCode] = useState<string>('234');
  const [phone, setPhone] = useState<string>('');
  const handleCountrySelect = (country: Country) => {
    setCountryCode(country.cca2 as CountryCode);
    setCallingCode(country.callingCode[0]);
  };
  return (
    <SafeAreaView style={tw `p-6 flex-1`}>
       {/* Header */}
       <View style={tw` gap-x-4 flex-row items-center my-3`} >
           <BackButton />
           <Text style={tw`text-2xl font-bold text-black`}> Profile Settings </Text>
       </View>
       <View style={tw `flex-1`}> 
       <View style={tw `items-center  justify-center`}>
        <Image source={require('../../assets/tony.jpg')} style={tw `h-20 w-20 rounded-full`} resizeMode='contain'/>
      </View> 
        <View style={tw `my-4 gap-y-3`}>
        <TextInput 
          placeholder='FullName' 
          style={tw`border border-gray-500 px-3 text-gray-500 py-3 text-base rounded-lg`} 
        />
           <View style={tw`relative`}>
       
           <View style={tw`flex-row items-center border py-3 border-[#0000004D] px-3  rounded`}>
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

        </View>
        <TextInput 
          placeholder='Email' 
          style={tw`border border-gray-500 px-3 text-gray-500 py-3 text-base my-2 rounded-lg`} 
        />
        <TextInput 
          placeholder='Street' 
          style={tw`border border-gray-500 px-3 text-gray-500 py-3 text-base my-2 rounded-lg`} 
        />
        <TextInput 
          placeholder='City' 
          style={tw`border border-gray-500 px-3 text-gray-500 py-3 text-base my-2 rounded-lg`} 
        />
        <TextInput 
          placeholder='District' 
          style={tw`border border-gray-500 px-3 text-gray-500 py-3 text-base my-2 rounded-lg`} 
        />
    
        </View>
       </View>

       <View style={tw `flex-row gap-x-4`}>
        <TouchableOpacity style={tw `border border-[#5B00BF] py-3 px-2 rounded-lg w-1/2`  }>
          <Pressable>
            <Text style={tw `text-center text-lg font-bold text-[#5B00BF]`}>Cancel</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={tw `border bg-[#5B00BF] py-3 px-2 rounded-lg w-1/2`  }>
          <Pressable>
            <Text style={tw `text-center text-lg font-bold text-white`}>Save</Text>
          </Pressable>
        </TouchableOpacity>
       </View>
    </SafeAreaView>
  )
}