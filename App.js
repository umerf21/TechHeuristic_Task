import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const num = require('./data.json');
  const [mean, setMean] = useState();
  const [median, setMedian] = useState();
  const [mode, setMode] = useState();

  //console.log(num)

  const renderitem = (item) => {
    return(
      <View style={styles.container}>
      <View style={{flexDirection:'row', padding:10}}>
      <Button title="Mean" onPress={getmean}/>
      <Text style={{fontSize:18,marginHorizontal:10}}>{mean}</Text>
      </View>
      <View style={{flexDirection:'row', padding:10}}>
      <Button title="Median" onPress={getMedian}/>
      <Text style={{fontSize:18,marginHorizontal:10}}>{median}</Text>
      </View>
      <View style={{flexDirection:'row', padding:10}}>
      <Button title="Mode" onPress={getMode}/>
      <Text style={{fontSize:18,marginHorizontal:10}}>{mode}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    )
  }

  const getmean = () => {
    const n = num.Num;
    let sum = (total,current) => total+current;
    let avg = n.reduce(sum)/n.length;
    setMean(avg);
  }

  const getMedian = () => {
    const numsort = num.Num.sort()
    const mid = Math.floor(numsort.length/2);
    let median = numsort.length % 2 == 0 ? (numsort[mid] + numsort[mid - 1]) / 2 : numsort[mid - 1];
    setMedian(median)
  }
  

  const getMode = () => {
    const n = num.Num;
    let maxnum = 0, count=[],modes=[], a,i;
    for (i=0; i<n.length;i++){
      a = n[i]
      count[a] = (count[a] || 0) + 1;
      if (count[a] > maxnum) {
          maxnum = count[a];
      }

    }
    for (i in count)
    if (count.hasOwnProperty(i)) {
        if (count[i] === maxnum) {
            modes.push(Number(i));
        }
    }
    console.log(modes)
    setMode(modes)
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <View style={{flexDirection:'row', padding:10}}>
      <Button title="Mean" onPress={getmean}/>
      <Text style={{fontSize:18,marginHorizontal:10}}>{mean}</Text>
      </View>
      <View style={{flexDirection:'row', padding:10}}>
      <Button title="Median" onPress={getMedian}/>
      <Text style={{fontSize:18,marginHorizontal:10}}>{median}</Text>
      </View>
      <View style={{flexDirection:'row', padding:10}}>
      <Button title="Mode" onPress={getMode}/>
      <Text style={{fontSize:18,marginHorizontal:10}}>{mode}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
      <FlatList
      data={num}
      renderItem={renderitem}
      
      // onEndReachedThreshold={0.5}
      // initialNumToRender={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
