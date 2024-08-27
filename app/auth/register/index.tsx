import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { BackButton } from '../../../components/backbutton';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import { Link, router } from 'expo-router';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { useState } from 'react';

export default function RegisterPage() {
  const [countryCode, setCountryCode] = useState<CountryCode>('NG');
  const [callingCode, setCallingCode] = useState<string>('234');
  const [phone, setPhone] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const handleCountrySelect = (country: Country) => {
    setCountryCode(country.cca2 as CountryCode);
    setCallingCode(country.callingCode[0]);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-6`}>
      <View>
        <BackButton />
      </View>

      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`text-center text-4xl font-bold text-black mb-8`}>Sign Up</Text>

        <View style={tw`gap-y-4`}>
          {/* Phone Number Input */}
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

          {/* Full Name Input */}
          <View style={tw`relative`}>
            <TextInput
              placeholder="Full Name"
              style={tw`border-b border-gray-300 rounded-lg py-3 pl-12 pr-4 text-base`}
            />
            <Ionicons
              name="person-outline"
              size={24}
              color="black"
              style={tw`absolute top-3 left-3`}
            />
          </View>

          {/* Email Input */}
          <View style={tw`relative`}>
            <TextInput
              placeholder="Email Address"
              style={tw`border-b border-gray-300 rounded-lg py-3 pl-12 pr-4 text-base`}
            />
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="black"
              style={tw`absolute top-3 left-3`}
            />
          </View>

          {/* Password Input */}
          <View style={tw`relative`}>
            <TextInput
              placeholder="Password"
              style={tw`border-b border-gray-300 rounded-lg py-3 pl-12 pr-4 text-base`}
              secureTextEntry={!passwordVisible}
            />
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="black"
              style={tw`absolute top-3 left-3`}
            />
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
              style={tw`absolute top-3 right-3`}
              onPress={togglePasswordVisibility}
            />
          </View>

          {/* Confirm Password Input */}
          <View style={tw`relative`}>
            <TextInput
              placeholder="Confirm Password"
              style={tw`border-b border-gray-300 rounded-lg py-3 pl-12 pr-4 text-base`}
              secureTextEntry={!confirmPasswordVisible}
            />
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="black"
              style={tw`absolute top-3 left-3`}
            />
            <Ionicons
              name={confirmPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
              style={tw`absolute top-3 right-3`}
              onPress={toggleConfirmPasswordVisibility}
            />
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={tw`mt-8 bg-[#5B00BF] py-4 rounded-lg items-center`}
          disabled={!termsAccepted}
        >
          <Pressable onPress={() => router.push('/auth/register/create')}>
            <Text style={tw`text-white text-lg font-bold`}>Sign Up</Text>
          </Pressable>
        </TouchableOpacity>

        {/* Terms & Conditions Checkbox */}
        <View style={tw`flex-row items-center justify-center mt-6`}>
          <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
            <Ionicons
              name={termsAccepted ? "checkbox-outline" : "square-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <Text style={tw`text-base ml-2`}>
            I have read and agree to the{' '}
            <Text style={tw`text-[#5B00BF] underline`}>Terms & Conditions</Text>{' '}
            and{' '}
            <Text style={tw`text-[#5B00BF] underline`}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Already Have an Account */}
        <View style={tw`mt-8 items-center`}>
          <Text style={tw`text-lg text-gray-700`}>Already Have an Account?</Text>
          <Link href={'/auth/login'}>
            <Text style={tw`text-[#5B00BF] text-lg underline mt-4`}>
              Click here to Login
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
