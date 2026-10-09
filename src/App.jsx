
// // import { useEffect, useMemo, useState } from "react";
// // import "./index.css";
// // import { getProducts } from "./lib/productService";
// // import { supabase } from "./lib/supabaseClient";

// // import {
// //   loginAdmin,
// //   logoutAdmin,
// //   getCurrentUser,
// // } from "./lib/authService";

// // const initialProducts = [
// //   ["Doner Classic", "Донеры", 28000, "350 г", "Курица, лаваш, овощи и фирменный соус."],
// //   ["Doner Cheese", "Донеры", 32000, "380 г", "Курица, сыр, свежие овощи и сырный соус."],
// //   ["Spicy Doner", "Донеры", 30000, "360 г", "Курица, овощи и острый соус."],
// //   ["Classic Burger", "Бургеры", 30000, "320 г", "Булочка, котлета, салат и фирменный соус."],
// //   ["French Fries", "Закуски", 12000, "150 г", "Картофель фри с солью."],
// //   ["Cola", "Напитки", 8000, "500 мл", "Холодный газированный напиток."],
// //   ["Beef Doner", "Донеры", 35000, "400 г", "Говядина, овощи и чесночный соус."],
// //   ["Chicken Doner XL", "Донеры", 38000, "500 г", "Большой донер с дополнительной курицей."],
// //   ["BBQ Doner", "Донеры", 33000, "380 г", "Курица, овощи и соус барбекю."],
// //   ["Garlic Doner", "Донеры", 31000, "360 г", "Курица, овощи и чесночный соус."],
// //   ["Double Burger", "Бургеры", 42000, "430 г", "Две котлеты, сыр, овощи и соус."],
// //   ["Chicken Burger", "Бургеры", 27000, "300 г", "Куриная котлета, булочка и овощи."],
// //   ["Cheese Burger", "Бургеры", 34000, "340 г", "Котлета, сыр, огурцы и соус."],
// //   ["Crispy Chicken", "Основные блюда", 32000, "300 г", "Хрустящая курица со специями."],
// //   ["Chicken Wrap", "Основные блюда", 26000, "300 г", "Тортилья, курица, овощи и соус."],
// //   ["Meat Lavash", "Основные блюда", 29000, "350 г", "Лаваш с мясом, овощами и соусом."],
// //   ["Chicken Nuggets", "Основные блюда", 22000, "250 г", "Куриные наггетсы в панировке."],
// //   ["Meat Bowl", "Основные блюда", 36000, "400 г", "Мясо, рис, овощи и соус."],
// //   ["Chicken Rice", "Основные блюда", 28000, "400 г", "Рис, курица и ароматные специи."],
// //   ["Loaded Fries", "Основные блюда", 25000, "280 г", "Картофель фри с сырным соусом."],
// //   ["Grilled Chicken", "Основные блюда", 39000, "400 г", "Курица на гриле со специями."],
// //   ["Combo Classic", "Комбо", 42000, "600 г", "Бургер, картофель фри и напиток."],
// //   ["Doner Combo", "Комбо", 39000, "600 г", "Донер, картофель фри и напиток."],
// //   ["Double Burger Combo", "Комбо", 54000, "750 г", "Двойной бургер, картофель и напиток."],
// //   ["Friends Box", "Комбо", 85000, "1 кг", "Два бургера, картофель фри и соусы."],
// //   ["Chicken Combo", "Комбо", 37000, "550 г", "Курица, картофель фри и напиток."],
// //   ["Mini Combo", "Комбо", 25000, "400 г", "Мини-бургер, картофель фри и соус."],
// //   ["Family Box", "Комбо", 120000, "1.5 кг", "Бургеры, донеры, картофель и соусы."],
// //   ["Fanta", "Напитки", 8000, "500 мл", "Газированный напиток."],
// //   ["Sprite", "Напитки", 8000, "500 мл", "Лимонно-лаймовый газированный напиток."],
// //   ["Ice Tea", "Напитки", 10000, "500 мл", "Холодный чай."],
// //   ["Mineral Water", "Напитки", 5000, "500 мл", "Питьевая вода."],
// //   ["Onion Rings", "Закуски", 15000, "180 г", "Луковые кольца в панировке."],
// //   ["Cheese Sticks", "Закуски", 18000, "180 г", "Сырные палочки в панировке."],
// //   ["Garlic Bread", "Закуски", 14000, "160 г", "Хлеб с чесноком и зеленью."],
// // ];

// // const imageByCategory = {
// //   "Донеры": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
// //   "Бургеры": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
// //   "Основные блюда": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
// //   "Комбо": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
// //   "Закуски": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
// //   "Напитки": "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=85",
// // };

// // const categories = [
// //   "Все",
// //   "Донеры",
// //   "Основные блюда",
// //   "Бургеры",
// //   "Комбо",
// //   "Закуски",
// //   "Напитки",
// // ];

// // const statuses = ["Принят", "Готовится", "Готов", "Выдан", "Отменён"];

// // const defaultProducts = initialProducts.map((item, index) => ({
// //   id: index + 1,
// //   name: item[0],
// //   category: item[1],
// //   price: item[2],
// //   weight: item[3],
// //   description: item[4],
// //   ingredients: item[4],
// //   image: imageByCategory[item[1]],
// //   tag: index === 0 ? "Хит" : "",
// // }));

// // const ADMIN_ID = "e02ee6fc-75b7-4409-98c9-4645d4bfa0f1";

// // const [adminUser, setAdminUser] = useState(null);
// // const [loginEmail, setLoginEmail] = useState("");
// // const [loginPassword, setLoginPassword] = useState("");
// // const [authLoading, setAuthLoading] = useState(false);

// // const money = (value) =>
// //   `${new Intl.NumberFormat("ru-RU").format(value)} сум`;

// // function readStorage(key, fallback) {
// //   try {
// //     const value = localStorage.getItem(key);
// //     return value ? JSON.parse(value) : fallback;
// //   } catch {
// //     return fallback;
// //   }
// // }

// // export default function App() {
// //   const [products, setProducts] = useState(() =>
// //     readStorage("doner-products", defaultProducts)
// //   );
// //   const [cart, setCart] = useState(() => readStorage("doner-cart", []));
// //   const [orders, setOrders] = useState(() => readStorage("doner-orders", []));
// //   const [customerName, setCustomerName] = useState(() =>
// //     readStorage("doner-name", "")
// //   );
// //   const [page, setPage] = useState("menu");
// //   const [category, setCategory] = useState("Все");
// //   const [search, setSearch] = useState("");
// //   const [selected, setSelected] = useState(null);
// //   const [editingId, setEditingId] = useState(null);
// //   const [toast, setToast] = useState("");
// //   const [form, setForm] = useState({
// //     name: "",
// //     category: "Донеры",
// //     price: "",
// //     weight: "350 г",
// //     description: "",
// //   });

// //   useEffect(() => {
// //     localStorage.setItem("doner-products", JSON.stringify(products));
// //   }, [products]);

// //   useEffect(() => {
// //     localStorage.setItem("doner-cart", JSON.stringify(cart));
// //   }, [cart]);

// //   useEffect(() => {
// //     localStorage.setItem("doner-orders", JSON.stringify(orders));
// //   }, [orders]);

// //   useEffect(() => {
// //     localStorage.setItem("doner-name", JSON.stringify(customerName));
// //   }, [customerName]);

// //   useEffect(() => {
// //     if (!toast) return;
// //     const timer = setTimeout(() => setToast(""), 2500);
// //     return () => clearTimeout(timer);
// //   }, [toast]);

// //   useEffect(() => {
// //     const closeModal = (event) => {
// //       if (event.key === "Escape") setSelected(null);
// //     };
// //     window.addEventListener("keydown", closeModal);
// //     return () => window.removeEventListener("keydown", closeModal);
// //   }, []);



// //   useEffect(() => {
// //     async function loadProducts() {
// //       try {
// //         console.log("Загружаем меню из Supabase...");

// //         const data = await getProducts();

// //         console.log("Блюда из Supabase:", data);

// //         if (!Array.isArray(data)) {
// //           throw new Error("Supabase вернул данные не в формате массива");
// //         }

// //         const formattedProducts = data.map((product, index) => ({
// //           ...product,
// //           ingredients: product.ingredients || product.description || "",
// //           image:
// //             product.image ||
// //             imageByCategory[product.category] ||
// //             "",
// //           tag: product.tag || (index === 0 ? "Хит" : ""),
// //         }));

// //         setProducts(formattedProducts);
// //       } catch (error) {
// //         console.error("Ошибка загрузки меню:", error);
// //         setToast(`Ошибка загрузки: ${error.message}`);
// //       }
// //     }

// //     loadProducts();
// //   }, []);





// //   const visibleProducts = useMemo(() => {
// //     const query = search.trim().toLowerCase();

// //     return products.filter((product) => {
// //       const correctCategory =
// //         category === "Все" || product.category === category;
// //       const text = `${product.name} ${product.category} ${product.description}`
// //         .toLowerCase();

// //       return correctCategory && text.includes(query);
// //     });
// //   }, [products, category, search]);

// //   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
// //   const total = cart.reduce(
// //     (sum, item) => sum + item.price * item.quantity,
// //     0
// //   );
// //   const revenue = orders
// //     .filter((order) => order.status !== "Отменён")
// //     .reduce((sum, order) => sum + order.total, 0);

// //   function addToCart(product) {
// //     setCart((current) => {
// //       const found = current.find((item) => item.id === product.id);

// //       return found
// //         ? current.map((item) =>
// //           item.id === product.id
// //             ? { ...item, quantity: item.quantity + 1 }
// //             : item
// //         )
// //         : [...current, { ...product, quantity: 1 }];
// //     });

// //     setToast(`${product.name} добавлен в корзину`);
// //   }

// //   function changeQuantity(id, amount) {
// //     setCart((current) =>
// //       current
// //         .map((item) =>
// //           item.id === id
// //             ? { ...item, quantity: item.quantity + amount }
// //             : item
// //         )
// //         .filter((item) => item.quantity > 0)
// //     );
// //   }

// //   function checkout(event) {
// //     event.preventDefault();

// //     if (!cart.length) {
// //       setToast("Сначала добавь блюда в корзину");
// //       return;
// //     }

// //     if (!customerName.trim()) {
// //       setToast("Введи своё имя");
// //       return;
// //     }

// //     const order = {
// //       id: Date.now(),
// //       name: customerName.trim(),
// //       items: cart,
// //       total,
// //       date: new Date().toLocaleString("ru-RU"),
// //       status: "Принят",
// //     };

// //     setOrders((current) => [order, ...current]);
// //     setCart([]);
// //     setPage("profile");
// //     setToast("Заказ оформлен!");
// //   }

// //   function updateStatus(id, status) {
// //     setOrders((current) =>
// //       current.map((order) =>
// //         order.id === id ? { ...order, status } : order
// //       )
// //     );
// //     setToast("Статус заказа изменён");
// //   }

// //   function resetForm() {
// //     setEditingId(null);
// //     setForm({
// //       name: "",
// //       category: "Донеры",
// //       price: "",
// //       weight: "350 г",
// //       description: "",
// //     });
// //   }

// //   function startEdit(product) {
// //     setEditingId(product.id);
// //     setForm({
// //       name: product.name,
// //       category: product.category,
// //       price: String(product.price),
// //       weight: product.weight,
// //       description: product.description,
// //     });
// //     document.getElementById("admin-product-form")?.scrollIntoView({
// //       behavior: "smooth",
// //       block: "start",
// //     });
// //   }

// //   function saveProduct(event) {
// //     event.preventDefault();

// //     const name = form.name.trim();
// //     const price = Number(form.price);

// //     if (!name || !Number.isFinite(price) || price <= 0) {
// //       setToast("Введи название и правильную цену");
// //       return;
// //     }

// //     if (editingId !== null) {
// //       setProducts((current) =>
// //         current.map((product) =>
// //           product.id === editingId
// //             ? {
// //               ...product,
// //               name,
// //               category: form.category,
// //               price,
// //               weight: form.weight.trim() || "Не указан",
// //               description: form.description.trim() || "Описание не добавлено.",
// //               ingredients: form.description.trim() || "Состав уточняется.",
// //               image: product.image || imageByCategory[form.category],
// //             }
// //             : product
// //         )
// //       );
// //       setToast("Блюдо обновлено");
// //     } else {
// //       const newProduct = {
// //         id: Date.now(),
// //         name,
// //         category: form.category,
// //         price,
// //         weight: form.weight.trim() || "Не указан",
// //         description: form.description.trim() || "Описание не добавлено.",
// //         ingredients: form.description.trim() || "Состав уточняется.",
// //         image: imageByCategory[form.category],
// //         tag: "Новинка",
// //       };

// //       setProducts((current) => [...current, newProduct]);
// //       setToast("Новое блюдо добавлено");
// //     }

// //     resetForm();
// //   }

// //   function deleteProduct(id) {
// //     const product = products.find((item) => item.id === id);
// //     if (!product) return;

// //     if (!window.confirm(`Удалить «${product.name}» из меню?`)) return;

// //     setProducts((current) => current.filter((item) => item.id !== id));
// //     setCart((current) => current.filter((item) => item.id !== id));

// //     if (editingId === id) resetForm();
// //     setToast("Блюдо удалено");
// //   }

// //   function repeatOrder(order) {
// //     setCart((current) => {
// //       const next = [...current];

// //       order.items.forEach((ordered) => {
// //         const index = next.findIndex((item) => item.id === ordered.id);

// //         if (index >= 0) {
// //           next[index] = {
// //             ...next[index],
// //             quantity: next[index].quantity + ordered.quantity,
// //           };
// //         } else {
// //           next.push({ ...ordered });
// //         }
// //       });

// //       return next;
// //     });

// //     setPage("cart");
// //     setToast("Товары добавлены в корзину");
// //   }

// //   return (
// //     <div className="app">
// //       <div className="top-strip">
// //         <span>🔥 Вкус, который объединяет</span>
// //         <span>B&M PROJECT · DONER KEBAB</span>
// //       </div>

// //       <header className="header">
// //         <button className="brand" onClick={() => setPage("menu")}>
// //           <span className="brand-icon">🍔</span>
// //           <span>
// //             <strong>DONER KEBAB</strong>
// //             <small>B&M PROJECT</small>
// //           </span>
// //         </button>

// //         <nav className="nav">
// //           {[
// //             ["menu", "Меню"],
// //             ["cart", `Корзина${cartCount ? ` (${cartCount})` : ""}`],
// //             ["profile", "Профиль"],
// //             ["admin", "Админ-панель"],
// //           ].map(([key, label]) => (
// //             <button
// //               key={key}
// //               className={page === key ? "active" : ""}
// //               onClick={() => setPage(key)}
// //             >
// //               {label}
// //             </button>
// //           ))}
// //         </nav>
// //       </header>

// //       {page === "menu" && (
// //         <>
// //           <section className="hero">
// //             <div className="hero-content">
// //               <span className="eyebrow">B&M KITCHEN</span>
// //               <h1>
// //                 Твой голод.
// //                 <br />
// //                 <span>Наш ответ.</span>
// //               </h1>
// //               <p>
// //                 Сочные донеры, бургеры и комбо из свежих ингредиентов.
// //                 Выбирай любимое и наслаждайся каждым кусочком.
// //               </p>
// //               <button
// //                 className="primary-button"
// //                 onClick={() =>
// //                   document.getElementById("menu")?.scrollIntoView({
// //                     behavior: "smooth",
// //                   })
// //                 }
// //               >
// //                 Смотреть меню ↘
// //               </button>
// //               <div className="hero-stats">
// //                 <div><strong>{products.length}+</strong><span>позиций меню</span></div>
// //                 <div><strong>B&M</strong><span>вкус каждый день</span></div>
// //               </div>
// //             </div>
// //             <div className="hero-image">
// //               <img src={imageByCategory["Донеры"]} alt="Донер" />
// //               <div className="hero-image-label">
// //                 <span>🔥</span>
// //                 <div><strong>Fresh & Tasty</strong><small>Приготовлено с душой</small></div>
// //               </div>
// //             </div>
// //           </section>

// //           <main className="menu-section" id="menu">
// //             <div className="section-heading">
// //               <div>
// //                 <span className="eyebrow">НАШЕ МЕНЮ</span>
// //                 <h2>Найди свой вкус</h2>
// //                 <p>Нажми на блюдо, чтобы посмотреть подробности.</p>
// //               </div>
// //               <span className="menu-count">{visibleProducts.length} товаров</span>
// //             </div>

// //             <div className="search-box">
// //               <span>⌕</span>
// //               <input
// //                 value={search}
// //                 onChange={(event) => setSearch(event.target.value)}
// //                 placeholder="Найти блюдо..."
// //               />
// //               {search && <button onClick={() => setSearch("")}>×</button>}
// //             </div>

// //             <div className="category-list">
// //               {categories.map((item) => (
// //                 <button
// //                   key={item}
// //                   className={category === item ? "category active" : "category"}
// //                   onClick={() => setCategory(item)}
// //                 >
// //                   {item}
// //                 </button>
// //               ))}
// //             </div>

// //             <div className="product-grid">
// //               {visibleProducts.map((product) => (
// //                 <article
// //                   key={product.id}
// //                   className="product-card"
// //                   role="button"
// //                   tabIndex={0}
// //                   onClick={() => setSelected(product)}
// //                   onKeyDown={(event) => {
// //                     if (event.key === "Enter") setSelected(product);
// //                   }}
// //                 >
// //                   <div className="product-image-wrap">
// //                     <img className="product-image" src={product.image || imageByCategory[product.category]} alt={product.name} loading="lazy" />
// //                     {product.tag && <span className="product-tag">{product.tag}</span>}
// //                     <button
// //                       className="quick-add"
// //                       onClick={(event) => {
// //                         event.stopPropagation();
// //                         addToCart(product);
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                   <div className="product-info">
// //                     <span className="product-category">{product.category}</span>
// //                     <h3>{product.name}</h3>
// //                     <p className="product-description">{product.description}</p>
// //                     <div className="product-bottom">
// //                       <div>
// //                         <strong className="product-price">{money(product.price)}</strong>
// //                         <span className="product-weight">{product.weight}</span>
// //                       </div>
// //                       <button
// //                         className="add-button"
// //                         onClick={(event) => {
// //                           event.stopPropagation();
// //                           addToCart(product);
// //                         }}
// //                       >
// //                         + Добавить
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </article>
// //               ))}
// //             </div>

// //             {visibleProducts.length === 0 && (
// //               <div className="empty-state">
// //                 <span>🔎</span><h3>Ничего не найдено</h3>
// //                 <p>Попробуй другой запрос или категорию.</p>
// //                 <button className="primary-button" onClick={() => { setSearch(""); setCategory("Все"); }}>
// //                   Показать всё меню
// //                 </button>
// //               </div>
// //             )}
// //           </main>

// //           <section className="promo-banner">
// //             <div>
// //               <span className="eyebrow">B&M SPECIAL</span>
// //               <h2>Хороший день начинается с хорошей еды.</h2>
// //               <p>Выбирай любимое блюдо — остальное за нами.</p>
// //             </div>
// //             <span className="promo-emoji">🍔</span>
// //           </section>
// //         </>
// //       )}

// //       {page === "cart" && (
// //         <main className="page-section">
// //           <div className="section-heading">
// //             <div><span className="eyebrow">ТВОЙ ВЫБОР</span><h2>Корзина</h2><p>Проверь заказ перед оформлением.</p></div>
// //           </div>

// //           {cart.length === 0 ? (
// //             <div className="empty-state">
// //               <span>🛒</span><h3>Корзина пока пустая</h3>
// //               <p>Добавь что-нибудь вкусное из меню.</p>
// //               <button className="primary-button" onClick={() => setPage("menu")}>Перейти в меню</button>
// //             </div>
// //           ) : (
// //             <div className="cart-layout">
// //               <div className="cart-items">
// //                 {cart.map((item) => (
// //                   <div className="cart-item" key={item.id}>
// //                     <img src={item.image || imageByCategory[item.category]} alt={item.name} />
// //                     <div className="cart-item-info">
// //                       <h3>{item.name}</h3><p>{item.weight}</p>
// //                       <strong>{money(item.price * item.quantity)}</strong>
// //                     </div>
// //                     <div className="quantity-control">
// //                       <button onClick={() => changeQuantity(item.id, -1)}>−</button>
// //                       <span>{item.quantity}</span>
// //                       <button onClick={() => changeQuantity(item.id, 1)}>+</button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               <aside className="summary-card">
// //                 <h3>Ваш заказ</h3>
// //                 <div className="summary-row"><span>Товаров</span><span>{cartCount}</span></div>
// //                 <div className="summary-row"><span>Доставка</span><span>Уточняется</span></div>
// //                 <div className="summary-total"><span>Итого</span><strong>{money(total)}</strong></div>
// //                 <form className="checkout-form" onSubmit={checkout}>
// //                   <label htmlFor="customer-name">Ваше имя</label>
// //                   <input id="customer-name" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Введите имя" required />
// //                   <button className="primary-button full-width" type="submit">Оформить заказ</button>
// //                 </form>
// //                 <p className="checkout-note">Демонстрационное оформление — без настоящей оплаты.</p>
// //               </aside>
// //             </div>
// //           )}
// //         </main>
// //       )}

// //       {page === "profile" && (
// //         <main className="page-section">
// //           <div className="section-heading">
// //             <div><span className="eyebrow">B&M ACCOUNT</span><h2>Твой профиль</h2><p>Имя и история заказов.</p></div>
// //           </div>
// //           <div className="profile-card">
// //             <div className="profile-avatar">👤</div>
// //             <div className="profile-details">
// //               <label htmlFor="profile-name">Твоё имя</label>
// //               <input id="profile-name" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Как тебя зовут?" />
// //               <p>Имя сохраняется на этом устройстве.</p>
// //             </div>
// //           </div>
// //           <div className="orders-section">
// //             <div className="section-heading"><div><h2>История заказов</h2><p>Твои оформленные заказы.</p></div></div>
// //             {orders.length === 0 ? (
// //               <div className="empty-state"><span>📦</span><h3>Заказов пока нет</h3><p>Оформленные заказы появятся здесь.</p><button className="primary-button" onClick={() => setPage("menu")}>Выбрать блюда</button></div>
// //             ) : (
// //               <div className="orders-list">
// //                 {orders.map((order) => (
// //                   <article className="order-card" key={order.id}>
// //                     <div className="order-header">
// //                       <div><span className="order-number">Заказ #{String(order.id).slice(-6)}</span><p>{order.date}</p></div>
// //                       <span className="order-status">{order.status}</span>
// //                     </div>
// //                     <div className="order-products">
// //                       {order.items.map((item) => <p key={item.id}>{item.name} × {item.quantity}</p>)}
// //                     </div>
// //                     <div className="order-footer"><strong>{money(order.total)}</strong><button className="add-button" onClick={() => repeatOrder(order)}>Заказать снова</button></div>
// //                   </article>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </main>
// //       )}

// //       {page === "admin" && (
// //         <main className="page-section admin-page">
// //           <div className="section-heading">
// //             <div><span className="eyebrow">B&M CONTROL CENTER</span><h2>Админ-панель</h2><p>Управление меню и заказами.</p></div>
// //             <span className="demo-label">ДЕМО-РЕЖИМ</span>
// //           </div>

// //           <div className="stats-grid">
// //             <div className="stat-card"><span>🍔</span><p>Блюд в меню</p><strong>{products.length}</strong></div>
// //             <div className="stat-card"><span>📦</span><p>Всего заказов</p><strong>{orders.length}</strong></div>
// //             <div className="stat-card"><span>🕒</span><p>Активные заказы</p><strong>{orders.filter((order) => !["Выдан", "Отменён"].includes(order.status)).length}</strong></div>
// //             <div className="stat-card"><span>💰</span><p>Сумма заказов</p><strong>{money(revenue)}</strong></div>
// //           </div>

// //           <section className="admin-section">
// //             <div className="section-heading"><div><h2>Заказы клиентов</h2><p>Меняй статус по мере выполнения.</p></div></div>
// //             {orders.length === 0 ? (
// //               <div className="empty-state compact"><span>📦</span><h3>Пока нет заказов</h3><p>Новые заказы появятся здесь после оформления.</p></div>
// //             ) : (
// //               <div className="admin-order-list">
// //                 {orders.map((order) => (
// //                   <article className="admin-order-card" key={order.id}>
// //                     <div className="admin-order-top">
// //                       <div><strong>Заказ #{String(order.id).slice(-6)}</strong><p>{order.name} · {order.date}</p></div>
// //                       <strong>{money(order.total)}</strong>
// //                     </div>
// //                     <p className="admin-order-items">{order.items.map((item) => `${item.name} × ${item.quantity}`).join(", ")}</p>
// //                     <div className="status-control">
// //                       <label htmlFor={`status-${order.id}`}>Статус заказа</label>
// //                       <select id={`status-${order.id}`} value={order.status} onChange={(event) => updateStatus(order.id, event.target.value)}>
// //                         {statuses.map((status) => <option key={status}>{status}</option>)}
// //                       </select>
// //                     </div>
// //                   </article>
// //                 ))}
// //               </div>
// //             )}
// //           </section>

// //           <section className="admin-section" id="admin-product-form">
// //             <div className="section-heading">
// //               <div><h2>{editingId !== null ? "Редактировать блюдо" : "Добавить блюдо"}</h2><p>Изменения сохраняются в этом браузере.</p></div>
// //               {editingId !== null && <button className="secondary-button" onClick={resetForm}>Отмена</button>}
// //             </div>

// //             <form className="admin-form" onSubmit={saveProduct}>
// //               <div className="form-field">
// //                 <label htmlFor="product-name">Название блюда</label>
// //                 <input id="product-name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Например, Mega Doner" required />
// //               </div>
// //               <div className="form-field">
// //                 <label htmlFor="product-category">Категория</label>
// //                 <select id="product-category" value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>
// //                   {categories.filter((item) => item !== "Все").map((item) => <option key={item}>{item}</option>)}
// //                 </select>
// //               </div>
// //               <div className="form-field">
// //                 <label htmlFor="product-price">Цена в сумах</label>
// //                 <input id="product-price" type="number" min="1" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} placeholder="30000" required />
// //               </div>
// //               <div className="form-field">
// //                 <label htmlFor="product-weight">Вес / объём</label>
// //                 <input id="product-weight" value={form.weight} onChange={(event) => setForm({ ...form, weight: event.target.value })} placeholder="350 г" />
// //               </div>
// //               <div className="form-field form-field-wide">
// //                 <label htmlFor="product-description">Описание и состав</label>
// //                 <textarea id="product-description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="Из чего приготовлено блюдо?" rows="3" />
// //               </div>
// //               <button type="submit" className="primary-button">{editingId !== null ? "Сохранить изменения" : "Добавить блюдо"}</button>
// //             </form>
// //           </section>

// //           <section className="admin-section">
// //             <div className="section-heading"><div><h2>Управление меню</h2><p>Всего блюд: {products.length}</p></div></div>
// //             <div className="admin-product-list">
// //               {products.map((product) => (
// //                 <article className="admin-product-row" key={product.id}>
// //                   <img src={product.image || imageByCategory[product.category]} alt={product.name} />
// //                   <div className="admin-product-name"><strong>{product.name}</strong><span>{product.category} · {product.weight}</span></div>
// //                   <strong className="admin-product-price">{money(product.price)}</strong>
// //                   <div className="admin-product-actions">
// //                     <button className="secondary-button" onClick={() => startEdit(product)}>Изменить</button>
// //                     <button className="danger-button" onClick={() => deleteProduct(product.id)}>Удалить</button>
// //                   </div>
// //                 </article>
// //               ))}
// //             </div>
// //           </section>
// //         </main>
// //       )}

// //       <footer className="footer">
// //         <div className="footer-brand"><span>🍔</span><div><strong>DONER KEBAB</strong><small>B&M PROJECT</small></div></div>
// //         <p>Вкусно. Просто. По-настоящему.</p>
// //         <span className="footer-copy">© 2026 B&M</span>
// //       </footer>

// //       {selected && (
// //         <div className="modal-overlay" onClick={() => setSelected(null)}>
// //           <section className="product-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
// //             <button className="modal-close" onClick={() => setSelected(null)}>×</button>
// //             <img className="modal-image" src={selected.image || imageByCategory[selected.category]} alt={selected.name} />
// //             <div className="modal-content">
// //               <span className="product-category">{selected.category}</span>
// //               <h2>{selected.name}</h2>
// //               <p className="modal-description">{selected.description}</p>
// //               <div className="detail-block"><span className="detail-icon">🥙</span><div><strong>Состав блюда</strong><p>{selected.ingredients || selected.description}</p></div></div>
// //               <div className="detail-block"><span className="detail-icon">⚖️</span><div><strong>Вес / объём</strong><p>{selected.weight}</p></div></div>
// //               <p className="modal-note">Состав может отличаться в зависимости от приготовления. При аллергии уточни ингредиенты перед заказом.</p>
// //               <div className="modal-bottom">
// //                 <div className="modal-price"><small>Цена</small><strong>{money(selected.price)}</strong></div>
// //                 <button className="primary-button" onClick={() => { addToCart(selected); setSelected(null); }}>+ Добавить в корзину</button>
// //               </div>
// //             </div>
// //           </section>
// //         </div>
// //       )}

// //       {toast && <div className="toast">{toast}</div>}
// //     </div>
// //   );
// // }










// import { useEffect, useMemo, useState } from "react";
// import "./index.css";

// import { supabase } from "./lib/supabaseClient";
// import {
//   getProducts,
//   addProduct as createProduct,
//   updateProduct as updateProductInDB,
//   deleteProduct as deleteProductFromDB,
// } from "./lib/productService";


// import {
//   createOrder,
//   getOrders,
//   updateOrderStatus,
// } from "./lib/orderService";

// import {
//   loginAdmin,
//   logoutAdmin,
//   getCurrentUser,
// } from "./lib/authService";

// const ADMIN_ID = "e02ee6fc-75b7-4409-98c9-4645d4bfa0f1";

// const initialProducts = [
//   ["Doner Classic", "Донеры", 28000, "350 г", "Курица, лаваш, овощи и фирменный соус."],
//   ["Doner Cheese", "Донеры", 32000, "380 г", "Курица, сыр, свежие овощи и сырный соус."],
//   ["Spicy Doner", "Донеры", 30000, "360 г", "Курица, овощи и острый соус."],
//   ["Classic Burger", "Бургеры", 30000, "320 г", "Булочка, котлета, салат и фирменный соус."],
//   ["French Fries", "Закуски", 12000, "150 г", "Картофель фри с солью."],
//   ["Cola", "Напитки", 8000, "500 мл", "Холодный газированный напиток."],
//   ["Beef Doner", "Донеры", 35000, "400 г", "Говядина, овощи и чесночный соус."],
//   ["Chicken Doner XL", "Донеры", 38000, "500 г", "Большой донер с дополнительной курицей."],
//   ["BBQ Doner", "Донеры", 33000, "380 г", "Курица, овощи и соус барбекю."],
//   ["Garlic Doner", "Донеры", 31000, "360 г", "Курица, овощи и чесночный соус."],
//   ["Double Burger", "Бургеры", 42000, "430 г", "Две котлеты, сыр, овощи и соус."],
//   ["Chicken Burger", "Бургеры", 27000, "300 г", "Куриная котлета, булочка и овощи."],
//   ["Cheese Burger", "Бургеры", 34000, "340 г", "Котлета, сыр, огурцы и соус."],
//   ["Crispy Chicken", "Основные блюда", 32000, "300 г", "Хрустящая курица со специями."],
//   ["Chicken Wrap", "Основные блюда", 26000, "300 г", "Тортилья, курица, овощи и соус."],
//   ["Meat Lavash", "Основные блюда", 29000, "350 г", "Лаваш с мясом, овощами и соусом."],
//   ["Chicken Nuggets", "Основные блюда", 22000, "250 г", "Куриные наггетсы в панировке."],
//   ["Meat Bowl", "Основные блюда", 36000, "400 г", "Мясо, рис, овощи и соус."],
//   ["Chicken Rice", "Основные блюда", 28000, "400 г", "Рис, курица и ароматные специи."],
//   ["Loaded Fries", "Основные блюда", 25000, "280 г", "Картофель фри с сырным соусом."],
//   ["Grilled Chicken", "Основные блюда", 39000, "400 г", "Курица на гриле со специями."],
//   ["Combo Classic", "Комбо", 42000, "600 г", "Бургер, картофель фри и напиток."],
//   ["Doner Combo", "Комбо", 39000, "600 г", "Донер, картофель фри и напиток."],
//   ["Double Burger Combo", "Комбо", 54000, "750 г", "Двойной бургер, картофель и напиток."],
//   ["Friends Box", "Комбо", 85000, "1 кг", "Два бургера, картофель фри и соусы."],
//   ["Chicken Combo", "Комбо", 37000, "550 г", "Курица, картофель фри и напиток."],
//   ["Mini Combo", "Комбо", 25000, "400 г", "Мини-бургер, картофель фри и соус."],
//   ["Family Box", "Комбо", 120000, "1.5 кг", "Бургеры, донеры, картофель и соусы."],
//   ["Fanta", "Напитки", 8000, "500 мл", "Газированный напиток."],
//   ["Sprite", "Напитки", 8000, "500 мл", "Лимонно-лаймовый газированный напиток."],
//   ["Ice Tea", "Напитки", 10000, "500 мл", "Холодный чай."],
//   ["Mineral Water", "Напитки", 5000, "500 мл", "Питьевая вода."],
//   ["Onion Rings", "Закуски", 15000, "180 г", "Луковые кольца в панировке."],
//   ["Cheese Sticks", "Закуски", 18000, "180 г", "Сырные палочки в панировке."],
//   ["Garlic Bread", "Закуски", 14000, "160 г", "Хлеб с чесноком и зеленью."],
// ];

// const imageByCategory = {
//   "Донеры": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
//   "Бургеры": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
//   "Основные блюда": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
//   "Комбо": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
//   "Закуски": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
//   "Напитки": "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=85",
// };

// const categories = [
//   "Все",
//   "Донеры",
//   "Основные блюда",
//   "Бургеры",
//   "Комбо",
//   "Закуски",
//   "Напитки",
// ];

// const statuses = ["Принят", "Готовится", "Готов", "Выдан", "Отменён"];

// const defaultProducts = initialProducts.map((item, index) => ({
//   id: index + 1,
//   name: item[0],
//   category: item[1],
//   price: item[2],
//   weight: item[3],
//   description: item[4],
//   ingredients: item[4],
//   image: imageByCategory[item[1]],
//   tag: index === 0 ? "Хит" : "",
// }));

// const money = (value) =>
//   `${new Intl.NumberFormat("ru-RU").format(value)} сум`;

// function readStorage(key, fallback) {
//   try {
//     const value = localStorage.getItem(key);
//     return value ? JSON.parse(value) : fallback;
//   } catch {
//     return fallback;
//   }
// }

// function formatProduct(product, index = 0) {
//   return {
//     ...product,
//     ingredients: product.ingredients || product.description || "",
//     image: product.image || imageByCategory[product.category] || "",
//     tag: product.tag || (index === 0 ? "Хит" : ""),
//   };
// }

// export default function App() {
//   const [products, setProducts] = useState(() =>
//     readStorage("doner-products", defaultProducts)
//   );
//   const [cart, setCart] = useState(() =>
//     readStorage("doner-cart", [])
//   );
//   const [orders, setOrders] = useState(() =>
//     readStorage("doner-orders", [])
//   );
//   const [customerName, setCustomerName] = useState(() =>
//     readStorage("doner-name", "")
//   );

//   const [page, setPage] = useState("menu");
//   const [category, setCategory] = useState("Все");
//   const [search, setSearch] = useState("");
//   const [selected, setSelected] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [toast, setToast] = useState("");

//   const [adminUser, setAdminUser] = useState(null);
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [authLoading, setAuthLoading] = useState(false);
//   const [productSaving, setProductSaving] = useState(false);
//   const [productsLoading, setProductsLoading] = useState(true);

//   const [form, setForm] = useState({
//     name: "",
//     category: "Донеры",
//     price: "",
//     weight: "350 г",
//     description: "",
//   });

//   // Загружаем меню из Supabase.
//   useEffect(() => {
//     let active = true;

//     async function loadProducts() {
//       try {
//         const data = await getProducts();

//         if (active) {
//           const formatted = data.map((product, index) =>
//             formatProduct(product, index)
//           );

//           setProducts(formatted);
//         }
//       } catch (error) {
//         console.error("Ошибка загрузки меню:", error);

//         if (active) {
//           setToast(`Не удалось загрузить меню: ${error.message}`);
//         }
//       } finally {
//         if (active) setProductsLoading(false);
//       }
//     }

//     loadProducts();

//     return () => {
//       active = false;
//     };
//   }, []);

//   // Проверяем сессию и отслеживаем вход и выход.
//   useEffect(() => {
//     let active = true;

//     async function checkUser() {
//       try {
//         const user = await getCurrentUser();

//         if (active) {
//           setAdminUser(user?.id === ADMIN_ID ? user : null);
//         }
//       } catch (error) {
//         console.error("Ошибка проверки пользователя:", error);
//       }
//     }

//     checkUser();

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       if (active) {
//         const user = session?.user;
//         setAdminUser(user?.id === ADMIN_ID ? user : null);
//       }
//     });

//     return () => {
//       active = false;
//       subscription.unsubscribe();
//     };
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("doner-products", JSON.stringify(products));
//   }, [products]);

//   useEffect(() => {
//     localStorage.setItem("doner-cart", JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     localStorage.setItem("doner-orders", JSON.stringify(orders));
//   }, [orders]);

//   useEffect(() => {
//     localStorage.setItem("doner-name", JSON.stringify(customerName));
//   }, [customerName]);

//   useEffect(() => {
//     if (!toast) return;

//     const timer = setTimeout(() => setToast(""), 3500);
//     return () => clearTimeout(timer);
//   }, [toast]);

//   useEffect(() => {
//     const closeModal = (event) => {
//       if (event.key === "Escape") setSelected(null);
//     };

//     window.addEventListener("keydown", closeModal);
//     return () => window.removeEventListener("keydown", closeModal);
//   }, []);

//   const visibleProducts = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return products.filter((product) => {
//       const correctCategory =
//         category === "Все" || product.category === category;

//       const text =
//         `${product.name} ${product.category} ${product.description}`.toLowerCase();

//       return correctCategory && text.includes(query);
//     });
//   }, [products, category, search]);

//   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );


//   useEffect(() => {
//     if (adminUser?.id !== ADMIN_ID) {
//       return;
//     }

//     let active = true;

//     async function loadOrders() {
//       setOrdersLoading(true);

//       try {
//         const data = await getOrders();

//         if (active) {
//           const formattedOrders = data.map((order) => ({
//             ...order,
//             name: order.customer_name,
//             date: new Date(order.created_at).toLocaleString("ru-RU"),
//             items: Array.isArray(order.items) ? order.items : [],
//           }));

//           setOrders(formattedOrders);
//         }
//       } catch (error) {
//         console.error("Ошибка загрузки заказов:", error);

//         if (active) {
//           setToast(`Не удалось загрузить заказы: ${error.message}`);
//         }
//       } finally {
//         if (active) {
//           setOrdersLoading(false);
//         }
//       }
//     }

//     loadOrders();

//     return () => {
//       active = false;
//     };
//   }, [adminUser]);

//   const revenue = orders
//     .filter((order) => order.status !== "Отменён")
//     .reduce((sum, order) => sum + order.total, 0);

//   async function handleAdminLogin(event) {
//     event.preventDefault();
//     setAuthLoading(true);

//     try {
//       const data = await loginAdmin(loginEmail.trim(), loginPassword);

//       if (data.user.id !== ADMIN_ID) {
//         await logoutAdmin();
//         setAdminUser(null);
//         setToast("У этого аккаунта нет прав администратора");
//         return;
//       }

//       setAdminUser(data.user);
//       setLoginPassword("");
//       setToast("Вход выполнен!");
//     } catch (error) {
//       setToast(`Ошибка входа: ${error.message}`);
//     } finally {
//       setAuthLoading(false);
//     }
//   }

//   async function handleAdminLogout() {
//     try {
//       await logoutAdmin();
//       setAdminUser(null);
//       setPage("menu");
//       setToast("Ты вышел из аккаунта");
//     } catch (error) {
//       setToast(`Ошибка выхода: ${error.message}`);
//     }
//   }

//   function addToCart(product) {
//     setCart((current) => {
//       const found = current.find((item) => item.id === product.id);

//       return found
//         ? current.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//         : [...current, { ...product, quantity: 1 }];
//     });

//     setToast(`${product.name} добавлен в корзину`);
//   }

//   function changeQuantity(id, amount) {
//     setCart((current) =>
//       current
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity + amount }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   }


//   async function checkout(event) {
//     event.preventDefault();

//     if (checkoutLoading) return;

//     if (!cart.length) {
//       setToast("Сначала добавь блюда в корзину");
//       return;
//     }

//     if (!customerName.trim()) {
//       setToast("Введи своё имя");
//       return;
//     }

//     if (!customerPhone.trim()) {
//       setToast("Введи номер телефона");
//       return;
//     }

//     setCheckoutLoading(true);

//     try {
//       const orderData = {
//         customer_name: customerName.trim(),
//         phone: customerPhone.trim(),
//         address: customerAddress.trim(),
//         comment: "",
//         items: cart.map((item) => ({
//           id: item.id,
//           name: item.name,
//           category: item.category,
//           price: item.price,
//           weight: item.weight,
//           quantity: item.quantity,
//         })),
//         total,
//         status: "Принят",
//       };

//       const savedOrder = await createOrder(orderData);

//       const formattedOrder = {
//         ...savedOrder,
//         name: savedOrder.customer_name,
//         date: new Date(savedOrder.created_at).toLocaleString("ru-RU"),
//         items: savedOrder.items,
//       };

//       setOrders((current) => [formattedOrder, ...current]);
//       setCart([]);
//       setPage("profile");
//       setToast(`Заказ №${savedOrder.id} сохранён в Supabase!`);
//     } catch (error) {
//       console.error("Ошибка оформления заказа:", error);
//       setToast(`Не удалось оформить заказ: ${error.message}`);
//     } finally {
//       setCheckoutLoading(false);
//     }
//   }


//   async function updateStatus(id, status) {
//     if (adminUser?.id !== ADMIN_ID) {
//       setToast("Нет доступа администратора");
//       return;
//     }

//     try {
//       const updatedOrder = await updateOrderStatus(id, status);

//       setOrders((current) =>
//         current.map((order) =>
//           order.id === id
//             ? {
//               ...order,
//               ...updatedOrder,
//               name: updatedOrder.customer_name,
//               date: new Date(updatedOrder.created_at).toLocaleString("ru-RU"),
//               items: updatedOrder.items,
//             }
//             : order
//         )
//       );

//       setToast("Статус сохранён в Supabase");
//     } catch (error) {
//       console.error("Ошибка обновления статуса:", error);
//       setToast(`Не удалось изменить статус: ${error.message}`);
//     }
//   }
//   function resetForm() {
//     setEditingId(null);
//     setForm({
//       name: "",
//       category: "Донеры",
//       price: "",
//       weight: "350 г",
//       description: "",
//     });
//   }

//   function startEdit(product) {
//     if (!adminUser) {
//       setToast("Сначала войди как администратор");
//       return;
//     }

//     setEditingId(product.id);
//     setForm({
//       name: product.name,
//       category: product.category,
//       price: String(product.price),
//       weight: product.weight || "",
//       description: product.description || "",
//     });

//     document.getElementById("admin-product-form")?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   }

//   // Сохраняем блюдо непосредственно в Supabase.
//   async function saveProduct(event) {
//     event.preventDefault();

//     if (!adminUser || adminUser.id !== ADMIN_ID) {
//       setToast("Нет доступа администратора");
//       return;
//     }

//     const name = form.name.trim();
//     const price = Number(form.price);

//     if (!name || !Number.isFinite(price) || price <= 0) {
//       setToast("Введи название и правильную цену");
//       return;
//     }

//     const payload = {
//       name,
//       category: form.category,
//       price,
//       weight: form.weight.trim() || "Не указан",
//       description: form.description.trim() || "Описание не добавлено.",
//       ingredients: form.description.trim() || "Состав уточняется.",
//       image: imageByCategory[form.category] || "",
//       tag: editingId === null ? "Новинка" : "",
//     };

//     setProductSaving(true);

//     try {
//       if (editingId !== null) {
//         const existing = products.find(
//           (product) => product.id === editingId
//         );

//         const updated = await updateProductInDB(editingId, {
//           ...payload,
//           image: existing?.image || payload.image,
//           tag: existing?.tag || "",
//         });

//         const formatted = formatProduct(updated);

//         setProducts((current) =>
//           current.map((product) =>
//             product.id === editingId ? formatted : product
//           )
//         );

//         setToast("Блюдо обновлено в Supabase");
//       } else {
//         const created = await createProduct(payload);
//         const formatted = formatProduct(created);

//         setProducts((current) => [...current, formatted]);
//         setToast("Новое блюдо добавлено в Supabase");
//       }

//       resetForm();
//     } catch (error) {
//       console.error("Ошибка сохранения блюда:", error);
//       setToast(`Не удалось сохранить: ${error.message}`);
//     } finally {
//       setProductSaving(false);
//     }
//   }

//   async function deleteProduct(id) {
//     if (!adminUser || adminUser.id !== ADMIN_ID) {
//       setToast("Нет доступа администратора");
//       return;
//     }

//     const product = products.find((item) => item.id === id);
//     if (!product) return;

//     if (!window.confirm(`Удалить «${product.name}» из меню?`)) return;

//     try {
//       await deleteProductFromDB(id);

//       setProducts((current) =>
//         current.filter((item) => item.id !== id)
//       );

//       setCart((current) =>
//         current.filter((item) => item.id !== id)
//       );

//       if (editingId === id) resetForm();

//       setToast("Блюдо удалено из Supabase");
//     } catch (error) {
//       console.error("Ошибка удаления блюда:", error);
//       setToast(`Не удалось удалить: ${error.message}`);
//     }
//   }

//   function repeatOrder(order) {
//     setCart((current) => {
//       const next = [...current];

//       order.items.forEach((ordered) => {
//         const index = next.findIndex((item) => item.id === ordered.id);

//         if (index >= 0) {
//           next[index] = {
//             ...next[index],
//             quantity: next[index].quantity + ordered.quantity,
//           };
//         } else {
//           next.push({ ...ordered });
//         }
//       });

//       return next;
//     });

//     setPage("cart");
//     setToast("Товары добавлены в корзину");
//   }

//   return (
//     <div className="app">
//       <div className="top-strip">
//         <span>🔥 Вкус, который объединяет</span>
//         <span>B&M PROJECT · DONER KEBAB</span>
//       </div>

//       <header className="header">
//         <button className="brand" onClick={() => setPage("menu")}>
//           <span className="brand-icon">🍔</span>
//           <span>
//             <strong>DONER KEBAB</strong>
//             <small>B&M PROJECT</small>
//           </span>
//         </button>

//         <nav className="nav">
//           {[
//             ["menu", "Меню"],
//             ["cart", `Корзина${cartCount ? ` (${cartCount})` : ""}`],
//             ["profile", "Профиль"],
//             ["admin", "Админ-панель"],
//           ].map(([key, label]) => (
//             <button
//               key={key}
//               className={page === key ? "active" : ""}
//               onClick={() => setPage(key)}
//             >
//               {label}
//             </button>
//           ))}
//         </nav>
//       </header>

//       {page === "menu" && (
//         <>
//           <section className="hero">
//             <div className="hero-content">
//               <span className="eyebrow">B&M KITCHEN</span>
//               <h1>
//                 Твой голод.
//                 <br />
//                 <span>Наш ответ.</span>
//               </h1>
//               <p>
//                 Сочные донеры, бургеры и комбо из свежих ингредиентов.
//                 Выбирай любимое и наслаждайся каждым кусочком.
//               </p>
//               <button
//                 className="primary-button"
//                 onClick={() =>
//                   document.getElementById("menu")?.scrollIntoView({
//                     behavior: "smooth",
//                   })
//                 }
//               >
//                 Смотреть меню ↘
//               </button>
//               <div className="hero-stats">
//                 <div>
//                   <strong>{products.length}+</strong>
//                   <span>позиций меню</span>
//                 </div>
//                 <div>
//                   <strong>B&M</strong>
//                   <span>вкус каждый день</span>
//                 </div>
//               </div>
//             </div>
//             <div className="hero-image">
//               <img src={imageByCategory["Донеры"]} alt="Донер" />
//               <div className="hero-image-label">
//                 <span>🔥</span>
//                 <div>
//                   <strong>Fresh & Tasty</strong>
//                   <small>Приготовлено с душой</small>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <main className="menu-section" id="menu">
//             <div className="section-heading">
//               <div>
//                 <span className="eyebrow">НАШЕ МЕНЮ</span>
//                 <h2>Найди свой вкус</h2>
//                 <p>Нажми на блюдо, чтобы посмотреть подробности.</p>
//               </div>
//               <span className="menu-count">
//                 {productsLoading ? "Загрузка..." : `${visibleProducts.length} товаров`}
//               </span>
//             </div>

//             <div className="search-box">
//               <span>⌕</span>
//               <input
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Найти блюдо..."
//               />
//               {search && (
//                 <button onClick={() => setSearch("")}>×</button>
//               )}
//             </div>

//             <div className="category-list">
//               {categories.map((item) => (
//                 <button
//                   key={item}
//                   className={category === item ? "category active" : "category"}
//                   onClick={() => setCategory(item)}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>

//             <div className="product-grid">
//               {visibleProducts.map((product) => (
//                 <article
//                   key={product.id}
//                   className="product-card"
//                   role="button"
//                   tabIndex={0}
//                   onClick={() => setSelected(product)}
//                   onKeyDown={(event) => {
//                     if (event.key === "Enter") setSelected(product);
//                   }}
//                 >
//                   <div className="product-image-wrap">
//                     <img
//                       className="product-image"
//                       src={product.image || imageByCategory[product.category]}
//                       alt={product.name}
//                       loading="lazy"
//                     />
//                     {product.tag && (
//                       <span className="product-tag">{product.tag}</span>
//                     )}
//                     <button
//                       className="quick-add"
//                       onClick={(event) => {
//                         event.stopPropagation();
//                         addToCart(product);
//                       }}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div className="product-info">
//                     <span className="product-category">{product.category}</span>
//                     <h3>{product.name}</h3>
//                     <p className="product-description">{product.description}</p>
//                     <div className="product-bottom">
//                       <div>
//                         <strong className="product-price">
//                           {money(product.price)}
//                         </strong>
//                         <span className="product-weight">{product.weight}</span>
//                       </div>
//                       <button
//                         className="add-button"
//                         onClick={(event) => {
//                           event.stopPropagation();
//                           addToCart(product);
//                         }}
//                       >
//                         + Добавить
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             {!productsLoading && visibleProducts.length === 0 && (
//               <div className="empty-state">
//                 <span>🔎</span>
//                 <h3>Ничего не найдено</h3>
//                 <p>Попробуй другой запрос или категорию.</p>
//                 <button
//                   className="primary-button"
//                   onClick={() => {
//                     setSearch("");
//                     setCategory("Все");
//                   }}
//                 >
//                   Показать всё меню
//                 </button>
//               </div>
//             )}
//           </main>

//           <section className="promo-banner">
//             <div>
//               <span className="eyebrow">B&M SPECIAL</span>
//               <h2>Хороший день начинается с хорошей еды.</h2>
//               <p>Выбирай любимое блюдо — остальное за нами.</p>
//             </div>
//             <span className="promo-emoji">🍔</span>
//           </section>
//         </>
//       )}

//       {page === "cart" && (
//         <main className="page-section">
//           <div className="section-heading">
//             <div>
//               <span className="eyebrow">ТВОЙ ВЫБОР</span>
//               <h2>Корзина</h2>
//               <p>Проверь заказ перед оформлением.</p>
//             </div>
//           </div>

//           {cart.length === 0 ? (
//             <div className="empty-state">
//               <span>🛒</span>
//               <h3>Корзина пока пустая</h3>
//               <p>Добавь что-нибудь вкусное из меню.</p>
//               <button
//                 className="primary-button"
//                 onClick={() => setPage("menu")}
//               >
//                 Перейти в меню
//               </button>
//             </div>
//           ) : (
//             <div className="cart-layout">
//               <div className="cart-items">
//                 {cart.map((item) => (
//                   <div className="cart-item" key={item.id}>
//                     <img
//                       src={item.image || imageByCategory[item.category]}
//                       alt={item.name}
//                     />
//                     <div className="cart-item-info">
//                       <h3>{item.name}</h3>
//                       <p>{item.weight}</p>
//                       <strong>{money(item.price * item.quantity)}</strong>
//                     </div>
//                     <div className="quantity-control">
//                       <button onClick={() => changeQuantity(item.id, -1)}>
//                         −
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => changeQuantity(item.id, 1)}>
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <aside className="summary-card">
//                 <h3>Ваш заказ</h3>
//                 <div className="summary-row">
//                   <span>Товаров</span>
//                   <span>{cartCount}</span>
//                 </div>
//                 <div className="summary-row">
//                   <span>Доставка</span>
//                   <span>Уточняется</span>
//                 </div>
//                 <div className="summary-total">
//                   <span>Итого</span>
//                   <strong>{money(total)}</strong>
//                 </div>

//                 <form className="checkout-form" onSubmit={checkout}>
//                   <label htmlFor="customer-name">Ваше имя</label>
//                   <input
//                     id="customer-name"
//                     value={customerName}
//                     onChange={(event) => setCustomerName(event.target.value)}
//                     placeholder="Введите имя"
//                     maxLength={100}
//                     required
//                   />

//                   <label htmlFor="customer-phone">Номер телефона</label>
//                   <input
//                     id="customer-phone"
//                     type="tel"
//                     value={customerPhone}
//                     onChange={(event) => setCustomerPhone(event.target.value)}
//                     placeholder="+998 90 123 45 67"
//                     maxLength={30}
//                     required
//                   />

//                   <label htmlFor="customer-address">Адрес доставки</label>
//                   <input
//                     id="customer-address"
//                     value={customerAddress}
//                     onChange={(event) => setCustomerAddress(event.target.value)}
//                     placeholder="Улица, дом, квартира"
//                     maxLength={300}
//                   />

//                   <button
//                     className="primary-button full-width"
//                     type="submit"
//                     disabled={checkoutLoading}
//                   >
//                     {checkoutLoading ? "Оформляем заказ..." : "Оформить заказ"}
//                   </button>
//                 </form>

//                 <p className="checkout-note">
//                   Онлайн-оплата пока не подключена.
//                 </p>
//                 <p className="checkout-note">
//                   Демонстрационное оформление — без настоящей оплаты.
//                 </p>
//               </aside>
//             </div>
//           )}
//         </main>
//       )}

//       {page === "profile" && (
//         <main className="page-section">
//           <div className="section-heading">
//             <div>
//               <span className="eyebrow">B&M ACCOUNT</span>
//               <h2>Твой профиль</h2>
//               <p>Имя и история заказов.</p>
//             </div>
//           </div>
//           <div className="profile-card">
//             <div className="profile-avatar">👤</div>
//             <div className="profile-details">
//               <label htmlFor="profile-name">Твоё имя</label>
//               <input
//                 id="profile-name"
//                 value={customerName}
//                 onChange={(event) => setCustomerName(event.target.value)}
//                 placeholder="Как тебя зовут?"
//               />
//               <p>Имя сохраняется на этом устройстве.</p>
//             </div>
//           </div>
//           <div className="orders-section">
//             <div className="section-heading">
//               <div>
//                 <h2>История заказов</h2>
//                 <p>Твои оформленные заказы.</p>
//               </div>
//             </div>
//             {orders.length === 0 ? (
//               <div className="empty-state">
//                 <span>📦</span>
//                 <h3>Заказов пока нет</h3>
//                 <p>Оформленные заказы появятся здесь.</p>
//                 <button
//                   className="primary-button"
//                   onClick={() => setPage("menu")}
//                 >
//                   Выбрать блюда
//                 </button>
//               </div>
//             ) : (
//               <div className="orders-list">
//                 {orders.map((order) => (
//                   <article className="order-card" key={order.id}>
//                     <div className="order-header">
//                       <div>
//                         <span className="order-number">
//                           Заказ #{String(order.id).slice(-6)}
//                         </span>
//                         <p>{order.date}</p>
//                       </div>
//                       <span className="order-status">{order.status}</span>
//                     </div>
//                     <div className="order-products">
//                       {order.items.map((item) => (
//                         <p key={item.id}>
//                           {item.name} × {item.quantity}
//                         </p>
//                       ))}
//                     </div>
//                     <div className="order-footer">
//                       <strong>{money(order.total)}</strong>
//                       <button
//                         className="add-button"
//                         onClick={() => repeatOrder(order)}
//                       >
//                         Заказать снова
//                       </button>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             )}
//           </div>
//         </main>
//       )}

//       {page === "admin" && !adminUser && (
//         <main className="page-section">
//           <div className="section-heading">
//             <div>
//               <span className="eyebrow">B&M ADMIN</span>
//               <h2>Вход администратора</h2>
//               <p>Войди в свой аккаунт для управления меню.</p>
//             </div>
//           </div>

//           <form className="admin-form" onSubmit={handleAdminLogin}>
//             <div className="form-field">
//               <label htmlFor="admin-email">Электронная почта</label>
//               <input
//                 id="admin-email"
//                 type="email"
//                 value={loginEmail}
//                 onChange={(event) => setLoginEmail(event.target.value)}
//                 autoComplete="username"
//                 required
//               />
//             </div>
//             <div className="form-field">
//               <label htmlFor="admin-password">Пароль</label>
//               <input
//                 id="admin-password"
//                 type="password"
//                 value={loginPassword}
//                 onChange={(event) => setLoginPassword(event.target.value)}
//                 autoComplete="current-password"
//                 required
//               />
//             </div>
//             <button
//               className="primary-button"
//               type="submit"
//               disabled={authLoading}
//             >
//               {authLoading ? "Входим..." : "Войти"}
//             </button>
//           </form>
//         </main>
//       )}

//       {page === "admin" && adminUser && (
//         <main className="page-section admin-page">
//           <div className="section-heading">
//             <div>
//               <span className="eyebrow">B&M CONTROL CENTER</span>
//               <h2>Админ-панель</h2>
//               <p>Управление меню и заказами.</p>
//             </div>
//             <button className="secondary-button" onClick={handleAdminLogout}>
//               Выйти
//             </button>
//           </div>

//           <div className="stats-grid">
//             <div className="stat-card">
//               <span>🍔</span>
//               <p>Блюд в меню</p>
//               <strong>{products.length}</strong>
//             </div>
//             <div className="stat-card">
//               <span>📦</span>
//               <p>Всего заказов</p>
//               <strong>{orders.length}</strong>
//             </div>
//             <div className="stat-card">
//               <span>🕒</span>
//               <p>Активные заказы</p>
//               <strong>
//                 {orders.filter(
//                   (order) => !["Выдан", "Отменён"].includes(order.status)
//                 ).length}
//               </strong>
//             </div>
//             <div className="stat-card">
//               <span>💰</span>
//               <p>Сумма заказов</p>
//               <strong>{money(revenue)}</strong>
//             </div>
//           </div>

//           <section className="admin-section">
//             <div className="section-heading">
//               <div>
//                 <h2>Заказы клиентов</h2>
//                 <p>Меняй статус по мере выполнения.</p>
//               </div>
//             </div>
//             {orders.length === 0 ? (
//               <div className="empty-state compact">
//                 <span>📦</span>
//                 <h3>Пока нет заказов</h3>
//                 <p>Новые заказы появятся здесь после оформления.</p>
//               </div>
//             ) : (
//               <div className="admin-order-list">
//                 {orders.map((order) => (
//                   <article className="admin-order-card" key={order.id}>
//                     <div className="admin-order-top">
//                       <div>
//                         <strong>
//                           Заказ #{String(order.id).slice(-6)}
//                         </strong>
//                         <p>
//                           {order.name} · {order.date}
//                         </p>
//                       </div>
//                       <strong>{money(order.total)}</strong>
//                     </div>
//                     <p className="admin-order-items">
//                       {order.items
//                         .map((item) => `${item.name} × ${item.quantity}`)
//                         .join(", ")}
//                     </p>
//                     <div className="status-control">
//                       <label htmlFor={`status-${order.id}`}>
//                         Статус заказа
//                       </label>
//                       <select
//                         id={`status-${order.id}`}
//                         value={order.status}
//                         onChange={(event) =>
//                           updateStatus(order.id, event.target.value)
//                         }
//                       >
//                         {statuses.map((status) => (
//                           <option key={status}>{status}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             )}
//           </section>

//           <section className="admin-section" id="admin-product-form">
//             <div className="section-heading">
//               <div>
//                 <h2>
//                   {editingId !== null
//                     ? "Редактировать блюдо"
//                     : "Добавить блюдо"}
//                 </h2>
//                 <p>Изменения меню сохраняются в Supabase.</p>
//               </div>
//               {editingId !== null && (
//                 <button className="secondary-button" onClick={resetForm}>
//                   Отмена
//                 </button>
//               )}
//             </div>

//             <form className="admin-form" onSubmit={saveProduct}>
//               <div className="form-field">
//                 <label htmlFor="product-name">Название блюда</label>
//                 <input
//                   id="product-name"
//                   value={form.name}
//                   onChange={(event) =>
//                     setForm({ ...form, name: event.target.value })
//                   }
//                   placeholder="Например, Mega Doner"
//                   required
//                 />
//               </div>
//               <div className="form-field">
//                 <label htmlFor="product-category">Категория</label>
//                 <select
//                   id="product-category"
//                   value={form.category}
//                   onChange={(event) =>
//                     setForm({ ...form, category: event.target.value })
//                   }
//                 >
//                   {categories
//                     .filter((item) => item !== "Все")
//                     .map((item) => (
//                       <option key={item}>{item}</option>
//                     ))}
//                 </select>
//               </div>
//               <div className="form-field">
//                 <label htmlFor="product-price">Цена в сумах</label>
//                 <input
//                   id="product-price"
//                   type="number"
//                   min="1"
//                   value={form.price}
//                   onChange={(event) =>
//                     setForm({ ...form, price: event.target.value })
//                   }
//                   placeholder="30000"
//                   required
//                 />
//               </div>
//               <div className="form-field">
//                 <label htmlFor="product-weight">Вес / объём</label>
//                 <input
//                   id="product-weight"
//                   value={form.weight}
//                   onChange={(event) =>
//                     setForm({ ...form, weight: event.target.value })
//                   }
//                   placeholder="350 г"
//                 />
//               </div>
//               <div className="form-field form-field-wide">
//                 <label htmlFor="product-description">
//                   Описание и состав
//                 </label>
//                 <textarea
//                   id="product-description"
//                   value={form.description}
//                   onChange={(event) =>
//                     setForm({ ...form, description: event.target.value })
//                   }
//                   placeholder="Из чего приготовлено блюдо?"
//                   rows="3"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="primary-button"
//                 disabled={productSaving}
//               >
//                 {productSaving
//                   ? "Сохраняем..."
//                   : editingId !== null
//                     ? "Сохранить изменения"
//                     : "Добавить блюдо"}
//               </button>
//             </form>
//           </section>

//           <section className="admin-section">
//             <div className="section-heading">
//               <div>
//                 <h2>Управление меню</h2>
//                 <p>Всего блюд: {products.length}</p>
//               </div>
//             </div>
//             <div className="admin-product-list">
//               {products.map((product) => (
//                 <article className="admin-product-row" key={product.id}>
//                   <img
//                     src={product.image || imageByCategory[product.category]}
//                     alt={product.name}
//                   />
//                   <div className="admin-product-name">
//                     <strong>{product.name}</strong>
//                     <span>
//                       {product.category} · {product.weight}
//                     </span>
//                   </div>
//                   <strong className="admin-product-price">
//                     {money(product.price)}
//                   </strong>
//                   <div className="admin-product-actions">
//                     <button
//                       className="secondary-button"
//                       onClick={() => startEdit(product)}
//                     >
//                       Изменить
//                     </button>
//                     <button
//                       className="danger-button"
//                       onClick={() => deleteProduct(product.id)}
//                     >
//                       Удалить
//                     </button>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </section>
//         </main>
//       )}

//       <footer className="footer">
//         <div className="footer-brand">
//           <span>🍔</span>
//           <div>
//             <strong>DONER KEBAB</strong>
//             <small>B&M PROJECT</small>
//           </div>
//         </div>
//         <p>Вкусно. Просто. По-настоящему.</p>
//         <span className="footer-copy">© 2026 B&M</span>
//       </footer>

//       {selected && (
//         <div className="modal-overlay" onClick={() => setSelected(null)}>
//           <section
//             className="product-modal"
//             role="dialog"
//             aria-modal="true"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <button
//               className="modal-close"
//               onClick={() => setSelected(null)}
//             >
//               ×
//             </button>
//             <img
//               className="modal-image"
//               src={selected.image || imageByCategory[selected.category]}
//               alt={selected.name}
//             />
//             <div className="modal-content">
//               <span className="product-category">{selected.category}</span>
//               <h2>{selected.name}</h2>
//               <p className="modal-description">{selected.description}</p>
//               <div className="detail-block">
//                 <span className="detail-icon">🥙</span>
//                 <div>
//                   <strong>Состав блюда</strong>
//                   <p>{selected.ingredients || selected.description}</p>
//                 </div>
//               </div>
//               <div className="detail-block">
//                 <span className="detail-icon">⚖️</span>
//                 <div>
//                   <strong>Вес / объём</strong>
//                   <p>{selected.weight}</p>
//                 </div>
//               </div>
//               <p className="modal-note">
//                 Состав может отличаться в зависимости от приготовления.
//                 При аллергии уточни ингредиенты перед заказом.
//               </p>
//               <div className="modal-bottom">
//                 <div className="modal-price">
//                   <small>Цена</small>
//                   <strong>{money(selected.price)}</strong>
//                 </div>
//                 <button
//                   className="primary-button"
//                   onClick={() => {
//                     addToCart(selected);
//                     setSelected(null);
//                   }}
//                 >
//                   + Добавить в корзину
//                 </button>
//               </div>
//             </div>
//           </section>
//         </div>
//       )}

//       {toast && <div className="toast">{toast}</div>}
//     </div>
//   );
// }












import { useEffect, useMemo, useState } from "react";
import "./index.css";

import { supabase } from "./lib/supabaseClient";

import {
  getProducts,
  addProduct as createProduct,
  updateProduct as updateProductInDB,
  deleteProduct as deleteProductFromDB,
} from "./lib/productService";

import {
  createOrder,
  getOrders,
  updateOrderStatus,
} from "./lib/orderService";

import {
  loginAdmin,
  logoutAdmin,
  getCurrentUser,
} from "./lib/authService";

const ADMIN_ID = "e02ee6fc-75b7-4409-98c9-4645d4bfa0f1";

const initialProducts = [
  ["Doner Classic", "Донеры", 28000, "350 г", "Курица, лаваш, овощи и фирменный соус."],
  ["Doner Cheese", "Донеры", 32000, "380 г", "Курица, сыр, свежие овощи и сырный соус."],
  ["Spicy Doner", "Донеры", 30000, "360 г", "Курица, овощи и острый соус."],
  ["Classic Burger", "Бургеры", 30000, "320 г", "Булочка, котлета, салат и фирменный соус."],
  ["French Fries", "Закуски", 12000, "150 г", "Картофель фри с солью."],
  ["Cola", "Напитки", 8000, "500 мл", "Холодный газированный напиток."],
  ["Beef Doner", "Донеры", 35000, "400 г", "Говядина, овощи и чесночный соус."],
  ["Chicken Doner XL", "Донеры", 38000, "500 г", "Большой донер с дополнительной курицей."],
  ["BBQ Doner", "Донеры", 33000, "380 г", "Курица, овощи и соус барбекю."],
  ["Garlic Doner", "Донеры", 31000, "360 г", "Курица, овощи и чесночный соус."],
  ["Double Burger", "Бургеры", 42000, "430 г", "Две котлеты, сыр, овощи и соус."],
  ["Chicken Burger", "Бургеры", 27000, "300 г", "Куриная котлета, булочка и овощи."],
  ["Cheese Burger", "Бургеры", 34000, "340 г", "Котлета, сыр, огурцы и соус."],
  ["Crispy Chicken", "Основные блюда", 32000, "300 г", "Хрустящая курица со специями."],
  ["Chicken Wrap", "Основные блюда", 26000, "300 г", "Тортилья, курица, овощи и соус."],
  ["Meat Lavash", "Основные блюда", 29000, "350 г", "Лаваш с мясом, овощами и соусом."],
  ["Chicken Nuggets", "Основные блюда", 22000, "250 г", "Куриные наггетсы в панировке."],
  ["Meat Bowl", "Основные блюда", 36000, "400 г", "Мясо, рис, овощи и соус."],
  ["Chicken Rice", "Основные блюда", 28000, "400 г", "Рис, курица и ароматные специи."],
  ["Loaded Fries", "Основные блюда", 25000, "280 г", "Картофель фри с сырным соусом."],
  ["Grilled Chicken", "Основные блюда", 39000, "400 г", "Курица на гриле со специями."],
  ["Combo Classic", "Комбо", 42000, "600 г", "Бургер, картофель фри и напиток."],
  ["Doner Combo", "Комбо", 39000, "600 г", "Донер, картофель фри и напиток."],
  ["Double Burger Combo", "Комбо", 54000, "750 г", "Двойной бургер, картофель и напиток."],
  ["Friends Box", "Комбо", 85000, "1 кг", "Два бургера, картофель фри и соусы."],
  ["Chicken Combo", "Комбо", 37000, "550 г", "Курица, картофель фри и напиток."],
  ["Mini Combo", "Комбо", 25000, "400 г", "Мини-бургер, картофель фри и соус."],
  ["Family Box", "Комбо", 120000, "1.5 кг", "Бургеры, донеры, картофель и соусы."],
  ["Fanta", "Напитки", 8000, "500 мл", "Газированный напиток."],
  ["Sprite", "Напитки", 8000, "500 мл", "Лимонно-лаймовый газированный напиток."],
  ["Ice Tea", "Напитки", 10000, "500 мл", "Холодный чай."],
  ["Mineral Water", "Напитки", 5000, "500 мл", "Питьевая вода."],
  ["Onion Rings", "Закуски", 15000, "180 г", "Луковые кольца в панировке."],
  ["Cheese Sticks", "Закуски", 18000, "180 г", "Сырные палочки в панировке."],
  ["Garlic Bread", "Закуски", 14000, "160 г", "Хлеб с чесноком и зеленью."],
];

const imageByCategory = {
  Донеры:
    "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  Бургеры:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  "Основные блюда":
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
  Комбо:
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
  Закуски:
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  Напитки:
    "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=85",
};

const categories = [
  "Все",
  "Донеры",
  "Основные блюда",
  "Бургеры",
  "Комбо",
  "Закуски",
  "Напитки",
];

const statuses = ["Принят", "Готовится", "Готов", "Выдан", "Отменён"];

const defaultProducts = initialProducts.map((item, index) => ({
  id: index + 1,
  name: item[0],
  category: item[1],
  price: item[2],
  weight: item[3],
  description: item[4],
  ingredients: item[4],
  image: imageByCategory[item[1]],
  tag: index === 0 ? "Хит" : "",
}));

const money = (value) =>
  `${new Intl.NumberFormat("ru-RU").format(Number(value) || 0)} сум`;

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function formatProduct(product, index = 0) {
  return {
    ...product,
    ingredients: product.ingredients || product.description || "",
    image: product.image || imageByCategory[product.category] || "",
    tag: product.tag || (index === 0 ? "Хит" : ""),
    price: Number(product.price) || 0,
  };
}

function formatOrder(order) {
  return {
    ...order,
    name: order.customer_name || order.name || "",
    date: order.created_at
      ? new Date(order.created_at).toLocaleString("ru-RU")
      : order.date || "",
    items: Array.isArray(order.items) ? order.items : [],
    total: Number(order.total) || 0,
    status: order.status || "Принят",
  };
}

export default function App() {
  const [products, setProducts] = useState(() =>
    readStorage("doner-products", defaultProducts)
  );
  const [cart, setCart] = useState(() => readStorage("doner-cart", []));
  const [orders, setOrders] = useState(() => readStorage("doner-orders", []));
  const [customerName, setCustomerName] = useState(() =>
    readStorage("doner-name", "")
  );
  const [customerPhone, setCustomerPhone] = useState(() =>
    readStorage("doner-phone", "")
  );
  const [customerAddress, setCustomerAddress] = useState(() =>
    readStorage("doner-address", "")
  );

  const [page, setPage] = useState("menu");
  const [category, setCategory] = useState("Все");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [toast, setToast] = useState("");

  const [adminUser, setAdminUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [productSaving, setProductSaving] = useState(false);
  const [productsLoading, setProductsLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [statusSavingId, setStatusSavingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "Донеры",
    price: "",
    weight: "350 г",
    description: "",
  });

  useEffect(() => {
    let active = true;

    async function loadProducts() {
      try {
        const data = await getProducts();
        if (!active) return;

        setProducts(
          Array.isArray(data)
            ? data.map((product, index) => formatProduct(product, index))
            : []
        );
      } catch (error) {
        console.error("Ошибка загрузки меню:", error);
        if (active) {
          setToast(`Не удалось загрузить меню: ${error.message}`);
        }
      } finally {
        if (active) setProductsLoading(false);
      }
    }

    loadProducts();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function checkUser() {
      try {
        const user = await getCurrentUser();
        if (active) {
          setAdminUser(user?.id === ADMIN_ID ? user : null);
        }
      } catch (error) {
        console.error("Ошибка проверки пользователя:", error);
      }
    }

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!active) return;
      const user = session?.user;
      setAdminUser(user?.id === ADMIN_ID ? user : null);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("doner-products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("doner-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("doner-orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("doner-name", JSON.stringify(customerName));
  }, [customerName]);

  useEffect(() => {
    localStorage.setItem("doner-phone", JSON.stringify(customerPhone));
  }, [customerPhone]);

  useEffect(() => {
    localStorage.setItem("doner-address", JSON.stringify(customerAddress));
  }, [customerAddress]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const closeModal = (event) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, []);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const correctCategory =
        category === "Все" || product.category === category;
      const text =
        `${product.name} ${product.category} ${product.description}`.toLowerCase();

      return correctCategory && text.includes(query);
    });
  }, [products, category, search]);

  const cartCount = cart.reduce(
    (sum, item) => sum + (Number(item.quantity) || 0),
    0
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  );

  useEffect(() => {
    if (adminUser?.id !== ADMIN_ID) return;

    let active = true;

    async function loadOrders() {
      setOrdersLoading(true);

      try {
        const data = await getOrders();
        if (active) setOrders(Array.isArray(data) ? data.map(formatOrder) : []);
      } catch (error) {
        console.error("Ошибка загрузки заказов:", error);
        if (active) setToast(`Не удалось загрузить заказы: ${error.message}`);
      } finally {
        if (active) setOrdersLoading(false);
      }
    }

    loadOrders();

    return () => {
      active = false;
    };
  }, [adminUser]);

  const revenue = orders
    .filter((order) => order.status !== "Отменён")
    .reduce((sum, order) => sum + (Number(order.total) || 0), 0);

  async function handleAdminLogin(event) {
    event.preventDefault();
    if (authLoading) return;

    setAuthLoading(true);

    try {
      const data = await loginAdmin(loginEmail.trim(), loginPassword);
      const user = data?.user ?? data?.data?.user;

      if (!user || user.id !== ADMIN_ID) {
        await logoutAdmin();
        setAdminUser(null);
        setToast("У этого аккаунта нет прав администратора");
        return;
      }

      setAdminUser(user);
      setLoginPassword("");
      setToast("Вход выполнен!");
    } catch (error) {
      setToast(`Ошибка входа: ${error.message}`);
    } finally {
      setAuthLoading(false);
    }
  }

  async function handleAdminLogout() {
    try {
      await logoutAdmin();
      setAdminUser(null);
      setPage("menu");
      setToast("Ты вышел из аккаунта");
    } catch (error) {
      setToast(`Ошибка выхода: ${error.message}`);
    }
  }

  function addToCart(product) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);

      return found
        ? current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...current, { ...product, quantity: 1 }];
    });

    setToast(`${product.name} добавлен в корзину`);
  }

  function changeQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  async function checkout(event) {
    event.preventDefault();

    if (checkoutLoading) return;

    if (!cart.length) {
      setToast("Сначала добавь блюда в корзину");
      return;
    }

    if (!customerName.trim()) {
      setToast("Введи своё имя");
      return;
    }

    if (!customerPhone.trim()) {
      setToast("Введи номер телефона");
      return;
    }

    setCheckoutLoading(true);

    try {
      const orderData = {
        customer_name: customerName.trim(),
        phone: customerPhone.trim(),
        address: customerAddress.trim(),
        comment: "",
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          category: item.category,
          price: item.price,
          weight: item.weight,
          quantity: item.quantity,
        })),
        total,
        status: "Принят",
      };

      const savedOrder = await createOrder(orderData);
      const formattedOrder = formatOrder(savedOrder);

      setOrders((current) => [formattedOrder, ...current]);
      setCart([]);
      setPage("profile");
      setToast(`Заказ №${savedOrder.id} сохранён!`);
    } catch (error) {
      console.error("Ошибка оформления заказа:", error);
      setToast(`Не удалось оформить заказ: ${error.message}`);
    } finally {
      setCheckoutLoading(false);
    }
  }

  async function updateStatus(id, status) {
    if (adminUser?.id !== ADMIN_ID) {
      setToast("Нет доступа администратора");
      return;
    }

    setStatusSavingId(id);

    try {
      const updatedOrder = await updateOrderStatus(id, status);

      setOrders((current) =>
        current.map((order) =>
          order.id === id
            ? formatOrder({ ...order, ...updatedOrder })
            : order
        )
      );

      setToast("Статус сохранён в Supabase");
    } catch (error) {
      console.error("Ошибка обновления статуса:", error);
      setToast(`Не удалось изменить статус: ${error.message}`);
    } finally {
      setStatusSavingId(null);
    }
  }

  function resetForm() {
    setEditingId(null);
    setForm({
      name: "",
      category: "Донеры",
      price: "",
      weight: "350 г",
      description: "",
    });
  }

  function startEdit(product) {
    if (adminUser?.id !== ADMIN_ID) {
      setToast("Сначала войди как администратор");
      return;
    }

    setEditingId(product.id);
    setForm({
      name: product.name,
      category: product.category,
      price: String(product.price),
      weight: product.weight || "",
      description: product.description || "",
    });

    document.getElementById("admin-product-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  async function saveProduct(event) {
    event.preventDefault();

    if (adminUser?.id !== ADMIN_ID) {
      setToast("Нет доступа администратора");
      return;
    }

    const name = form.name.trim();
    const price = Number(form.price);

    if (!name || !Number.isFinite(price) || price <= 0) {
      setToast("Введи название и правильную цену");
      return;
    }

    const existing = products.find((product) => product.id === editingId);

    const payload = {
      name,
      category: form.category,
      price,
      weight: form.weight.trim() || "Не указан",
      description: form.description.trim() || "Описание не добавлено.",
      ingredients: form.description.trim() || "Состав уточняется.",
      image: existing?.image || imageByCategory[form.category] || "",
      tag: existing?.tag || (editingId === null ? "Новинка" : ""),
    };

    setProductSaving(true);

    try {
      if (editingId !== null) {
        const updated = await updateProductInDB(editingId, payload);
        const formatted = formatProduct(updated);

        setProducts((current) =>
          current.map((product) =>
            product.id === editingId ? formatted : product
          )
        );

        setSelected((current) =>
          current?.id === editingId ? formatted : current
        );

        setToast("Блюдо обновлено в Supabase");
      } else {
        const created = await createProduct(payload);
        setProducts((current) => [...current, formatProduct(created)]);
        setToast("Новое блюдо добавлено в Supabase");
      }

      resetForm();
    } catch (error) {
      console.error("Ошибка сохранения блюда:", error);
      setToast(`Не удалось сохранить: ${error.message}`);
    } finally {
      setProductSaving(false);
    }
  }

  async function deleteProduct(id) {
    if (adminUser?.id !== ADMIN_ID) {
      setToast("Нет доступа администратора");
      return;
    }

    const product = products.find((item) => item.id === id);
    if (!product) return;

    if (!window.confirm(`Удалить «${product.name}» из меню?`)) return;

    try {
      await deleteProductFromDB(id);

      setProducts((current) => current.filter((item) => item.id !== id));
      setCart((current) => current.filter((item) => item.id !== id));

      if (editingId === id) resetForm();
      if (selected?.id === id) setSelected(null);

      setToast("Блюдо удалено из Supabase");
    } catch (error) {
      console.error("Ошибка удаления блюда:", error);
      setToast(`Не удалось удалить: ${error.message}`);
    }
  }

  function repeatOrder(order) {
    setCart((current) => {
      const next = [...current];

      (order.items || []).forEach((ordered) => {
        const index = next.findIndex((item) => item.id === ordered.id);

        if (index >= 0) {
          next[index] = {
            ...next[index],
            quantity:
              (Number(next[index].quantity) || 0) +
              (Number(ordered.quantity) || 1),
          };
        } else {
          next.push({
            ...ordered,
            quantity: Number(ordered.quantity) || 1,
          });
        }
      });

      return next;
    });

    setPage("cart");
    setToast("Товары добавлены в корзину");
  }

  return (
    <div className="app">
      <div className="top-strip">
        <span>🔥 Вкус, который объединяет</span>
        <span>B&M PROJECT · DONER KEBAB</span>
      </div>

      <header className="header">
        <button className="brand" onClick={() => setPage("menu")}>
          <span className="brand-icon">🍔</span>
          <span>
            <strong>DONER KEBAB</strong>
            <small>B&M PROJECT</small>
          </span>
        </button>

        <nav className="nav">
          {[
            ["menu", "Меню"],
            ["cart", `Корзина${cartCount ? ` (${cartCount})` : ""}`],
            ["profile", "Профиль"],
            ["admin", "Админ-панель"],
          ].map(([key, label]) => (
            <button
              key={key}
              className={page === key ? "active" : ""}
              onClick={() => setPage(key)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {page === "menu" && (
        <>
          <section className="hero">
            <div className="hero-content">
              <span className="eyebrow">B&M KITCHEN</span>
              <h1>
                Твой голод.
                <br />
                <span>Наш ответ.</span>
              </h1>
              <p>
                Сочные донеры, бургеры и комбо из свежих ингредиентов.
                Выбирай любимое и наслаждайся каждым кусочком.
              </p>
              <button
                className="primary-button"
                onClick={() =>
                  document.getElementById("menu")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Смотреть меню ↘
              </button>
              <div className="hero-stats">
                <div>
                  <strong>{products.length}+</strong>
                  <span>позиций меню</span>
                </div>
                <div>
                  <strong>B&M</strong>
                  <span>вкус каждый день</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={imageByCategory.Донеры} alt="Донер" />
              <div className="hero-image-label">
                <span>🔥</span>
                <div>
                  <strong>Fresh & Tasty</strong>
                  <small>Приготовлено с душой</small>
                </div>
              </div>
            </div>
          </section>

          <main className="menu-section" id="menu">
            <div className="section-heading">
              <div>
                <span className="eyebrow">НАШЕ МЕНЮ</span>
                <h2>Найди свой вкус</h2>
                <p>Нажми на блюдо, чтобы посмотреть подробности.</p>
              </div>
              <span className="menu-count">
                {productsLoading
                  ? "Загрузка..."
                  : `${visibleProducts.length} товаров`}
              </span>
            </div>

            <div className="search-box">
              <span>⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Найти блюдо..."
              />
              {search && (
                <button onClick={() => setSearch("")}>×</button>
              )}
            </div>

            <div className="category-list">
              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "category active" : "category"}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article
                  key={product.id}
                  className="product-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelected(product)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") setSelected(product);
                  }}
                >
                  <div className="product-image-wrap">
                    <img
                      className="product-image"
                      src={product.image || imageByCategory[product.category]}
                      alt={product.name}
                      loading="lazy"
                    />
                    {product.tag && (
                      <span className="product-tag">{product.tag}</span>
                    )}
                    <button
                      className="quick-add"
                      onClick={(event) => {
                        event.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-bottom">
                      <div>
                        <strong className="product-price">
                          {money(product.price)}
                        </strong>
                        <span className="product-weight">{product.weight}</span>
                      </div>
                      <button
                        className="add-button"
                        onClick={(event) => {
                          event.stopPropagation();
                          addToCart(product);
                        }}
                      >
                        + Добавить
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {!productsLoading && visibleProducts.length === 0 && (
              <div className="empty-state">
                <span>🔎</span>
                <h3>Ничего не найдено</h3>
                <p>Попробуй другой запрос или категорию.</p>
                <button
                  className="primary-button"
                  onClick={() => {
                    setSearch("");
                    setCategory("Все");
                  }}
                >
                  Показать всё меню
                </button>
              </div>
            )}
          </main>

          <section className="promo-banner">
            <div>
              <span className="eyebrow">B&M SPECIAL</span>
              <h2>Хороший день начинается с хорошей еды.</h2>
              <p>Выбирай любимое блюдо — остальное за нами.</p>
            </div>
            <span className="promo-emoji">🍔</span>
          </section>
        </>
      )}

      {page === "cart" && (
        <main className="page-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ТВОЙ ВЫБОР</span>
              <h2>Корзина</h2>
              <p>Проверь заказ перед оформлением.</p>
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="empty-state">
              <span>🛒</span>
              <h3>Корзина пока пустая</h3>
              <p>Добавь что-нибудь вкусное из меню.</p>
              <button
                className="primary-button"
                onClick={() => setPage("menu")}
              >
                Перейти в меню
              </button>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img
                      src={item.image || imageByCategory[item.category]}
                      alt={item.name}
                    />
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>{item.weight}</p>
                      <strong>{money(item.price * item.quantity)}</strong>
                    </div>
                    <div className="quantity-control">
                      <button onClick={() => changeQuantity(item.id, -1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="summary-card">
                <h3>Ваш заказ</h3>
                <div className="summary-row">
                  <span>Товаров</span>
                  <span>{cartCount}</span>
                </div>
                <div className="summary-row">
                  <span>Доставка</span>
                  <span>Уточняется</span>
                </div>
                <div className="summary-total">
                  <span>Итого</span>
                  <strong>{money(total)}</strong>
                </div>

                <form className="checkout-form" onSubmit={checkout}>
                  <label htmlFor="customer-name">Ваше имя</label>
                  <input
                    id="customer-name"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    placeholder="Введите имя"
                    maxLength={100}
                    required
                  />

                  <label htmlFor="customer-phone">Номер телефона</label>
                  <input
                    id="customer-phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(event) => setCustomerPhone(event.target.value)}
                    placeholder="+998 90 123 45 67"
                    maxLength={30}
                    required
                  />

                  <label htmlFor="customer-address">Адрес доставки</label>
                  <input
                    id="customer-address"
                    value={customerAddress}
                    onChange={(event) =>
                      setCustomerAddress(event.target.value)
                    }
                    placeholder="Улица, дом, квартира"
                    maxLength={300}
                  />

                  <button
                    className="primary-button full-width"
                    type="submit"
                    disabled={checkoutLoading}
                  >
                    {checkoutLoading
                      ? "Оформляем заказ..."
                      : "Оформить заказ"}
                  </button>
                </form>

                <p className="checkout-note">
                  Онлайн-оплата пока не подключена.
                </p>
                <p className="checkout-note">
                  Демонстрационное оформление — без настоящей оплаты.
                </p>
              </aside>
            </div>
          )}
        </main>
      )}

      {page === "profile" && (
        <main className="page-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">B&M ACCOUNT</span>
              <h2>Твой профиль</h2>
              <p>Имя и история заказов.</p>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-avatar">👤</div>
            <div className="profile-details">
              <label htmlFor="profile-name">Твоё имя</label>
              <input
                id="profile-name"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder="Как тебя зовут?"
              />
              <p>Имя сохраняется на этом устройстве.</p>
            </div>
          </div>

          <div className="orders-section">
            <div className="section-heading">
              <div>
                <h2>История заказов</h2>
                <p>Твои оформленные заказы.</p>
              </div>
            </div>

            {orders.length === 0 ? (
              <div className="empty-state">
                <span>📦</span>
                <h3>Заказов пока нет</h3>
                <p>Оформленные заказы появятся здесь.</p>
                <button
                  className="primary-button"
                  onClick={() => setPage("menu")}
                >
                  Выбрать блюда
                </button>
              </div>
            ) : (
              <div className="orders-list">
                {orders.map((order) => (
                  <article className="order-card" key={order.id}>
                    <div className="order-header">
                      <div>
                        <span className="order-number">
                          Заказ #{String(order.id).slice(-6)}
                        </span>
                        <p>{order.date}</p>
                      </div>
                      <span className="order-status">{order.status}</span>
                    </div>
                    <div className="order-products">
                      {order.items.map((item, index) => (
                        <p key={`${order.id}-${item.id}-${index}`}>
                          {item.name} × {item.quantity}
                        </p>
                      ))}
                    </div>
                    <div className="order-footer">
                      <strong>{money(order.total)}</strong>
                      <button
                        className="add-button"
                        onClick={() => repeatOrder(order)}
                      >
                        Заказать снова
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </main>
      )}

      {page === "admin" && !adminUser && (
        <main className="page-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">B&M ADMIN</span>
              <h2>Вход администратора</h2>
              <p>Войди в свой аккаунт для управления меню.</p>
            </div>
          </div>

          <form className="admin-form" onSubmit={handleAdminLogin}>
            <div className="form-field">
              <label htmlFor="admin-email">Электронная почта</label>
              <input
                id="admin-email"
                type="email"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                autoComplete="username"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="admin-password">Пароль</label>
              <input
                id="admin-password"
                type="password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            <button
              className="primary-button"
              type="submit"
              disabled={authLoading}
            >
              {authLoading ? "Входим..." : "Войти"}
            </button>
          </form>
        </main>
      )}

      {page === "admin" && adminUser?.id === ADMIN_ID && (
        <main className="page-section admin-page">
          <div className="section-heading">
            <div>
              <span className="eyebrow">B&M CONTROL CENTER</span>
              <h2>Админ-панель</h2>
              <p>Управление меню и заказами.</p>
            </div>
            <button className="secondary-button" onClick={handleAdminLogout}>
              Выйти
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span>🍔</span>
              <p>Блюд в меню</p>
              <strong>{products.length}</strong>
            </div>
            <div className="stat-card">
              <span>📦</span>
              <p>Всего заказов</p>
              <strong>{orders.length}</strong>
            </div>
            <div className="stat-card">
              <span>🕒</span>
              <p>Активные заказы</p>
              <strong>
                {
                  orders.filter(
                    (order) =>
                      !["Выдан", "Отменён"].includes(order.status)
                  ).length
                }
              </strong>
            </div>
            <div className="stat-card">
              <span>💰</span>
              <p>Сумма заказов</p>
              <strong>{money(revenue)}</strong>
            </div>
          </div>

          <section className="admin-section">
            <div className="section-heading">
              <div>
                <h2>Заказы клиентов</h2>
                <p>Меняй статус по мере выполнения.</p>
              </div>
            </div>

            {ordersLoading ? (
              <div className="empty-state compact">
                <h3>Загружаем заказы...</h3>
              </div>
            ) : orders.length === 0 ? (
              <div className="empty-state compact">
                <span>📦</span>
                <h3>Пока нет заказов</h3>
                <p>Новые заказы появятся здесь после оформления.</p>
              </div>
            ) : (
              <div className="admin-order-list">
                {orders.map((order) => (
                  <article className="admin-order-card" key={order.id}>
                    <div className="admin-order-top">
                      <div>
                        <strong>
                          Заказ #{String(order.id).slice(-6)}
                        </strong>
                        <p>
                          {order.name} · {order.date}
                        </p>
                        {order.phone && <p>Телефон: {order.phone}</p>}
                        {order.address && <p>Адрес: {order.address}</p>}
                      </div>
                      <strong>{money(order.total)}</strong>
                    </div>

                    <p className="admin-order-items">
                      {order.items
                        .map((item) => `${item.name} × ${item.quantity}`)
                        .join(", ")}
                    </p>

                    <div className="status-control">
                      <label htmlFor={`status-${order.id}`}>
                        Статус заказа
                      </label>
                      <select
                        id={`status-${order.id}`}
                        value={order.status}
                        disabled={statusSavingId === order.id}
                        onChange={(event) =>
                          updateStatus(order.id, event.target.value)
                        }
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                      {statusSavingId === order.id && (
                        <small>Сохраняем...</small>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="admin-section" id="admin-product-form">
            <div className="section-heading">
              <div>
                <h2>
                  {editingId !== null
                    ? "Редактировать блюдо"
                    : "Добавить блюдо"}
                </h2>
                <p>Изменения меню сохраняются в Supabase.</p>
              </div>
              {editingId !== null && (
                <button className="secondary-button" onClick={resetForm}>
                  Отмена
                </button>
              )}
            </div>

            <form className="admin-form" onSubmit={saveProduct}>
              <div className="form-field">
                <label htmlFor="product-name">Название блюда</label>
                <input
                  id="product-name"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  placeholder="Например, Mega Doner"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="product-category">Категория</label>
                <select
                  id="product-category"
                  value={form.category}
                  onChange={(event) =>
                    setForm({ ...form, category: event.target.value })
                  }
                >
                  {categories
                    .filter((item) => item !== "Все")
                    .map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="product-price">Цена в сумах</label>
                <input
                  id="product-price"
                  type="number"
                  min="1"
                  step="1"
                  value={form.price}
                  onChange={(event) =>
                    setForm({ ...form, price: event.target.value })
                  }
                  placeholder="30000"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="product-weight">Вес / объём</label>
                <input
                  id="product-weight"
                  value={form.weight}
                  onChange={(event) =>
                    setForm({ ...form, weight: event.target.value })
                  }
                  placeholder="350 г"
                />
              </div>

              <div className="form-field form-field-wide">
                <label htmlFor="product-description">
                  Описание и состав
                </label>
                <textarea
                  id="product-description"
                  value={form.description}
                  onChange={(event) =>
                    setForm({ ...form, description: event.target.value })
                  }
                  placeholder="Из чего приготовлено блюдо?"
                  rows="3"
                />
              </div>

              <button
                type="submit"
                className="primary-button"
                disabled={productSaving}
              >
                {productSaving
                  ? "Сохраняем..."
                  : editingId !== null
                    ? "Сохранить изменения"
                    : "Добавить блюдо"}
              </button>
            </form>
          </section>

          <section className="admin-section">
            <div className="section-heading">
              <div>
                <h2>Управление меню</h2>
                <p>Всего блюд: {products.length}</p>
              </div>
            </div>

            <div className="admin-product-list">
              {products.map((product) => (
                <article className="admin-product-row" key={product.id}>
                  <img
                    src={product.image || imageByCategory[product.category]}
                    alt={product.name}
                  />
                  <div className="admin-product-name">
                    <strong>{product.name}</strong>
                    <span>
                      {product.category} · {product.weight}
                    </span>
                  </div>
                  <strong className="admin-product-price">
                    {money(product.price)}
                  </strong>
                  <div className="admin-product-actions">
                    <button
                      className="secondary-button"
                      onClick={() => startEdit(product)}
                    >
                      Изменить
                    </button>
                    <button
                      className="danger-button"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      <footer className="footer">
        <div className="footer-brand">
          <span>🍔</span>
          <div>
            <strong>DONER KEBAB</strong>
            <small>B&M PROJECT</small>
          </div>
        </div>
        <p>Вкусно. Просто. По-настоящему.</p>
        <span className="footer-copy">© 2026 B&M</span>
      </footer>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <section
            className="product-modal"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img
              className="modal-image"
              src={selected.image || imageByCategory[selected.category]}
              alt={selected.name}
            />
            <div className="modal-content">
              <span className="product-category">{selected.category}</span>
              <h2>{selected.name}</h2>
              <p className="modal-description">{selected.description}</p>

              <div className="detail-block">
                <span className="detail-icon">🥙</span>
                <div>
                  <strong>Состав блюда</strong>
                  <p>{selected.ingredients || selected.description}</p>
                </div>
              </div>

              <div className="detail-block">
                <span className="detail-icon">⚖️</span>
                <div>
                  <strong>Вес / объём</strong>
                  <p>{selected.weight}</p>
                </div>
              </div>

              <p className="modal-note">
                Состав может отличаться в зависимости от приготовления.
                При аллергии уточни ингредиенты перед заказом.
              </p>

              <div className="modal-bottom">
                <div className="modal-price">
                  <small>Цена</small>
                  <strong>{money(selected.price)}</strong>
                </div>
                <button
                  className="primary-button"
                  onClick={() => {
                    addToCart(selected);
                    setSelected(null);
                  }}
                >
                  + Добавить в корзину
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </div>
  );
}