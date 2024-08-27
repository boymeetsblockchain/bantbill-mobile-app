import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import tw from 'twrnc';
import { Header } from '../../components/header';
import { router } from 'expo-router';

export default function AirtimePage() {
  return (
    <SafeAreaView style={tw`p-6 flex-1`}>
      <Header heading='Airtime To Cash' />
      <View style={tw`flex-1`}>
        <Text style={tw`text-xl mb-4 font-bold`}>Airtime Pin</Text>
        <TextInput
          placeholder='******66565656***'
          style={tw`p-3 text-gray-500 border border-gray-500`}
        />
      </View>

      <TouchableOpacity style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}>
        <Pressable onPress={() => router.push({ pathname: '/success', params: { message: 'Your airtime has been successfully converted to cash!' } })}>
          <Text style={tw`text-white text-lg font-bold`}>Confirm</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
