interface IModelSingleUser {
    user: {
        id: string;
        name: string;
        username: string;
        age: number;
        nationality: string;
    }
}

export type ModelSingleUser = IModelSingleUser;