import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import tw from 'twrnc';
import { Header } from '../../../components/header';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';

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
      <Header heading="Saving" />
      <View style={tw`flex-1 py-5`}>
        <Text style={tw`text-xl font-bold text-center mb-4`}>Reach your finance goals with ease</Text>

        {/* Target Amount Input */}
        <View>
          <Text style={tw`text-base`}>What is your overall target amount for this plan?</Text>
          <TextInput
            placeholder="NGN"
            style={tw`py-3 my-1 px-4 border border-gray-200 text-gray-700 rounded-lg text-sm`}
          />
        </View>

        {/* Reason Input */}
        <View>
          <Text style={tw`text-base`}>Add Reason for this Saving? (optional)</Text>
          <TextInput
            placeholder=""
            style={tw`py-6 my-1 px-4 border border-gray-200 text-gray-700 rounded-lg text-sm`}
          />
        </View>

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

       
      </View>
       {/* Submit Button */}
       <TouchableOpacity
        style={tw`bg-[#5B00BF] p-4 rounded-lg mt-6`}>
           <Pressable onPress={() => router  .push({ pathname: '/success', params: { message: 'Your Savings account has been created. Begin growing your savings now!' } })}>
         <Text style={tw`text-white text-center text-lg font-bold`}>Proceed</Text>
         </Pressable>
        </TouchableOpacity>
    </SafeAreaView>
  );
}
