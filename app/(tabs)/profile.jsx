import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, Image, FlatList, TouchableOpacity,StyleSheet } from "react-native";

import { icons } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { EmptyState, InfoBox, VideoCard } from "../../components";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';



const profile = () => {
  const navigation = useNavigation();

  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: contact_number } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView style={{backgroundColor:"gray"}}className="h-full">
      <FlatList
        data={contact_number}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            contact_number={item.contact_number}
            // video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            // title="No contacts Found"
            subtitle="Save the contacts in this profile"
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image 
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border rounded-lg flex justify-center items-center">
              <Image style={{backgroundColor:"#fff"}}
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

             <InfoBox 
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-8 flex flex-row">
              <InfoBox style={{ba:"black"}}
                title={contact_number.length || 0}
                subtitle="Contacts saved"
                titleStyles="text-xl"
                containerStyles="mr-1"
              />
              {/* <InfoBox
                title="1.2k"
                subtitle="Followers"
                titleStyles="text-xl"
              /> */}
            </View>
            <View style={styles.container}>
      <Text style={styles.headerText}>Hello Firos</Text>
      <Text style={styles.subHeaderText}>Emergency Call</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.box, styles.boxPolice]}
          onPress={() => navigation.navigate('Details', { topic: 'Police', info: 'This is information about the Police service.' })}
        >
          <Icon name="local-police" size={50} color="#fff" />
          <Text style={styles.boxText}>Police</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, styles.boxFire]}
          onPress={() => navigation.navigate('Details', { topic: 'Fire & Safety', info: 'This is information about Fire & Safety services.' })}
        >
          <Icon name="fire-extinguisher" size={50} color="#fff" />
          <Text style={styles.boxText}>Fire & Safety</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, styles.boxHealth]}
          onPress={() => navigation.navigate('Details', { topic: 'Health Care', info: 'This is information about Health Care services.' })}
        >
          <Icon name="local-hospital" size={50} color="#fff" />
          <Text style={styles.boxText}>Health Care</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, styles.boxAlarm]}
          onPress={() => navigation.navigate('Details', { topic: 'Alarm', info: 'This is information about Alarm services.' })}
        >
          <Icon name="alarm" size={50} color="#fff" />
          <Text style={styles.boxText}>Alarm</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>Nearby Friends</Text>
    </View>
          </View>
        )}
      />
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
    // backgroundColor: '#F5F5F5',
  },
  headerText: {
    padding:10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  box: {
    width: '40%',
    height: 150,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  boxPolice: {
    backgroundColor: '#2196F3',
  },
  boxFire: {
    backgroundColor: '#FF5722',
  },
  boxHealth: {
    backgroundColor: '#00BCD4',
  },
  boxAlarm: {
    backgroundColor: '#9C27B0',
  },
  footerText: {
    fontSize: 18,
    marginTop: 20,
    },
});

export default profile;