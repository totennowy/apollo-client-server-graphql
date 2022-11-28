import React from 'react';

// @apollo
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from '@apollo/client';

// @styles
import styles from './App.module.scss';

// @components
import DisplayData from "./components/users-list/UsersList.component";
import MoviesList from "./components/movies-list/MoviesList.component";

function App() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "http://localhost:4000/graphql",
    });

    return (
        <ApolloProvider client={client}>
            <div className={styles.wrap}>
                <DisplayData/>
                <MoviesList/>
            </div>
        </ApolloProvider>
    );
}

export default App;
