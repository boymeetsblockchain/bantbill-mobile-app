import { View, Text, Pressable, SafeAreaView, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function ProfilePage() {
  return (
    <SafeAreaView style={tw `flex-1 p-6`}>
      <View style={tw `items-center my-15 justify-center`}>
        <Image source={require('../../../assets/tony.jpg')} style={tw `h-20 w-20 rounded-full`} resizeMode='contain'/>
        <Text style={tw `font-bold text-2xl `}>Toni Kross</Text>
        <Text style={tw `text-gray-500 font-bold`}>tonikross@gmai.com</Text>
      </View>
      <View style={tw `gap-y-4`}>
        
        {/* Profile Setting */}
        <Pressable
         onPress={()=>router.push('/editprofile/')}
        style={tw `justify-between flex-row items-center bg-[#DCDCDA] rounded-full py-2 px-4`}>
          <View style={tw `flex-row items-center`}>
            <View style={tw `bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="user" size={24} color="white" />
            </View>
            <Text style={tw `font-bold text-2xl ml-4`}>Profile Setting</Text>
          </View>
          <Feather name="chevron-right" size={24} color="black" />
        </Pressable>

        {/* Settings */}
        <Pressable
         onPress={()=>router.push('/settings/')}
        style={tw `justify-between flex-row items-center bg-[#DCDCDA] rounded-full py-2 px-4`}>
          <View style={tw `flex-row items-center`}>
            <View style={tw `bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="settings" size={24} color="white" />
            </View>
            <Text style={tw `font-bold text-2xl ml-4`}>Settings</Text>
          </View>
          <Feather name="chevron-right" size={24} color="black" />
        </Pressable>

        {/* Support */}
        <Pressable
        onPress={()=>router.push('/support/')}
         style={tw `justify-between flex-row items-center bg-[#DCDCDA] rounded-full py-2 px-4`}>
          <View style={tw `flex-row items-center`}>
            <View style={tw `bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="headphones" size={24} color="white" />
            </View>
            <Text style={tw `font-bold text-2xl ml-4`}>Support</Text>
          </View>
          <Feather name="chevron-right" size={24} color="black" />
        </Pressable>

        {/* Referrals */}
        <Pressable
         onPress={()=>router.push('/refferals/')}
        style={tw `justify-between flex-row items-center bg-[#DCDCDA] rounded-full py-2 px-4`}>
          <View style={tw `flex-row items-center`}>
            <View style={tw `bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="gift" size={24} color="white" />
            </View>
            <Text style={tw `font-bold text-2xl ml-4`}>Referrals</Text>
          </View>
          <Feather name="chevron-right" size={24} color="black" />
        </Pressable>

        {/* Logout */}
        <Pressable style={tw `justify-between flex-row items-center bg-[#DCDCDA] rounded-full py-2 px-4`}>
          <View style={tw `flex-row items-center`}>
            <View style={tw `bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
              <Feather name="log-out" size={24} color="white" />
            </View>
            <Text style={tw `font-bold text-2xl ml-4`}>Logout</Text>
          </View>
          <Feather name="chevron-right" size={24} color="black" />
        </Pressable>

      </View>
    </SafeAreaView>
  );
}
