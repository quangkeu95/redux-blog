import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ButtonAdd extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary">
                    <Link to="/add-post">Add New Post</Link>              
                </button>
            </div>
        );
    }
}

export default ButtonAdd;