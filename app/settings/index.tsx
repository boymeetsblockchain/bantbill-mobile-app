import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput,Image } from 'react-native'
import { BackButton } from '../../components/backbutton'
import Feather from '@expo/vector-icons/Feather';
import tw from 'twrnc'
import { router } from 'expo-router';
export default function SettingPage() {
  return (
    <SafeAreaView style={tw `flex-1 p-6`}>
    {/* Header */}
    <View style={tw` gap-x-4 flex-row items-center my-3`} >
           <BackButton />
           <Text style={tw`text-2xl font-bold text-black`}>Settings </Text>
       </View>
<View style={tw `gap-y-4`}>
<Pressable
        style={tw `flex-row justify-between items-center border border-[#5B00BF] p-3 rounded-lg`}
       onPress={()=>router.push('/settings/password')}>
       <Text style={tw `text-lg font-bold text-gray-500`}>Change Password</Text>
       <Feather name="chevron-right" size={24} color="black" />
       </Pressable>
<Pressable
        style={tw `flex-row justify-between items-center border border-[#5B00BF] p-3 rounded-lg`}
       onPress={()=>router.push('/settings/language')}>
       <Text style={tw `text-lg font-bold text-gray-500`}>Change Language</Text>
       <Feather name="chevron-right" size={24} color="black" />
       </Pressable>
<Pressable
        style={tw `flex-row justify-between items-center border border-[#5B00BF] p-3 rounded-lg`}>
       <Text style={tw `text-lg font-bold text-gray-500`}>Privacy Policy</Text>
       <Feather name="chevron-right" size={24} color="black" />
       </Pressable>
</View>
     

    </SafeAreaView>
  )
}