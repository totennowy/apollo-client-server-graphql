import {useMutation} from "@apollo/client";

// @query
import {MUTATION_ADD_USER} from "./MutationAddUser";


const UseMutationAddUser = () => {
    const [createUser] = useMutation<any>(MUTATION_ADD_USER);

    return {
        createUser
    };
}

export default UseMutationAddUser;