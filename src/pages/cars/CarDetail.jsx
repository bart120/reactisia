import { Component } from "react";
import withRouter from "../../core/routes/withRouter";

class CarDetail extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    componentDidMount() {
        console.log(this.props.params.id);
    }

    render() {
        return (
            <div>
                <h1>Voiture détail</h1>
            </div>
        );
    }
}

export default withRouter(CarDetail);