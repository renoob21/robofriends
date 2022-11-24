import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(req => req.json())
            .then(users => this.setState({robots : users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        console.log(event.target.value)
    }
    
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App