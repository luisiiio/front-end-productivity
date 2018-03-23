import React from 'react';

// Local styles
import './index.css';

// Material Components
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Delete = () => (
    <p className="btn-delete">DELETE</p>
)

const Edit = () => (
    <p className="btn-edit">EDIT</p>
)

const Up = () => (
    <p className="btn-move">UP</p>
)

const Down = () => (
    <p className="btn-move">DOWN</p>
)


 //   <RaisedButton label="Edit" primary={true} style={style}/>


export default class TaskTable extends React.Component {

    render() {
        return (
            <Table selectable={false}>
                <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                >
                    <TableRow>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                        <TableHeaderColumn>Duration</TableHeaderColumn>
                        <TableHeaderColumn>Timer</TableHeaderColumn>
                        <TableHeaderColumn>Actions</TableHeaderColumn>
                        <TableHeaderColumn>Move</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                displayRowCheckbox={false}
                >
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn><Edit/> <Delete/></TableRowColumn>
                        <TableRowColumn><Up/> <Down/></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn><Edit/> <Delete/></TableRowColumn>
                        <TableRowColumn><Up/> <Down/></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn><Edit/> <Delete/></TableRowColumn>
                        <TableRowColumn><Up/> <Down/></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn><Edit/> <Delete/></TableRowColumn>
                        <TableRowColumn><Up/> <Down/></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn><Edit/> <Delete/></TableRowColumn>
                        <TableRowColumn><Up/> <Down/></TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}