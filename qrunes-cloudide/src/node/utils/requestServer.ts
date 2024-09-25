import axios from "axios";

export async function post(param: any, url: string) {
    let result: any;
    await axios({
        method: 'post',
        url: url,
        data: param
    }).then(response => {
        result = response;
    })
    return result;
}
export async function get(url: string) {
    let result: any;
    await axios({
        method: 'get',
        url: url,
    }).then(response => {
        result = response;
    })
    return result;
}