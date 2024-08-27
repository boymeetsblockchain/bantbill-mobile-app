import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput, Image } from 'react-native';
import { BackButton } from '../../components/backbutton';
import tw from 'twrnc';

export default function SupportPage() {
  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      {/* Header */}
      <View style={tw`gap-x-4 flex-row items-center my-3`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-black`}>Support</Text>
      </View>

      <View style={tw`flex-1`}> 
        <Text style={tw`text-[#414141] text-center font-bold text-xl my-2`}>
          Contact us for any issue
        </Text>
        <Text style={tw`text-gray-500 text-center font-bold text-base`}>
          Call : +23470457534 (24/7)
        </Text>
        <Text style={tw`text-gray-500 text-center font-bold text-base`}>
          Email : support@payment.com
        </Text>
        <Text style={tw`text-[#414141] text-center font-bold text-xl my-2`}>
          Send Message
        </Text>

        <TextInput 
          placeholder='Name' 
          style={tw`border border-gray-300 px-3 text-gray-300 py-5 text-xl rounded-lg`} 
        />
        <TextInput 
          placeholder='Email' 
          style={tw`border border-gray-300 px-3 text-gray-300 py-5 text-xl my-2 rounded-lg`} 
        />
        <View style={tw`relative`}>
          <TextInput
            placeholder="Enter Mobile Number"
            style={tw`border border-gray-300 rounded-lg py-5 pl-20 pr-4 text-base`}
          />
          <View style={tw`absolute top-5 left-3 flex-row items-center`}>
            <Image source={require('../../assets/ng.png')} style={tw`mr-2`} />
            <Text style={tw`text-base`}>+234</Text>
          </View>
        </View>
        <TextInput 
          placeholder='Write a Message' 
          style={tw`border border-gray-300 px-3 text-gray-300 py-10 text-xl my-2 rounded-lg`} 
        />
      </View>

      <TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}
      >
        <Pressable>
          <Text style={tw`text-white text-lg font-bold`}>Send Message</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
