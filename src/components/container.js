import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default Wrapper;
