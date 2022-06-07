import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import images from '../assets/images';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const NewScreen = ({navigation}) => {
  return (
    <ScrollView styles={{backgroundColor: '#FFF'}}>
      <ImageBackground style={{height: 0.5 * h}} source={images.nature}>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 0.3 * h,
          }}>
          <Image
            source={images.avatar}
            style={{width: 50, height: 50, borderRadius: 3}}
          />
          <Text style={{fontSize: 26, color: '#fff', marginTop: 20}}>
            Huda Kattan
          </Text>
          <Text style={{fontSize: 18, color: '#fff'}}>25.8m followers</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: '#fff',
          marginTop: -40,
          borderRadius: 50,
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontSize: 18, marginTop: 10}}>
          Photos & Videos
        </Text>
        <Text style={{color: '#998FA2'}}>269 shots</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={images.paris}
            style={{
              borderTopLeftRadius: 40,
              marginRight: 8,
              borderBottomLeftRadius: 40,
              height: 255,
              width: 110,
            }}
          />
          <View>
            <Image
              source={images.glass}
              style={{borderTopRightRadius: 40, height: 125, width: 110}}
            />
            <Image
              source={images.glass}
              style={{
                borderBottomRightRadius: 40,
                height: 125,
                width: 110,
                marginTop: 4,
              }}
            />
          </View>
        </View>
        <View>
          <Button
            onPress={() => navigation.goBack('HomeScreen')}
            title="Go back"
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default NewScreen;
