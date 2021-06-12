import React from 'react';

import About from './components/About.jsx'
import Filters from './components/Filters.jsx'
import Home from './components/Home.jsx'


import {
  Menu,
  Container,
  Dropdown,
  Flag,
  Icon,
} from 'semantic-ui-react'

import {
    Switch,
    Route,
    Link,
    useLocation,
    useHistory,
  } from "react-router-dom";

const App = () => {
    const location = useLocation();
    const history = useHistory();
    let languagesMenuDeployed = false;
    return (
        <div>

            <Menu>
            <Container>
                <Menu.Item
                    name='Home'
                    active={location.pathname === '/'}
                    onClick={() => {history.push("/")}}
                    />
                <Menu.Item
                    name='Filters'
                    active={location.pathname === '/filters'}
                    onClick={() => {history.push("/filters")}}
                />
                <Menu.Item
                    name='About'
                    active={location.pathname === '/about'}
                    onClick={() => {history.push("/about")}}
                />
                
                <Menu.Menu position='right'>
                <Dropdown icon='world' text='Language' item>
                    <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Español</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Menu.Menu>

            </Container>
            </Menu>


            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/filters">
                    <Filters />
                </Route>
            </Switch>
        </div>

    );
}

export default App;