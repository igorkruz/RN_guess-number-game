import { FC } from "react";
import { View, Text, Pressable } from "react-native";

interface Props {
  title: string;
}

export const PrimaryButtont: FC<Props> = ( { title } ) => {
  return(
    <Pressable >
      <Text>{title}</Text>
    </Pressable>
  )
}