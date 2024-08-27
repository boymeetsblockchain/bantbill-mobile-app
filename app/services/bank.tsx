import { View, Text,SafeAreaView, TouchableOpacity, Pressable } from 'react-native'
import tw from 'twrnc'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Header } from '../../components/header'
import { router } from 'expo-router';
export default function BankPage() {
  return (
     <SafeAreaView style={tw `flex-1 p-6`}>
        <Header heading='Add Bank Account'/>
        <View style={tw `flex-1`}>
          <Text style={tw `text-2xl font-bold my-2`}>
            Opay Microfinance Bank
          </Text>
          <View style={tw `bg-gray-200 p-3 flex-row justify-between px-3 items-center rounded-md`}>
            <View>
             <Text style={tw` text-xl font-bold`}>ALEXANDER CHINONYELUM IKEMMA</Text>
             <Text style={tw` text-base text-gray-400 `}>Opay- 7056584464</Text>
            </View>
            <AntDesign name="delete" size={24} color="red" />
          </View>
        </View>

        
      <TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}
      >
        <Pressable onPress={()=>router.push('/services/add')}>
          <Text style={tw`text-white text-lg font-bold`}>Add </Text>
        </Pressable>
      </TouchableOpacity>

     </SafeAreaView>
  )
}