import {Pressable, StyleSheet} from "react-native";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {Colors} from "@/constants/Colors";
import {Href, useRouter} from "expo-router";

export default function AIChatButton() {
  const router = useRouter()

  return (
    <Pressable
      style={
        ({pressed}) =>
          [
            styles.aiButton,
            {
              backgroundColor: pressed ? '#ffffffcc' : '#ffffff99'
            }
          ]
      }
      onPress={() => router.push('/ai-chat' as Href)}
    >
      {
        ({ pressed }) => (
            <TabBarIcon
              name={'sparkles'}
              color={pressed ? Colors.button.primary.pressedBackgorund : Colors.button.primary.background}
            />
        )
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  aiButton: {
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 20,
    right: 30,
    borderRadius: 50,
    borderCurve: 'continuous',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#fff"
  }
})