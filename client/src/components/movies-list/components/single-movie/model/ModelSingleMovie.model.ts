interface IModelSingleMovie {
    movie: {
        id: string;
        name: string;
        yearOfPublication: number;
        isInTheaters: boolean;
    }
}

export type ModelSingleMovie = IModelSingleMovie;