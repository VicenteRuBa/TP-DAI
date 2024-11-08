import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import api from '../api/spoonacular';

const BusquedaPlato = () => {
    const [query, setQuery] = useState('');

    const BuscarPlatos = async () => {
        if (query.length > 2) {
            const response = await api.get(`/recipes/complexSearch`, { params: { query } });
            console.log(response.data);
        }
    };

    return (
        <View>
            <TextInput placeholder="Buscar plato..." onChangeText={setQuery} />
            <Button title="Buscar" onPress={searchDishes} />
        </View>
    );
};

export default BusquedaPlato;
