import React, { useState, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import busquedaPlato from '../components/busquedaPlato';
import itemPlato from '../components/itemPlato';
import { MenuContext } from '../context/MenuContext';
import api from '../api/spoonacular';

const PantallaBusqueda = () => {
    const [results, setResults] = useState([]);
    const { añadirPlato } = useContext(MenuContext);

    const busqueda = async (query) => {
        if (query.length > 2) {
            try {
                const response = await api.get(`/recipes/complexSearch`, { params: { query } });
                setResults(response.data.results);
            } catch (error) {
                console.error(error);
            }
        } else {
            setResults([]);
        }
    };

    return (
        <View>
            <busquedaPlato onSearch={handleSearch} />
            <FlatList
                data={results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <itemPlato 
                        dish={item}
                        onAdd={() => añadirPlato(item)}
                    />
                )}
                ListEmptyComponent={<Text>No se encontraron resultados</Text>}
            />
        </View>
    );
};

export default PantallaBusqueda;
