import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  SectionList,
  RefreshControl,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

export default function HeroScreen({navigation}) {
  const [items, setItems] = useState(DATA);
  const [name, setName] = useState('');
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    // {
    //   title: 'Title 2',
    //   data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    // },
    // {
    //   title: 'Title 3',
    //   data: ['Item 3-1'],
    // },
    // {
    //   title: 'Title 4',
    //   data: ['Item 4-1', 'Item 4-2'],
    // },
  ];

  return (
    <SafeAreaView>
      <Button onPress={() => navigation.goBack('HomeScreen')} title="Go back" />
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>Please write your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter name"
          onChangeText={value => {
            setName(value);
          }}
          maxLength={10}
        />
        <Text style={styles.text}>Your name is: {name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
    borderColor: '#555',
  },
});
