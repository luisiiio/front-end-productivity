import React from 'react';
import { connect } from 'react-redux';

import mockData from './mockData';
import store from '../../store/';
import * as ACTIONS from '../../actions/tasks';

// Material Components
import {Tabs, Tab} from 'material-ui/Tabs';

// Local Components
import Tasks from '../Tasks';
import CompletedTasks from '../CompletedTask';


const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    }
  };
  
class ActionsTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        value: 'tasks',
        };

        let obj = {
            "description": "crear models task",
            "duration": "3:30:45"
        }

        ACTIONS.getTasks();
        store.dispatch(ACTIONS.createTask(obj));

        if(!JSON.parse(localStorage.getItem("mockData"))) {
            localStorage.setItem("mockData", JSON.stringify(mockData));
        }
    }

    handleChange = (value) => {
        this.setState({
        value: value,
        });
    };

    render() {
        
        const { dataApp } = this.props;

        return (


            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Tasks" value="tasks">
                <div>
                    <h2 style={styles.headline}>Tasks</h2>
                    <Tasks dataApp={ dataApp }/>
                </div>
                </Tab>
                <Tab label="Completed Tasks" value="completedTasks">
                <div>
                    <h2 style={styles.headline}>Completed Tasks</h2>
                    <CompletedTasks />
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


const mapStateToProps = (state) => ({
	dataApp: state.tasks,
});

export default connect(mapStateToProps)(ActionsTabs);