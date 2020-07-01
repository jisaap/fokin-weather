import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0","#D39D38"],
        title:"Raze",
        subtitle:""
    },
    Thunderstorm: {
    iconName: "weather-tornada",
    gradient: ["#642B73", "#C6426E"],       
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#36D1DC", "#5B86E5"],
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#667db6","#0082c8", "#667db6"],
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#4AC29A", "#BDFFF3"],
    },
    Atmosphere: {
        iconName: "Weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#20002c", "#cbb4d4"],
        title:"Clouds",
        subtitle:"Cool get"
    },
    Mist: {
        iconName: "Weather-fog",
        gradient: ["#4DA0B0", "D39D38"],
    },
    Dust: {
        iconName: "weather-sunset",
        gradient: ["#4568DC", "#B06AB3"],
    }
}
// condition이 없는 경우 에러 발생
export default function Weather({ temp, condition }) {
    return (
            <LinearGradient
                colors={weatherOption[condition].gradient}
                style={styles.container}>
                    <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size = {96}
                    name={weatherOption[condition].iconName}
                    color = "white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style = {styles.title}>{weatherOption[condition].title}</Text>
                <Text style = {styles.subtitle}>{weatherOption[condition].subtitle}</Text>
            </View>

            </LinearGradient>
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},

title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 100
},
subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
},
textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
}

});