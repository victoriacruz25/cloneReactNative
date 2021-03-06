import React from 'react';
import {TouchableOpacity,Image} from 'react-native';

import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from '../screens/Feed';

import camera from '../../src/fotos/camera.png';
import logo from '../../src/fotos/logo.png';
import igtv from '../../src/fotos/igtv.png';
import enviar from '../../src/fotos/send.png';

const MainNavigator = createStackNavigator ({
    Feed
}, 
{
    defaultNavigationOptions: {
        headerTitle: <Image source={logo}/>,
        headerLeft:(
            <TouchableOpacity style={{marginLeft:20}}>
                <Image source={camera} />
            </TouchableOpacity>
        ),
        headerRight:(
            <>
            <TouchableOpacity style={{marginRight:20}}>
                <Image source={igtv}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:20}}>
                <Image source={enviar}/>
            </TouchableOpacity>
            </>
        )
    }
}
);

export default createAppContainer(MainNavigator);