import React from 'react'
import './App.css'
import MenuIcon from '@material-ui/icons/Menu'
import {AppBar, Container, Grid, IconButton, Tab, Tabs, Toolbar, Typography} from '@material-ui/core'
import {ListMarkets} from './components/ListMarket'
import {ListExchanges} from './components/ListExchanges'


function App() {
    const [value, setValue] = React.useState(2)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu'>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6'>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid container justify={'center'}>
                    <Grid item xs={6}
                          style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginBottom: '20px'
                          }}>
                        <Tabs
                            value={value}
                            indicatorColor='primary'
                            textColor='primary'
                            onChange={handleChange}
                            aria-label='disabled tabs example'>
                            <Tab label='Exchanges'/>
                            <Tab label='Markets'/>
                        </Tabs>
                    </Grid>
                    {value === 1 ?
                        <Grid item xs={8}>
                            <ListExchanges/>
                        </Grid> :
                        <Grid item xs={8}>
                            <ListMarkets/>
                        </Grid>}
                </Grid>
            </Container>
        </>
    )
}

export default App



