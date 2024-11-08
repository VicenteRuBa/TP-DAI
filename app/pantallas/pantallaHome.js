import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import itemPlato from '../components/itemPlato';
import menu from '../components/menu';

const pantallaHome = () => {
    const { menu, totalPrice, averageHealthScore, eliminarPlato } = useContext(MenuContext);

    return (
        <View>
            <MenuSummary totalPrice={totalPrice} averageHealthScore={averageHealthScore} />
            <FlatList
                data={menu}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <DishItem 
                        dish={item}
                        onRemove={() => eliminarPlato(item.id)}
                    />
                )}
                ListEmptyComponent={<Text>El menú está vacío</Text>}
            />
        </View>
    );
};

export default pantallaHome;
