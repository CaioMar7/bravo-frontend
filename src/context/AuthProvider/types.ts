export interface IUser {
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: ({email, password}: ILogin) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface ILogin {
    email: string,
    password: string
}