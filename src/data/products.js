import starter01 from "../assets/images/buffalo_shrimp.jpg";
import starter02 from "../assets/images/cheese_curds.jpg";
import starter03 from "../assets/images/chip_queso.jpg";
import starter04 from "../assets/images/onion_ring.jpg";
import starter05 from "../assets/images/wings.jpg";
import burger01 from "../assets/images/bella_blue.jpg";
import burger02 from "../assets/images/georgia_burger.jpg";
import burger03 from "../assets/images/handyman.jpg";
import sandwich01 from "../assets/images/buffalo_chicken_wrap.jpg";
import sandwich02 from "../assets/images/turkey_bacon_club.jpg";
import pasta01 from "../assets/images/chicken_alfredo.jpg";
import pasta02 from "../assets/images/pasta.jpg";
import combo01 from "../assets/images/caesar_salad.jpg";
import combo02 from "../assets/images/ribs.jpg";
import combo03 from "../assets/images/roast_chicken.jpg";

const products = [
  {
    name: "Buffalo Shrimp",
    id: "starter01",
    price: 15,
    category: "starter",
    imageSrc: starter01,
    description: "Hand-breaded shrimp tossed in your favorite buffalo sauce",
  },
  {
    name: "Georgia Burger",
    id: "burger02",
    price: 17,
    category: "burger",
    imageSrc: burger02,
    description:
      "Soy bean soup with Wacame seaweed, tofu and spring onionHouse-made cracked peppered pulled pork, cheddar cheese, bbq sauce, onion straws, shredded lettuce, and mayo served on a toasted bun",
  },
  {
    name: "Chicken Salad",
    id: "combo01",
    price: 15,
    category: "combo",
    imageSrc: combo01,
    description:
      "Grilled chicken on mixed greens, crumbled Bleu cheese, diced cucumber, diced tomatoes, with balsamic glaze and cilantro lime dressing",
  },
  {
    name: "House Cheese Curds",
    id: "starter02",
    price: 13,
    category: "starter",
    imageSrc: starter02,
    description: "Lightly battered and fried and served with T.J. house sauce",
  },
  {
    name: "Chips & Queso",
    id: "starter03",
    price: 9,
    category: "starter",
    imageSrc: starter03,
    description:
      "Fresh fried corn tortillas and queso topped with pico and Jalapenos",
  },
  {
    name: "House Onion Rings",
    id: "starter04",
    price: 12,
    category: "starter",
    imageSrc: starter04,
    description: "Served with T.J. house sauce",
  },
  {
    name: "The Bone-in Wings",
    id: "starter05",
    price: 12,
    category: "starter",
    imageSrc: starter05,
    description: "Offers Boneless option as well",
  },
  {
    name: "The Bella Blue",
    id: "burger01",
    price: 12,
    category: "burger",
    imageSrc: burger01,
    description:
      "Double smoked bacon, Wisconsin Bleu cheese, pickled red onions, balsamic mayo and shredded lettuce served on a toasted bun",
  },
  {
    name: "The Handyman",
    id: "burger03",
    price: 12,
    category: "burger",
    imageSrc: burger03,
    description:
      "Double smoked bacon, Wisconsin Cheddar, and Provolone, with lettuce, ketchup, mayo, sautéed onions, and pickles served on a toasted bun",
  },
  {
    name: "Buffalo Chicken Wrap",
    id: "sandwich01",
    price: 14,
    category: "sandwich",
    imageSrc: sandwich01,
    description:
      "Crispy buffalo chicken layered with lettuce, pico de gallo and Monterey Jack and Cheddar cheese in a grilled flour tortilla with a side of ranch or Bleu cheese dressing",
  },
  {
    name: "Turkey Bacon Club",
    id: "sandwich02",
    price: 15,
    category: "sandwich",
    imageSrc: sandwich02,
    description: "On a ciabatta bun with lettuce-tomato and mayo",
  },
  {
    name: "Chicken Alfredo",
    id: "pasta01",
    price: 14,
    category: "pasta",
    imageSrc: pasta01,
    description: "Penne pasta tossed in our house made cream sauce",
  },
  {
    name: "Mostaccioli Pasta",
    id: "pasta02",
    price: 13,
    category: "pasta",
    imageSrc: pasta02,
    description:
      "Scratched made marinara sauce, Italian sausage, ground Angus beef, mozzarella cheese, parmesan cheese, parsley and garlic toast",
  },
  {
    name: "St Louis Style Ribs",
    id: "combo02",
    price: 21,
    category: "combo",
    imageSrc: combo02,
    description:
      "Served with soup or salad, roll and choice of shoestring fries, coleslaw, mashed potatoes and gravy, or baked potato",
  },
  {
    name: "Broasted 1/2 Chicken",
    id: "combo03",
    price: 17,
    category: "combo",
    imageSrc: combo03,
    description:
      "Served with coleslaw and a dinner roll and your choice of shoestring fries, tater tots or mashed potatoes and gravy",
  },
];

export default products;
