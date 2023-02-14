import { Component } from "react";
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class InputEmail extends Component {
    static propTypes = {
        validated: PropTypes.bool,
        onTextChange: PropTypes.func
    }

    constructor(props) {
        super(props);
    }
    state = { inValid: false }

    componentDidMount() {
        /*const validate = this.props.validate;
        const onTextChange = this.props.onTextChange;
        const other = {}
        const { validate, onTextChange, ...other } = this.props;
        console.log(other);*/


    }

    change = (ev) => {
        const val = ev.target.value;
        if (this.props.validated) {
            const test = regEx.test(val);
            this.setState({ inValid: !test });
            if (test) {
                this.props.onTextChange(ev);
            }
            return;
        }
        this.props.onTextChange(ev);
    }

    render() {
        const { validated, onTextChange, ...otherProps } = this.props;
        return (
            <>
                <Form.Control type="email"
                    onChange={this.change}
                    className={this.state.inValid ? 'input-error' : ''}
                    {...otherProps} />
                {this.state.inValid &&
                    <p style={{ color: 'red' }}>Mail invalide</p>}
            </>
        );
    }
}

export default InputEmail;