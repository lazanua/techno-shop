type CategoryType = {
  id: number;
  categoryName: string;
  subCategories: {
    subCategory: string;
    subCategoryImg: string;
    subSubCategories?: string[];
  }[];
};

export const categories: CategoryType[] = [
  {
    id: 1,
    categoryName: "Комплектуючі ПК",
    subCategories: [
      {
        subCategory: "Процесори",
        subCategoryImg: "https://i.can.ua/goods/0/806.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Материнські плати",
        subCategoryImg: "https://i.can.ua/goods/0/800.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Відеокарти",
        subCategoryImg: "https://i.can.ua/goods/0/804.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Модулі пам'яті",
        subCategoryImg: "https://i.can.ua/goods/6676/6676231.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "SSD диски",
        subCategoryImg: "https://i.can.ua/goods/0/615.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Жорсткі диски (HDD)",
        subCategoryImg: "https://i.can.ua/goods/6673/6673794.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Системи охолодження",
        subCategoryImg: "https://i.can.ua/goods/5068/5068081.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Корпуси",
        subCategoryImg: "https://i.can.ua/goods/6675/6675053.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Блоки живлення",
        subCategoryImg: "https://i.can.ua/goods/0/617.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Клавіатури",
        subCategoryImg:
          "https://api.e-server.com.ua/storage/151442/rs/U0851341_big_1693542134___rs_1200_1200.jpg",
        subSubCategories: [],
      },
    ],
  },
  {
    id: 2,
    categoryName: "Монітори",
    subCategories: [
      {
        subCategory: "Монітори",
        subCategoryImg:
          "https://2e.ua/wp-content/uploads/2023/07/2E-B2423B-01.UA-1.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Аксесуари для моніторів",
        subCategoryImg:
          "https://2e.ua/wp-content/uploads/2023/07/2E-B2423B-01.UA-1.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Відеокабелі та перехідники",
        subCategoryImg:
          "https://2e.ua/wp-content/uploads/2023/07/2E-B2423B-01.UA-1.jpg",
        subSubCategories: [],
      },
    ],
  },
  {
    id: 3,
    categoryName: "Комп'ютери",
    subCategories: [
      {
        subCategory: "Системні блоки",
        subCategoryImg:
          "https://cdn.comfy.ua/media/catalog/product/r/i/rich1_1_a3600.16.s10.305.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Моноблоки (All-in-One)",
        subCategoryImg: "https://i.moyo.ua/img/products/5829/47_1500.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Неттопи",
        subCategoryImg:
          "https://prologix.ua/images/thumbs/0071836_nettop-prologix-i500508s24int289_415.jpeg",
        subSubCategories: [],
      },
    ],
  },

  {
    id: 4,
    categoryName: "Ноутбуки",
    subCategories: [
      {
        subCategory: "Acer",
        subCategoryImg:
          "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/c/acer-aspire-5-a515-58m-a515-58mt-s50-55-non-fingerprint-with-backlit-wallpaper-logo-steel-gray-01.tif-custom_1.jpg/w_600",
        subSubCategories: [],
      },
      {
        subCategory: "Apple",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_58_18009_0.webp",
        subSubCategories: [],
      },
      {
        subCategory: "Asus",
        subCategoryImg:
          "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/",
        subSubCategories: [],
      },
      {
        subCategory: "HP",
        subCategoryImg:
          "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08473541.png",
        subSubCategories: [],
      },
      {
        subCategory: "Huawei",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_58_19905_1.jpg",
        subSubCategories: [],
      },
    ],
  },
  {
    id: 5,
    categoryName: "Ігрові консолі",
    subCategories: [
      {
        subCategory: "Anbernic",
        subCategoryImg:
          "https://touch.com.ua/upload/resize_cache/webp/resize_cache/iblock/22f/500_500_1/mpl89x9vdop4okjc5578ng3fruzyos5i.webp",
        subSubCategories: [],
      },
      {
        subCategory: "ASUS",
        subCategoryImg:
          "https://content2.rozetka.com.ua/goods/images/big/525032033.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Lenovo",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_752_243_0_1_lzJtwF.webp",
        subSubCategories: [],
      },
      {
        subCategory: "Nintendo",
        subCategoryImg:
          "https://content.rozetka.com.ua/goods/images/big/370208513.jpg",
        subSubCategories: [],
      },
    ],
  },
  {
    id: 6,
    categoryName: "Комплектуючі до ноутбуків",
    subCategories: [
      {
        subCategory: "Процесори (CPU)",
        subCategoryImg:
          "https://api.e-server.com.ua/storage/49769/rs/processor-hp-enterprise-e5-2609v3-dl160-gen9-kit-733943-b21___rs_1200_1200.jpg",
        subSubCategories: ["Intel Core", "AMD Ryzen"],
      },
      {
        subCategory: "Оперативна пам'ять (RAM)",
        subCategoryImg:
          "https://servak.com.ua/image/cache/catalog/image/catalog/RAM%20/12.webp",
        subSubCategories: ["Модулі DDR4 SODIMM", "Модулі DDR5 SODIMM"],
      },
      {
        subCategory: "Накопичувачі",
        subCategoryImg:
          "https://content.rozetka.com.ua/goods/images/big/424790631.jpg",
        subSubCategories: ["SSD-накопичувачі", "Жорсткі диски (HDD) 2.5"],
      },
      {
        subCategory: "Системи охолодження",
        subCategoryImg:
          "https://content1.rozetka.com.ua/goods/images/big/468313677.jpg",
        subSubCategories: [
          "Кулери для процесорів ноутбуків",
          "Радіатори для ноутбуків",
          "Термопаста",
        ],
      },
      {
        subCategory: "Процесори (CPU)",
        subCategoryImg:
          "https://api.e-server.com.ua/storage/49769/rs/processor-hp-enterprise-e5-2609v3-dl160-gen9-kit-733943-b21___rs_1200_1200.jpg",
        subSubCategories: ["Intel Core", "AMD Ryzen"],
      },
      {
        subCategory: "Оперативна пам'ять (RAM)",
        subCategoryImg:
          "https://servak.com.ua/image/cache/catalog/image/catalog/RAM%20/12.webp",
        subSubCategories: ["Модулі DDR4 SODIMM", "Модулі DDR5 SODIMM"],
      },
      {
        subCategory: "Накопичувачі",
        subCategoryImg:
          "https://content.rozetka.com.ua/goods/images/big/424790631.jpg",
        subSubCategories: ["SSD-накопичувачі", "Жорсткі диски (HDD) 2.5"],
      },
      {
        subCategory: "Системи охолодження",
        subCategoryImg:
          "https://content1.rozetka.com.ua/goods/images/big/468313677.jpg",
        subSubCategories: [
          "Кулери для процесорів ноутбуків",
          "Радіатори для ноутбуків",
          "Термопаста",
        ],
      },
    ],
  },
  {
    id: 7,
    categoryName: "Планшети",
    subCategories: [
      {
        subCategory: "Samsung",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_58_19905_1.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Apple",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_58_19905_1.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Lenovo",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_58_19905_1.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "HP",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_58_19905_1.jpg",
        subSubCategories: [],
      },
      {
        subCategory: "Asus",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_58_19905_1.jpg",
        subSubCategories: [],
      },
    ],
  },
  {
    id: 8,
    categoryName: "Принтери та БФП",
    subCategories: [
      {
        subCategory: "Принтери та БФП",
        subCategoryImg:
          "https://content2.rozetka.com.ua/goods/images/big_tile/323428543.jpg",
        subSubCategories: ["Canon", "HP", "Epson", "Pantum"],
      },
      {
        subCategory: "3D принтери",
        subCategoryImg:
          "https://3ddevice.com.ua/wp-content/uploads/2024/01/creatbot-d1000-3d-printer.jpg",
        subSubCategories: ["Anycubic", "Elegoo", "Gembrid", "Neor"],
      },
    ],
  },
  {
    id: 9,
    categoryName: "Акустичні колонки",
    subCategories: [
      {
        subCategory: "Підлогові колонки",
        subCategoryImg:
          "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/131959/c/sliderclYAtt-desktop.webp",
      },
      {
        subCategory: "Поличні та підвісні колонки",
        subCategoryImg:
          "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/131959/c/sliderclYAtt-desktop.webp",
      },
      {
        subCategory: "Сабвуфери",
        subCategoryImg:
          "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/131959/c/sliderclYAtt-desktop.webp",
      },
      {
        subCategory: "Портативні колонки",
        subCategoryImg:
          "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/131959/c/sliderclYAtt-desktop.webp",
      },
      {
        subCategory: "Смарт-колонки",
        subCategoryImg:
          "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/131959/c/sliderclYAtt-desktop.webp",
      },
    ],
  },
  {
    id: 10,
    categoryName: "Мережеве обладнання",
    subCategories: [
      {
        subCategory: "Маршутизатори",
        subCategoryImg:
          "https://files.foxtrot.com.ua/PhotoNew/img_0_32458_364_0_Small.jpg",
        subSubCategories: [
          "Для розподілу інтернет-трафіку між пристроями",
          "Wi-Fi роутери",
          "Промислові маршрутизатори",
        ],
      },
      {
        subCategory: "Комутатори (світчі)",
        subCategoryImg:
          "https://ohrana.ua/storage/cache/images/products/32fd8242-0a36-443b-be37-75dbee4d438b/2a829d925fcce318743dc6ccef607f40-1000-1000.jpg",
        subSubCategories: [
          "Для об'єднання пристроїв в локальну мережу",
          "PoE комутатори",
          "Керовані та некеровані комутатори",
        ],
      },
      {
        subCategory: "Мережеві адаптери",
        subCategoryImg:
          "https://content2.rozetka.com.ua/goods/images/big_tile/458047896.jpg",
        subSubCategories: [
          "Wi-Fi адаптери",
          "Ethernet адаптери",
          "Bluetooth адаптери",
        ],
      },
    ],
  },
];
