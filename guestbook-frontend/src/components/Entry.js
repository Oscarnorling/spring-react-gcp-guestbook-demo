import React from 'react'
import { Card } from 'react-bootstrap'

class Entry extends React.Component {

    formatDate(timestamp) {
        let date = new Date(timestamp)
        return date.toLocaleString;
    }

    render() {
        return (
            <Card className="mt-2">
                <Card.Header as="h6">{this.props.name}</Card.Header>
                <Card.Body>{this.props.message}</Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        {new Date(this.props.date).toLocaleString()}</small>
                </Card.Footer>
            </Card>
        );
    }
}

export default Entry