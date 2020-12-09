import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '', message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let origin = event.target.name
        let value = event.target.value
        console.log("origin: " + origin)
        console.log("value: " + value)
        console.log(this.state)
        this.setState({[origin]: value})
    }

    handleSubmit(event) {
        event.preventDefault();
        let timestamp = new Date().getTime();
        const newEntry = {
            name: this.state.name,
            message: this.state.message,
            date: timestamp
        }

        const apiUrl = 'https://cygni-hemuppgift.ey.r.appspot.com/api'
        
        fetch(apiUrl, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newEntry)
        })
        .then(this.props.updateEntries(newEntry))

        event.target.reset()
    }


    render() {
        return(
        <Container>
        <Form className onSubmit={this.handleSubmit} >
            <Form.Group>
                <Form.Label>Namn</Form.Label>
                <Form.Control required type="text" name="name" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Meddelande</Form.Label>
                <Form.Control required as="textarea" rows={4} name='message' onChange={this.handleChange} />
            </Form.Group>
            <Button variant= "primary" type="submit">Skicka!</Button>
        </Form>
        <hr />
        </Container>
        );
    }
}

export default InputForm