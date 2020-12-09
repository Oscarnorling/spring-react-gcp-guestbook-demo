import React from 'react'
import Entry from './Entry.js'

class Entries extends React.Component {
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        return (
            <section>
                {this.props.entries.reverse().map((entry) => (
                    <Entry key={entry.id} name={entry.name} message={entry.message} date={entry.date} /> 
                ))}
            </section>
        );
    }

}

export default Entries