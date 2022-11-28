import {useEffect, useState} from "react";

// @apollo-client
import {ApolloError, useQuery, useLazyQuery} from "@apollo/client";

// @models
import {ModelQueryGetAllMovies} from "./model/ModelQueryGetAllMovies.model";

// @query
import {QUERY_ALL_MOVIES} from "./QueryGetAllMovies";

const UseQueryGetAllMovies = () => {
    const [allMoviesLoading, setAllMoviesLoading] = useState<any>();
    const [allMoviesError, setAllMoviesError] = useState<ApolloError | undefined>();
    const [allMoviesData, setAllMoviesData] = useState<ModelQueryGetAllMovies[]>([]);

    const {
        loading,
        error,
        data
    } = useQuery(QUERY_ALL_MOVIES);

    useEffect(() => {
        setAllMoviesLoading(loading);
        setAllMoviesError(error);
        {data && setAllMoviesData(data.movies)}
    });

    return {
        allMoviesLoading,
        allMoviesError,
        allMoviesData
    };
}

export default UseQueryGetAllMovies;