import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Colors} from "@/constants/Colors";
import {View, StyleSheet, Image} from "react-native";
import {useColorScheme} from "@/hooks/useColorScheme";

export default function () {
  const colorScheme = useColorScheme();

  return (
    <>
      <View
        style={{
          backgroundColor: Colors[colorScheme ?? 'light'].headerDivider,
          height: 60,
        }}
      />
      <ThemedView style={styles.container}>
        <Image source={require('@/assets/images/sign_in_image.png')} style={styles.signInImage} />
        <ThemedText>Hello Login Page!</ThemedText>
        <Image source={require('@/assets/images/login_form_bg.png')} style={styles.image} />
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    bottom: 0,
  },
  signInImage: {
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: 60,
  }
})