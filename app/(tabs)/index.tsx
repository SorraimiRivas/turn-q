import { useHeaderHeight } from "@react-navigation/elements";
import { icons } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { Use } from "react-native-svg";
import { Activity, CheckCircle } from "~/components/Icons";
import { Button } from "~/components/ui/button";
import { Card, CardFooter, CardHeader } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

type User = {
  name: string;
  index: number;
  status: "ready" | "brb" | "break" | "lunch";
};

type Queue = User[];

const data: User[] = [
  { name: "Flor", index: 1, status: "ready" },
  { name: "Michael", index: 2, status: "ready" },
  { name: "Daniel", index: 3, status: "break" },
  { name: "Victor", index: 4, status: "ready" },
  { name: "Gabriela", index: 5, status: "ready" },
  { name: "Sorraimi", index: 6, status: "ready" },
  { name: "Faniela", index: 6, status: "ready" },
];

const shuffleArray = (array: User[]): User[] => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
export default function Queue() {
  const headerHeight = useHeaderHeight();
  const [shuffledData, setShuffledData] = useState<User[]>([]);

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <Pressable className="w-full h-28 px-4">
      <Card className="h-full">
        <CardHeader className="items-center flex-row gap-4">
          <Text className="font-semibold text-base">{item.name}</Text>
          <View
            className={cn(
              "h-[10px] w-[10px] rounded-full ",
              item.status === "ready" ? "bg-green-500" : "bg-muted-foreground"
            )}
          />
        </CardHeader>
        <CardFooter className="w-full justify-end p-0">
          <Button
            variant={"ghost"}
            size={"icon"}
            onPress={() => handleNextInQueue(index)}
          >
            <CheckCircle className="text-muted-foreground" size={20} />
          </Button>
        </CardFooter>
      </Card>
    </Pressable>
  );

  const handleShuffle = () => {
    const shuffledArray = shuffleArray(data);
    setShuffledData(shuffledArray);
  };

  const handleNextInQueue = (index: number) => {
    console.log(index);

    const newArray = [...shuffledData];
    const next = newArray.splice(index, 1)[0];
    newArray.push(next);

    setShuffledData(newArray);
  };

  return (
    <View
      className="flex-1 relative"
      style={{
        paddingTop: headerHeight,
      }}
    >
      <FlatList
        data={shuffledData}
        renderItem={renderItem}
        contentContainerClassName="gap-4 pb-4"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="items-center w-full justify-between flex-row py-4 px-4">
            <Text className="text-2xl font-bold ">Queue</Text>
            <Text>
              Next: <Text className="font-serif text-xl font-medium">Gaby</Text>
            </Text>

            <Text>{/* Ready: {online.length}/{total} */}</Text>
          </View>
        }
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text>Nothing to Show Here</Text>
          </View>
        }
      />
      <Button
        className="h-16 w-16 rounded-xl absolute bottom-4 right-4 z-50"
        size={"icon"}
        onPress={handleShuffle}
      >
        <Activity size={24} className="text-primary-foreground" />
      </Button>
    </View>
  );
}
