import React from 'react';
import {View, Text} from 'react-native';
import {ZellerCustomer} from '../types';
import {getHeight, getWidth, normalize} from '../utils';
import {colors} from '../theme/colors';

type Props = {
  user: ZellerCustomer;
  testID?: string;
};

const UserCard: React.FC<Props> = ({user,testID}) => {
  return (
    <View
    testID={testID}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: getHeight(0.75),
        marginLeft: getWidth(1),
      }}>
      <View
        style={{
          width: getWidth(10),
          height: getWidth(10),
          borderRadius: getWidth(1.5),
          backgroundColor: colors.primiryWithOpacity(99),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: colors.primary, fontWeight: '500'}}>
          {user.name[0]}
        </Text>
      </View>
      <View style={{marginLeft: getWidth(3)}}>
        <Text
          style={{
            color: colors.text,
            fontSize: normalize(16),
            fontWeight: '500',
          }}>
          {user.name}
        </Text>
        <Text
          style={{
            color: colors.gray,
            fontSize: normalize(12),
            fontWeight: '500',
          }}>
          {user.role === 'ADMIN' ? 'Admin' : 'Manager'}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;
