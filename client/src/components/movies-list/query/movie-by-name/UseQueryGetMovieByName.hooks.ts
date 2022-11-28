import {useEffect, useState} from "react";

// @apollo-client
import {useLazyQuery} from "@apollo/client";

// @query
import {QUERY_MOVIE_BY_NAME} from "./QueryGetMovieByName";
import {ModelQueryGetMovieByName} from "./model/ModelQueryGetMovieByName.model";

const UseQueryGetMovieByName = () => {

    const [movieSearched, setMovieSearched] = useState<string>("");
    const [movieSearchedObject, setMovieSearchedObject] = useState<ModelQueryGetMovieByName>();

    const [fetchMovie, {data}] = useLazyQuery(QUERY_MOVIE_BY_NAME);

    useEffect(() => {
        {data && setMovieSearchedObject(data.movie)}
    });

    return {
        movieSearched,
        setMovieSearched,
        movieSearchedObject,
        fetchMovie
    };
}

export default UseQueryGetMovieByName;