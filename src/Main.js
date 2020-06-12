import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import data from './data.json';
import ItemView from './ItemView';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextStyle}>Restoran Listesi</Text>
      </View>
      <FlatList
        keyExtractor={(items, index) => index.toString()}
        data={data}
        renderItem={({item}) => <ItemView datas={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: Dimensions.get('window').width / 2,
    height: 40,
    borderWidth: 2.5,
    borderRadius: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderBottomColor: 'red',
  },
  headerTextStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#2B303A',
  },
});

export default Main;
