import React from 'react';
import { View, Platform } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import DeckDashboard from "./Components/DeckDashboard";
import CreateNewDeck from "./Components/CreateNewDeck";
import { FontAwesome, Ionicons } from '@expo/vector-icons'
export default class App extends React.Component {
  render() {
    return (
          <Tabs />
    );
  }
}

const Tabs = createBottomTabNavigator(
    {
        DeckDashboard: {
          screen: DeckDashboard,
            navigationOptions: {
              tabBarLabel: 'Decks',tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
            }
        },
        CreateNewDeck: {
            screen: CreateNewDeck,
            navigationOptions: {
                tabBarLabel: 'Create New Deck',tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
            }
        },
    },{
      navigationOptions : {
        header:null
      },
        tabBarOptions: {
          activeTintColor: Platform.OS === 'ios' ? '#4B0082' : '#FFFFFF',
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#4B0082',
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    }
);
