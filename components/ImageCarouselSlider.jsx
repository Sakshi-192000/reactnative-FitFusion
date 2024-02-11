import React from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {sliderImages} from '../images/constantimages';
import {Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const renderItem = ({item}, ParallaxProps) => {
  return (
    <View style={{height: hp(25), width: wp(100) - 70}}>
      <ParallaxImage
        source={item}
        containerStyle={{borderRadius: 30, flex: 1}}
        parallaxFactor={1}
        {...ParallaxProps}
      />
    </View>
  );
};
const ImageCarouselSlider = () => {
  return (
    <Carousel
      data={sliderImages}
      autoplay={true}
      loop={true}
      renderItem={renderItem}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{display: 'flex', alignItems: 'center'}}
    />
  );
};

export default ImageCarouselSlider;
