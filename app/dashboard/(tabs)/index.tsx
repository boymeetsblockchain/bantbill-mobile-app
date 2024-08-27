import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function HomePage() {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      {/* Header */}
      <View style={tw`flex-row justify-between my-1 items-center`}>
        <View style={tw`flex-row gap-x-3`}>
          <Image
            source={require('../../../assets/tony.jpg')}
            style={tw`h-10 w-10 rounded-full`}
          />
          <View>
            <Text style={tw`font-bold text-lg`}>Toni Kross</Text>
            <Text style={tw`text-gray-500`}>Good Morning</Text>
          </View>
        </View>
        <View>
          <Feather name="bell" size={24} color="black" />
        </View>
      </View>

      {/* Wallet Section */}
      <View style={tw`bg-[#5B00BF] p-4 mb-2 rounded-lg`}>
        <View>
          <View style={tw`flex-row gap-x-4 justify-center items-center`}>
            <Text style={tw`text-white font-bold text-xl`}>Available Balance</Text>
            <Pressable onPress={toggleBalanceVisibility}>
              <Feather name={showBalance ? "eye" : "eye-off"} size={24} color="white" />
            </Pressable>
          </View>
          <Text style={tw`text-white font-bold text-3xl my-4 text-center`}>
            {showBalance ? "₦5,000.00" : "****"}
          </Text>
               <View style={tw `items-center justify-center`}>
               <Pressable
                 onPress={()=>router.push('/dashboard/(tabs)/wallet')}
               style={tw`bg-[#DCDCDA] py-2 px-5 w-30 rounded-full`}>
            <View style={tw`flex-row items-center justify-center gap-x-2`}>
              <Text style={tw`font-bold text-xs`}>Fund Wallet</Text>
              <View style={tw`bg-white h-5 w-5 rounded-full flex items-center justify-center`}>
                <Feather name="plus" size={12} color="black" />
              </View>
            </View>
          </Pressable>
               </View>
        </View>
      </View>

      {/* Image */}
      <View style={tw`mt-[-40]`}>
        <Image 
          source={require('../../../assets/image.png')} 
          style={tw`w-full`} 
          resizeMode="contain" 
        />
      </View>

      {/* Features Section */}
      <View style={tw`flex-row justify-between items-center mt-[-30]`}>
        <Text style={tw`text-xl font-bold`}>
          Features
        </Text>
        <Pressable onPress={()=>router.push('/services/')}>
          <Text style={tw`text-[#5B00BF]`}>See All</Text>
        </Pressable>
      </View>

      {/* Feature Buttons */}
      <View style={tw`flex-row justify-between my-2 items-center`}>
        <Pressable onPress={()=>router.push('/services/recharge')} style={tw`bg-[#DCDCDA] items-center justify-center p-2 rounded-md`}>
          <Image
            source={require('../../../assets/airtime.png')}
            style={tw`h-10 w-10 rounded-md`}
          />
          <Text style={tw`font-bold text-sm`}>Recharge</Text>
        </Pressable>
        <Pressable onPress={()=>router.push('/services/data')} style={tw`bg-[#DCDCDA] items-center justify-center p-2 rounded-md`}>
          <Image
            source={require('../../../assets/data.png')}
            style={tw`h-10 w-10 rounded-md`}
          />
          <Text style={tw`font-bold text-sm`}>Data</Text>
        </Pressable>
        <Pressable onPress={()=>router.push('/services/cable')} style={tw`bg-[#DCDCDA] items-center justify-center p-2 rounded-md`}>
          <Image
            source={require('../../../assets/cable.png')}
            style={tw`h-10 w-10 rounded-md`}
          />
          <Text style={tw`font-bold text-sm`}>Cable</Text>
        </Pressable>
        <Pressable onPress={()=>router.push('/services/electricity')} style={tw`bg-[#DCDCDA] items-center justify-center p-2 rounded-md`}>
          <Image
            source={require('../../../assets/electricity.png')}
            style={tw`h-10 w-10 rounded-md`}
          />
          <Text style={tw`font-bold text-sm`}>Electricity</Text>
        </Pressable>
      </View>

      {/* Recent Activities */}
      <View style={tw`flex-row justify-between items-center my-2`}>
        <Text style={tw`text-xl font-bold`}>
          Recent Activities
        </Text>
        <Pressable onPress={()=>router.push('/activity/')}>
          <Text style={tw`text-[#5B00BF]`}>See All</Text>
        </Pressable>
      </View>

      {/* Activity Filters */}
      <View style={tw`flex-row justify-between my-2 items-center`}>
        <Pressable style={tw`bg-[#DCDCDA] items-center justify-center p-2 rounded-md`}>
          <Text>This Day</Text>
        </Pressable>
        <Pressable style={tw`bg-[#5B00BF] items-center justify-center p-2 rounded-md`}>
          <Text style={tw`text-white`}>This Week</Text>
        </Pressable>
        <Pressable style={tw`bg-[#DCDCDA] items-center justify-center p-2 rounded-md`}>
          <Text>This Month</Text>
        </Pressable>
        <Pressable style={tw`bg-[#DCDCDA] items-center justify-center p-2 rounded-md`}>
          <Text>6 Month</Text>
        </Pressable>
      </View>

      {/* Recent Transactions */}
      <View>
        <View style={tw`flex-row justify-between items-center my-2`}>
          <View style={tw`flex-row items-center gap-x-4`}>
            <View style={tw`bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="phone" size={24} color="white" />
            </View>
            <View>
              <Text style={tw`font-bold`}>Mtn Top Up</Text>
              <Text style={tw`text-gray-500`}>March 14, 2024 | 2:25 PM</Text>
            </View>
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>-₦200.00</Text>
            <Text style={tw`text-green-500`}>Completed</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between items-center my-2`}>
          <View style={tw`flex-row items-center gap-x-4`}>
            <View style={tw`bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="tv" size={24} color="white" />
            </View>
            <View>
              <Text style={tw`font-bold`}>Cable TV Subscription</Text>
              <Text style={tw`text-gray-500`}>March 14, 2024 | 2:25 PM</Text>
            </View>
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>-₦700.00</Text>
            <Text style={tw`text-green-500`}>Completed</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between items-center my-2`}>
          <View style={tw`flex-row items-center gap-x-4`}>
            <View style={tw`bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="phone" size={24} color="white" />
            </View>
            <View>
              <Text style={tw`font-bold`}>Mtn Top Up</Text>
              <Text style={tw`text-gray-500`}>March 14, 2024 | 2:25 PM</Text>
            </View>
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>-₦200.00</Text>
            <Text style={tw`text-green-500`}>Completed</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between items-center my-2`}>
          <View style={tw`flex-row items-center gap-x-4`}>
            <View style={tw`bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="tv" size={24} color="white" />
            </View>
            <View>
              <Text style={tw`font-bold`}>Cable TV Subscription</Text>
              <Text style={tw`text-gray-500`}>March 14, 2024 | 2:25 PM</Text>
            </View>
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>-₦700.00</Text>
            <Text style={tw`text-green-500`}>Completed</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
