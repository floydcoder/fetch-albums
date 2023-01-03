import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { getUsers } from '../hooks/useData';

const AlbumDetail = ({ route }) => {
  const [data] = getUsers();
  const { id, title } = route.params;

  console.log('Id being passed to detail: ', id);
  console.log('Title being passed to detail: ', title);
  console.log('all users data: ', data);

  const getUsernameById = (id) => {
    return data.find((user) => user.id === id);
  };

  const user = getUsernameById(id);
  console.log('The user associated is: ', user);

  return (
    <SafeAreaView>
      <Text style={styles.item}>{id}</Text>
      <Text style={styles.item}>{title}</Text>
      {user ? <Text style={styles.item}>{user.username}</Text> : null}
    </SafeAreaView>
  );
};
export default AlbumDetail;

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    width: 200,
    backgroundColor: '#c9c0a7',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
