import { useHeaderHeight } from "@react-navigation/elements";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmptyList from "~/components/EmptyList";
import { Activity } from "~/components/Icons";
import UserCard from "~/components/UserCard";
import { Button } from "~/components/ui/button";
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
  { name: "Daniel", index: 3, status: "ready" },
  { name: "Victor", index: 4, status: "ready" },
  { name: "Gabriela", index: 5, status: "ready" },
  { name: "Sorraimi", index: 6, status: "ready" },
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
  const { bottom } = useSafeAreaInsets();
  const [queue, setQueue] = useState<User[]>([]);

  const renderItem = ({ item, index }: { item: User; index: number }) => (
    <UserCard {...item} onPress={() => handleGoNextInQueue(index)} />
  );

  const handleShuffle = () => {
    const shuffledArray = shuffleArray(data);
    setQueue(shuffledArray);
  };

  const handleGoNextInQueue = (index: number) => {
    const newArray = [...queue];
    const next = newArray.splice(index, 1)[0];
    newArray.push(next);

    setQueue(newArray);
  };

  return (
    <View
      className="h-full relative"
      style={{
        paddingTop: headerHeight,
      }}
    >
      {queue.length > 0 && (
        <View className="items-center w-full justify-between flex-row py-4 px-4">
          <Text className="text-2xl font-bold ">Queue</Text>
        </View>
      )}
      <FlatList
        data={queue}
        renderItem={renderItem}
        contentContainerClassName={cn(
          "gap-4",
          queue.length > 0 ? "" : "flex-1"
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <EmptyList />
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
