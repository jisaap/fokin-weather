import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={style.text}>Hello!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    // 텍스트가 부모의 color를 상속 받지 않음
    // color: "white",
    justifyContent: 'center',
  },
  text:{
    color:"white",
    // width:"100px"   에러남
  }
});
