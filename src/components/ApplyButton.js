import { Component } from 'react';
import axios from "axios";


export default class ApplyButton extends Component {

    startPayment = () => {
        axios.get("http://localhost:8080/").then(response => {
            console.log(response);
        });
    }

    render() {
        return (
            <div type="button" className="applybtn">
                <button onClick={this.startPayment}>
                    Apply
                </button>
            </div>
        );
    }
}
/*
const ApplyButton = () => {

    const startPayment = () => {
        axios.get("/").then(response => {
            console.log(response.data);
        });
    }

    return (
        <div type="button" className="applybtn">
            <button onClick={startPayment}>
                Apply
            </button>
        </div>
    )
}

export default ApplyButton
*/