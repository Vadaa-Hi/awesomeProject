import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {render} from 'react-dom';
import NumberPad from '../Components/NumberPad';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default PinScreen = ({navigation}) => {
  const [pinCount, setPinCount] = useState(0);
  const totalPins = 6;

  useEffect(() => {
    if (pinCount === totalPins) {
      navigation.navigate('Tabs');
    }
  }, [pinCount]);

  const renderPins = () => {
    const pins = [];
    for (let x = 1; x <= totalPins; x++) {
      pins.push(
        x <= pinCount ? (
          <View key={x} style={styles.PinContainer}>
            <View style={styles.Pin} />
          </View>
        ) : (
          <View key={x} style={styles.PinContainer} />
        ),
      );
    }
    return pins;
  };

  const pressKey = (_, index) => {
    setPinCount(prev => {
      return index != 10 ? prev + 1 : prev - 1;
    });
  };
  return (
    <SafeAreaView style={styles.container}>
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
        MyBank
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 20,
          color: 'white',
          marginTop: 32,
        }}>
        Enter your PIN code.
      </Text>
      <View style={styles.AccessPin}>{renderPins()}</View>
      <Text style={{textAlign: 'center', marginTop: 8, color: '#9c9c9f'}}>
        Forgot PIN?
      </Text>
      <TouchableOpacity
        style={styles.UseTouch}
        onPress={() => navigation.navigate('Details')}>
        <Fontisto name="locked" size={16} color="#964ff0" />
        <Text
          style={{
            fontWeight: 'bold',
            color: '#964ff0',
            marginLeft: 8,
          }}>
          Use Touch ID
        </Text>
      </TouchableOpacity>
      <NumberPad onPress={pressKey} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  AccessPin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginLeft: 64,
    marginBottom: 16,
    marginRight: 64,
  },
  UseTouch: {
    marginTop: 32,
    marginBottom: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PinContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#5196f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pin: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5196f4',
  },
});
