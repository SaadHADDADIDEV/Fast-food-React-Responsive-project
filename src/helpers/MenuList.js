import React from "react";
import choc from "../assets/chocolate-caramel-mousse-plastic-transparent-cup-with-strawberry-sauce-cup-tea.jpg";
import tir from "../assets/tiramisu-cake-with-cacao-powder-top-served-with-tea.jpg";

export const MenuList = [
  // Pizza
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 12.99,
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    price: 14.99,
  },
  {
    id: 3,
    name: "Vegetarian Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    price: 13.99,
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80",
    price: 15.99,
  },
  {
    id: 5,
    name: "Hawaiian Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    price: 14.99,
  },
  {
    id: 6,
    name: "Quattro Formaggi Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 16.99,
  },
  {
    id: 7,
    name: "Mushroom Truffle Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 18.99,
  },
  {
    id: 8,
    name: "Prosciutto Arugula Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    price: 17.99,
  },
  {
    id: 9,
    name: "Seafood Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 19.99,
  },
  {
    id: 10,
    name: "Buffalo Chicken Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
    price: 16.99,
  },
  // Burgers
  {
    id: 11,
    name: "Double Cheeseburger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 14.99,
  },
  {
    id: 12,
    name: "Spicy Jalapeno Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 13.99,
  },
  {
    id: 13,
    name: "Classic Cheeseburger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
    price: 11.99,
  },
  {
    id: 14,
    name: "Bacon Avocado Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 13.99,
  },
  {
    id: 15,
    name: "Mushroom Swiss Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    price: 12.99,
  },
  {
    id: 16,
    name: "BBQ Bacon Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    price: 13.99,
  },
  {
    id: 17,
    name: "Veggie Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 11.99,
  },
  {
    id: 18,
    name: "Turkey Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    price: 12.99,
  },
  {
    id: 19,
    name: "Blue Cheese Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 14.99,
  },
  {
    id: 20,
    name: "Teriyaki Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    price: 13.99,
  },
  // Tacos
  {
    id: 21,
    name: "Beef Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 9.99,
  },
  {
    id: 22,
    name: "Fish Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 10.99,
  },
  {
    id: 23,
    name: "Chicken Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
    price: 9.99,
  },
  {
    id: 24,
    name: "Shrimp Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1611250188496-e966043a0629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
    price: 11.99,
  },

  {
    id: 26,
    name: "Carnitas Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 10.99,
  },
  {
    id: 27,
    name: "Al Pastor Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1617918160302-f2dfbcb3f88c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 10.99,
  },
  {
    id: 28,
    name: "Carne Asada Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 11.99,
  },
  // Desserts
  {
    id: 29,
    name: "Chocolate Mousse",
    category: "Desserts",
    image: choc,
    price: 6.99,
  },
  {
    id: 30,
    name: "Tiramisu",
    category: "Desserts",
    image: tir,
    price: 7.99,
  },
  {
    id: 31,
    name: "Cheesecake",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 8.99,
  },

  // Pasta
  {
    id: 34,
    name: "Spaghetti Carbonara",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 14.99,
  },
  {
    id: 35,
    name: "Fettuccine Alfredo",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 13.99,
  },
  {
    id: 36,
    name: "Lasagna",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 15.99,
  },
  // Salads
  {
    id: 37,
    name: "Caesar Salad",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 9.99,
  },
  {
    id: 38,
    name: "Greek Salad",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    price: 10.99,
  },
  {
    id: 39,
    name: "Cobb Salad",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 11.99,
  },
  // Sandwiches
  {
    id: 40,
    name: "Club Sandwich",
    category: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 10.99,
  },
  {
    id: 41,
    name: "BLT Sandwich",
    category: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 9.99,
  },
  {
    id: 42,
    name: "Grilled Cheese Sandwich",
    category: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 8.99,
  },
  // Drinks
  {
    id: 43,
    name: "Iced Tea",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 2.99,
  },
  {
    id: 44,
    name: "Lemonade",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 2.99,
  },
  {
    id: 45,
    name: "Smoothie",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80",
    price: 4.99,
  },
  // Sides
  {
    id: 46,
    name: "French Fries",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 3.99,
  },
  {
    id: 47,
    name: "Onion Rings",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 4.99,
  },
  {
    id: 48,
    name: "Mozzarella Sticks",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 5.99,
  },
  {
    id: 49,
    name: "Garlic Bread",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 4.99,
  },

  // Seafood
  {
    id: 51,
    name: "Grilled Salmon",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 18.99,
  },
  {
    id: 52,
    name: "Shrimp Scampi",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 17.99,
  },

  {
    id: 54,
    name: "Lobster Roll",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 21.99,
  },
  {
    id: 55,
    name: "Tuna Steak",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 19.99,
  },
  // Steaks
  {
    id: 56,
    name: "Ribeye Steak",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 24.99,
  },
  {
    id: 57,
    name: "Filet Mignon",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    price: 27.99,
  },
  {
    id: 58,
    name: "T-Bone Steak",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 26.99,
  },
  {
    id: 59,
    name: "New York Strip",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: 23.99,
  },
  {
    id: 60,
    name: "Porterhouse Steak",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 29.99,
  },
  // Chicken
  {
    id: 61,
    name: "Grilled Chicken Breast",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 14.99,
  },
  {
    id: 62,
    name: "Chicken Parmesan",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 16.99,
  },
  {
    id: 63,
    name: "Buffalo Wings",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
    price: 12.99,
  },

  {
    id: 65,
    name: "Chicken Kebab",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 13.99,
  },
  // Vegetarian
  {
    id: 66,
    name: "Vegetable Stir Fry",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 12.99,
  },
  {
    id: 67,
    name: "Eggplant Parmesan",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 13.99,
  },
  {
    id: 68,
    name: "Vegetable Lasagna",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 14.99,
  },
  {
    id: 69,
    name: "Stuffed Bell Peppers",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 11.99,
  },
  {
    id: 70,
    name: "Vegetable Curry",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 13.99,
  },
  // Soups
  {
    id: 71,
    name: "Tomato Soup",
    category: "Soups",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 6.99,
  },
  {
    id: 72,
    name: "Chicken Noodle Soup",
    category: "Soups",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 7.99,
  },

  {
    id: 74,
    name: "Clam Chowder",
    category: "Soups",
    image:
      "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 8.99,
  },

  // Breakfast
  {
    id: 76,
    name: "Pancakes",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
    price: 8.99,
  },
  {
    id: 77,
    name: "Eggs Benedict",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 11.99,
  },
  {
    id: 78,
    name: "Breakfast Burrito",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 9.99,
  },
  {
    id: 79,
    name: "French Toast",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
    price: 8.99,
  },
  {
    id: 80,
    name: "Omelette",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80",
    price: 10.99,
  },
  // Appetizers

  {
    id: 83,
    name: "Nachos",
    category: "Appetizers",
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 9.99,
  },
  {
    id: 84,
    name: "Calamari",
    category: "Appetizers",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 10.99,
  },
  {
    id: 85,
    name: "Chicken Wings",
    category: "Appetizers",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
    price: 11.99,
  },
  // Sushi
  {
    id: 86,
    name: "California Roll",
    category: "Sushi",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 8.99,
  },
  {
    id: 87,
    name: "Spicy Tuna Roll",
    category: "Sushi",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 9.99,
  },
  {
    id: 88,
    name: "Rainbow Roll",
    category: "Sushi",
    image:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 12.99,
  },
  {
    id: 89,
    name: "Dragon Roll",
    category: "Sushi",
    image:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 13.99,
  },
  {
    id: 90,
    name: "Salmon Nigiri",
    category: "Sushi",
    image:
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    price: 7.99,
  },
  // Desserts (additional)
  {
    id: 91,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 8.99,
  },
  {
    id: 92,
    name: "New York Cheesecake",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 7.99,
  },
  {
    id: 93,
    name: "Strawberry Shortcake",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 6.99,
  },
  {
    id: 94,
    name: "Banana Split",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1570727624862-3008fe67a6be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 7.99,
  },
  {
    id: 95,
    name: "Fruit Tart",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 8.99,
  },
  // Drinks (additional)
  {
    id: 96,
    name: "Mojito",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1257&q=80",
    price: 8.99,
  },
  {
    id: 97,
    name: "Margarita",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1556855810-ac404aa91e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    price: 9.99,
  },
  {
    id: 98,
    name: "Espresso",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 3.99,
  },
  {
    id: 99,
    name: "Hot Chocolate",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 4.99,
  },
  {
    id: 100,
    name: "Milkshake",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 5.99,
  },
  // Additional 80 items
  {
    id: 101,
    name: "Beef Stroganoff",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 16.99,
  },
  {
    id: 102,
    name: "Pad Thai",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 12.99,
  },
  {
    id: 103,
    name: "Beef Pho",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: 11.99,
  },
  {
    id: 104,
    name: "Ramen",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    price: 13.99,
  },

  {
    id: 106,
    name: "Sushi Platter",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 24.99,
  },
  {
    id: 107,
    name: "Chicken Tikka Masala",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80",
    price: 14.99,
  },
  {
    id: 108,
    name: "Butter Chicken",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 15.99,
  },
  {
    id: 109,
    name: "Vegetable Biryani",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 13.99,
  },
  {
    id: 110,
    name: "Palak Paneer",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 12.99,
  },

  {
    id: 112,
    name: "Shawarma",
    category: "Middle Eastern",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    price: 10.99,
  },
  {
    id: 113,
    name: "Greek Salad",
    category: "Mediterranean",
    image:
      "https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: 9.99,
  },
  {
    id: 114,
    name: "Moussaka",
    category: "Mediterranean",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
    price: 14.99,
  },
  {
    id: 115,
    name: "Paella",
    category: "Spanish",
    image:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 18.99,
  },

  {
    id: 117,
    name: "Beef Bourguignon",
    category: "French",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 19.99,
  },
  {
    id: 118,
    name: "Coq au Vin",
    category: "French",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 17.99,
  },
  {
    id: 119,
    name: "Ratatouille",
    category: "French",
    image:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 13.99,
  },
  {
    id: 120,
    name: "Beef Wellington",
    category: "British",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 25.99,
  },

  {
    id: 128,
    name: "Lasagna",
    category: "Italian",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 14.99,
  },
  {
    id: 129,
    name: "Chicken Caesar Salad",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 11.99,
  },
  {
    id: 130,
    name: "Greek Salad",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    price: 10.99,
  },
  {
    id: 131,
    name: "Caprese Salad",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 9.99,
  },
  {
    id: 132,
    name: "Taco Salad",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 12.99,
  },
  {
    id: 133,
    name: "Cheeseburger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
    price: 10.99,
  },
  {
    id: 134,
    name: "Bacon Cheeseburger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 12.99,
  },
  {
    id: 135,
    name: "Mushroom Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    price: 11.99,
  },
  {
    id: 136,
    name: "Veggie Burger",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 9.99,
  },
  {
    id: 137,
    name: "Chicken Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
    price: 9.99,
  },
  {
    id: 138,
    name: "Steak Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 11.99,
  },
  {
    id: 139,
    name: "Shrimp Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1611250188496-e966043a0629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
    price: 10.99,
  },
  {
    id: 140,
    name: "Fish Tacos",
    category: "Tacos",
    image:
      "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 10.99,
  },
  {
    id: 141,
    name: "Chocolate Cake",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 7.99,
  },
  {
    id: 142,
    name: "Cheesecake",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 8.99,
  },

  {
    id: 149,
    name: "French Fries",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 3.99,
  },
  {
    id: 150,
    name: "Onion Rings",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 4.99,
  },
  {
    id: 151,
    name: "Salad",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 4.99,
  },
  {
    id: 152,
    name: "Garlic Bread",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 3.99,
  },
  {
    id: 153,
    name: "Grilled Salmon",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 17.99,
  },
  {
    id: 154,
    name: "Shrimp Scampi",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 16.99,
  },
  {
    id: 155,
    name: "Lobster Bisque",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 19.99,
  },
  {
    id: 156,
    name: "Tuna Steak",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 18.99,
  },
  {
    id: 157,
    name: "Ribeye Steak",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 23.99,
  },
  {
    id: 158,
    name: "Filet Mignon",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    price: 26.99,
  },
  {
    id: 159,
    name: "T-Bone Steak",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 25.99,
  },
  {
    id: 160,
    name: "New York Strip",
    category: "Steaks",
    image:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: 22.99,
  },
  {
    id: 161,
    name: "Grilled Chicken Breast",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 13.99,
  },
  {
    id: 162,
    name: "Chicken Parmesan",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 15.99,
  },
  {
    id: 163,
    name: "Buffalo Wings",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
    price: 11.99,
  },

  {
    id: 165,
    name: "Vegetable Stir Fry",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 11.99,
  },
  {
    id: 166,
    name: "Eggplant Parmesan",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: 12.99,
  },
  {
    id: 167,
    name: "Vegetable Lasagna",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 13.99,
  },
  {
    id: 168,
    name: "Stuffed Bell Peppers",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 10.99,
  },
  {
    id: 169,
    name: "Vegetable Curry",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 12.99,
  },
  {
    id: 170,
    name: "Tomato Soup",
    category: "Soups",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 6.99,
  },

  {
    id: 173,
    name: "Pancakes",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
    price: 8.99,
  },

  {
    id: 175,
    name: "Omelette",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80",
    price: 10.99,
  },
  {
    id: 176,
    name: "Breakfast Burrito",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 9.99,
  },

  {
    id: 178,
    name: "Caprese Salad",
    category: "Appetizers",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 8.99,
  },
  {
    id: 179,
    name: "Calamari",
    category: "Appetizers",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 10.99,
  },
];
