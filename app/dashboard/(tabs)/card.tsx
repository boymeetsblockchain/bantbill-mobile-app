import { View, Text, Image, TouchableOpacity, Pressable, SafeAreaView } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import tw from 'twrnc'
import { router } from 'expo-router';
export default function Cards() {
  return (
    <SafeAreaView style={tw `flex-1 p-6 relative`}>
       <Text style={tw`text-3xl my-5 text-center mb-3 font-bold`} >Virtual Card</Text>
       <View>
       <Image
              source={require('../../../assets/card.png')} 
              style={tw`w-full rounded-md`} 
              resizeMode='contain'
            />
       </View>
       <Text style={tw `text-4xl font-bold  text-center my-10 `}>
       Bant Bill Virtual card
       </Text>
       <View style={tw `flex-col gap-y-4 pr-10`}>
       <View style={tw `flex-row gap-x-3`}>
        <SimpleLineIcons name="pie-chart" size={24} color="purple" />
        <View>
          <Text style={tw `font-bold text-xl mb-2 capitalize`}>budget effectively</Text>
          <Text style={tw ` text-sm`}>Limit spending by only using the amount uploaded to your card</Text>
        </View>
        </View>
       <View style={tw `flex-row gap-x-3`}>
        <FontAwesome name="mobile-phone" size={24} color="purple" />
        <View>
          <Text style={tw `font-bold text-xl mb-2 capitalize`}>Digital Native</Text>
          <Text style={tw ` text-sm`}>A digital card for your digital life</Text>
        </View>
        </View>
       <View style={tw `flex-row gap-x-3`}>
        <Fontisto name="dollar" size={24} color="purple" />
        <View>
          <Text style={tw `font-bold text-xl mb-2 capitalize`}>Card Creating Fee</Text>
          <Text style={tw ` text-sm`}>USD 3.00 fee to create a USD card, NGN 1,000.00 fee to create a NGN card </Text>
        </View>
        </View>
     
       </View>
      
       <TouchableOpacity style={tw `bg-[#5B00BF] w-full mt-5 py-3 rounded-md absolute bottom-2 left-4 `}>
        <Pressable onPress={()=>router.push('/card/')}>
        <Text style={tw `text-white text-center text-xl`}>Proceed</Text>
        </Pressable>
       </TouchableOpacity>
    </SafeAreaView >
  )
}