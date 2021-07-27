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
    Segment,
    Grid,
    Header,
    List,
} from 'semantic-ui-react'

import {
    Switch,
    Route,
    Link,
    useLocation,
    useHistory,
} from "react-router-dom";


const languageOptions = [
    { text: 'English', flag: "uk" },
    { text: 'Español', flag: "es" },
    { text: 'Français', flag: "fr" },
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
                            icon='world'
                            button
                            className='link item'
                            text={null}
                            pointing
                        >
                            <Dropdown.Menu>
                                {languageOptions.map((option) => (
                                    <Dropdown.Item key={option.flag} {...option} />
                                ))}
                            </Dropdown.Menu>

                        </Dropdown>
                    </Menu.Menu>

                </Container>
            </Menu>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/filters" component={Filters} />
                <Route component={NotFoundPage} />
            </Switch>

            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={12} >
                                <Header as='h4' inverted>
                                ¡Si tienes dudas no dudes en contactarnos!

                                </Header>
                            </Grid.Column>
                            <Grid.Column width={4} >
                                <Header inverted as='h4' content='Contact' />
                                <List link inverted>
                                    <List.Item>
                                        <List.Icon name='marker' />
                                        <List.Content>Everywhere</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='phone' />
                                        <List.Content>+0 123 456 789 </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            <a href='mailto:alexis.gaziello@gmail.com'>alexis.gaziello@gmail.com</a>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='instagram' />
                                        <List.Content>
                                            <a href='https://www.instagram.com/filter_es/?hl=en'>Instagram</a>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>

    );
}

export default App;