import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default NumberPad = ({onPress}) => {
  const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    <MaterialIcons name="keyboard-backspace" size={24} />,
  ];
  return (
    <View style={styles.KeyPad}>
      {buttons.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.Number}
            key={index}
            onPress={() => onPress(item, index)}>
            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                fontSize: 30,
                marginRight: 6,
              }}>
              {' '}
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  KeyPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 65,
  },
  Number: {
    width: 75,
    height: 75,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    //     marginBottom: 5,
    marginLeft: 20,
    //     marginRight: 5,
    borderWidth: 1,
    borderColor: '#ffffff20',
  },
});
