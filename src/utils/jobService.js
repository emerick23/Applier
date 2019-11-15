import tokenService from "./tokenService";

const BASE_URL = '/api/jobs/'

function jobsIndex(user) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({user})
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

function findJob(job, user) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({job, user})
    }
    return fetch(BASE_URL + 'detail', options).then(res => res.json())
}

function jobCreate(job, user) {
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

function jobUpdate(job, user) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({job, user})
    }
    return fetch(BASE_URL + 'update', options).then(res => res.json())
}

function jobDelete(job, user) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({job, user})
    }
    return fetch(BASE_URL + 'delete', options).then(res => res.json())
}

export default {
    jobsIndex,
    jobCreate,
    jobUpdate,
    jobDelete,
    findJob
}