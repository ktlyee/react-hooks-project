import React from 'react'
import playlist from './data'
import {IoIosPerson} from 'react-icons/io'
import ReactPlayer from 'react-player'

const MusicPlaylists = () => {
    return (
        <div className="grid-container">
            {playlist.map((music) => {
                const {id, name, listener, url} = music
                return (
                    <div key={id} className="music-container">
                        <div className="media-content">
                            <h4 className="music-name">{name}</h4>
                            <span className="icon"><IoIosPerson/></span>
                            <span className="amount">{listener}</span>
                            <ReactPlayer
                                url={url}
                                controls
                                width = "200px"
                                height = "100px"
                                className="video"
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MusicPlaylists;