//https://blog.octo.com/designer-une-api-rest/#domain

import axios from 'axios';

const url = 'https://formation.inow.fr/demo/api/v1/cars';

class CarsService {
    async getCars() {
        //return axios.get(url).then(resp => Promise.resolve(resp.Data));
        let resp = await axios.get(url);
        return resp.data;
    }

    async addCar(car) {
        car.price = +car.price;
        car.brandID = +car.brandID;
        return (await axios.post(url, car)).data;
        //return axios.post(url, car).then(x => Promise.resolve(x.data));
    }
}

export default CarsService;