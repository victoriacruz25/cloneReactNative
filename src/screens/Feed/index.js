import React from 'react';
import { render } from 'react-dom';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import pontos from '../../fotos/options.png';
import like from '../../fotos/like.png';
import comentario from '../../fotos/comment.png';
import encaminhar from '../../fotos/send.png';
import salvar from '../../fotos/save.png'

function Feed () {

    const posts = [
        {
            id: '1',
            autor: 'fishworld',
            imagem: 'https://images.tcdn.com.br/img/img_prod/749804/cascudo_pepita_de_ouro_l18_baryancistrus_xanthellus_451_1_20201211001324.jpg',
            likes: '9000',
            descricao: 'O Cascudo Pepita de Ouro é famoso por sua aparência, suas pintinhas amarelas dão um charme especial a este peixe de aquário que pode chegar até a 25 centímetros.',
            hashtags: '#aquarismo #cascudo #pepita #aquario #mundoaquarista',
            lugar: 'Rio de janeiro'
        },
        {
            id: '2',
            autor: 'fishworld',
            imagem: 'https://blog.pescagerais.com.br/wp-content/uploads/2020/11/peixe-acara-disco-aquario.jpg',
            likes: '300',
            descricao: 'O Peixe Acará Disco é famoso em todo o mundo.',
            hashtags: '#aquarismo #acara #diso #aquario #mundoaquarista',
            lugar: 'Rio de janeiro'
        },
        {
            id: '3',
            autor: 'fishworld',
            imagem: 'https://images.tcdn.com.br/img/img_prod/749804/ramirezi_koi_ciclideo_anao_79_1_20201211001323.jpg',
            likes: '1569',
            descricao: 'O Ramirezi Koi é encontrado em regiões com vasta vegetação submersa e raízes na América do Sul. Podendo chegar a viver por 6 anos.',
            hashtags: '#aquarismo #ramirezi #koi #aquario #mundoaquarista',
            lugar: 'Rio de janeiro'
        }
    ];

    function renderItem ({item: post}) {
        return (
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.user}>
                        <Text style={styles.autor}>{post.autor}</Text>
                        <Text style={styles.lugar}>{post.lugar}</Text>
                    </View>
                    <View style={styles.opcoes}>
                        <TouchableOpacity>
                            <Image source={pontos}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                     <Image style={styles.imagem} source={{uri: post.imagem}}/>
                </View>
                <View style={styles.footer}>
                <View style={styles.acoes}>
                    <View style={styles.esquerdo}>
                    <TouchableOpacity style={styles.acao}>
                        <Image source={like}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acao}>
                        <Image source={comentario}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acao}>
                        <Image source={encaminhar}/>
                    </TouchableOpacity>
                    </View>
                    <View>
                     <TouchableOpacity style={styles.acao}>
                        <Image source={salvar}/>
                     </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.like}>{post.likes} likes</Text>
                </View>
                <View>
                    <Text  style={styles.descricoes}>{post.descricao}</Text>
                </View>
                <View>
                    <Text  style={styles.hashtag}>{post.hashtags}</Text>
                </View>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 15
    },
    post: {
        marginVertical: 15
    },
    opcoes: {},
    user: {},
    autor: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    lugar: {
        fontSize: 12,
        color: '#666'
    },
    imagem: {
        width: '100%',
        height: 400
    },
    footer:{
        paddingHorizontal: 15,
    },
    acoes: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    acao: {
        marginRight: 8
    },
    esquerdo: {
        flexDirection: 'row'
    },
    like:{
        fontWeight:'bold',
        fontSize: 12
    },
    hashtag: {
        color: '#002D5E'
    },
    descricoes: {
        color: '#000',
        lineHeight: 18
    }

});

export default Feed;