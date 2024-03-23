import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  AppState,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { supabase } from "../../lib/superbase";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Signup(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    if (!session) Alert.alert("Please Check your inbox for email verification");
  }

  const loginGo = () => {
    props.navigation.navigate("Login");
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: -50,
        }}
      >
        <Image
          source={require("../../assets/image/vect2.png")}
          style={{
            width: "110%",
            bottom: 90,
            right: 10,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 70,
          width: "100%",
          padding: 10,
        }}
      >
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "MontserratBold",
              fontSize: 30,
            }}
          >
            Signup
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontFamily: "MontserratRegular" }}>
              Already Have an Account?
            </Text>

            <TouchableOpacity onPress={loginGo}>
              <Text style={{ fontFamily: "MontserratSemi", color: "#4895EF" }}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{}}>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              fontFamily: "MontserratRegular",
            }}
            placeholder="Name"
          />

          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              fontFamily: "MontserratRegular",
              marginTop: 20,
            }}
            placeholder="Email"
            onChangeText={(Text) => setEmail(Text)}
            value={email}
          />

          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              fontFamily: "MontserratRegular",
              marginTop: 20,
            }}
            placeholder="Mobile Number"
          />

          <TextInput
            secureTextEntry={true}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
              fontFamily: "MontserratRegular",
            }}
            placeholder="Password"
            onChangeText={(Text) => setPassword(Text)}
            value={password}
          />
          <TextInput
            secureTextEntry={true}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
              fontFamily: "MontserratRegular",
            }}
            placeholder="Re-Type Password"
          />

          <TouchableOpacity
            onPress={() => {
              signUpWithEmail();
            }}
            style={{
              width: "100%",
              height: "12%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
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
        </View>
      </View>
    </View>
  );
}
