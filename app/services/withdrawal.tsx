import { View, Text,SafeAreaView, TouchableOpacity, Pressable, Image, TextInput } from 'react-native'
import tw from 'twrnc'
import { Header } from '../../components/header'
export default function Account() {
  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <Header heading='Withdrawal'/>
      <View style={tw `flex-1`}>
        <View style={tw `flex-row  justify-between items-center border border-dashed px-2 py-3`}>
               <View>
               <Text style={tw `text-base font-bold`}>
                WithDrawal 
             </Text>
             <Text style={tw `text-base font-bold`}>
             Method
             </Text>
               </View>
             <View style={tw `flex-row gap-x-3`}>
                <Image source={require('../../assets/Mastercard.png')}/>
                <Image source={require('../../assets/Visa.png')}/>
                <Image source={require('../../assets/express.png')}/>
                <Image source={require('../../assets/discover.png')}/>
             </View>
        </View>
        <View style={tw `my-5`}>
        <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Bank Name</Text>
        <TextInput
          placeholder="John Doe"
          style={tw`py-3 px-4 border rounded-lg text-sm`}
        />
      </View>
        <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Account Number</Text>
        <TextInput
          placeholder="0000 0000 00"
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
        </View>
      </View>
      <TouchableOpacity

style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}
>
<Pressable >
  <Text style={tw`text-white text-lg font-bold`}>Withdraw</Text>
</Pressable>
</TouchableOpacity>
    </SafeAreaView>
  )
}