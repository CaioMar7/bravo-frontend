import { API } from "../../services/api";
import { ILogin, IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('u')

    if(!json) {
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;

}

export function LoginRequest({ email, password }: ILogin) {

    try {
        const request = API.post('login', { email, password })

        return request;

    } catch (error) {

        return null;

    }
}