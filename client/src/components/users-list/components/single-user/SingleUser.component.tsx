import {FC} from "react";

// @model
import {ModelSingleUser} from "./model/ModelSingleUser.model";

// @styles
import styles from "./styles/StylesSingleUser.module.scss";

const SingleUser:FC<ModelSingleUser> = ({user}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.user_data}>{user.id}</div>
            <div className={styles.user_data}>{user.name}</div>
            <div className={styles.user_data}>{user.username}</div>
            <div className={styles.user_data}>{user.age}</div>
            <div className={styles.user_data}>{user.nationality}</div>
        </div>
    );
}

export default SingleUser;