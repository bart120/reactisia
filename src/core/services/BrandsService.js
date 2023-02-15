import axios from 'axios';

const url = 'https://formation.inow.fr/demo/api/v1/brands';

class BrandsService {
    getBrands() {
        /*axios.get(url).then(resp => {
            console.log(resp.data);
            return resp.data;
        }).catch(er => {
            console.log(er);
        });*/
        return axios.get(url).then(resp => {
            return Promise.resolve(resp.data);
        });
    }
}

export default BrandsService;