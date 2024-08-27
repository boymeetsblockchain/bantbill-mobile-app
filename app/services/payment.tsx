import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Pressable, Image, Alert } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as Clipboard from 'expo-clipboard';
import tw from 'twrnc';
import { Header } from '../../components/header';

export default function Payment() {
  const username = '@Nwekechi345';

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(username);
    Alert.alert('Copied to Clipboard', 'Username copied to clipboard!');
  };

  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <Header heading='Receive Payment' />
      <View style={tw`flex-1 my-4 items-center`}>
        <Text style={tw`text-lg text-center font-bold`}>
          Receive payments easily with Bant Bill, share your Bant Bill ID with the sender and get paid directly in your account. No hassle, just seamless transaction.
        </Text>
        <Image source={require('../../assets/qr.png')} />
        <View>
          <Pressable onPress={copyToClipboard}>
            <Text style={tw`text-lg mt-[-50] text-center font-bold`}>
              {username} 
              <MaterialCommunityIcons name="clipboard-multiple-outline" size={24} color="purple" />
            </Text>
          </Pressable>
        </View>
      </View>
      <TouchableOpacity style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}>
        <Pressable>
          <Text style={tw`text-white text-lg font-bold`}>Share</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
