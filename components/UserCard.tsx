import type React from "react";
import { Pressable, View } from "react-native";
import { cn } from "~/lib/utils";
import { CheckCircle } from "./Icons";
import { Button } from "./ui/button";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { Text } from "./ui/text";

type Props = {
  onPress: () => void;
  name: string;
  status: string;
};

export default function UserCard({
  onPress,
  name,
  status,
}: Props): React.ReactElement {
  return (
    <Pressable className="w-full h-28 px-4">
      <Card className="h-full">
        <CardHeader className="items-center flex-row gap-4">
          <Text className="font-p600 text-md">{name}</Text>
          <View
            className={cn(
              "h-[10px] w-[10px] rounded-full ",
              status === "ready" ? "bg-green-500" : "bg-muted-foreground"
            )}
          />
        </CardHeader>
        <CardFooter className="w-full justify-end p-0">
          <Button variant={"ghost"} size={"icon"} onPress={onPress}>
            <CheckCircle className="text-foreground" size={20} />
          </Button>
        </CardFooter>
      </Card>
    </Pressable>
  );
}
