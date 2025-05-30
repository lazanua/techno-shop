import React from "react";
import axios from "axios";
import { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import "./styles/main.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { ProductType } from "./data/products";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import { BasketsProduct } from "./data/products";
import News from "./pages/News/News";
import Article from "./pages/Article/Article";
import Contacts from "./pages/Contacts/Contacts";
import { NewsType } from "./data/news";
import Discounts from "./pages/Discounts/Discounts";
import Search from "./pages/Search/Search";
import SubCategory from "./pages/SubCategory/SubCategory";
import Comparisons from "./pages/Comparisons/Comparisons";
import { ComparProduct } from "./data/products";

const App: FC = () => {
  const [comparProducts, setComparProducts] = useState<ComparProduct[]>([]);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://67e580fc18194932a586562d.mockapi.io/news"
      );
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteComparList = (index: number) => {
    setComparProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };
  const [usersProduct, setUserProduct] = useState<BasketsProduct[]>([]);
  const [favoritesUserProducts, setFavoriteUsersProduct] = useState<
    ProductType[]
  >([]);
  const productToBasket = (product: BasketsProduct) => {
    const foundObject = usersProduct.find((obj) => obj.id === product.id);
    if (!foundObject) {
      setUserProduct((prevItems) => [...prevItems, { ...product, count: 1 }]);
    } else {
      setUserProduct((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    }
  };
  const addProduct = (id: number) => {
    setUserProduct((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const removeProduct = (id: number) => {
    setUserProduct((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
      )
    );
  };
  const deleteProduct = (id: number) => {
    setUserProduct((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const handleChangeProduct = (id: number, value: string) => {
    setUserProduct((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: Number(value) } : item
      )
    );
  };
  const onClickBuyBtn = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const product: BasketsProduct = { ...products[id - 1], count: 0 };
    productToBasket(product);
  };
  const onClickAddToFavorite = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => {
    event.preventDefault();
    event.stopPropagation();
    addFavoriteProduct(product);
  };

  //додати до списку порівнянь
  const onClickAddToCompare = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => {
    event.preventDefault();
    event.stopPropagation();

    let subCategoryName = "";
    if (product.categoryId === 4) {
      subCategoryName = "Ноутбуки";
    } else if (product.categoryId === 7) {
      subCategoryName = "Планшети";
    } else {
      subCategoryName = product.subcategory;
    }

    const comparItem = comparProducts.find(
      (item) => item.category === subCategoryName
    );

    if (!comparItem) {
      setComparProducts((prev) => [
        ...prev,
        { category: subCategoryName, products: [product] },
      ]);
    } else {
      if (!comparItem.products.find((item) => item.id === product.id)) {
        const newComparItem = comparItem.products.push(product);
        setComparProducts((prev) =>
          prev.filter((item) =>
            item.category === comparItem.category ? newComparItem : item
          )
        );
      }
    }
  };

  const addFavoriteProduct = (product: ProductType) => {
    const id = product.id;
    if (!favoritesUserProducts.some((obj) => obj.id === id)) {
      setFavoriteUsersProduct([...favoritesUserProducts, product]);
    }
  };

  //видалення певного списку порівнянь
  const deleteFavoriteProduct = (id: number) => {
    setFavoriteUsersProduct((prev) => prev.filter((item) => item.id !== id));
  };

  //зайти до певного списку порывнянь

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://67e580fc18194932a586562d.mockapi.io/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //пошук
  const changeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  //заповнюэмо масив з продуктами, що порівнюються для прикладу
  useEffect(() => {
    if (products[6] && products[11]) {
      setComparProducts([
        { category: "Планшети", products: [products[6], products[11]] },
        { category: "Ноутбуки", products: [products[1], products[12]] },
      ]);
    }
  }, [products]);

  return (
    <>
      <Router>
        <Header
          toggleOverlay={toggleOverlay}
          usersProduct={usersProduct}
          favoriteProducts={favoritesUserProducts}
          changeCount={[
            removeProduct,
            addProduct,
            deleteProduct,
            handleChangeProduct,
          ]}
          productToBasket={productToBasket}
          deleteFavoriteProduct={deleteFavoriteProduct}
          productsData={products}
          searchValue={searchValue}
          changeSearchValue={changeSearchValue}
          comparProducts={comparProducts}
          deleteComparList={deleteComparList}
        />
        {isOverlayVisible && <Overlay />}
        <Routes>
          <Route
            path="*"
            element={
              <Homepage
                onClickBuyBtn={onClickBuyBtn}
                products={products}
                news={newsData}
                onClickAddToFavorite={onClickAddToFavorite}
                onClickAddToCompare={onClickAddToCompare}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                productToBasket={productToBasket}
                addFavoriteProduct={addFavoriteProduct}
                products={products}
                onClickBuyBtn={onClickBuyBtn}
                onClickAddToFavorite={onClickAddToFavorite}
              />
            }
          />
          <Route
            path="/purchase"
            element={
              <PurchasePage
                usersProduct={usersProduct}
                changeCount={[
                  removeProduct,
                  addProduct,
                  deleteProduct,
                  handleChangeProduct,
                ]}
              />
            }
          />
          <Route
            path="/categories/:category"
            element={
              <CategoryPage
                onClickBuyBtn={onClickBuyBtn}
                onClickAddToFavorite={onClickAddToFavorite}
              />
            }
          />
          <Route
            path="/news"
            element={<News news={newsData} fetchData={fetchData} />}
          />
          <Route path="/news/:id" element={<Article news={newsData} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route
            path="/search"
            element={
              <Search
                value={searchValue}
                products={products}
                onClickBuyBtn={onClickBuyBtn}
                onClickAddToFavorite={onClickAddToFavorite}
              />
            }
          />
          <Route
            path="/comprisons/:id"
            element={
              <Comparisons
                comparProducts={comparProducts}
                deleteComparList={deleteComparList}
              />
            }
          />
          <Route
            path="/categories/:category/:subcategory"
            element={
              <SubCategory
                onClickBuyBtn={onClickBuyBtn}
                onClickAddToFavorite={onClickAddToFavorite}
              />
            }
          />
          {/* <Route path="/404" element={<Page404 />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
