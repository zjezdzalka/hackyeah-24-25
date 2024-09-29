import {Image, View, StyleSheet} from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 0,
    margin: 0,
  },
  logo: {
    padding: 0,
    margin: 0,
  }
})