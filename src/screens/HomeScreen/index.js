import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from "react-native";
import {  DataStore } from 'aws-amplify';
import RestaurantItem from "../../components/RestaurantItem";
//import restaurants from "../../../assets/data/restaurants.json";
import { Product } from '../../models'
import "core-js/features/symbol/async-iterator"
//import awsconfig from '../../aws-exports'

/*Amplify.configure({
  ...awsconfig,
  Analytics: { 
    disabled: true
  }
});*/

export default function HomeScreen() {
const [products, setProducts] = useState([]);

const fetchProducts = async () => {
  try{
  const results = await DataStore.query(Product);
  setProducts(results);
  }
  catch(err)
  {
    console.log(err)
  }
};

useEffect(() => {fetchProducts();}, []);

  return (
    <View style={styles.page}>
      
      <FlatList
        data={products}
        renderItem={({ item }) => <RestaurantItem product={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});