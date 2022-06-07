import * as React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const MyComponent = ({text, onPress, iconName}) => (
  <Button
    icon={iconName}
    mode="contained"
    labelStyle={{color: 'black'}}
    color="black"
    onPress={onPress}
    style={{
      width: 345,
      height: 48,
      justifyContent: 'center',
      backgroundColor: 'white',
    }}>
    <View>
      <Text>{text}</Text>
    </View>
  </Button>
);

export default MyComponent;
