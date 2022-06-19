import { Component } from "react";
import TutorialService from "../services/tutorial.service";
import {toast} from "react-toastify"

class TutorialAdd extends Component {

    constructor(props) {
        super(props);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.generateData = this.generateData.bind(this);
        this.validate = this.validate.bind(this);

        this.state = {
            title: "",
            description: ""
        };
    }

    onChangeInput(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    validate() {

        /*if (this.state.title === "") {
            return false;
        }

        if (this.state.description === "") {
            return false;
        }*/
       for (let key in this.state) {
           
            if (this.state[key] === "") {
                return false;
            }
       }

        return true;
    }

    generateData() {
        return {
            title: this.state.title,
            description: this.state.description
        };
    }

    saveTutorial() {

        if (!this.validate()) {
            return;
        }

        toast.success("Data saved successfully");
        let data = this.generateData();

        TutorialService.create(data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="submit-form">
                <div className="mb-3">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={this.onChangeInput}
                    >
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={this.onChangeInput}
                    >
                    </input>
                </div>
                <button className="btn btn-success" onClick={this.saveTutorial}>
                    Save
                </button>
            </div>
        )
    }
}

export default TutorialAdd;