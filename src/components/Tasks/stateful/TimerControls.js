import React from 'react';

// Material Components

// Local Components


const styles = {
    marginLeft: {
      marginLeft: 20,
    },
};

export default class TimerControls extends React.Component {

    
      render() {
        return (
            <div>
                <i className="material-icons btn-reset" style={styles.marginLeft}>replay</i>
                <i className="material-icons btn-pause" style={styles.marginLeft}>pause</i>
                <i className="material-icons btn-play" style={styles.marginLeft}>play_arrow</i>
            </div>
        );
    }
}