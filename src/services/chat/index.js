export function getChats(roomid, count, time, callback) {
    const queries = `roomid=${roomid}&toDateTime=${time}&count=${count}`
    fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/my/chat?${queries}`,
        { 
            // queries: { roomid, count, toDateTime: time },
            credentials: 'include'
        }
    )
    .then((response) => response.json())
    .then(callback);
}