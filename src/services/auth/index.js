// 이 모든 것들 다 하면 location.reload() ㄱㄱ 해야함.
export function register(username, password, nickname, callback) {
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/my/account`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, nickname })
    })
    .then((response) => response.json())
    .then(callback)
}

export function login(username, password, callback) {
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
    })
    .then(async (response) => callback(await response.json(), response.headers.get('content-type')))
}

export function logout(callback) {
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/auth/logout`, {
        method: "POST"
    })
    .then((response) => response.json())
    .then(callback)
}

export function removeAccount(callback) {
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/my/account`, {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then(callback)
}