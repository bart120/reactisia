import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { brands: [] };
    }

    componentDidMount() {
        this.setState({
            brands: [
                { name: 'Audi', image: 'audi.jpg' },
                { name: 'BMW', image: 'bmw.jpg' },
                { name: 'Renault', image: 'renault.jpg' }]
        });
    }

    render() {
        return (
            <footer>
                <div>&copy; Formation ReactJS</div>
                <Row>
                    {this.state.brands?.map((item) =>
                    (<Col key={item.name}>
                        <Card style={{ with: '18rem' }}>
                            <Card.Img variant="top" src={`/images/${item.image}`} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>)
                    )}
                </Row>
            </footer>
        );
    }
}
export default Footer;