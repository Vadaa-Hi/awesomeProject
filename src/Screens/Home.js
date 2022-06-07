import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LineChart} from 'react-native-chart-kit';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          margin: 20,
        }}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="white"
          onPress={() => navigation.goBack('HomeScreen')}
        />
        <View style={styles.Header}>
          <Image source={images.avatar} style={styles.ProfilePhoto} />
          <View style={styles.Welcome}>
            <Text style={styles.Txt}>Welcome, </Text>
            <Text
              style={{
                color: '#727479',
                fontWeight: '400',
                fontSize: 16,
              }}>
              DesignIntoCode
            </Text>
          </View>
          <MaterialIcons name="settings" size={24} color="#565656" />
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: '500',
          fontSize: 32,
        }}>
        $9,184.17
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#727479',
          fontWeight: '400',
          fontSize: 16,
        }}>
        {' '}
        Current Balance
      </Text>
      <View style={styles.Chart}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#1e1e1e',
            backgroundGradientFrom: '#1e1e1e',
            backgroundGradientTo: '#1e1e1e',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <FlatList
        style={styles.Purchases}
        ListHeaderComponent={
          <>
            <View style={styles.TransactionsHeader}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#727479',
                  fontWeight: '400',
                  fontSize: 16,
                }}>
                Last Purchases
              </Text>
              <MaterialIcons name="sort" size={24} color="#5196f4" />
            </View>
            <View style={styles.SearchContainer}>
              <MaterialIcons name="search" size={24} color="#5196f4" />
              <TextInput placeholder="Search Transactions" />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  ProfilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  Welcome: {
    flex: 1,
    paddingStart: 20,
    // paddingRight: 0,
  },
  Txt: {
    // textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
  },
  Purchases: {
    backgroundColor: '#2c2c2c',
    padding: 16,
  },
  TransactionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SearchContainer: {
    backgroundColor: '#3d3d3d',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
    margin: 16,
  },
  Search: {
    flex: 1,
    paddingHorizontal: 16,
    color: '#dbdbdb',
  },
  Chart: {},
});
