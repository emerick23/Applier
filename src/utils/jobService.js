import tokenService from "./tokenService";

const BASE_URL = '/api/jobs/'

function create(job, user) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({job, user})
    }
    return fetch(BASE_URL + 'create', options).then(res => res.json())
}

export default {
    create
}