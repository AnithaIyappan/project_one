import { Component } from "react";
import PropTypes from 'prop-types';


class Person extends Component {
    render() {
        return (
            <div style={{"textAlign":"center"}}>
                <h1>PropTypes</h1>
                <p>Hello {this.props.person.name}</p>
                <p>Age is {this.props.person.age} </p>
                <p>Email is {this.props.person.email} </p>
                <p>Children:</p>
                <p>
                    {this.props.person.children.map((child, key) =>
                        <p key={key}>{child}</p>
                    )}
                </p>
            </div>
        )
    }
}



Person.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.string),
        isMarried: PropTypes.bool
    })

}

export default Person;
