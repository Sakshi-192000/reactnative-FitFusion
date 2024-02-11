import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageCarouselSlider from './ImageCarouselSlider';
import BodyParts from './BodyParts';

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-neutral-200 flex space-y-5"
      edges={['top']}>
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text style={{fontSize: 50}} className="text-black font-bold">
            {' '}
            READY TO{' '}
          </Text>
          <Text style={{fontSize: 50}} className="text-rose-600 font-bold">
            {' '}
            WORKOUT{' '}
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2 ">
          <Image
            source={require('../assets/welcome.webp')}
            style={{height: 48, width: 50}}
            className="rounded-full"
          />
          <View
            className="bg-neutral-200 rounded-full flex justify-center items-center border=[3px] border-black"
            style={{height: 48, width: 50}}>
            <Ionicons name="notifications" size={30} color="gray" />
          </View>
        </View>
      </View>
      <View>
        <ImageCarouselSlider />
      </View>

      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
