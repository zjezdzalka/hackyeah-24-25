import {Colors} from "@/constants/Colors";
import {Image, View, StyleSheet, Text} from "react-native";
import {useColorScheme} from "@/hooks/useColorScheme";
import {ThemedView} from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedText} from "@/components/ThemedText";
import {useEffect, useState} from "react";

export default function () {
  const colorScheme = useColorScheme();

  const [showFirstMessage, setShowFirstMessage] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  const [showFourthMessage, setShowFourthMessage] = useState(false);
  const [showFifthMessage, setShowFifthMessage] = useState(false);
  const [showSixthMessage, setShowSixthMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirstMessage(true);
    }, 1000);
    setTimeout(() => {
      setShowSecondMessage(true);
    }, 3000);
    setTimeout(() => {
      setShowThirdMessage(true);
    }, 5000);
    setTimeout(() => {
      setShowFourthMessage(true);
    }, 7000);
    setTimeout(() => {
      setShowFifthMessage(true);
    }, 9000);
    setTimeout(() => {
      setShowSixthMessage(true);
    }, 11000);
  }, []);

  return (
    <>
      <ThemedView style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 0, width: '100%'}}>
        <View
          style={{
            backgroundColor: Colors[colorScheme ?? 'light'].headerDivider,
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: Colors.colors.lightGray,
            marginTop: 40,
            paddingBottom: 40,
            marginBottom: 0,
          }}
        >
          <Image source={require('@/assets/images/inspirai.png')} resizeMode="contain"/>
        </View>
        <ParallaxScrollView>
          {showFirstMessage && (
            <View style={styles.myMessageHolder}>
              <View style={styles.myMessage}>
                <ThemedText>Hey, how to use this app?</ThemedText>
              </View>
            </View>
          )}
          {showSecondMessage && (
            <View style={styles.botMessageHolder}>
              <View style={styles.botMessage}>
                <ThemedText>Hey! 😊 Let me walk you through it.</ThemedText>
              </View>
              {showThirdMessage && (
                <View style={styles.botMessage}>
                  <ThemedText>First, there’s a list of habits where you can track things like workouts, water intake, or any healthy routine.</ThemedText>
                </View>
              )}
              {showFourthMessage && (
                <View style={styles.botMessage}>
                  <ThemedText>Then, we have a mood tracker to log how you’re feeling. It helps spot trends in your emotions.</ThemedText>
                </View>
              )}
              {showFifthMessage && (
                <View style={styles.botMessage}>
                  <ThemedText>And finally, check out events to schedule reminders for things like exercise or meditation.</ThemedText>
                </View>
              )}
              {showSixthMessage && (
                <View style={styles.botMessage}>
                  <ThemedText>All of this helps you stay on top of your health and fitness goals! 💪</ThemedText>
                </View>
              )}
            </View>
          )}

        </ParallaxScrollView>
        <View style={styles.newMessage}>
          <View style={styles.newMessageInput} />
        </View>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  myMessageHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  botMessageHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    padding: 0,
    margin: 0,
    gap: 5,
  },
  myMessage: {
    width: '80%',
    padding: 10,
    backgroundColor: Colors.colors.myMessage,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    margin: 0,
  },
  botMessage: {
    width: '80%',
    padding: 10,
    backgroundColor: Colors.colors.botMessage,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  newMessage: {
    height: 60,
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: Colors.colors.botMessage,
    alignItems: 'center',
  },
  newMessageInput: {
    width: '80%',
    padding: 10,
    backgroundColor: '#EDEDED',
    borderRadius: 20,
    height: 40,
  }
})