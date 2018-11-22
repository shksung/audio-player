import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.myRef = React.createRef()
        this.state = {
            songList: [],
            currentSong: [],
            songID: 0,
            loading: true
        }
    }
    playSong = () => {
        this.myRef.current.play()
    }
    pauseSong = () => {
        this.myRef.current.pause()
    }
    nextSong = () => {
        if (this.state.songID < this.state.songList.length - 1) {
            this.setState({
                currentSong: this.state.songList[this.state.songID + 1].source,
                songID: this.state.songID + 1
            }, () => this.myRef.current.play())
        }
        else {
            this.setState({
                currentSong: this.state.songList[0].source,
                songID: 0
            }, () => this.myRef.current.play())
        }
    }

    previous = () => {
        if (this.state.songID > 0) {
            this.setState({
                currentSong: this.state.songList[this.state.songID - 1].source,
                songID: this.state.songID - 1
            }, () => this.myRef.current.play())
        }
        else {
            this.setState({
                currentSong: this.state.songList[this.state.songList.length - 1].source,
                songID: this.state.songList.length - 1
            }, () => this.myRef.current.play())
        }
    }

    chooseSong = (i) => {
        this.setState({
            currentSong: this.state.songList[i].source,
            songID: i
        }, () => this.myRef.current.play())
    }

    componentDidMount() {
        axios.get('http://localhost:8080/music')
            .then((res) => {
                this.setState({
                    songList: res.data,
                    currentSong: res.data[0].source,
                    loading: false
                })
            })
    }
    render() {
        return (
            <div>
                <div>

                    {this.state.loading === true ? 'Loading...' : (
                        <div>
                            <div className="back">
                                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                                    <Link to="/"><a className="navbar-brand" >Musical</a></Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarColor02">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link to="/"> <a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
                                            </li>

                                        </ul>
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>
                                </nav>
                                <Route exact path="/" render={() => <SongsList chooseSong={this.chooseSong} songList={this.state.songList} msg={'this is how we pass props in react router'} />} />
                                <Route path='/:songId' render={(router) => <SongDetails chooseSong={this.chooseSong} songList={this.state.songList} {...router} msg={'this is how we pass props in react router'} />} />

                            </div>


                            <div class="container-audio">
                                <div>Now Playing: {this.state.songList[this.state.songID].title}</div>
                                <button onClick={this.previous}>Previous</button><button onClick={this.playSong}>Play</button><audio ref={this.myRef} id="player" src={this.state.currentSong} />
                                <button onClick={this.pauseSong}>Pause</button>
                                <button onClick={this.nextSong}>Next</button></div>


                        </div>
                    )}
                </div>
                <div className="container-audio">
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div class="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                    <div className="colum1">
                        <div className="row"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
