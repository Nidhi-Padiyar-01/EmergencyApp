
import EmptyState from "./EmptyState";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormField from "./FormField";
import CustomButton from "./CustomButton";
import InfoBox from "./InfoBox";
import Loader from "./Loader";
import Accident from "./Accident";
import Breathlessness from "./Breathlessness";
import Chestpain from "./Chestpain";
import Unconsciousness from "./Unconsciousness";

const Stack = createNativeStackNavigator();
export default function index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Accident" component={Accident} />
        <Stack.Screen name="Breathlessness" component={Breathlessness} />
        <Stack.Screen name="Chestpain" component={Chestpain} />
        <Stack.Screen name="Unconsciousness" component={Unconsciousness} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {

  FormField,
  CustomButton,
  InfoBox,
  Loader,
  EmptyState,
};
