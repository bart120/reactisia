import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import InputEmail from "../../core/components/forms/InputEmail";
import withRouter from "../../core/routes/withRouter";


class Login extends Component {
    log = { login: '', password: '' };
    constructor(props) {
        super(props);
        this.changeFormField = this.changeFormField.bind(this);
    }
    state = {}

    changeFormField(ev) {
        this.log[ev.target.name] = ev.target.value;
    }

    submit = (ev) => {
        ev.preventDefault();
        console.log(this.log);
        //this.props.navigate("/");
        //console.log("après navigate");
    }

    render() {
        return (
            <div>
                <h1>Connexion</h1>
                <Form onSubmit={this.submit} noValidate>
                    <Form.Group>
                        <Form.Label>Login</Form.Label>
                        <InputEmail placeholder="Votre mail" name="login" validated onTextChange={this.changeFormField} />
                        {/*<Form.Control type="email" placeholder="Votre email" name="login" onChange={this.changeFormField} />*/}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Votre mot de passe" name="password" onChange={this.changeFormField} data-test="bob" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Se connecter</Button>
                </Form>
            </div>

        );
    }
}

export default withRouter(Login);