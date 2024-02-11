import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {bodyParts} from '../images/constantimages';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const BodyPartsCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{width: wp(44), height: wp(52)}}
      className="flex justify-end p-4 mb-3"
      onPress={() => navigation.navigate('Exercises', {item})}>
      <Image
        source={item.image}
        resizeMode="cover"
        style={{width: wp(44), height: wp(52)}}
        className="rounded-[35px] absolute mt-3"
      />
      <Text
        className="text-white font-semibold text-center tracking-wide "
        style={{fontSize: 16}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const BodyParts = () => {
  return (
    <View className="mx-4">
      <Text className="text-black font-semibold" style={{fontSize: 16}}>
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({item}) => (
          <View>
            <BodyPartsCard item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default BodyParts;
