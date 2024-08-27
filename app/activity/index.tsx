import { View, Text, SafeAreaView, Pressable,ScrollView } from 'react-native';
import tw from 'twrnc';
import { Header } from '../../components/header';
import Feather from '@expo/vector-icons/Feather';

export default function Activity() {
  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <Header heading='Recent Activity' />

      {/* Time Filters */}
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
      <ScrollView>
        {[
          { name: 'Mtn Top Up', icon: 'phone', amount: '-₦200.00', status: 'Completed', date: 'March 14, 2024 | 2:25 PM' },
          { name: 'Cable TV Subscription', icon: 'tv', amount: '-₦700.00', status: 'Completed', date: 'March 14, 2024 | 2:25 PM' },
          { name: 'Electricity Bill', icon: 'zap', amount: '-₦1500.00', status: 'Completed', date: 'March 13, 2024 | 4:15 PM' },
          { name: 'Data Subscription', icon: 'wifi', amount: '-₦1000.00', status: 'Completed', date: 'March 12, 2024 | 10:05 AM' },
          { name: 'Mtn Top Up', icon: 'phone', amount: '-₦200.00', status: 'Completed', date: 'March 11, 2024 | 6:45 PM' },
          { name: 'Cable TV Subscription', icon: 'tv', amount: '-₦700.00', status: 'Completed', date: 'March 11, 2024 | 2:25 PM' },
          { name: 'Electricity Bill', icon: 'zap', amount: '-₦1500.00', status: 'Completed', date: 'March 10, 2024 | 5:30 PM' },
          { name: 'Data Subscription', icon: 'wifi', amount: '-₦1000.00', status: 'Completed', date: 'March 10, 2024 | 9:00 AM' },
          { name: 'Data Subscription', icon: 'wifi', amount: '-₦1000.00', status: 'Completed', date: 'March 12, 2024 | 10:05 AM' },
          { name: 'Mtn Top Up', icon: 'phone', amount: '-₦200.00', status: 'Completed', date: 'March 11, 2024 | 6:45 PM' },
          { name: 'Cable TV Subscription', icon: 'tv', amount: '-₦700.00', status: 'Completed', date: 'March 11, 2024 | 2:25 PM' },
          { name: 'Electricity Bill', icon: 'zap', amount: '-₦1500.00', status: 'Completed', date: 'March 10, 2024 | 5:30 PM' },
          { name: 'Data Subscription', icon: 'wifi', amount: '-₦1000.00', status: 'Completed', date: 'March 10, 2024 | 9:00 AM' },
          { name: 'Data Subscription', icon: 'wifi', amount: '-₦1000.00', status: 'Completed', date: 'March 12, 2024 | 10:05 AM' },
          { name: 'Mtn Top Up', icon: 'phone', amount: '-₦200.00', status: 'Completed', date: 'March 11, 2024 | 6:45 PM' },
          { name: 'Cable TV Subscription', icon: 'tv', amount: '-₦700.00', status: 'Completed', date: 'March 11, 2024 | 2:25 PM' },
          { name: 'Electricity Bill', icon: 'zap', amount: '-₦1500.00', status: 'Completed', date: 'March 10, 2024 | 5:30 PM' },
          { name: 'Data Subscription', icon: 'wifi', amount: '-₦1000.00', status: 'Completed', date: 'March 10, 2024 | 9:00 AM' },
        ].map((transaction, index) => (
          <View key={index} style={tw`flex-row justify-between items-center my-2`}>
            <View style={tw`flex-row items-center gap-x-4`}>
              <View style={tw`bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
                <Feather name={transaction.icon} size={24} color="white" />
              </View>
              <View>
                <Text style={tw`font-bold`}>{transaction.name}</Text>
                <Text style={tw`text-gray-500`}>{transaction.date}</Text>
              </View>
            </View>
            <View>
              <Text style={tw`font-bold text-lg`}>{transaction.amount}</Text>
              <Text style={tw`text-green-500`}>{transaction.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
