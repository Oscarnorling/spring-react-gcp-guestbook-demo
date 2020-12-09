import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Entries from './components/Entries.js'
import InputForm from './components/InputForm.js'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }

    this.fetchData = this.fetchData.bind(this)
    this.updateEntries = this.updateEntries.bind(this)
}

updateEntries(entry) {
  let entries = this.state.entries
  entries.push(entry)
  this.setState({entries: entries})
}

fetchData() {
  const apiUrl = 'https://cygni-hemuppgift.ey.r.appspot.com/api'
        
  fetch(apiUrl, {
      method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    this.setState({entries: data})
  })
}

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1 style={{textAlign: "center"}} >Oscars gästbok</h1>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputForm updateEntries={this.updateEntries} />
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Entries entries={this.state.entries} fetchData={this.fetchData}/>        
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;