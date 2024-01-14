//登录接口需要携带参数ts类型
export interface loginForm {
    username: string,
    password: string
}

interface dataType {
    token: string,
}

//登录接口返回数据类型
export interface loginResponseData {
    code: number,
    data: dataType
}

//返回用户信息相关的数据类型

interface checkUser {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}

interface userInfo {
    checkUser: checkUser
}

export interface userResponseData {
    code: number,
    data: userInfo
}