import React from 'react';


// Local Styles
import './index.css';

// Local Components
import TaskTable from '../Common/TaskTable';
import BtnFilter from './stateful/BtnFilter';
import TimerControls from './stateful/TimerControls';


export default class Task extends React.Component {

    render() {
        return (
            <div>
                <div className="row-controls">
                    <BtnFilter />
                    <TimerControls />
                </div>
                <TaskTable />
            </div>
        );
    }
}