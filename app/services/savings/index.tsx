import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import tw from 'twrnc';
import { Header } from '../../../components/header';
import { router } from 'expo-router';

export default function Savings() {
  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <Header heading="Saving" />
      <View style={tw`flex-1 items-center`}>
        <Text style={tw`text-[#5B00BF] text-2xl font-bold mt-3 mb-6`}>0.000</Text>
        
        <View style={tw`bg-gray-200 flex-row justify-start items-center px-0 rounded-xl w-full bo h-14`}>
          <View 
            style={[tw`bg-[#5B00BF] px-4 justify-center h-full rounded-xl `, {borderBottomRightRadius:40}]}>
            <Text style={tw`text-lg font-bold text-white`}>Recent</Text>
          </View>
          <View style={tw`flex-1 px-4`}>
            <Text style={tw`text-[#5B00BF]`}>80******67 saved 0.008 (9 mins ago)</Text>
          </View>
        </View>
        <View style={tw `my-4 `}>
            <Image source={require('../../../assets/saving.png')}/>
        </View>
      
        <View style={tw `px-4 my-3 w-full`}>
        <Text style={tw `text-[#5B00BF] text-center font-bold text-xl my-1`}>Save As you want</Text>
        <View style={tw `flex-row items-center gap-x-2 `}>
        <AntDesign name="addfolder" size={32} color="#5B00BF" />
        <Text style={tw `px-4`}>Save daily, weekly or monthly and enjoy up to four free withdrawal days yearly</Text>
        </View>
        </View>
        <View style={tw `px-4 my-3 w-full`}>
        <Text style={tw `text-[#5B00BF] text-center font-bold text-xl my-1`}>Secured & Guaranteed</Text>
        <View style={tw `flex-row items-center gap-x-2 `}>
        <Ionicons name="checkmark-circle-sharp" size={32} color="#5B00BF" />
        <Text style={tw `px-4`}>Secured by the Bant Bill  Guarantee that the return will be repaid.</Text>
        </View>
        </View>
      </View>
      <TouchableOpacity

style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}
>
<Pressable onPress={()=>router.push('/savings/saving')} >
  <Text style={tw`text-white text-lg font-bold`}>Proceed</Text>
</Pressable>
</TouchableOpacity>
    </SafeAreaView>
  );
}
