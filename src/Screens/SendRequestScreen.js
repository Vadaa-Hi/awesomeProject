import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NumberPad from '../Components/NumberPad';
import images from '../assets/images';
const SendRequestScreen = ({navigation}) => {
  const [amount, setAmount] = useState('0');
  const convertToDollars = currentAmount => {
    const newAmount = currentAmount / 100;
    return newAmount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const pressKey = (item, index) => {
    setAmount(prev => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 10}}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="white"
          onPress={() => navigation.goBack('Details')}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: '500',
          fontSize: 32,
        }}>
        Send
      </Text>
      <View style={styles.Amount}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '500',
            fontSize: 32,
          }}>
          {convertToDollars(amount)}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#727479',
            fontWeight: '400',
            fontSize: 16,
          }}>
          Choose amount to send{' '}
        </Text>
      </View>
      <View style={styles.User}>
        <Image style={styles.ProfilePhoto} source={images.avatar} />
        <View style={styles.UserDetails}>
          <Text
            style={{
              // textAlign: 'center',
              color: 'white',
              fontWeight: '400',
              fontSize: 20,
            }}>
            DesignIntoCode
          </Text>
          <Text
            style={{
              // textAlign: 'center',
              color: '#727479',
              fontWeight: '400',
              fontSize: 16,
            }}>
            Patreon
          </Text>
        </View>
        <MaterialIcons name="edit" size={16} color="#ffffff" />
      </View>
      <TouchableOpacity style={styles.Send}>
        <Text
          style={{
            // textAlign: 'center',
            color: 'white',
            fontWeight: '400',
            fontSize: 20,
          }}>
          Send {convertToDollars(amount)} to DesignIntoCode
        </Text>
      </TouchableOpacity>
      <NumberPad onPress={pressKey} />
    </SafeAreaView>
  );
};

export default SendRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  Amount: {
    marginTop: 0,
    alignItems: 'center',
  },
  User: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  ProfilePhoto: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    // marginHorizontal: 16,
  },
  Send: {
    margin: 16,
    backgroundColor: '#5196f4',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  UserDetails: {
    flex: 1,
    marginBottom: 16,
  },
});
