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

function index(user) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body:JSON.stringify({user})
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

function deleteJob(job, user) {
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

function detail(job, user) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({job, user})
    }
    return fetch(BASE_URL + 'details', options).then(res => res.json())
}

export default {
    create,
    index,
    detail,
    deleteJob
}