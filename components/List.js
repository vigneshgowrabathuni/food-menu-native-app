import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((data) => (
    <View key={data} style={styles.listItem}>
      <Text style={styles.itemText}>{data}</Text>
    </View>
  ));
}
export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: 'red',
  },
  itemText: {
    color: 'green',
    textAlign: 'center',
  },
});
