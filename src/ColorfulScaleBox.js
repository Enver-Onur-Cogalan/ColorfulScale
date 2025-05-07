import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export default function ColorfulScaleBox() {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
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
    }, [animation]);

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
            <Animated.View style={[styles.box, { transform: [{ scale }], backgroundColor }]} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
});
