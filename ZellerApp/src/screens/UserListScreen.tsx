import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { LIST_USERS_QUERY } from '../graphql/listZellerCustomers';
import FilterComponent from '../components/FilterComponent';
import UserCard from '../components/UserCard';
import { ZellerCustomerConnection } from '../types';
import { getHeight, getWidth, normalize } from '../utils';
import { colors } from '../theme/colors';

const UserListScreen = () => {
  const [userRole, setUserRole] = useState<string>('ADMIN');

  const { loading, error, data } = useQuery<{
    listZellerCustomers: ZellerCustomerConnection;
  }>(LIST_USERS_QUERY, {
    variables: {
      filter: { role: { eq: userRole } },
      limit: 10,
    },
  });

  if (loading)
    return (
      <Text
        style={{
          color: colors.text,
          fontSize: normalize(12),
          fontWeight: '500',
        }}
        testID="UserListScreen_Loading_Text"
      >
        Loading...
      </Text>
    );
  if (error)
    return (
      <Text
        style={{
          color: colors.text,
          fontSize: normalize(12),
          fontWeight: '500',
        }}
        testID="UserListScreen_Error_Text"
      >
        Error loading users
      </Text>
    );

  console.log('data : ', data?.listZellerCustomers?.items);

  return (
    <View style={{ flex: 1 }} testID="UserListScreen_Container">
      <FilterComponent selectedType={userRole} onChange={setUserRole} testID="UserListScreen_FilterComponent" />
      <View
        style={{
          width: getWidth(95),
          height: getHeight(0.1),
          backgroundColor: '#d2d2d2',
          alignSelf: 'center',
        }}
        testID="UserListScreen_Divider"
      />
      <View style={{ marginTop: getHeight(1), marginLeft: getWidth(2.5) }} testID="UserListScreen_Content">
        <Text
          style={{
            color: colors.text,
            fontSize: normalize(22),
            fontWeight: '500',
          }}
          testID="UserListScreen_Title"
        >
          {userRole === 'ADMIN' ? 'Admin Users' : 'Managers'}
        </Text>
        <FlatList
          data={data?.listZellerCustomers?.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <UserCard user={item} testID={`UserCard_${item.id}`} />}
          contentContainerStyle={{ marginTop: getHeight(0.75) }}
          testID="UserListScreen_FlatList"
        />
      </View>
    </View>
  );
};

export default UserListScreen;