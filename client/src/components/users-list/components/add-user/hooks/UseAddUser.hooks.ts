import {useState} from "react";

const UseAddUser = () => {
    const [inputName, setInputName] = useState<string>("");
    const [inputUsername, setInputUsername] = useState<string>("");
    const [inputAge, setInputAge] = useState<number>();
    const [inputNationality, setInputNationality] = useState<string>("BRAZIL");

    return {
        inputName,
        setInputName,
        inputUsername,
        setInputUsername,
        inputAge,
        setInputAge,
        inputNationality,
        setInputNationality
    };
}

export default UseAddUser;