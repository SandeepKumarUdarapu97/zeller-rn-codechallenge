import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const navigateMock = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: navigateMock,
    }),
  };
});

test('renders HomeScreen correctly', () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );

  expect(getByTestId('Home_Screen_Container')).toBeTruthy();
  expect(getByTestId('Home_Screen_Title')).toHaveTextContent('Welcome to the Zeller App');
  expect(getByTestId('Home_Screen_GoToUserList_Button')).toBeTruthy();
});

test('navigates to User List on button press', () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );

  fireEvent.press(getByTestId('Home_Screen_GoToUserList_Button'));
  expect(navigateMock).toHaveBeenCalledWith('Users');
});