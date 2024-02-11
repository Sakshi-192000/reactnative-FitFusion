import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const ExerciseList = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({item}) => <ExercisesCard item={item} />}
      />
    </View>
  );
};

export const ExercisesCard = ({item}) => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity className="flex py-2 mx-2 space-y-2" onPress={()=> navigation.navigate('Details' , {item})}>
        <View className="shadow rounded-[25px] bg-neutral-200">
          <Image
            source={{uri: item.gifUrl}}
            contentFit="cover"
            style={{
              width: widthPercentageToDP(44),
              height: widthPercentageToDP(52),
            }}
            className="rounded-[25px]"
          />
        </View>
        <Text className="text-neutral-700 font-semibold ml-l tracking-wide">
          {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};




export default ExerciseList;

const styles = StyleSheet.create({});
