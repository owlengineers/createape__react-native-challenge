import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackSVG from "../assets/icons/back.svg";

function Header() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginTop: 32 }}>
      <BackSVG height={26} width={20} />
    </TouchableOpacity>
  );
}

export default Header;
