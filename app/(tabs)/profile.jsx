import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { icons } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { EmptyState, InfoBox, VideoCard } from "../../components";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Profile = () => {
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
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
