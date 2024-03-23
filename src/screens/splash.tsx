import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Splash(props: any) {
  const handleSignup = () => {
    props.navigation.navigate("Signup");
  };
  const handleLogin = () => {
    props.navigation.navigate("Login");
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../assets/image/vect2.png")}
        style={{
          width: "110%",
        }}
      />
      <Image
        source={require("../../assets/image/dd.png")}
        style={{ bottom: 50 }}
      />

      <View
        style={{
          width: "100%",
          bottom: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#6000ff",
              fontSize: 60,
              fontFamily: "MontserratBold",
            }}
          >
            H
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 30,
              fontFamily: "MontserratRegular",
            }}
          >
            ood.
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "MontserratRegular",
              textAlign: "center",
              width: "70%",
              color: "#000",
            }}
          >
            Where anonymity blooms into meaningful connections
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          bottom: 100,
        }}
      >
        <TouchableOpacity
          onPress={handleSignup}
          style={{
            width: "80%",
            height: "18%",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LinearGradient
            style={{
              width: "100%",
              height: "100%",
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
            colors={["#9C00EC", "#2E009D"]}
          >
            <Text style={{ color: "#fff", fontFamily: "MontserratRegular" }}>
              Create Account
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            width: "80%",
            height: "15%",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#2E009D",
          }}
        >
          <Text style={{ fontFamily: "MontserratRegular" }}>
            Already Have an Account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
