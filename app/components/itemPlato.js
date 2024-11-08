import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const itemPlato = ({ plato }) => {
    return (
        <View>
            <Text>{plato.name}</Text>
            <Image source={{ uri: plato.image }} style={{ width: 100, height: 100 }} />
            <Button title="Ver detalle" />
            <Button title="Eliminar" />
        </View>
    );
};

export default itemPlato;
