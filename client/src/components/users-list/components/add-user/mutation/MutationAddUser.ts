import {gql} from "@apollo/client";

export const MUTATION_ADD_USER = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            name
            username
            age
            nationality
        }
    }
`;