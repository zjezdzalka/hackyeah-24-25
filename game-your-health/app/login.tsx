import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Colors} from "@/constants/Colors";
import {View, StyleSheet, Image, TextInput, Pressable, Text} from "react-native";
import {useColorScheme} from "@/hooks/useColorScheme";
import {useState} from "react";
import {Href, useRouter} from "expo-router";

export default function () {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('hack.yeah@zsk.poznan.pl');
  const [password, setPassword] = useState('$3cur3P@$$w0rd');
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
        <Image source={require('@/assets/images/sign_in_image.png')} style={styles.signInImage} />
        <View style={styles.formHolder}>
          <ThemedText style={styles.formLabel}>Email address</ThemedText>
          <TextInput value={email} onChangeText={setEmail} style={styles.input} />
          <ThemedText style={styles.formLabel}>Password</ThemedText>
          <TextInput secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
          <View style={styles.buttonHolder}>
            <Pressable onPress={() => {router.replace('/(tabs)/' as Href)}} style={({ pressed }) => [{ backgroundColor: pressed ? Colors.button.primary.pressedBackgorund : Colors.button.primary.background }, styles.button ]}>
              {({ pressed }) => (
                <Text style={[styles.buttonText, { color: pressed ? Colors.button.primary.pressedText : Colors.button.primary.text}]}>Sign In</Text>
              )}
            </Pressable>
          </View>
        </View>
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
    marginBottom: 0,
    marginTop: 60,
  },
  formHolder: {
    paddingHorizontal: 40,
    zIndex: 20,
  },
  formLabel: {
    fontSize: 20,
  },
  input: {
    height: 60,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#E9E6F4',
    backgroundColor: '#fff'
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
})