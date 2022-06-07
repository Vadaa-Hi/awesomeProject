import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import images from '../assets/images';
import GradientBtn from '../Components/GradientBtn';
import colors from '../styles/colors';
import MyComponent from '../Components/MyComponent';
import {fonts} from '../assets/fonts';
const HomeScreen = ({navigation}) => {
  const indtroductionAttachmets = [
    {
      url: images.rect,
    },
    {
      url: images.prius1,
    },
    {
      url: images.prius2,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatListSlider
          data={indtroductionAttachmets}
          imageKey={'url'}
          indicatorContainerStyle={{
            position: 'absolute',
            bottom: 50,
            // marginTop: 40,
          }}
          indicatorActiveColor={colors.colorGreen}
          indicatorInActiveColor={'#ffffff'}
          indicatorActiveWidth={30}
          animation
          height={450}
          local
        />
      </View>
      <ImageBackground source={images.Frame1} style={{flex: 1}}>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            top: -25,
          }}>
          <GradientBtn
            text="Бүртгүүлэх"
            onPress={() => navigation.navigate('New Background')}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            paddingBottom: 40,
            // backgroundColor: 'red',
          }}>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <MyComponent
              text="Google"
              iconName={'google'}
              style={styles.title}
              onPress={() => navigation.navigate('New Background')}
            />
          </View>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <MyComponent
              text="MyBank"
              iconName={'facebook'}
              onPress={() => navigation.navigate('Details')}
            />
          </View>

          <Button
            title="Onboard"
            color="white"
            onPress={() => navigation.navigate('Test')}
          />
          <Button
            title="Hero Test"
            color="white"
            onPress={() => navigation.navigate('Hero')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 10,
    // fontFamily: fonts.Rubik,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});
export default HomeScreen;
