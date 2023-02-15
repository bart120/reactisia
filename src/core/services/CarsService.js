import axios from 'axios';

const url = 'https://formation.inow.fr/demo/api/v1/cars';

class CarsService {
    async getCars() {
        //return axios.get(url).then(resp => Promise.resolve(resp.Data));
        let resp = await axios.get(url);
        return resp.data;
    }
}

export default CarsService;