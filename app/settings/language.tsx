import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { BackButton } from '../../components/backbutton';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-ico-flags';
import tw from 'twrnc';

export default function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { name: 'English', flag: 'england' },
    { name: 'Spanish', flag: 'spain' },
    { name: 'French', flag: 'france' },
    { name: 'Chinese', flag: 'china' },
    { name: 'German', flag: 'germany' },
    { name: 'Portuguese', flag: 'portugal' },
    { name: 'Russian', flag: 'russia' },

  ];
  

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      {/* Header */}
      <View style={tw`gap-x-4 flex-row items-center my-3`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-black`}>Change Language</Text>
      </View>

      <FlatList
        data={languages}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Pressable
            style={tw`flex-row justify-between items-center p-4 border border-[#5B00BF] my-2`}
            onPress={() => handleLanguageSelect(item.name)}
          >
            {/* Flag and Language Name */}
            <View style={tw`flex-row items-center `}>
              <Icon name={item.flag} height={30} width={30} />
              <View>
              <Text style={tw`ml-4 text-xl`}>{item.name}</Text>
              <Text style={tw`ml-4 text-sm text-gray-500`}>{item.name}</Text>
              </View>
            </View>

            {/* Checkmark for Selected Language */}
            {selectedLanguage === item.name && (
               <View style={tw `h-6 w-6 rounded-full border border-[#5B00BF] items-center justify-center`}>
                <Ionicons name="checkmark" size={16} color="purple" />
               </View>
            )}
          </Pressable>
        )}
      />

<TouchableOpacity
        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}
      >
        <Pressable>
          <Text style={tw`text-white text-lg font-bold`}>Save</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
