import {Image, StyleSheet, View} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import AIChatButton from "@/components/AIChatButton";
import {Colors} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";
import Header from "@/components/Header";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <>
      <View
        style={{
          backgroundColor: Colors[colorScheme ?? 'light'].headerDivider,
          height: 60,
        }}
      />
      <ParallaxScrollView>
        <Header />
        <View style={styles.titleContainer}>
          <Image source={require('@/assets/images/xp.png')} resizeMode="contain"/>
          <Image source={require('@/assets/images/streak.png')} resizeMode="contain"/>
          <Image source={require('@/assets/images/mood.png')} resizeMode="contain"/>
          <Image source={require('@/assets/images/stats.png')} resizeMode="contain"/>
        </View>
      </ParallaxScrollView>
      <AIChatButton />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 0,
    margin: 0,
    gap: 20,
  },
});
