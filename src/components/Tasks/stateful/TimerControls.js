import React from 'react';

// Material Components

// Local Components


export default class TimerControls extends React.Component {

    
      render() {
        return (
            <div>
                <i className="material-icons btn-reset">replay</i>
                <i className="material-icons btn-pause">pause</i>
                <i className="material-icons btn-play">play_arrow</i>
            </div>
        );
    }
}