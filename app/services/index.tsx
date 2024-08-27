import { View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import { BackButton } from '../../components/backbutton';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function Services() {
  const services = [
    { name: 'Recharge', img: require('../../assets/airtime.png'), href: '/recharge' },
    { name: 'Data', img: require('../../assets/data.png'), href: '/data' },
    { name: 'Cable', img: require('../../assets/cable.png'), href: '/cable' },
    { name: 'Electricity', img: require('../../assets/electricity.png'), href: '/electricity' },
    { name: 'Betting', img: require('../../assets/bet.png'), href: '/betting' },
    { name: 'Withdraw', img: require('../../assets/withdraw.png'), href: '/services/withdrawal' },
    { name: 'Internal Transfer', img: require('../../assets/transfer.png'), href: 'services/transfer' },
    { name: 'Add Bank Account', img: require('../../assets/account.png'), href: '/services/bank' },
    { name: 'Account Statement', img: require('../../assets/statement.png'), href: '/services/statement' },
    { name: 'Payment Received', img: require('../../assets/data.png'), href: '/services/payment' },
    // { name: 'LeaderBoard', img: require('../../assets/leaderboard.png'), href: '/leaderboard' },
    { name: 'Savings', img: require('../../assets/savings.png'), href: '/services/savings/' },
    { name: 'Airtime to Cash', img: require('../../assets/airtimetocash.png'), href: '/services/airtimetocash' },
    { name: 'GiftCard', img: require('../../assets/gift.png'), href: '/giftcard' },
  ];

  return (
    <SafeAreaView style={tw`p-6 flex-1`}>
      {/* Header */}
      <View style={tw`gap-x-4 flex-row items-center my-3`}>
        <BackButton />
        <Text style={tw`text-2xl font-bold text-black`}> Services </Text>
      </View>

      {/* Service Grid */}
      <View style={tw`flex-row flex-wrap justify-between`}>
        {services.map((service, index) => (
          <Pressable
            key={index}
            onPress={() => router.push(service.href)}
            style={tw`bg-[#DCDCDA] items-center justify-center p-2 rounded-md m-2 w-20 h-24`}
          >
            <Image source={service.img} style={tw`h-10 w-10 rounded-md`} />
            <Text style={tw`font-bold text-xs text-center mt-1`}>{service.name}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
