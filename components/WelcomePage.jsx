import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const WelcomePage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('HomePage');
  };
  return (
    <View className=" flex-1 flex justify-end ">
      <Image
        className="h-full w-full absolute"
        source={require('../assets/welcome.webp')}
      />
      <View className="items-center">
        <Text className="text-white " style={{fontSize: 30}}>
          {' '}
          Best <Text className="text-rose-600">Workouts</Text> For You
        </Text>
      </View>
      <TouchableOpacity
        onPress={handlePress}
        className=" font-bold tracking-widest bg-rose-600 flex justify-center items-center mx-auto rounded-full mb-10 border-[2px] border-white"
        style={{height: 60, width: 200}}>
        <Text className="text-white" style={{fontSize: 24}}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomePage;
