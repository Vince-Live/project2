import { Link, router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center bg-white p-8">
      <Text className="text-center text-5xl font-bold italic text-black">
        BarkadaVibes
      </Text>
      <Text className="mb-10 mt-2 text-center text-gray-500">
        Share your best moments with friends.
      </Text>

      <TextInput
        className="mb-3 rounded-lg border border-gray-300 bg-gray-100 p-4"
        placeholder="Email"
      />

      <TextInput
        className="mb-4 rounded-lg border border-gray-300 bg-gray-100 p-4"
        placeholder="Password"
        secureTextEntry={true}
      />

      <Pressable
        className="items-center rounded-lg bg-blue-500 p-4"
        onPress={() => router.push("/home")}
      >
        <Text className="font-bold text-white">Login</Text>
      </Pressable>

      <View className="mt-10 flex-row justify-center border-t border-gray-200 pt-6">
        <Text className="text-gray-500">Don't have an account? </Text>
        <Link href="/register">
          <Text className="font-bold text-blue-500">Register</Text>
        </Link>
      </View>
    </View>
  );
}