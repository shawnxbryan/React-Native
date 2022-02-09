import Category from '../models/category';
import Product from '../models/product';

export let CART = [];
export const COUPONS = [
  {id:"1", coupon:"il17", discount: 0.17},
  {id:"2", coupon:"happyPurim", discount: 0.30},
  {id:"3", coupon:"Daniel&Shawn", discount: 0.50}
]
export const CATEGORIES = [
  new Category("c1", "T-Shirts", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/logo.png?raw=true"),
  new Category("c2", "Pants", "https://www.pngall.com/wp-content/uploads/5/Pant-PNG-Images.png"),
  new Category("c3", "Hoodies", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Hoodies/logo.png?raw=true"),
  new Category("c4", "Coats", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Coats/logo.png?raw=true"),
  new Category("c5", "Shoes", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Shoes/adidas-originals-skate-shoe-sneakers-adidas-adidas-shoes-e31bac73d9379cba33a6bf13749e96ac.png?raw=true"),
  new Category("c6", "Accessories", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Accessories/logo.png?raw=true"),
];

/////////////////////////////////////////////// T SHIRTS //////////////////////////////////////////////////////////

export const PRODUCTS = [
  new Product(
    ["c1"], // category id
    "Adidas T Shirt",// title
    78.90, // price
    19.90, // shipping cost
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/T%20Shirts/Adidas%20T%20Shirt%202.jpg?raw=true", 
    `T-shirt by Adidas:
    - Part of our responsible edit
    - Crew neck
    - Short sleeves
    - Logo print to chest
    - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ], // Sizes Array
    3 // Rating
  ),
  new Product(
    ["c1"], // category id
    "Calvin Klein Shirt",// title
    68.90, // price
    19.90, // shipping cost
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/T%20Shirts/CK%20T%20Shirt%202.jpg?raw=true",
    `T-shirt by Calvin Klein
    - Part of our responsible edit
    - Crew neck
    - Short sleeves
    - Logo print to chest and cuff
    - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ], // Sizes Array
    5 // Rating
  ),
  new Product(
    ['c1'], // countryIds
    "Champion T Shirt", // title
    99.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/T%20Shirts/Champion%20T%20Shirt.jpg?raw=true", //imageUrl
    `T-shirt by Champion:
    - Your new flexCrew
    - neckShort sleeves
    - Logo to chest
    - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    4
  ),
  new Product(
    ['c1'],
    "Levi's T Shirt",
    49.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/T%20Shirts/Levis%20T%20Shirt%202.jpg?raw=true",
    `T-shirt by Levi's:
    - Part of our responsible edit
    - Crew neck
    - Short sleeves
    - Logo embroidery detail
    - Slim fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    3
  ),
  new Product(
    ["c1"],
    "Vans T Shirt",
    68.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/T%20Shirts/Vans%20T%20Shirt.jpg?raw=true",
    `T-shirt by Vans:
    - Act casual
    - Crew neck
    - Short sleeves
    - Logo patch detail
    - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    4
  ),
  new Product(
    ["c1"],
    "Tommy Hilfiger T Shirt",
    78.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/T%20Shirts/Tommy%20Hilfiger%20T%20Shirt.jpg?raw=true",// <----- Tommy T shirt URL img
    `T-shirt by Tommy Hilfiger:
    - Part of our responsible edit
    - Crew neck
    - Short sleeves
    - Logo print to chest 
    - Branded back print
    - Relaxed fit
    - Unisex style`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    4
  ),
  /////////////////////////////////////////////// PANTS //////////////////////////////////////////////////////////
  new Product(
    ["c2"],
    "Nike Tech Fleece Joggers",
    69.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Pants/Nike%20Tech%20Fleece%20Joggers.jpg?raw=true", //<------- Nike Tech Fleece Joggers img URL
    `Joggers by Nike:
    - This item is excluded from promo
    - Elasticated drawstring waist
    - Side pockets
    - Zip side pocket
    - Nike logo print
    - Fitted cuffs
    - Regular, tapered fit
    - A standard cut around the thigh with a narrow shape through the leg`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  ),
  new Product(
    ["c2"],
    "Levi's Skinny Jeans 519",
    99.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Pants/Levis%20Skinny%20jeans%20519.jpg?raw=true",

    `Skinny jeans by Levi's:
    - Part of our responsible edit
    - Distressed finish
    - Regular rise
    - Belt loops
    - Functional pockets
    - Branded logo to reverse
    - Super skinny fit`,
    [
      `30`, ', ',
      `32`, ', ',
      `34`, ', ',
      `36`, ', ',
      `38`,
    ],
    4
  ),
  new Product(
    ["c2"],
    "Diesel Jeans",
    101.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Pants/Diesel%20Skinny%20Jeans.jpg?raw=true", // <----- Diesel jeans img url
    `Skinny jeans by Diesel:
    - These jeans hit different
    - Regular rise
    - Belt loops
    - Five pockets
    - Branded patch to reverse
    - Skinny fit`,
    [
      `28`, ', ',
      `30`, ', ',
      `32`, ', ',
      `34`, ', ',
      `36`,
    ],
    5
  ),
  new Product(
    ["c2"],
    "Adidas Joggers",
    89.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Pants/Adidas%20Joggers.jpg?raw=true", // <----- Adidas joggers img url
    `Joggers by adidas:
    - Can't go wrong in sweats
    - Elasticated drawstring waist
    - Functional pockets
    - Logo print to thigh
    - 3-Stripes branding
    - Ribbed cuffs
    - Regular, tapered fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    3
  ),
  new Product(
    ["c2"],
    "G-Star Jeans",
    129.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Pants/G-Star%20Jeans.jpg?raw=true", // <----- Adidas joggers img url
    `Skinny jeans by G-Star:
    - Part of our responsible edit
    - Light-blue wash
    - Regular rise
    - Zip fly
    - Functional pockets
    - Skinny fit
    - Cut very closely from hips to hem`,
    [
      `28`, ', ',
      `30`, ', ',
      `32`, ', ',
      `34`, ', ',
      `36`,
    ],
    3
  ),
  new Product(
    ["c2"],
    "Abercrombie & Fitch Jeans",
    68.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Pants/Abercrombie%20%26%20Fitch%20Blue%20Jeans.jpg?raw=true", // <----- Adidas joggers img url
    `Super-skinny jeans by Abercrombie & Fitch:
    - It's all in the jeans
    - Regular rise
    - Belt loops 
    - Five pockets
    - Super-skinny fit
    - Extra-tight cut, regular on the waist`,
    [
      `28`, ', ',
      `30`, ', ',
      `32`, ', ',
      `34`, ', ',
      `36`,
    ],
    2
  ),
  /////////////////////////////////////////////// HOODIES //////////////////////////////////////////////////////////
  new Product(
    ["c3"],
    "Hugo Boss Hoodie",
    89.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Hoodies/Boss%20Hoodie.jpg?raw=true", // <----- Boss Hoodie img url
    `Hoodie by Hugo Boss:
    - Always here for a sweatshirt
    - Drawstring hood
    - Logo print to chest
    - Pouch pocket
    - Regular fit`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    4
  ),
  new Product(
    ["c3"],
    "Polo Ralph Lauren Hoodie",
    98.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Hoodies/Polo%20Hoodie.jpg?raw=true", // <----- Polo Hoodie img url
    `Hoodie by Polo Ralph Lauren:
    - Act casual
    - Drawstring hood
    - Graphic logo print
    - Side pockets
    - Fitted trims
    - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    5
  ),
  new Product(
    ["c3"],
    "Tommy Hilfiger Hoodie",
    68.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Hoodies/Tommy%20Hilfiger%20Hoodie%202.jpg?raw=true", // <----- Polo Hoodie img url
    `Hoodie by The North Face:
    - Next stop: checkout
    - Drawstring hood
    - Logo print to chest and back
    - Ribbed trims
    - Relaxed fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    5
  ),
  new Product(
    ["c3"],
    "Gant Hoodie",
    89.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Hoodies/Gant%20Logo%20Hoodie.jpg?raw=true", // <----- Polo Hoodie img url
    `Hoodie by Gant:
    - Looks cool, feels comfy
    - Crew neck
    - Drop shoulders
    - Chest and back print
    - Relaxed fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    5
  ),
  new Product(
    ["c3"],
    "The North Face Hoodie",
    190.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Hoodies/The%20North%20Face%20Hoodie.jpg?raw=true", // <----- Polo Hoodie img url
    `Hoodie by The North Face:
    - Looks cool, feels comfy
    - Crew neck
    - Drop shoulders
    - Chest and back print
    - Relaxed fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    4
  ),
  new Product(
    ["c3"],
    "Tommy Hilfiger Hoodie",
    119.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Hoodies/Tommy%20Hilfiger%20Hoodie.jpg?raw=true", // <----- Polo Hoodie img url
    `Hoodie by Tommy Hilfiger:
    - Part of our responsible edit
    - Drawstring hood
    - Logo to chest
    - Pouch pocket
    - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    3
  ),
  /////////////////////////////////////////////// COATS //////////////////////////////////////////////////////////
  new Product(
    ["c4"],
    "Ellesse Jacket",
    89.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Coats/Ellesse%20Jacket.jpg?raw=true", // <----- Polo Hoodie img url
    `Jacket by Ellesse:
    - For when it's cold, but not that cold
    - Funnel neck
    - Drawstring hood
    - Half-zip opening
    - Over-the-head style
    - Pouch pocket
    - Reflective ellesse logo
    - Regular fit
    - True to size`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    4
  ),
  new Product(
    ["c4"],
    "The North Face Jacket",
    169.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Coats/The%20North%20Face%20jacket.jpg?raw=true", // <----- Polo Hoodie img url
    `Jacket by The North Face:
    - That new-jacket feeling
    - Adjustable toggle hood
    - Zip and press-stud fastening
    - Logo embroidery
    - Zip side pockets
    - Adhesive patch cuffs
    - Adjustable toggle waist and hem 
    - Relaxed fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    3
  ),
  new Product(
    ["c4"],
    "Emporio Armani Jacket",
    249.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Coats/Emporio%20Armani%20Jacket.jpg?raw=true", // <----- Polo Hoodie img url
    `Jacket by Emporio Armani:
    - Throw-on appeal
    - Reversible design
    - Fixed hood
    - High collar
    - Zip fastening
    - Logo to chest
    - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    5
  ),
  new Product(
    ["c4"],
    "Carhartt WIP Jacket",
    100.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Coats/Carhartt%20WIP%20Jacket.jpg?raw=true", // <----- Polo Hoodie img url
    `Jacket by Carhartt WIP:
    - Low-key layering
    - Adjustable toggle hood
    - High collar
    - Zip fastening
    - Functional pockets
    - Drawstring hem
    - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    4
  ),
  new Product(
    ["c4"],
    "Tommy Hilfiger Parka",
    250.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Coats/Tommy%20hilfiger%20Parka.jpg?raw=true", // <----- Polo Hoodie img url
    `Parka by Tommy Hilfiger:
    - Next stop: checkout
    - Drawstring hood
    - Zip and press-stud fastening
    - Chest pockets
    - Side pockets
    - Logo embroidery
    - Drawstring hem
    - Regular fit
    - True to size`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    3
  ),
  new Product(
    ["c4"],
    "Tommy Hilfiger Jacket",
    180.00,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Coats/Tommy%20Hilfiger%20Jacket.jpg?raw=true", // <----- Polo Hoodie img url
    `Jacket by Tommy Hilfiger:
    - Mid-season layering
    - Colour-block design
    - Adjustable toggle hood
    - Zip and adhesive fastening
    - Adhesive cuffs
    - Logo to front and arm
    - Regular fit`,
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    3
  ),
  /////////////////////////////////////////////// SHOES //////////////////////////////////////////////////////////
  new Product(
    ["c5"],
    "Adidas Stan Smith",
    79.90,
    19.90,
    "https://raw.githubusercontent.com/shawnxbryan/React-Native/main/Product%20images/Shoes/Adidas%20Stan%20Smith.jpg?raw=true", // <----- Polo Hoodie img url
    `Trainers by adidas:
    - This item is excluded from promo
    - Part of our responsible edit
    - Low-profile design
    - Lace-up fastening 
    - Padded tongue and cuff
    - Signature adidas branding
    - Perforated toe for breathability
    - Durable rubber outsole
    - Textured grip tread`,
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    4
  ),
  new Product(
    ["c5"],
    "Nike Air Max 90",
    120.90,
    19.90,
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Shoes/Nike%20Air%20Max%2090.jpg?raw=true", // <----- Polo Hoodie img url
    `Trainers by Nike:
    - This item is excluded from promo
    - Low-top design
    - Lace-up fastening
    - Branded tongue and cuff
    - Padded for comfort
    - Leather, suede and rubber panels
    - Nike Swoosh logo details
    - Coated leather overlays
    - Max Air unit to heel for added cushioning
    - Foam midsole
    - Rubber waffle sole for added traction and durability
    - Moulded tread`,
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    5
  ),
  new Product(
    ["c5"],
    "Reebok Classic",
    99.90,
    19.90,
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Shoes/Reebok%20Classic.jpeg?raw=true", // <----- Polo Hoodie img url
    `Trainers by Reebok:
    - Because trainers are always having a moment
    - Lace-up fastening
    - Branded tongue and cuff
    - Padded for comfort
    - Reebok logo detail
    - Chunky sole
    - Moulded tread`,
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    3
  ),
  new Product(
    ["c5"],
    "Vans Old School",
    100.00,
    19.90,
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Shoes/Vans%20Old%20School.jpg?raw=true", // <----- Polo Hoodie img url
    `Trainers by Vans:
    - There for you all year round
    - Suede toe and heel
    - Lace-up fastening
    - Branded details
    - Padded for comfort
    - Vans Old Skool logo
    - Chunky sole
    - Waffle-textured tread`,
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    4
  ),
  new Product(
    ["c5"],
    "Nike Air Max 2021",
    159.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Shoes/Nike%20air%20max%202021.jpg?raw=true", // <----- Polo Hoodie img url
    `Trainers by Nike:
    - Part of our responsible edit
    - Low-profile design
    - Pull tab for easy entry
    - Round laces
    - Padded tongue and cuff
    - Signature Nike branding
    - Foam midsole for lightweight cushioning 
    - Dual-pressure Air sole
    - Textured grip tread`,
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    5
  ),
  new Product(
    ["c5"],
    "Adidas Ulltraboost 22",
    220.00,
    19.90,
    "https://raw.githubusercontent.com/shawnxbryan/React-Native/main/Product%20images/Shoes/Adidas%20ultraboost%2022.jpg?raw=true", // <----- Polo Hoodie img url
    `Trainers by adidas:
    - Hit that new PB
    - Low-profile design 
    - Lace-up fastening
    - Sock-like cuff
    - Signature adidas branding 
    - Soft heel allows for natural movement of Achilles tendon
    - Boost midsole provides responsive, energy-returning cushioning
    - Stretchweb outsole with Continental™ Rubber for durability
    - Textured grip tread`,
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    5
  ),
  /////////////////////////////////////////////// ACCESSORIES //////////////////////////////////////////////////////////
  new Product(
    ["c6"],
    "Tommy Hilfiger Wallet",
    89.90,
    19.90,
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Accessories/Tommy%20Hilfiger%20Wallet.jpg?raw=true", // <----- Polo Hoodie img url
    `Wallet by Tommy Hilfiger:
    - Add-to-bag material
    - Monogram design
    - Billfold style
    - Internal card and note slots
    - Logo plaque detail
    - 100% Leather`,
    [
      `One Size`
    ],
    3
  ),
  new Product(
    ["c6"],
    "Calvin Klein Belt",
    22.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Accessories/CK%20Belt.jpg?raw=true", // <----- Polo Hoodie img url
    `Belt by Calvin Klein:
    - Secure your style
    - Comes with a pin buckle and branded plaque
    - Adjustable length
    - Belt fits true to size
    - Please buy in your normal trouser size`,
    [
      `85 CM`, ', ',
      `90 CM`, ', ',
      `95 CM`, ', ',
      `100 CM`,
    ],
    5
  ),
  new Product(
    ["c6"],
    "BOSS by Hugo Boss Belt",
    69.90,
    19.90,
    "https://raw.githubusercontent.com/shawnxbryan/React-Native/main/Product%20images/Accessories/Boss%20Belt.jpg",
    `Belt by BOSS By Hugo Boss:
    - Style: secured
    - Adjustable length
    - Pin-buckle fastening
    - Single keeper
    - Belt fits true to size
    - Please buy in your normal trouser size`,
    [
      `85 CM`, ', ',
      `90 CM`, ', ',
      `95 CM`, ', ',
      `100 CM`,
    ],
    4
  ),
  new Product(
    ["c6"],
    "Michael Kors Watch",
    250.00,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Accessories/Michael%20Kors%20Watch.jpg?raw=true", // <----- Polo Hoodie img url
    `Watch by Michael Kors:
    - Model number: MK8344 
    - Bracelet strap
    - Textured, circular bezel
    - Branded, silver dial
    - Mixed markers
    - Date window
    - Chronograph feature with tachymeter
    - Analogue quartz movement
    - Push-button clasp
    - 1ATM water resistant to 10 metres (33 feet)
    - Splash and sweat-resistant
    - 2 years manufacturer warranty
    - Comes in a branded box`,
    [
      `One Size`
    ],
    5
  ),
  new Product(
    ["c6"],
    "Valentino Backpack",
    130.00,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Accessories/Valentino%20Backpack.jpg?raw=true", // <----- Polo Hoodie img url
    `Backpack by VALENTINO BAGS:
    - Two straps are better than one
    - Grab handle
    - Branded adjustable straps
    - Padded mesh back
    - Zip fastening
    - External zip pocket
    - External slip pocket
    - Logo tab to front`,
    [
      `One Size`
    ],
    4
  ),
  new Product(
    ["c6"],
    "Hugo Boss Bracelet",
    128.90,
    19.90,
    "https://github.com/shawnxbryan/React-Native/blob/main/Product%20images/Accessories/Boss%20Bracelet.jpg?raw=true", // <----- Polo Hoodie img url
    `Bracelet by Hugo Boss:
    - We're all about those finishing touches
    - Curb chain
    - Magnetic clasp fastening
    - Packaged inside a branded pouch`,
    [
      `One Size`
    ],
    5
  ),
];