import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.space} className={`space-y-2 ${otherStyles}`}>
      <Text style={styles.text} className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View style={styles.inputContainer} className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput 
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    marginVertical: 10,
  },
  text: {
    color: 'black', // Orange color for the title text
  },
  inputContainer: {
    backgroundColor: '#fff', // White background for the input container
  },
  input: {
    flex: 1,
    color: 'black', // Black color for the input text
    fontSize: 16,
    fontWeight: '600', // Semi-bold font
  },
  icon: {
    width: 24, // Adjust width based on your preference
    height: 24, // Adjust height based on your preference
  },
});

export default FormField;
