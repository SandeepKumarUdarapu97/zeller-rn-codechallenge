import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} testID="Home_Screen_Container">
      <Text testID="Home_Screen_Title">Welcome to the Zeller App</Text>
      <Button
        title="Go to User List"
        onPress={() => navigation.navigate('Users')}
        testID="Home_Screen_GoToUserList_Button"
      />
    </View>
  );
};

export default HomeScreen;