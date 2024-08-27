import { useState } from 'react';
import { View, Text, SafeAreaView,Modal, Pressable, TextInput, FlatList, TouchableOpacity} from 'react-native'
import { Header } from '../../components/header';
import Entypo from '@expo/vector-icons/Entypo';
import tw from 'twrnc'
import { router } from 'expo-router';
export default function AddPage() {
    const [selectedBank, setSelectedBank] = useState<string>('Union Bank');
    const [isBankModalVisible, setIsBankModalVisible] = useState<boolean>(false);
  
    const banks = ['Union Bank','First Bank', 'Polaris Bank', 'Eco Bank', 'Kuda Bank', 'PalmPay', 'Opay'];

    const renderBankItem = (bank: string) => (
        <Pressable
          style={tw`p-4 border-b border-gray-200`}
          onPress={() => {
            setSelectedBank(bank);
            setIsBankModalVisible(false);
          }}
        >
          <Text style={tw`text-sm`}>{bank}</Text>
        </Pressable>
      );


  return (
    <SafeAreaView style={tw `flex-1 p-6`}>
      <Header heading='Add Bank Account' />
      <View style={tw `flex-1 `}>
      <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}> Bank Name</Text>
        <Pressable onPress={() => setIsBankModalVisible(true)}>
          <View style={tw`relative`}>
            <TextInput
              value={selectedBank}
              placeholder="First Bank"
              style={tw`py-3 px-4 border rounded-lg text-sm`}
              editable={false}
            />
            <Entypo
              name="chevron-down"
              size={24}
              color="black"
              style={tw`absolute top-3 right-4`}
            />
          </View>
        </Pressable>
      </View>
      <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Account Number</Text>
        <TextInput
          placeholder="0000 0000 00"
          style={tw`py-3 px-4 border rounded-lg text-sm`}
        />
      </View>
      <View style={tw`mb-6`}>
        <Text style={tw`font-bold text-xl mb-2`}>Account Name</Text>
        <TextInput
          placeholder="Name"
          style={tw`py-3 px-4 border rounded-lg text-sm`}
        />
      </View>
      </View>
            
      <TouchableOpacity

        style={tw`bg-[#5B00BF] py-4 rounded-lg items-center`}
      >
        <Pressable onPress={()=>router.push('/services/bank')}>
          <Text style={tw`text-white text-lg font-bold`}>Done</Text>
        </Pressable>
      </TouchableOpacity>
        {/* Modal for Bank Selection */}
        <Modal visible={isBankModalVisible} transparent animationType="slide">
        <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
          <View style={tw`bg-white w-4/5 rounded-lg`}>
            <FlatList
              data={banks}
              keyExtractor={(item) => item}
              renderItem={({ item }) => renderBankItem(item)}
            />
            <Pressable
              style={tw`p-4 bg-gray-100 rounded-lg`}
              onPress={() => setIsBankModalVisible(false)}
            >
              <Text style={tw`text-center text-sm font-bold text-gray-700`}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}