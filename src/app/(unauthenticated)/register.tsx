import { Link, router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Register() {
  return (
    <View className="flex-1 justify-center bg-white p-8">
      <Text className="text-center text-5xl font-bold italic text-black">
        BarkadaVibes
      </Text>
      <Text className="mb-8 mt-2 text-center font-semibold text-gray-500">
        Register to see photos from your friends.
      </Text>

      <TextInput
        className="mb-3 rounded-lg border border-gray-300 bg-gray-100 p-4"
        placeholder="Name"
      />

      <TextInput
        className="mb-3 rounded-lg border border-gray-300 bg-gray-100 p-4"
        placeholder="Email"
      />

      <TextInput
        className="mb-3 rounded-lg border border-gray-300 bg-gray-100 p-4"
        placeholder="Password"
        secureTextEntry={true}
      />

      <TextInput
        className="mb-4 rounded-lg border border-gray-300 bg-gray-100 p-4"
        placeholder="Confirm Password"
        secureTextEntry={true}
      />

      <Pressable
        className="items-center rounded-lg bg-blue-500 p-4"
        onPress={() => router.push("/login")}
      >
        <Text className="font-bold text-white">Register</Text>
      </Pressable>

      <View className="mt-10 flex-row justify-center border-t border-gray-200 pt-6">
        <Text className="text-gray-500">Have an account? </Text>
        <Link href="/login">
          <Text className="font-bold text-blue-500">Login</Text>
        </Link>
      </View>
    </View>
  );
}