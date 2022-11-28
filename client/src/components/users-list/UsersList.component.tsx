import {FC} from "react";

// @models
import {ModelUsersList} from "./model/ModelUsersList.model";

// @hooks
import UseQueryGetAllUsers from "./query/all-users/UseQueryGetAllUsers.hooks";

// @styles
import styles from "./styles/StylesUsersList.module.scss";

// @components
import SingleUser from "./components/single-user/SingleUser.component";
import AddUser from "./components/add-user/AddUser.component";

const UsersList: FC<ModelUsersList> = () => {
    const {
        allUsersLoading,
        allUsersError,
        allUsersData
    } = UseQueryGetAllUsers();

    if (allUsersData) {
        console.log(allUsersData);
    }
    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>Lista użytkowników</p>
            <div className={styles.wrap_user}>
                <div className={styles.user_title}>ID</div>
                <div className={styles.user_title}>Imie</div>
                <div className={styles.user_title}>Nazwisko</div>
                <div className={styles.user_title}>Wiek</div>
                <div className={styles.user_title}>Kraj</div>
            </div>
            <div className={styles.user_list}>
                {allUsersData ?
                    allUsersData.map((user) => {
                        return (
                            <SingleUser
                                key={user.id}
                                user={user}
                            />
                        );
                    })
                    : null
                }
            </div>
            <div className={styles.form_container}>
                <AddUser />
            </div>
        </div>
    );
}

export default UsersList;