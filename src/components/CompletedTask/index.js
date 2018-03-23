import React from 'react';


// Local Styles
//import './index.css';

// Material Components
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// Local Components


export default class CompletedTask extends React.Component {

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
                        <TableHeaderColumn>Timer / Completed</TableHeaderColumn>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                displayRowCheckbox={false}
                >
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn>23 March 2018</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn>23 March 2018</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn>23 March 2018</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn>23 March 2018</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>add news tasks</TableRowColumn>
                        <TableRowColumn>01:23:34</TableRowColumn>
                        <TableRowColumn>00:30:34</TableRowColumn>
                        <TableRowColumn>23 March 2018</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}