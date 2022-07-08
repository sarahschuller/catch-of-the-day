import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore() {
        // Stop the form from submitting
        e.preventDefault();
        // Get the text from that input

        // Change the page to /store/whatever-they-entered
    }

    render() {
        return (
        <form className="store-picker" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input 
            type="text"
            rep={this.myInput} 
            required 
            placeholder="Store Name"
            defaultValue={getFunName()}
            />
            <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;