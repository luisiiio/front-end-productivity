import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

// Material Components
import AppBar from 'material-ui/AppBar';

// Local Components
import ActionsTabs from './components/actions-tabs';



const AppContainer = () => (
    <div className="app-container">
        <AppBar title="Productivity App"/>
        <ActionsTabs />
    </div>
);



class ProductivityApp extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <AppContainer/>
            </MuiThemeProvider>
        );
    }
}



ReactDOM.render(
    <ProductivityApp />,
    document.getElementById('root')
);