import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import tw from 'twrnc';
import { Header } from '../../components/header';
import Entypo from '@expo/vector-icons/Entypo';  

export default function Account() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showStartPicker, setShowStartPicker] = useState<boolean>(false);
  const [showEndPicker, setShowEndPicker] = useState<boolean>(false);

  const toggleStartPicker = () => setShowStartPicker(!showStartPicker);
  const toggleEndPicker = () => setShowEndPicker(!showEndPicker);

  const onStartDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set' && selectedDate) {
      setStartDate(selectedDate);
    }
    toggleStartPicker();
  };

  const onEndDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set' && selectedDate) {
      setEndDate(selectedDate);
    }
    toggleEndPicker();
  };


  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <Header heading='Statement' />
      
      <View style={tw`mt-6`}>
          {/* Start Date Picker */}
          <View style={tw`my-4`}>
          <Text style={tw`text-base`}>Start Date</Text>
          <Pressable onPress={toggleStartPicker} style={tw`relative`}>
            <TextInput
              value={startDate.toDateString()}
              style={tw`py-3 my-1 px-4 border border-gray-200 text-gray-700 rounded-lg text-sm`}
              editable={false}
            />
            <Entypo name="chevron-right" size={20} color="black" style={tw`absolute top-3 right-3`} />
          </Pressable>
        </View>

        {/* End Date Picker */}
        <View style={tw`my-4`}>
          <Text style={tw`text-base`}>End Date</Text>
          <Pressable onPress={toggleEndPicker} style={tw`relative`}>
            <TextInput
              value={endDate.toDateString()}
              style={tw`py-3 my-1 px-4 border border-gray-200 text-gray-700 rounded-lg text-sm`}
              editable={false}
            />
            <Entypo name="chevron-right" size={20} color="black" style={tw`absolute top-3 right-3`} />
          </Pressable>
        </View>

        {/* Date Pickers */}
        {showStartPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={startDate}
            onChange={onStartDateChange}
          />
        )}
        {showEndPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={endDate}
            onChange={onEndDateChange}
          />
        )}

        
      
        {/* Confirm Button */}
        <TouchableOpacity
          onPress={() => console.log(`Start: ${startDate}, End: ${endDate}`)}
          style={tw`bg-[#5B00BF] p-4 rounded-xl mt-4`}
        >
          <Text style={tw`text-white text-center text-lg font-bold`}>Download Statement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
