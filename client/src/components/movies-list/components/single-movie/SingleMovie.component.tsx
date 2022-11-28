import {FC} from "react";

// @model
import {ModelSingleMovie} from "./model/ModelSingleMovie.model";

// @styles
import styles from "./styles/StylesSingleMovie.module.scss";

const SingleMovie: FC<ModelSingleMovie> = ({movie}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.list_title}>{movie.id}</div>
            <div className={styles.list_title}>{movie.name}</div>
            <div className={styles.list_title}>{movie.yearOfPublication}</div>
            <div className={styles.list_title}>{movie.isInTheaters ? "Tak" : "Nie"}</div>
        </div>
    );
}

export default SingleMovie;