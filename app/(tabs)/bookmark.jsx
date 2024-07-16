// import { Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const Bookmark = () => {
//   return (
//     <SafeAreaView className="px-4 my-6 bg-primary h-full">
//       <Text className="text-2xl text-white font-psemibold">Bookmark</Text>
//     </SafeAreaView>
//   );
// };

// export default Bookmark;

import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity } from 'react-native';
import React from 'react'
import { images } from "../../constants";

const Index = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={mystyle.title}>What Happened!?</Text>
      <View style={mystyle.top}>
        <Image style={mystyle.image} source={images.logo4} />
        <Text style={mystyle.text}>Accident</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Accident")} 
        title="Get started"
        style={{padding:10,
        margin:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:10,
        backgroundColor:"white",
        }}>
        </TouchableOpacity>
      </View>
      <View style={mystyle.top}>
        <Image style={mystyle.image} source={images.logo1} />
        <Text style={mystyle.text}>Breathlessness          </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Breathlessness")} 
        title="Get started"
        style={{padding:10,
        margin:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:10,
        backgroundColor:"white",
        
        }}></TouchableOpacity>
      </View>
      <View style={mystyle.top}>
        <Image style={mystyle.image} source={images.logo3} />
        <Text style={mystyle.text}>Chest pain                   </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Chestpain")} 
        title="Get started"
        style={{padding:10,
        margin:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:10,
        backgroundColor:"white",
        
        }}></TouchableOpacity>
      </View>
      <View style={mystyle.top}>
        <Image style={mystyle.image} source={images.logo2} />
        <Text style={mystyle.text}>Unconsciousnes  </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Unconsciousness")} 
        title="Get started"
        style={{padding:10,
        margin:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:10,
        backgroundColor:"white",
        
        }}></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mystyle = StyleSheet.create({
  top: {
    backgroundColor: "#FF8D8936",
    height:120,
    padding: 10,
    margin: 20,
    borderRadius: 7,
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: "center",
    
    marginLeft: 10, // Add some space between the image and the text
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    marginVertical: 60,
  },
  image: {
    width: 60, // Adjust the width based on your preference
    height: 60, // Adjust the height based on your preference
    resizeMode: 'contain',
  },
});

export default Index;
