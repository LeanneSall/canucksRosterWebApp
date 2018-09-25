import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Players } from './Players';
import Scroll from './Scroll';


class App extends Component {
    
    constructor() {
        super()
        this.state = {
            Players: Players,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
        

    }

    render() {
        const filterPlayers = this.state.Players.filter(Player => {
           return Player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
                <div className='tc'>
                    <h1 className="f1">Your Vancouver Canucks</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList Players={filterPlayers}/>
                    </Scroll>
                </div>
            )
        
        }

}

export default App;