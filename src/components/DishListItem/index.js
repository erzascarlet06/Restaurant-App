import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ size }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Home Screen", { id: size.id })}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{size.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {size.description}
        </Text>
        <Text style={styles.price}>$ {size.price}</Text>
      </View>
      {size.image && (
        <Image source={{ uri: size.image }} style={styles.image} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default DishListItem;
