import { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarsService from "../../core/services/CarsService";

class CarList extends Component {
    servCars = new CarsService();

    constructor(props) {
        super(props);
    }
    state = { cars: [] }

    async componentDidMount() {
        let data = await this.servCars.getCars();
        this.setState({ cars: data });
    }

    render() {
        return (
            <div>
                <h1>Les voitures</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Modèle</th>
                            <th>Prix</th>
                            <th>Date mise en circulation</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map(car => {
                            return (
                                <tr key={car.id}>
                                    <td>{car.model}</td>
                                    <td>{car.price}</td>
                                    <td>{car.dateOfCirculation}</td>
                                    <td>
                                        <Link to={`/cars/detail/${car.id}`}
                                            className="btn btn-primary">Détail</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>);
    }
}

export default CarList;