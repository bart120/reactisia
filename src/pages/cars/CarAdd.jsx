import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class CarAdd extends Component {
    constructor(props) {
        super(props);
    }
    state = {};

    car = {};

    changeFormField = (ev) => {
        this.car[ev.target.name] = ev.target.value;
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
                        <Form.Select name="brandID" onChange={this.changeFormField}>

                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">Enregistrer</Button>
                </Form>
            </div>
        );
    }
}

export default CarAdd;