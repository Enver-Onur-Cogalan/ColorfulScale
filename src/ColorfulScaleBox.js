import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ColorfulScaleBox() {
    const animation = useRef(new Animated.Value(0)).current;

    const runAnimation = () => {
        Animated.sequence([
            Animated.timing(animation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(animation, {
                toValue: 2,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(animation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
        ]).start();
    }

    const scale = animation.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [1, 1.5, 0.7],
    });

    const backgroundColor = animation.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['rgb(255,223,0)', 'rgb(255,140,0)', 'rgb(255,180,0)'],
    })

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Animated.View style={[styles.box, { transform: [{ scale }], backgroundColor }]} />
            </View>

            <TouchableOpacity style={styles.button} onPress={runAnimation}>
                <Text style={styles.buttonText}>Animate!</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 40,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
    button: {
        backgroundColor: '#ffa500',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
