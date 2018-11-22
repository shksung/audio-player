import React, {Component} from 'react';

class SongDetails extends Component {
    render() {

        return (
            <div className= "App textColor">
            <h1>{this.props.songList[this.props.match.params.songId].title} </h1>
            <div>{this.props.songList[this.props.match.params.songId].description}</div>
            <button onClick= {()=>this.props.chooseSong(this.props.match.params.songId)}>play</button>
            </div>
        )
    }
}

export default SongDetails;