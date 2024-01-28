import React from 'react';
import { View, StyleSheet } from 'react-native';

const TrashCanIcon = () => {
  return (
    <View style={styles.trashCanIcon}>
      <View style={styles.trashCanBody}></View>
      <View style={styles.trashCanLid}></View>
      <View style={styles.trashCanHandle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  trashCanIcon: {
    width: 20,
    height: 30,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  trashCanBody: {
    width: '80%',
    height: '70%',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: '10%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  trashCanLid: {
    width: '100%',
    height: '20%',
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  trashCanHandle: {
    width: '20%',
    height: '5%',
    backgroundColor: '#bfbfbf',
    position: 'absolute',
    top: '30%',
    left: '40%',
    borderRadius: 2.5,
  },
});

export default TrashCanIcon;