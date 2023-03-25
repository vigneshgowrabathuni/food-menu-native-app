import { View, StyleSheet, Text } from 'react-native';
function Subtitle({ name }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subtitle}>{name}Ingredients</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
});
