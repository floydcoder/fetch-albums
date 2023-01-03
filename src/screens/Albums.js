import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { getAllAlbums } from '../hooks/useData';

const Albums = ({ navigation }) => {
  const [data] = getAllAlbums();
  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Marco Stevanella - 101307949</Text>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AlbumDetails', {
                  id: item.userId,
                  title: item.title,
                })
              }>
              <Text style={styles.album}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  list: {
    marginVertical: 20,
  },
  title: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  album: {
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    backgroundColor: 'lightblue',
  },
});

export default Albums;
