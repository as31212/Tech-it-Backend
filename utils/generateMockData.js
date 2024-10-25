// /utils/generateMockData.js

const Product = require("../models/productModel");
const { faker } = require("@faker-js/faker"); // Updated import statement

const technology = [
  {
    name: "Camera",
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Ftech%2Fcomputing%2Fbest-camera-to-buy%2F&psig=AOvVaw3bmZtPauFOho7Wb4SOdxgJ&ust=1729914983367000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj359PRqIkDFQAAAAAdAAAAABAE",
      "https://ae01.alicdn.com/kf/S8ae6ca0d4c264c67901d3537ea15d1bdQ/ELP-210FPS-Global-Shutter-USB-Camera-720P-Varifocal-CS-Lens-800P-120FPS-OV9281-UVC-Monochrome-Zoom.jpg",
      "https://4.img-dpreview.com/files/p/TS560x560~forums/55233016/8d6466d37b3c47e8bc2eed9ab643b25f",
      "https://www.optics-pro.com/Produktbilder/zoom/80634_1/Guide-Thermal-imaging-camera-TD631-LRF.jpg",
      "https://s.turbifycdn.com/aah/serverrack/nti-enviromux-ipcam-npoe-45.gif",
    ],
    categories: ["Office", "Security"],
  },
  {
    name: "Television",
    images: [
      "https://linqcdn.avbportal.com/images/6ab69e50-4b9b-47d7-9386-4400ddac6c64.jpg?w=640",
      "https://linqcdn.avbportal.com/images/e62a1f35-0171-440f-a084-dcf2dde478fa.jpg?w=640",
      "https://i.ebayimg.com/images/g/w1wAAOSw~KVhJfXX/s-l640.jpg",
      "https://nugget-store.de/wp-content/uploads/2023/02/440432_3375120.webp",
      "https://tvpartstoday.com/cdn/shop/files/thumb_502708_default_big_5cb937ad-3201-455e-b84d-4f3d587f54af_x400.jpg?v=1709128464",
    ], // Empty strings as placeholders
    categories: ["Entertainment", "Living Room"],
  },
  {
    name: "Laptop",
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newegg.com%2Fp%2F2S3-000Y-00082&psig=AOvVaw2rJBHH1RixQyJ2Nw0vdD-6&ust=1729915664570000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjluaLUqIkDFQAAAAAdAAAAABAE",
      "https://c1.neweggimages.com/productimage/nb640/ACNFS2408100ZEKJI67.jpg",
      "https://external-preview.redd.it/RsOcS4DLgI0J22pGIIRtOboBd-bm4eyVYzmwoiYKRgA.jpg?width=640&crop=smart&auto=webp&s=f9a0a30a02838204ef3c31541cb64484e5d30fdd",
      "https://c1.neweggimages.com/productimage/nb640/A24G_1_20190406371254090.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jWIWmV6SjnoofnPeuUsXRIcG2cthIYKqlA&s",
    ], // Empty strings as placeholders
    categories: ["Office", "Personal", "Gaming"],
  },
  {
    name: "Smartwatch",
    images: [
      "https://ae01.alicdn.com/kf/Sd195c81733084e648a9ff24b3b33bafa8.jpg_640x640q90.jpg",
      "https://ae01.alicdn.com/kf/Hafacef410b8b4f94a8ea28f1ff135dd3T/NORTH-EDGE-Men-Women-Smart-Watch-ECG-Body-Temperature-Measure-Sport-Fitness-Watch-Heart-Rate-Blood.jpg",
      "https://m.media-amazon.com/images/I/61O2eMVKBwL.jpg",
      "https://m.media-amazon.com/images/I/71pv+K1IolL.jpg",
      "https://i5.walmartimages.com/asr/c7a3725f-cbed-4c65-ba13-e0b74a90d547.fb75e78848294631a02de10656c9db43.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    ], // Empty strings as placeholders
    categories: ["Fitness", "Casual"],
  },
  {
    name: "Headphones",
    images: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533161cv12d.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8636/8636734_sa.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505725_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/a1ae78dc-4aeb-444b-860e-b295f36fc8b5.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ad3cac1e-f970-4bea-99be-74902337b36f.jpg;maxHeight=640;maxWidth=550;format=webp",
    ], // Empty strings as placeholders
    categories: ["Music", "Gaming", "Fitness", "Casual"],
  },
  {
    name: "Tablet",
    images: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566195_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6536/6536782_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572187_rd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6551/6551465_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
    ], // Empty strings as placeholders
    categories: ["Casual", "Gaming"],
  },
  {
    name: "Monitor",
    images: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/f9954448-4748-4318-ba4f-a499f99e6a0d.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420869_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560958_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455487_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6540/6540944_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
    ], // Empty strings as placeholders
    categories: ["Office", "Gaming", "Causal"],
  },
  {
    name: "Mouse",
    images: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6521/6521121cv14d.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/04d8ca11-0503-4e18-bbcc-618139ff5a3d.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502577_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6434/6434806_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/57b434e0-742c-4e2c-b65b-7cffa8b68a3c.jpg;maxHeight=640;maxWidth=550;format=webp",
    ], // Empty strings as placeholders
    categories: ["Office", "Gaming", "Casual"],
  },
  {
    name: "Keyboard",
    images: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6385/6385105_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6434/6434813cv12d.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6547/6547988_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6539/6539505_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6372/6372528_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
    ], // Empty strings as placeholders
    categories: ["Office", "Gaming", "Casual"],
  },
  {
    name: "Speaker",
    images: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576522_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6488/6488911_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6511/6511782_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6520/6520424ld.jpg;maxHeight=640;maxWidth=550;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577679_rd.jpg;maxHeight=640;maxWidth=550;format=webp",
    ], // Empty strings as placeholders
    categories: ["Music", "Casual", "Office", "Gaming"],
  },
];

const getRandomCategory = (num) => {
  return technology[num]["categories"][
    Math.floor(Math.random() * technology[num]["categories"].length)
  ];
};

const getRandomTechNames = (num) => {
  const keyword = technology[num]["name"];
  return `${faker.company.name()} ${keyword}`;
};

const getRandomTechImg = (num) => {
  return technology[num]["images"][
    Math.floor(Math.random() * technology[num]["images"].length)
  ];
};

const generateProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const randomTechnology = Math.floor(Math.random() * technology.length); // Randomize for each product
    const mainImage = getRandomTechImg(randomTechnology); // Get a main image for each product
    products.push({
      name: getRandomTechNames(randomTechnology),
      price: parseFloat(faker.commerce.price()),
      description: faker.lorem.sentence(),
      categories: [getRandomCategory(randomTechnology)],
      mainImage: mainImage, // Set the main image
      images: Array(3).fill(mainImage), // Fill images array with the same main image
    });
  }
  return products;
};

const insertMockData = async () => {
  try {
    const products = generateProducts(100);
    await Product.insertMany(products);
    console.log("Mock data insertion completed");
  } catch (error) {
    console.error("Error inserting mock data:", error);
  }
};

module.exports = insertMockData;
