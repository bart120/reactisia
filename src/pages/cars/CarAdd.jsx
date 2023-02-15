import { Component } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import withRouter from "../../core/routes/withRouter";
import BrandsService from "../../core/services/BrandsService";
import CarsService from "../../core/services/CarsService";

class CarAdd extends Component {
    servBrand = new BrandsService();
    servCar = new CarsService();

    constructor(props) {
        super(props);
    }
    state = { brands: null };

    car = {};

    changeFormField = (ev) => {
        this.car[ev.target.name] = ev.target.value;
    }

    submit = async (ev) => {
        ev.preventDefault();
        console.log(this.car);
        const newCar = await this.servCar.addCar(this.car);
        alert(`La voiture est enregistrée avec l'id: ${newCar.id}`);
        this.props.navigate('/cars');
    }


    async componentDidMount() {
        const data = (await this.servBrand.getBrands()).sort((a, b) => a.name.localeCompare(b.name));
        this.setState({ brands: data });
        //this.cars.brandID = brands[0].id;
    }

    render() {
        return (
            <div>
                <h1>Ajouter une voiture</h1>
                <Form noValidate onSubmit={this.submit}>
                    <Form.Group>
                        <Form.Label>Modèle</Form.Label>
                        <Form.Control type="text" placeholder="Modèle" name="model" onChange={this.changeFormField} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Prix</Form.Label>
                        <Form.Control type="currency" placeholder="Prix" name="price" onChange={this.changeFormField} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date de mise en circulation</Form.Label>
                        <Form.Control type="date" placeholder="Mise en circulation" name="dateOfCirculation" onChange={this.changeFormField} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Marque</Form.Label>
                        {this.state.brands == null ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <Form.Select name="brandID" onChange={this.changeFormField}>
                                <option value="">--</option>
                                {this.state.brands.map(brand => (
                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                ))}
                            </Form.Select>
                        }
                    </Form.Group>
                    <Button variant="primary" type="submit">Enregistrer</Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(CarAdd);