import React from 'react';

// Material Components
import {Tabs, Tab} from 'material-ui/Tabs';

// Local Components
import Tasks from '../Tasks';


const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    }
  };
  
export default class ActionsTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        value: 'tasks',
        };
    }

    handleChange = (value) => {
        this.setState({
        value: value,
        });
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Tasks" value="tasks">
                <div>
                    <h2 style={styles.headline}>Tasks</h2>
                    <Tasks />
                </div>
                </Tab>
                <Tab label="Completed Tasks" value="completedTasks">
                <div>
                    <h2 style={styles.headline}>Completed Tasks</h2>
                    <p>here are completed tasks</p>
                </div>
                </Tab>
                <Tab label="Graphic" value="graphic">
                <div>
                    <h2 style={styles.headline}>Graphic</h2>
                    <p>here is graphic</p>
                </div>
                </Tab>
            </Tabs>
        );
    }
}