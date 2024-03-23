import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
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

export default function Login(props: any) {
  const goSignup = () => {
    props.navigation.navigate("Signup");
  };

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
    if (error) Alert.alert(error.message);

    setLoading(false);
  }
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 15,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
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
          width: "100%",
          top: 100,
        }}
      >
        <Text
          style={{
            fontFamily: "MontserratBold",
            fontSize: 30,
          }}
        >
          Login
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontFamily: "MontserratRegular" }}>New User?</Text>

          <TouchableOpacity onPress={goSignup}>
            <Text style={{ fontFamily: "MontserratSemi", color: "#4895EF" }}>
              Create Account Now!
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 50,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../../assets/image/googola.png")}
              style={{}}
            />
            <Text style={{ fontFamily: "MontserratRegular", marginLeft: 10 }}>
              Login with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image source={require("../../assets/image/fb.png")} style={{}} />
            <Text style={{ fontFamily: "MontserratRegular", marginLeft: 10 }}>
              Login with Facebook
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#696969",
                width: "60%",
                height: "1%",
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <Text style={{ fontFamily: "MontserratRegular", color: "#696969" }}>
              Or
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 10, width: "100%" }}>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              fontFamily: "MontserratRegular",
            }}
            placeholder="Email"
            value={Email}
            onChangeText={(Text) => setEmail(Text)}
          />

          <TextInput
            secureTextEntry={true}
            onChangeText={(Text) => setPassword(Text)}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
              fontFamily: "MontserratRegular",
            }}
            placeholder="Password"
            value={Password}
          />
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: "10%",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
          onPress={() => signInWithEmail()}
          disabled={loading}
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
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "100%", justifyContent: "center" }}>
          <Text style={{ fontFamily: "MontserratRegular" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
