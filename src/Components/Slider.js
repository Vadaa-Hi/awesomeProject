import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import images from '../assets/images';
import {FlatListSlider} from 'react-native-flatlist-slider';

const {width, height} = Dimensions.get('window');
const CustomBackground = () => {
  const intro = [
    {
      banner: images.rect,
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      banner: images.prius1,
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
  ];
  return (
    <View>
      <FlatListSlider
        data={intro}
        imageKey={'banner'}
        local
        height={340}
        separatorWidth={10}
        contentContainerStyle={{
          // paddingHorizontal: 10,
          CustomBackground: 'green',
        }}
        indicatorContainerStyle={{position: 'absolute', top: 300}}
        indicatorActiveColor={'#8e44ad'}
        indicatorInActiveColor={'#ffffff'}
        indicatorActiveWidth={30}
      />
    </View>
  );
};

export default CustomBackground;

const styles = StyleSheet.create({});
