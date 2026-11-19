import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 bg-white pt-12">
      <ScrollView>
        <View className="flex-row items-center justify-between px-4 pb-3">
          <Text className="text-xl font-bold">VIN_TUREs</Text>
          <View className="flex-row items-center">
            <Pressable
              className="mr-4"
              onPress={() => router.push("/home")}
            >
              <Text className="text-2xl">🏠</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/login")}>
              <Text className="font-bold text-red-500">Logout</Text>
            </Pressable>
          </View>
        </View>

        <View className="flex-row items-center px-4">
          <Image
            source={{ uri: "https://picsum.photos/id/10/300/300" }}
            className="h-24 w-24 rounded-full border-2 border-pink-500"
          />
          <View className="ml-6 flex-1 flex-row justify-around">
            <View className="items-center">
              <Text className="text-lg font-bold">6</Text>
              <Text>Posts</Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold">312</Text>
              <Text>Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold">180</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>

        <View className="px-4 pt-3">
          <Text className="font-bold">VINCE</Text>
          <Text>BSIT 3rd Year 💻</Text>
          <Text>📍 Opol, Misamis Oriental</Text>
          <Text>✉️ vinceee@email.com</Text>
        </View>

        <View className="px-4 py-4">
          <Pressable className="items-center rounded-lg bg-gray-200 p-3">
            <Text className="font-bold">Edit Profile</Text>
          </Pressable>
        </View>

        <View className="flex-row flex-wrap border-t border-gray-200">
          <Image
            source={{ uri: "https://picsum.photos/id/1018/400/400" }}
            className="h-32 w-1/3 border border-white"
          />
          <Image
            source={{ uri: "https://picsum.photos/id/1015/400/400" }}
            className="h-32 w-1/3 border border-white"
          />
          <Image
            source={{ uri: "https://picsum.photos/id/1039/400/400" }}
            className="h-32 w-1/3 border border-white"
          />
          <Image
            source={{ uri: "https://picsum.photos/id/15/400/400" }}
            className="h-32 w-1/3 border border-white"
          />
          <Image
            source={{ uri: "https://picsum.photos/id/16/400/400" }}
            className="h-32 w-1/3 border border-white"
          />
          <Image
            source={{ uri: "https://picsum.photos/id/28/400/400" }}
            className="h-32 w-1/3 border border-white"
          />
        </View>
      </ScrollView>
    </View>
  );
}