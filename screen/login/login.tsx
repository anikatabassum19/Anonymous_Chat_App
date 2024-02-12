import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'

export default function login() {
  return (
    <View>
        <Text className="text-2xl">Username</Text>
        <TextInput className="bg-red-100"></TextInput>
        <Text className="text-2xl">Password</Text>
        <TextInput className="bg-red-100"></TextInput>
       <TouchableOpacity>
      <Text className="text-3xl">Submit</Text>
    </TouchableOpacity>
    </View>
  )
}