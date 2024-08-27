import { View, Text, SafeAreaView, Pressable, Image } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import tw from 'twrnc'

// Array of transaction data with randomized content
const transactions = [
  { id: 1, title: 'Mtn Top Up', amount: '-₦200.00', date: 'March 14, 2024 | 2:25 PM', icon: 'phone', status: 'Completed' },
  { id: 2, title: 'Cable TV Subscription', amount: '-₦700.00', date: 'March 14, 2024 | 3:00 PM', icon: 'tv', status: 'Completed' },
  { id: 3, title: 'Electricity Bill', amount: '-₦1,200.00', date: 'March 15, 2024 | 10:15 AM', icon: 'cloud-lightning', status: 'Completed' },
  { id: 4, title: 'Data Bundle Purchase', amount: '-₦500.00', date: 'March 16, 2024 | 5:50 PM', icon: 'wifi', status: 'Pending' },
  { id: 5, title: 'Water Bill Payment', amount: '-₦300.00', date: 'March 17, 2024 | 11:00 AM', icon: 'droplet', status: 'Completed' },
  { id: 6, title: 'Transfer to Bank', amount: '-₦2,000.00', date: 'March 18, 2024 | 8:45 AM', icon: 'send', status: 'Pending' },
  { id: 7, title: 'Movie Ticket Purchase', amount: '-₦1,000.00', date: 'March 19, 2024 | 9:30 PM', icon: 'film', status: 'Completed' },
  { id: 8, title: 'Shopping Payment', amount: '-₦3,500.00', date: 'March 20, 2024 | 2:15 PM', icon: 'shopping-cart', status: 'Completed' },
];

export default function WalletPage() {
  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <View>
        <Text style={tw`my-3 font-bold text-2xl`}>My Wallet</Text>
        <Text style={tw`text-gray-500 pr-10 my-1`}>
          Your center hub for managing your funds and tracking your wallet history
        </Text>
      </View>

      {/* Available Balance */}
      <View style={tw`bg-[#5B00BF] p-4 mb-2 rounded-lg`}>
        <View>
          <View style={tw`flex-row gap-x-4 justify-center`}>
            <Text style={tw`text-white font-bold text-xl`}>Available Balance</Text>
            <Feather name="eye" size={24} color="white" />
          </View>
          <Text style={tw`text-white font-bold text-3xl my-4 text-center`}>₦5,000.00</Text>
        </View>
      </View>

      {/* Recent Activities */}
      <View style={tw`flex-row justify-between items-center my-2`}>
        <Text style={tw`text-xl font-bold`}>Recent Activities</Text>
        <Pressable>
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
        {transactions.map((transaction) => (
          <View
            key={transaction.id}
            style={tw`flex-row justify-between items-center my-2`}
          >
            <View style={tw`flex-row items-center gap-x-4`}>
              <View style={tw`bg-[#5B00BF] h-10 w-10 justify-center items-center rounded-full`}>
                <Feather name={transaction.icon} size={24} color="white" />
              </View>
              <View>
                <Text style={tw`font-bold`}>{transaction.title}</Text>
                <Text style={tw`text-gray-500`}>{transaction.date}</Text>
              </View>
            </View>
            <View>
              <Text style={tw`font-bold text-lg`}>{transaction.amount}</Text>
              <Text style={tw`text-${transaction.status === 'Completed' ? 'green' : 'yellow'}-500`}>
                {transaction.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
