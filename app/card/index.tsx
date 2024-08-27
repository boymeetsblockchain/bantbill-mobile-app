import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Pressable, FlatList, Modal } from 'react-native';
import { BackButton } from '../../components/backbutton';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import { useState } from 'react';
import { router } from 'expo-router';

export default function CardPage() {
    const [verification, setVerification] = useState<string>('BVN/NIN');
    const [country, setCountry] = useState<string>('NIGERIA');
    const [bvn, setBvn] = useState<string>('');
    const [nin, setNin] = useState<string>('');
    const [isVerificationModalVisible, setIsVerificationModalVisible] = useState<boolean>(false);
    const [isCountryModalVisible, setIsCountryModalVisible] = useState<boolean>(false);

    const verifications: string[] = ['BVN/NIN', 'DRIVER LICENSE', 'NATIONAL PASSPORT'];
    const countries: string[] = ['NIGERIA', 'GHANA', 'SOUTH AFRICA', 'CAMEROON'];

    const renderItem = (
        item: string,
        setSelected: React.Dispatch<React.SetStateAction<string>>,
        closeModal: () => void
    ) => (
        <Pressable 
            style={tw`p-4 border-b border-gray-200`}
            onPress={() => {
                setSelected(item);
                closeModal();
            }}
        >
            <Text style={tw`text-sm`}>{item}</Text>
        </Pressable>
    );

    return (
        <SafeAreaView style={tw`flex-1 bg-white p-6`}>
            {/* Header */}
            <View style={tw` justify-between flex-row items-center my-3`} >
                <BackButton />
                <Text style={tw`text-2xl font-bold text-black`}>Verify Your Identity</Text>
                <View />
            </View>

            <Text style={tw `text-center text-xl my-2`}>
                Your information is always secure. The only thing missing is KYC Verification and Anti-Money Laundering Agreements.
            </Text>

            {/* Document Type Dropdown */}
            <View style={tw `my-1`}>
                <Text style={tw `text-[#454E68] text-2xl mb-3`}>Document Type</Text>
                <Pressable onPress={() => setIsVerificationModalVisible(true)}>
                    <View style={tw`relative`}>
                        <TextInput 
                            value={verification}
                            placeholder='Document Type' 
                            style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
                            editable={false}
                        />
                        <Entypo name="chevron-down" size={20} color="black" style={tw`absolute top-3 right-3`} />
                    </View>
                </Pressable>
            </View>

            {/* Country Dropdown */}
            <View style={tw `my-1`}>
                <Text style={tw `text-[#454E68] text-2xl mb-3`}>Country</Text>
                <Pressable onPress={() => setIsCountryModalVisible(true)}>
                    <View style={tw`relative`}>
                        <TextInput 
                            value={country}
                            placeholder='Country' 
                            style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
                            editable={false}
                        />
                        <Entypo name="chevron-down" size={20} color="black" style={tw`absolute top-3 right-3`} />
                    </View>
                </Pressable>
            </View>

            {/* BVN and NIN Input Fields */}
            <View style={tw `my-1`}>
                <Text style={tw `text-[#454E68] text-2xl mb-3`}>BVN</Text>
                <TextInput 
                    value={bvn}
                    onChangeText={setBvn}
                    placeholder='Enter BVN' 
                    keyboardType='numeric'
                    style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
                />
            </View>

            <View style={tw `my-1`}>
                <Text style={tw `text-[#454E68] text-2xl mb-3`}>NIN</Text>
                <TextInput 
                    value={nin}
                    onChangeText={setNin}
                    placeholder='Enter NIN' 
                    keyboardType='numeric'
                    style={tw`py-3 border bg-[#EEEEF0] rounded-lg w-full px-4 text-base`} 
                /> 
            </View>

            <Text style={tw `text-center text-xl font-bold`}><Text style={tw `text-[#FE7005]`}>Click Here </Text>to Upload NIN Slip</Text>
            <View style={tw`flex-row items-center justify-center mt-6`}>
          <Ionicons name="square-outline" size={24} color="black" />
          <Text style={tw`text-base ml-2`}>
          I agree that in line with the Federal government Anti-Money Law, all my activities here will be within the con((fines of the law.
          </Text>
        </View>

            {/* Proceed Button */}
            <TouchableOpacity 
                style={tw`bg-[#5B00BF] rounded-full py-3 mt-auto`}>
              <Pressable onPress={()=>router.push('/card/view')}>
                    
              <Text style={tw`text-center text-white text-lg font-bold`}>Proceed</Text>
              </Pressable>
            </TouchableOpacity>

            {/* Verification Modal */}
            <Modal visible={isVerificationModalVisible} transparent animationType="slide">
                <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
                    <View style={tw`bg-white w-4/5 rounded-lg`}>
                        <FlatList
                            data={verifications}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => renderItem(item, setVerification, () => setIsVerificationModalVisible(false))}
                        />
                        <Pressable 
                            style={tw`p-4 bg-gray-100 rounded-lg`}
                            onPress={() => setIsVerificationModalVisible(false)}
                        >
                            <Text style={tw`text-center text-sm font-bold text-gray-700`}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={isCountryModalVisible} transparent animationType="slide">
                <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
                    <View style={tw`bg-white w-4/5 rounded-lg`}>
                        <FlatList
                            data={countries}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => renderItem(item, setCountry, () => setIsCountryModalVisible(false))}
                        />
                        <Pressable 
                            style={tw`p-4 bg-gray-100 rounded-lg`}
                            onPress={() => setIsCountryModalVisible(false)}
                        >
                            <Text style={tw`text-center text-sm font-bold text-gray-700`}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
