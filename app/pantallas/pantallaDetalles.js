import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { MenuContext } from '../context/MenuContext';

const pantallaDetalle = ({ route, navigation }) => {
    const { plato } = route.params;
    const { menu, añadirPlato, eliminarPlato } = useContext(MenuContext);

    const isInMenu = menu.some((item) => item.id === plato.id);

    return (
        <View>
            <Text>Nombre: {plato.name}</Text>
            <Text>HealthScore: {plato.healthScore}</Text>
            <Text>{dish.isVegan ? 'Vegano' : 'No Vegano'}</Text>
            {isInMenu ? (
                <Button title="Eliminar del menú" onPress={() => eliminarPlato(dish.id)} />
            ) : (
                <Button title="Agregar al menú" onPress={() => añadirPlato(dish)} />
            )}
        </View>
    );
};

export default pantallaDetalle;
