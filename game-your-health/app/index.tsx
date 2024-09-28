import {Image, View, Pressable, StyleSheet, Text} from "react-native"
import {Colors} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";
import {ThemedView} from "@/components/ThemedView";
import {Href, useRouter} from "expo-router";
import {ThemedText} from "@/components/ThemedText";

export default function () {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <>
      <View
        style={{
          backgroundColor: Colors[colorScheme ?? 'light'].headerDivider,
          height: 60,
        }}
      />
      <ThemedView style={styles.container}>
        <Image source={require('@/assets/images/login_logo.png')} style={styles.image} />
        <View style={styles.buttonHolder}>
          <Pressable onPress={() => {router.replace('/login' as Href)}} style={({ pressed }) => [{ backgroundColor: pressed ? Colors.button.primary.pressedBackgorund : Colors.button.primary.background }, styles.button ]}>
            {({ pressed }) => (
            <Text style={[styles.buttonText, { color: pressed ? Colors.button.primary.pressedText : Colors.button.primary.text}]}>Sign In</Text>
            )}
          </Pressable>
        </View>
        <View style={styles.copyRight}>
          <ThemedText style={styles.copyRightText}>
            Made by [Object object] team for HackYeah 2024
          </ThemedText>
        </View>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    paddingBottom: 40,
  },
  buttonHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 40,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    borderCurve: "continuous",
    elevation: 3,
    width: '90%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
  },
  copyRight: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 20,
  },
  copyRightText: {
    fontSize: 10,
    color: Colors.colors.lightGray,
  }
})