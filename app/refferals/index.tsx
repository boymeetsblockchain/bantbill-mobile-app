import { View, Text, SafeAreaView, Image, Pressable, TouchableOpacity } from 'react-native';
import { Header } from '../../components/header';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function Referrals() {
  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <Header heading='Referral Hub' />

      {/* Referral Stats */}
      <View style={tw`flex-1`}>
        <View style={tw`bg-white py-4 rounded-lg shadow-md px-4 my-4`}>
          <Text style={tw`text-xl font-bold mb-2`}>Referral Summary</Text>
          <View style={tw`flex-row justify-between items-center mb-1`}>
            <Text style={tw`text-sm text-gray-500`}>Total No of Referrals</Text>
            <Text style={tw`text-sm font-semibold text-gray-700`}>12</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-sm text-gray-500`}>Total Earned</Text>
            <Text style={tw`text-xl font-bold text-[#5B00BF]`}>NGN 300</Text>
          </View>
        </View>

        {/* Referral Promotion */}
        <View style={tw`bg-white py-4 rounded-lg shadow-md items-center justify-center px-4 my-4`}>
          <Image source={require('../../assets/refferal.png')} style={tw`h-32 w-32`} resizeMode='contain' />
          <Text style={tw`text-center font-bold text-lg mt-4`}>Refer and Earn 10% Commission</Text>
          <Text style={tw`text-gray-500 text-center text-base mt-2`}>
            Refer friends to Bant Bill App and get rewarded! Share your unique referral link or code and earn 10% off on your next bill payment for each successful referral.
          </Text>
        </View>

        {/* Referral Link */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-xl font-bold mb-3`}>Your Referral Link</Text>
          <View style={tw`flex-row items-center border border-gray-300 rounded-lg p-3`}>
            <Text style={tw`text-sm text-gray-500 flex-1`}>https://www.giottus.com/?refcode=RRPSFAS</Text>
            <Pressable style={tw`bg-[#5B00BF] py-2 px-4 rounded-lg`}>
              <Text style={tw`text-white font-semibold`}>Copy Code</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Share Button */}
      <TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center mt-6`}
        onPress={() => {/* Add share functionality */}}
      >
        <Pressable>
          <Text style={tw`text-white text-lg font-bold`}>Share</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
