import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navegacion from './navigation';
import {Menu} from './app/context/MenuContext';

export default function App(){
    return(
<Menu>
    <NavigationContainer>
        <Navegacion></Navegacion>
    </NavigationContainer>
</Menu>
    );
}