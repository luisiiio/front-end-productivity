import React from 'react';

// Material Components
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// Local Components


const styles = {
  description: {
    width: 150,
  },
  duration: {
      width: 80,
  },
  formGroup: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
  },
  formGroupControls: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  completed: {
      width: 'auto'
  },
  save: {
      margin: 10
  }
};

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }
    
    handleChange = (event, index, value) => this.setState({value});
    
    render() {
        return (
            <div>
                <div style={styles.formGroup}>
                    <TextField hintText="Description" style={styles.description}/>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
                        <MenuItem value={1} primaryText="Duration" />
                        <MenuItem value={2} primaryText="Short" />
                        <MenuItem value={3} primaryText="Medium" />
                        <MenuItem value={4} primaryText="Large" />
                        <MenuItem value={5} primaryText="Custom" />
                    </DropDownMenu>
                    <TextField hintText="00:30:49"style={styles.duration}/>
                    <Checkbox label="Completed" style={styles.completed}/>
                </div>
                <div style={styles.formGroupControls}>
                    <RaisedButton label="Save" primary={true}  style={styles.save}/>
                    <RaisedButton label="Clean" secondary={true}  />
                </div>
            </div>
        );
    }
}