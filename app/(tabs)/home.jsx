import React from 'react';
import { View, Button, Alert, StyleSheet,TouchableOpacity,Text } from 'react-native';
import * as SMS from 'expo-sms';

const index = () => {
  const sendSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      try {
        const  result  = await SMS.sendSMSAsync(
          ['8310669294','6363105736','8296259270'],
          'Hello! I am in an emergency situation' 
        );
        Alert.alert('Sent', "Message sent succcessfully");
      } catch (error) {
        console.error('Error sending SMS:', error); 
        Alert.alert('Error', `An error occurred: ${error.message}`);
      }
    } else {
      Alert.alert('Error', 'SMS service is not available on this device');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Text style={styles.contains} >Having an emergency!? </Text>
        <Text style={styles.contains2}>Press the button below help will arrive soon</Text>
      </View>
      
    <TouchableOpacity style={styles.button} onPress={sendSMS}>
      <Text style={styles.buttonText}>Alert</Text>
    </TouchableOpacity>
    <Text style={styles.contains2}>Don't panic</Text>
    
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  // justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
},
contain:{
  paddingVertical: 80,
  paddingHorizontal: 40,
  fontSize:60
},
contains2:{
  paddingTop:30,
  paddingHorizontal: 40,
  
  fontSize:20,
  textAlign:'center',
  color:'grey'
},

contains:{
  fontSize:30

},
button: {
  backgroundColor: 'red', 
  paddingVertical: 85,
  paddingHorizontal: 80,
  borderRadius: 200,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
},
buttonText: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
},
});

export default index;