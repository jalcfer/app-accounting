import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Accounting extends React.Component{
	render(){
		return(
			<View style={styles.container}>
      			<Text style={styles.text }>There, you see all accounts of your clients!</Text>
    		</View>
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
  	fontSize: 30,
  }
});