export interface IAuthContext {
    authenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    userIsLoading: boolean;
    setUserIsLoading: (userIsLoading: boolean) => void;
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

export interface IUser {
    email?: string;
    password?: string;
    steps?: IUserStep;
}

export interface IUserStep {
    units: boolean;
    classes: boolean;
    students: boolean;
}
