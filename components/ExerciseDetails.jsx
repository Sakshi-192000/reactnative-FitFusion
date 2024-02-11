import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ExerciseDetails = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  //console.log(item)
  return (
    <View className="flex flex-1 ">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{uri: item.gifUrl}}
          style={{width: wp(100), height: wp(100)}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="mx-2 absolute rounded-full mt-2 right-2">
        <AntDesign name="closecircle" size={30} color="#f43f5e" />
      </TouchableOpacity>

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}>
        <Text
          className="text-black capitalize font-semibold tracking-wide "
          style={{fontSize: hp(3.5)}}>
          {item.name}
        </Text>
        <Text
          style={{fontSize: hp(2)}}
          className="text-neutral-700 tracking-wide">
          Equipment:{' '}
          <Text className="font-bold text-neutral-800">{item.equipment}</Text>
        </Text>

        <Text
          style={{fontSize: hp(2)}}
          className="text-neutral-700 tracking-wide">
          Target:{' '}
          <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Text>
        <Text
          className="text-black capitalize font-semibold tracking-wide "
          style={{fontSize: hp(3.5)}}>
          Instructions
        </Text>

        <Text className="text-neutral-800"> {item.instructions}</Text>
      </ScrollView>
    </View>
  );
};

export default ExerciseDetails;

const styles = StyleSheet.create({});
