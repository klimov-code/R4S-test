<template>
  <b-table
    responsive
    bordered
    hover
    striped
    :items="items"
    :fields="fields"
    :current-page="currentPage"
    :per-page="perPage"
  ></b-table>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      items: [
        {
          id: 1,
          product: "Pork - Back Ribs",
          calories: 991,
          fat: 16,
          carbs: 71,
          protein: 18,
          iron: 2
        },
        {
          id: 2,
          product: "Butter Ripple - Phillips",
          calories: 329,
          fat: 59,
          carbs: 76,
          protein: 41,
          iron: 9
        },
        {
          id: 3,
          product: "Soup - French Onion, Dry",
          calories: 223,
          fat: 99,
          carbs: 8,
          protein: 13,
          iron: 1
        },
        {
          id: 4,
          product: "Beer - Camerons Auburn",
          calories: 116,
          fat: 85,
          carbs: 61,
          protein: 91,
          iron: 24
        },
        {
          id: 5,
          product: "Nutmeg - Ground",
          calories: 816,
          fat: 57,
          carbs: 25,
          protein: 21,
          iron: 17
        },
        {
          id: 6,
          product: "Potatoes - Yukon Gold, 80 Ct",
          calories: 931,
          fat: 49,
          carbs: 43,
          protein: 49,
          iron: 20
        },
        {
          id: 7,
          product: "Soup - Campbells Beef Strogonoff",
          calories: 502,
          fat: 32,
          carbs: 27,
          protein: 47,
          iron: 13
        },
        {
          id: 8,
          product: "Ham - Cooked Bayonne Tinned",
          calories: 754,
          fat: 93,
          carbs: 60,
          protein: 72,
          iron: 20
        },
        {
          id: 9,
          product: "Wine - White, Schroder And Schyl",
          calories: 102,
          fat: 32,
          carbs: 32,
          protein: 49,
          iron: 23
        },
        {
          id: 10,
          product: "Puree - Mango",
          calories: 272,
          fat: 96,
          carbs: 33,
          protein: 86,
          iron: 15
        },
        {
          id: 11,
          product: "Beef Tenderloin Aaa",
          calories: 806,
          fat: 40,
          carbs: 87,
          protein: 4,
          iron: 21
        },
        {
          id: 12,
          product: "Fireball Whisky",
          calories: 723,
          fat: 61,
          carbs: 35,
          protein: 100,
          iron: 22
        },
        {
          id: 13,
          product: "Kale - Red",
          calories: 166,
          fat: 64,
          carbs: 42,
          protein: 42,
          iron: 19
        },
        {
          id: 14,
          product: "Vodka - Lemon, Absolut",
          calories: 506,
          fat: 16,
          carbs: 11,
          protein: 96,
          iron: 23
        },
        {
          id: 15,
          product: "Horseradish - Prepared",
          calories: 477,
          fat: 27,
          carbs: 83,
          protein: 75,
          iron: 9
        },
        {
          id: 16,
          product: "Bar Bran Honey Nut",
          calories: 944,
          fat: 80,
          carbs: 21,
          protein: 41,
          iron: 4
        },
        {
          id: 17,
          product: "Madeira",
          calories: 9,
          fat: 1,
          carbs: 12,
          protein: 16,
          iron: 7
        },
        {
          id: 18,
          product: "Coffee - Decafenated",
          calories: 459,
          fat: 56,
          carbs: 95,
          protein: 60,
          iron: 3
        },
        {
          id: 19,
          product: "Beef - Eye Of Round",
          calories: 133,
          fat: 20,
          carbs: 65,
          protein: 38,
          iron: 5
        },
        {
          id: 20,
          product: "Lamb - Loin Chops",
          calories: 803,
          fat: 97,
          carbs: 63,
          protein: 22,
          iron: 20
        },
        {
          id: 21,
          product: "Lamb - Ground",
          calories: 67,
          fat: 78,
          carbs: 37,
          protein: 13,
          iron: 1
        },
        {
          id: 22,
          product: "Milk - Chocolate 250 Ml",
          calories: 79,
          fat: 18,
          carbs: 21,
          protein: 13,
          iron: 3
        },
        {
          id: 23,
          product: "Chutney Sauce",
          calories: 994,
          fat: 63,
          carbs: 48,
          protein: 21,
          iron: 19
        },
        {
          id: 24,
          product: "Chicken - Tenderloin",
          calories: 967,
          fat: 35,
          carbs: 54,
          protein: 20,
          iron: 25
        },
        {
          id: 25,
          product: "Blackberries",
          calories: 539,
          fat: 25,
          carbs: 70,
          protein: 69,
          iron: 12
        },
        {
          id: 26,
          product: "Chilli Paste, Sambal Oelek",
          calories: 801,
          fat: 4,
          carbs: 92,
          protein: 14,
          iron: 16
        },
        {
          id: 27,
          product: "Aspic - Clear",
          calories: 653,
          fat: 61,
          carbs: 53,
          protein: 85,
          iron: 2
        },
        {
          id: 28,
          product: "Wine - Rioja Campo Viejo",
          calories: 353,
          fat: 30,
          carbs: 87,
          protein: 40,
          iron: 20
        },
        {
          id: 29,
          product: "Dry Ice",
          calories: 354,
          fat: 74,
          carbs: 97,
          protein: 10,
          iron: 20
        },
        {
          id: 30,
          product: "Muffin Mix - Chocolate Chip",
          calories: 746,
          fat: 62,
          carbs: 23,
          protein: 100,
          iron: 2
        },
        {
          id: 31,
          product: "Appetizer - Seafood Assortment",
          calories: 125,
          fat: 23,
          carbs: 73,
          protein: 44,
          iron: 17
        },
        {
          id: 32,
          product: "Puree - Strawberry",
          calories: 75,
          fat: 59,
          carbs: 26,
          protein: 74,
          iron: 10
        },
        {
          id: 33,
          product: "Soupcontfoam16oz 116con",
          calories: 747,
          fat: 65,
          carbs: 57,
          protein: 52,
          iron: 19
        },
        {
          id: 34,
          product: "Island Oasis - Pina Colada",
          calories: 111,
          fat: 1,
          carbs: 80,
          protein: 97,
          iron: 7
        },
        {
          id: 35,
          product: "Arctic Char - Fillets",
          calories: 721,
          fat: 43,
          carbs: 4,
          protein: 30,
          iron: 9
        },
        {
          id: 36,
          product: "Fish - Scallops, Cold Smoked",
          calories: 946,
          fat: 43,
          carbs: 34,
          protein: 63,
          iron: 10
        },
        {
          id: 37,
          product: "Wine - Magnotta - Cab Franc",
          calories: 172,
          fat: 69,
          carbs: 18,
          protein: 20,
          iron: 5
        },
        {
          id: 38,
          product: "Lambcasing",
          calories: 575,
          fat: 83,
          carbs: 53,
          protein: 25,
          iron: 17
        },
        {
          id: 39,
          product: "Basil - Fresh",
          calories: 804,
          fat: 21,
          carbs: 92,
          protein: 67,
          iron: 23
        },
        {
          id: 40,
          product: "Flour Pastry Super Fine",
          calories: 576,
          fat: 2,
          carbs: 30,
          protein: 52,
          iron: 7
        }
      ],
      fields: [
        {
          key: "product",
          label: "Dessert (100g serving)",
          sortable: true
        },
        {
          key: "calories",
          label: "Calories",
          sortable: true
        },
        {
          key: "fat",
          label: "Fat (g)",
          sortable: true
        },
        {
          key: "carbs",
          label: "Carbs (g)",
          sortable: true
        },
        {
          key: "protein",
          label: "Protein (g)",
          sortable: true
        },
        {
          key: "iron",
          label: "Iron (%)",
          sortable: true
        }
      ],
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20]
    };
  }
};
</script>
