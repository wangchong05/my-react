import axios from 'axios'

export default {
    async FetchData(callback) {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            return callback(res.data);
        })
    }
}