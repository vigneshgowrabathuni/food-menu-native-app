import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import List from '../components/List';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import { MEALS } from '../data/dummy-data';

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const { affordability, complexity, duration, imageUrl, ingredients, steps } =
    selectedMeal;
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>Meal Detail Screen {mealId}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listWrapper}>
        <View style={styles.listContainer}>
          <Subtitle name="Ingredients" />
          <List data={ingredients} />
          <Subtitle name="Steps" />
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listWrapper: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
    height: 350,
  },
});
