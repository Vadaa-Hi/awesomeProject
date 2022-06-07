import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import GradientBtn from '../Components/GradientBtn';
import NewScreen from './NewScreen';
import {FlatListSlider} from 'react-native-flatlist-slider';
import colors from '../styles/colors';
import {TextInput} from 'react-native-paper';
import Onboarding from '../Components/Onboarding';

const Test = ({props, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => navigation.goBack('HomeScreen')} title="Go back" />
      <Onboarding />
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomPosition: {
    position: 'absolute',
    bottom: -250,
    right: 0,
    left: 0,
    padding: 36,
  },
});
