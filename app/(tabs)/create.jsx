import {useState} from "react";
import { router } from "expo-router";
// import { ResizeMode, Video } from "expo-av";
// import * as DocumentPicker from "expo-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  // Image,
  // TouchableOpacity,
  ScrollView,
} from "react-native";

import { icons } from "../../constants";
import { createVideoPost } from "../../lib/appwrite";
import { CustomButton, FormField } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";


const Create = () => {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    contact_number:"",
    
  });


  const submit = async () => {
    if (
      (form.contact_number === "") |
      (form.title === "") 
      // !form.thumbnail |
      // !form.video
    ) {
      return Alert.alert("Please provide all fields");
    }

    setUploading(true);
    try {
      await createVideoPost({
        ...form,
        userId: user.$id,
      });

      Alert.alert("Success", "Contact saved successfully");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setForm({
        title: "",
        contact_number:"",
        // video: null,
        // thumbnail: null,
        // prompt: "",
      });

      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor:"#FF8D8936"}}className="h-full">
      <ScrollView className="px-4 my-6">
        {/* <Text className="text-2xl text-white font-psemibold">Upload Video</Text> */}

        <FormField
          title="Add name"
          value={form.title}
          placeholder="Add contact name..."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />
        <FormField 
          title="Add contact number"
          value={form.contact_number}
          placeholder="Add contact number..."
          handleChangeText={(e) => setForm({ ...form, contact_number: e })}
          otherStyles="mt-10"
        />

        <CustomButton
        style={{color:"#FF8D8936"}}
          title="Save contact"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
        
      </ScrollView>
    </SafeAreaView>
    
  );
};


export default Create;

