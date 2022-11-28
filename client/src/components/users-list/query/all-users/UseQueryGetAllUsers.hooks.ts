import {useEffect, useState} from "react";

// @apollo
import {ApolloError, useQuery} from "@apollo/client";

// @models
import {ModelQueryGetAllUsers} from "./model/ModelQueryGetAllUsers.model";

// @query
import {QUERY_ALL_USERS} from "./QueryGetAllUsers";

const UseQueryGetAllUsers = () => {
    const [allUsersLoading, setAllUsersLoading] = useState<any>();
    const [allUsersError, setAllUsersError] = useState<ApolloError | undefined>();
    const [allUsersData, setAllUsersData] = useState<ModelQueryGetAllUsers[]>();

    const {
        data,
        loading,
        error,
        refetch
    } = useQuery(QUERY_ALL_USERS);

    useEffect(() => {
        setAllUsersLoading(loading);
        setAllUsersError(error);
        {data && setAllUsersData(data.users)}
    });

    return {
        allUsersLoading,
        allUsersError,
        allUsersData,
        refetch
    }
}

export default UseQueryGetAllUsers;

