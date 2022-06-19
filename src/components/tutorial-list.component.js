import { Component } from "react";
import TutorialService from "../services/tutorial.service";

class TutorialList extends Component {
    constructor(props) {
        super(props);
        this.getTutorials = this.getTutorials.bind(this);
        this.state = {
            tutorialList: []
        };
    }

    componentDidMount() {
        this.getTutorials();
    }

    getTutorials() {
        TutorialService.Listing()
            .then(response => {
                this.setState({
                    tutorialList: response.data.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const tutorialList = this.state.tutorialList;

        return (
            <div>
                <h3>Tutorial list here</h3>
                <ul className="list-group">
                 {tutorialList &&
                 tutorialList.map((tutorial, index) => (
                    <li className="list-group-item">
                        {tutorial.title}
                    </li>
                 ))}
                </ul>
            </div>
        );
    }
}

export default TutorialList;