import {FC} from "react";

// @models
import {ModelMoviesList} from "./model/ModelMoviesList.model";

// @hooks
import UseQueryGetAllMovies from "./query/all-movies/UseQueryGetAllMovies.hooks";
import UseQueryGetMovieByName from "./query/movie-by-name/UseQueryGetMovieByName.hooks";

// @styles
import styles from "./styles/StylesMoviesList.module.scss";

// @components
import SingleMovie from "./components/single-movie/SingleMovie.component";

const MoviesList: FC<ModelMoviesList> = () => {
    const {
        allMoviesLoading,
        allMoviesError,
        allMoviesData
    } = UseQueryGetAllMovies();

    const {
        movieSearched,
        setMovieSearched,
        movieSearchedObject,
        fetchMovie
    } = UseQueryGetMovieByName();

    console.log(movieSearchedObject);

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>Lista filmów</p>
            <div className={styles.wrap_list_header}>
                <div className={styles.list_title}>ID</div>
                <div className={styles.list_title}>Nazwa filmu</div>
                <div className={styles.list_title}>Rok publikacji</div>
                <div className={styles.list_title}>Był w kinach?</div>
            </div>
            <div className={styles.wrap_list}>
                {allMoviesData ?
                    allMoviesData.map((movie) => {
                        return (
                            <SingleMovie
                                key={movie.id}
                                movie={movie}
                            />
                        );
                    })
                    : null
                }
            </div>
            <div className={styles.wrap_input}>
                <input
                    type="text"
                    placeholder="Wpisz nazwę filmu..."
                    onChange={(e) => setMovieSearched(e.target.value)}
                />
                <button onClick={() => {
                    fetchMovie({
                        variables: {
                            name: movieSearched,
                        },
                    });
                }}>
                    Wyszukaj film w bazie
                </button>
                <div className={styles.fetched_list}>
                    {
                        movieSearchedObject ?
                            <div>
                                <p>Nazwa wyszukanego filmu: {movieSearchedObject.name}</p>
                                <p>Rok wydania: {movieSearchedObject.yearOfPublication}</p>
                            </div>
                        : <p>W bazie nie znaleziono nazwy filmu</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default MoviesList;