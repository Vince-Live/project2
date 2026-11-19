import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-white pt-12">
      <View className="flex-row items-center justify-between border-b border-gray-200 px-4 pb-3">
        <Text className="text-3xl font-bold italic text-black">BarkadaVibes</Text>
        <View className="flex-row items-center">
          <Text className="mr-4 text-2xl">🤍</Text>
          <Pressable onPress={() => router.push("/profile")}>
            <Image
              source={{ uri: "https://picsum.photos/id/10/150/150" }}
              className="h-8 w-8 rounded-full"
            />
          </Pressable>
        </View>
      </View>

      <ScrollView>
        <ScrollView
          horizontal={true}
          className="border-b border-gray-200 py-3"
        >
          <View className="mx-2 items-center">
            <Image
              source={{ uri: "https://picsum.photos/id/10/150/150" }}
              className="h-16 w-16 rounded-full border-2 border-pink-500"
            />
            <Text className="mt-1 text-xs">juan123</Text>
          </View>
          <View className="mx-2 items-center">
            <Image
              source={{ uri: "https://picsum.photos/id/15/150/150" }}
              className="h-16 w-16 rounded-full border-2 border-pink-500"
            />
            <Text className="mt-1 text-xs">maria_s</Text>
          </View>
          <View className="mx-2 items-center">
            <Image
              source={{ uri: "https://picsum.photos/id/16/150/150" }}
              className="h-16 w-16 rounded-full border-2 border-pink-500"
            />
            <Text className="mt-1 text-xs">carlo_m</Text>
          </View>
          <View className="mx-2 items-center">
            <Image
              source={{ uri: "https://picsum.photos/id/28/150/150" }}
              className="h-16 w-16 rounded-full border-2 border-pink-500"
            />
            <Text className="mt-1 text-xs">bea_c</Text>
          </View>
        </ScrollView>

        <View className="mb-4 mt-3">
          <View className="flex-row items-center px-3 pb-2">
            <Image
              source={{ uri: "https://picsum.photos/id/10/150/150" }}
              className="h-9 w-9 rounded-full"
            />
            <Text className="ml-3 flex-1 font-bold">juan123</Text>
            <Text className="text-xl">⋯</Text>
          </View>
          <Image
            source={{ uri: "https://picsum.photos/id/1018/800/800" }}
            className="h-96 w-full"
          />
          <Text className="px-3 pt-2 text-2xl">🤍  💬  ✈️</Text>
          <Text className="px-3 pt-1 font-bold">128 likes</Text>
          <Text className="px-3 pt-1">
            <Text className="font-bold">juan123 </Text>
            Good morning from the mountains!
          </Text>
          <Text className="px-3 pt-1 text-xs text-gray-400">2 HOURS AGO</Text>
        </View>

        <View className="mb-4">
          <View className="flex-row items-center px-3 pb-2">
            <Image
              source={{ uri: "https://picsum.photos/id/15/150/150" }}
              className="h-9 w-9 rounded-full"
            />
            <Text className="ml-3 flex-1 font-bold">maria_s</Text>
            <Text className="text-xl">⋯</Text>
          </View>
          <Image
            source={{ uri: "https://picsum.photos/id/1015/800/800" }}
            className="h-96 w-full"
          />
          <Text className="px-3 pt-2 text-2xl">🤍  💬  ✈️</Text>
          <Text className="px-3 pt-1 font-bold">342 likes</Text>
          <Text className="px-3 pt-1">
            <Text className="font-bold">maria_s </Text>
            Relaxing by the river with the barkada.
          </Text>
          <Text className="px-3 pt-1 text-xs text-gray-400">5 HOURS AGO</Text>
        </View>

        <View className="mb-4">
          <View className="flex-row items-center px-3 pb-2">
            <Image
              source={{ uri: "https://picsum.photos/id/16/150/150" }}
              className="h-9 w-9 rounded-full"
            />
            <Text className="ml-3 flex-1 font-bold">carlo_m</Text>
            <Text className="text-xl">⋯</Text>
          </View>
          <Image
            source={{ uri: "https://picsum.photos/id/1039/800/800" }}
            className="h-96 w-full"
          />
          <Text className="px-3 pt-2 text-2xl">🤍  💬  ✈️</Text>
          <Text className="px-3 pt-1 font-bold">89 likes</Text>
          <Text className="px-3 pt-1">
            <Text className="font-bold">carlo_m </Text>
            Found this waterfall on our weekend trip.
          </Text>
          <Text className="px-3 pt-1 text-xs text-gray-400">1 DAY AGO</Text>
        </View>
      </ScrollView>
    </View>
  );
}