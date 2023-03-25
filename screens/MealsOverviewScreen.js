import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    return <MealItem item={itemData.item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    fles: 1,
    padding: 16,
  },
});
