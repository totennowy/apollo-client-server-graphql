import {FC} from "react";

// @models
import {ModelAddUser} from "./model/ModelAddUser.model";

// @hooks
import UseAddUser from "./hooks/UseAddUser.hooks";
import UseMutationAddUser from "./mutation/UseMutationAddUser.hooks";
import UseQueryGetAllUsers from "../../query/all-users/UseQueryGetAllUsers.hooks";

// @styles
import styles from "./styles/StylesAddUser.module.scss";


const AddUser: FC<ModelAddUser> = () => {
    const {
        inputName,
        setInputName,
        inputUsername,
        setInputUsername,
        inputAge,
        setInputAge,
        inputNationality,
        setInputNationality
    } = UseAddUser();

    const {
        createUser
    } = UseMutationAddUser();

    const {
        allUsersLoading,
        allUsersError,
        allUsersData,
        refetch
    } = UseQueryGetAllUsers();

    return (
        <div className={styles.wrap}>
            <input
                type="text"
                placeholder="Imie"
                onChange={(e) => setInputName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nazwisko"
                onChange={(e) => setInputUsername(e.target.value)}
            />
            <input
                type="number"
                placeholder="Wiek"
                onChange={(e) => setInputAge(Number(e.target.value))}
            />
            <input
                type="text"
                placeholder="Narodowość"
                onChange={(e) => setInputNationality(e.target.value.toUpperCase())}
            />
            <button
                onClick={() => {
                    createUser({
                        variables:
                            {
                                input:
                                    {
                                        id: "20",
                                        name: inputName,
                                        username: inputUsername,
                                        age: inputAge,
                                        nationality: inputNationality
                                    }
                            }
                    })
                    refetch();
                }}>
                Utwórz użytkownika
            </button>
        </div>
    );
}

export default AddUser;