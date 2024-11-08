import {createStackNavigator} from '@react-navigation/native-stack';
import Home from './app/pantallas/pantallaHome';
import Busqueda from './app/pantallas/pantallaBusqueda';
import Detalles from './app/pantallas/pantallaDetalles';

const Stack = createStackNavigator();

function Navigation(){
    return (
        <Stack.Navigation>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Busqueda" component={Busqueda}/>
            <Stack.Screen name="Detalles" component={Detalles}/>
        </Stack.Navigation>
    )
}

export default Navigation;