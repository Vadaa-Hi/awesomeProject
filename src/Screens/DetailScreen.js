import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import MyComponent from '../Components/MyComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PinScreen from './PinScreen';
export default DetailScreen = ({navigation}) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <View style={{margin: 20}}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="white"
          onPress={() => navigation.goBack('HomeScreen')}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 40,
          color: '#964ff6',
          marginTop: 32,
        }}>
        mybank
      </Text>
      <Touch onPress={() => navigation.navigate('Tabs')}>
        <Circle bgColor="#1e1e1e">
          <Circle bgColor="#5196F405">
            <Circle bgColor="#51964F10">
              <Circle bgColor="#5196F430">
                <TouchButton>
                  <MaterialIcons name="fingerprint" size={64} />
                </TouchButton>
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </Touch>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 20,
          color: 'white',
        }}>
        Touch ID sensor for access to {'\n'} your mybank account.{' '}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '300',
          fontSize: 15,
          color: '#9c9c9f',
          marginTop: 16,
        }}>
        Please very your identity {'\n'} using Touch ID
      </Text>
      <PinAccess onPress={() => navigation.navigate('Pin')}>
        <Fontisto name="locked" size={16} color="#964ff0" />
        <Text
          style={{
            // textAlign: 'center',
            fontWeight: 'bold',
            // fontSize: 15,
            color: '#964ff0',
            marginLeft: 8,
          }}>
          Enter Access PIN
        </Text>
      </PinAccess>
      {/* <StatusBar  */}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;
const Touch = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.View`
  background-color: ${props => props.bgColor};
  padding: 32px;
  border-radius: 999px;
`;
const TouchButton = styled.View`
  background-color: #5196f4;
  padding: 8px;
  border-radius: 100px;
`;
const PinAccess = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StatusBar = styled.StatusBar``;
