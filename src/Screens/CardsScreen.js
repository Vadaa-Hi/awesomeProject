import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CardsScreen = ({navigation}) => {
  const myCards = [
    {
      id: '1',
      color: '#5750f0',
      number: '1234',
      exp: '10/2020',
      logo: images.visa,
    },
    {
      id: '2',
      color: '#5750f0',
      number: '1234',
      exp: '10/2020',
      logo: images.amazon,
    },
    {
      id: '3',
      color: '#5750f0',
      number: '1234',
      exp: '10/2020',
      logo: images.paypal,
    },
  ];
  const renderCard = ({item}) => (
    <View style={styles.CardContainer}>
      <View style={styles.CardInfo}>
        <View style={styles.CardLogoContainer} bgColor={item.color}>
          <Image
            source={item.logo}
            resizeMethod="contain"
            style={styles.CardLogo}
          />
        </View>
        <View style={styles.CardDetails}>
          <Text style={{color: '#727479'}}>
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
            &bull;&bull;&bull;&bull;
            <Text
              style={{
                color: '#727479',
                fontWeight: '400',
                fontSize: 16,
              }}>
              {item.number}
            </Text>
          </Text>
          <Text
            style={{
              color: '#727479',
              fontWeight: '400',
              fontSize: 16,
            }}>
            {item.exp}
          </Text>
        </View>
      </View>
      <View style={styles.CardActions}>
        <TouchableOpacity style={styles.Remove}>
          <Text
            style={{
              color: '#727479',
              fontWeight: '400',
              fontSize: 16,
            }}>
            Remove
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Update}>
          <Text
            style={{
              color: '#727479',
              fontWeight: '400',
              fontSize: 16,
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 20}}>
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
          marginBottom: 16,
        }}>
        MyCards
      </Text>
      <FlatList data={myCards} renderItem={renderCard} />
    </SafeAreaView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  Card: {
    // paddingHorizontal: 8,
    marginTop: 32,
  }, //flat
  CardContainer: {
    backgroundColor: '#292929',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  }, //v
  CardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#393939',
    paddingBottom: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
  }, //v
  CardLogoContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'red',
    // `${props => props.bgColor}`,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  }, //v
  CardLogo: {width: 40, height: 40}, //img
  CardDetails: {
    flex: 1,
    alignItems: 'flex-end',
  }, //v
  CardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }, //v
  Remove: {
    marginRight: 32,
  }, //touch
  Update: {
    backgroundColor: '#3d3d3d',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  }, //touch
});
