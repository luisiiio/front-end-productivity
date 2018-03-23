import React from 'react';

// Material Components
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// Local Components


const styles = {
  customWidth: {
    width: 200,
  },
};


export default class BtnFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
      }
    
      handleChange = (event, index, value) => this.setState({value});
    
      render() {
        return (
          <div>
            <DropDownMenu value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
              <MenuItem value={1} primaryText="Filter for Duration" />
              <MenuItem value={2} primaryText="Short" />
              <MenuItem value={3} primaryText="Medium" />
              <MenuItem value={4} primaryText="Large" />
            </DropDownMenu>
          </div>
        );
    }
}