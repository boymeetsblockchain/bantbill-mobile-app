import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import tw from 'twrnc';

export default function SuccessPage() {
  // Extract the message from the route params
  const { message } = useLocalSearchParams();

  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <View style={tw`flex-1 items-center gap-y-4 justify-center`}>
        <Image source={require('../assets/success.png')} />
        <Text style={tw`text-center font-bold text-2xl`}>Success</Text>
        <Text style={tw`text-center text-gray-500 text-base`}>{message}</Text>
      </View>

      <TouchableOpacity style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}>
        <Pressable onPress={() => router.push('/dashboard')}>
          <Text style={tw`text-white text-lg font-bold`}>Done</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
