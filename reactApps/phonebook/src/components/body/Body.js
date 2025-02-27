import React from 'react';
import './Body.css';
import ItemsAll from '../items-all/ItemsAll';



function Body(props) {
    return (
        <div id="app-body">

            <div id="all-items" className="items-container" style={{marginLeft: -(props.tab - 1)*100 + '%'}}>
                <div id="all-items-container">
                    <span className="no-items-message">No Items</span>
                    <ItemsAll items={props.items}  onDeleteItem={props.onDeleteItem}></ItemsAll>
                </div>
            </div>


    
          

        </div>
    );
}

export default Body;
