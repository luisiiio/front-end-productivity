import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';


// Styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

// Material Components
import AppBar from 'material-ui/AppBar';

// Local Components
import ActionsTabs from './components/General/ActionsTabs';



const AppContainer = () => (
    <div className="app-container">
        <AppBar title="Productivity App"/>
        <div className="container-actions-tabs">
            <ActionsTabs />
        </div>
    </div>
);



class ProductivityApp extends React.Component {

    render() {
        return (
            <Provider store={ store }>
                <MuiThemeProvider>
                    <AppContainer/>
                </MuiThemeProvider>
            </Provider>
        );
    }
}



ReactDOM.render(
    <ProductivityApp />,
    document.getElementById('root')
);