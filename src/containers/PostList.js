import React, { Component } from 'react';

class PostList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Active item</li>
                    <li className="list-group-item">Item</li>
                    <li className="list-group-item">Disabled item</li>
                </ul>
            </div>
        );
    }
}

export default PostList;