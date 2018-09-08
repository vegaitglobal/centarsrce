import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const normalize = n => (width / 360) * n;
