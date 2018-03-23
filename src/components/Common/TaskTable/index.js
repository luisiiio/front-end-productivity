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
    <i className="material-icons btn-delete ">delete</i>
)

const Edit = () => (
    <i className="material-icons btn-edit">edit</i>
)

const Up = () => (
    <i className="material-icons btn-move">expand_less</i>
)

const Down = () => (
    <i className="material-icons btn-move">expand_more</i>
)


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