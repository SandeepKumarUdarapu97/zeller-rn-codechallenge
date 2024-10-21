import {useQuery} from '@apollo/client';
import {LIST_USERS_QUERY} from '../graphql/listZellerCustomers';

export const useFetchUsers = (userType: string) => {
  const {loading, error, data} = useQuery(LIST_USERS_QUERY, {
    variables: {type: userType},
  });
  return {loading, error, data};
};
