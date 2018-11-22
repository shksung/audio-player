import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'

class SongsList extends Component {

    render() {
        let list = this.props.songList.map((songs, i) => {
            return <div>
                <a className="list-group-item list-group-item-action list-group-item-secondary App">
                    <Link to={"/" + String(i)}>{songs.title}</Link><button onClick={() => this.props.chooseSong(i)}>Play</button></a></div>
        })
        return (
            <div>
                <h1 className= "App textColor">Featured</h1>

                {list}

            </div>

        )
    }
}

export default SongsList;