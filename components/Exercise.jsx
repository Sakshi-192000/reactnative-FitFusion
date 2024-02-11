import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchExercises} from '../api/db';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ExerciseList from './ExerciseList';

const Exercise = ({route}) => {
  const {item} = route.params;
  const [exercises, setExercise] = useState([]);

  useEffect(() => {
    if (item) getExercise(item.name);
  }, [item]);

  const getExercise = async bodyPart => {
    let data = await fetchExercises(bodyPart);
    setExercise(data);
  };

  return (
    <ScrollView>
      <Image source={item.image} style={{width: wp(100), height: hp(45)}} />
      <View className="mx-4 space-y-3 mt-4">
        <Text className="text-black font-bold" style={{fontSize: 20}}>
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercise;
