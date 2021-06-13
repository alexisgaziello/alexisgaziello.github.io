import React from 'react';

import About from './components/About.jsx'
import Filters from './components/Filters.jsx'
import Home from './components/Home.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'


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


const languageOptions = [
    { key: 'English', text: 'English', value: 'English', flag: "uk" },
    { key: 'Spanish', text: 'Spanish', value: 'Spanish', flag: "es" },
    { key: 'French', text: 'French', value: 'French', flag: "fr" },
  ]

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
                        onClick={() => { history.push("/") }}
                    />
                    <Menu.Item
                        name='Filters'
                        active={location.pathname === '/filters'}
                        onClick={() => { history.push("/filters") }}
                    />
                    <Menu.Item
                        name='About'
                        active={location.pathname === '/about'}
                        onClick={() => { history.push("/about") }}
                    />

                    <Menu.Menu position='right'>
                        <Dropdown
                            button
                            className='icon'
                            floating
                            labeled
                            icon='world'
                            options={languageOptions}
                            search
                            text='Language'
                        />
                    </Menu.Menu>

                </Container>
            </Menu>


            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/filters" component={Filters} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    );
}

export default App;