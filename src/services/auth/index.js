// 이 모든 것들 다 하면 location.reload() ㄱㄱ 해야함.
export function register(username, password, nickname, callback) {
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/my/account`, {
        method: "POST",
        body: { username, password, nickname }
    })
    .then((response) => response.json())
    .then(callback)
}

export function login(username, password) {
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/auth/login`, {
        method: "POST",
        body: { username, password }
    })
    .then((response) => response.json())
    .then(callback)
}

export function logout(callback) {
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/auth/logout`, {
        method: "POST"
    })
    .then((response) => response.json())
    .then(callback)
}

export function removeAccount(callback) {
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/my/account`, {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then(callback)
}