import { View, Text, Image, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function Cards() {
  const [showDetails, setShowDetails] = useState<boolean>(true);

  return (
    <SafeAreaView style={tw`flex-1 p-6 relative`}>
      <Text style={tw`text-3xl my-5 text-center mb-3 font-bold`}>Virtual Card</Text>
      
      <View>
        <Image
          source={require('../../assets/card.png')}
          style={tw`w-full rounded-md`}
          resizeMode='contain'
        />
      </View>
      
      <Text style={tw`text-4xl font-bold text-center my-10`}>
        Bant Bill Virtual Card
      </Text>

      {showDetails ? (
        <>
          <View style={tw`flex-row items-center justify-between my-2`}>
            <Text style={tw`text-xl font-bold`}>Card Number</Text>
            <Text style={tw`text-base text-gray-500`}>937 6825 2018 292</Text>
          </View>
          <View style={tw`flex-row items-center justify-between my-2`}>
            <Text style={tw`text-xl font-bold`}>Expiry Date</Text>
            <Text style={tw`text-base text-gray-500`}>12/12</Text>
          </View>
          <View style={tw`flex-row items-center justify-between my-2`}>
            <Text style={tw`text-xl font-bold`}>CV</Text>
            <Text style={tw`text-base text-gray-500`}>292</Text>
          </View>
        </>
      ) : (
        <>
          <View style={tw`flex-row items-center justify-between my-2`}>
            <Text style={tw`text-xl font-bold`}>Card Number</Text>
            <Text style={tw`text-base text-gray-500`}>•••• •••• •••• 292</Text>
          </View>
          <View style={tw`flex-row items-center justify-between my-2`}>
            <Text style={tw`text-xl font-bold`}>Expiry Date</Text>
            <Text style={tw`text-base text-gray-500`}>••/••</Text>
          </View>
          <View style={tw`flex-row items-center justify-between my-2`}>
            <Text style={tw`text-xl font-bold`}>CV</Text>
            <Text style={tw`text-base text-gray-500`}>•••</Text>
          </View>
        </>
      )}

      <TouchableOpacity 
        style={tw`bg-[#5B00BF] w-full mt-5 py-3 rounded-md absolute bottom-2 left-4`}
        onPress={() => setShowDetails(!showDetails)}
      >
        <Text style={tw`text-white text-center text-xl`}>
          {showDetails ? "Hide Details" : "Show Details"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
