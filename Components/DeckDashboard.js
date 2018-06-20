import React ,{Component} from 'react';
import { View,Text,StyleSheet,FlatList} from 'react-native';
export default class DeckDashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    listItem: {
        flex: 2,
        paddingTop: 30,
        backgroundColor: '#e76e63'
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#e76e63',
        margin: 10,
    }
})