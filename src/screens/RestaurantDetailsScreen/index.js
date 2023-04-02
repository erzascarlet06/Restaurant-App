import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
//import restaurants from "../../../assets/data/restaurants.json";
import Header from "./Header";
import styles from "./styles";
import { Amplify, Auth, DataStore } from "aws-amplify";
import { Product, Size } from "../../models";
import { useRoute, useNavigation } from "@react-navigation/native";
import { withAuthenticator } from "aws-amplify-react-native"
import awsconfig from '../../aws-exports'
//const restaurant = restaurants[0];
Amplify.configure({
  ...awsconfig,
  Analytics: { 
    disabled: true
  }
});
const RestaurantDetailsPage = () => {
  const [product, setProduct] = useState([]);
  const [sizes, setSizes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;
  
  useEffect(() => {
    if (id) {
      DataStore.query(Product, id).then(setProduct);
      DataStore.query(Size, (size) => size.productID.eq(id)).then(setSizes);
    }
  }, [id]);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header product={product} />}
        
        data={sizes}
        renderItem={({ item }) => <DishListItem size={item} />}
        //keyExtractor={(item) => item.name}
      />
      <Text
        onPress={() => Auth.signOut()}
        style={{ textAlign: "center", color: "red", margin: 10 }}>
        Sign out
      </Text>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default withAuthenticator(RestaurantDetailsPage);
