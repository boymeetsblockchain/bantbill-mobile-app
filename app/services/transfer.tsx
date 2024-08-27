import { View, Text,SafeAreaView, TouchableOpacity, Pressable,  TextInput } from 'react-native'
import tw from 'twrnc'
import { Header } from '../../components/header'
export default function Account() {
  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <Header heading='Internal Transfer'/>
      <View style={tw `flex-1`}>
        <View style={tw `my-5`}>
        <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>User ID</Text>
        <TextInput
          placeholder="@"
          style={tw`py-3 px-4 border rounded-lg text-sm`}
        />
      </View>
  
        <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Amount</Text>
        <TextInput
          placeholder="NGN"
          style={tw`py-3 px-4 border rounded-lg text-sm`}
        />
      </View>
        <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Description</Text>
        <TextInput
          placeholder="Write Something ...."
          style={tw`py-3 px-4 border rounded-lg text-sm`}
        />
      </View>
        </View>
      </View>
      <TouchableOpacity

style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}
>
<Pressable >
  <Text style={tw`text-white text-lg font-bold`}>Transfer</Text>
</Pressable>
</TouchableOpacity>
    </SafeAreaView>
  )
}