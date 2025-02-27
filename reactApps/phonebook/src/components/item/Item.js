import React from 'react';
import './Item.css';


function Item(props) {
    return (
        // <div className={`phonebook-item  ${props.item.completed ? 'completed' : ''}`} onClick={(e) => {
        //     e.stopPropagation();
        //     props.onItemClick(props.item);
        // }}>
        <div className="phonebook-item" >
            <div className="phonebook-item-content">
                <span className="data">{props.item.name+"\t\t\t" + props.item.number}</span>

            </div>
            <span className="delete-btn" title="delete" onClick={(e) => {
                e.stopPropagation();
                props.onDeleteItem(props.item);
            }}></span>
        </div>
    );
}

export default Item;
