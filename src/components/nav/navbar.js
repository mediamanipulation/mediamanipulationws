import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import {  Home, Book, AccountBox } from '@material-ui/icons'

function NavBar(props) {

    return (
        <List component="nav">
        
            <ListItem component="div" >
            <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                       <h3>mediamanipulation</h3> 
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        art  <PaletteOutlinedIcon />
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        bio <Book />
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Contact <AccountBox />
                    </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    )
}


export default NavBar;