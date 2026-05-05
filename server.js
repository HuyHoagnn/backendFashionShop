const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi world from Express")
});
let categories = [
    {
        id: "c1",
        name: "Thời trang nam",
        slug: "thoi-trang-nam",
    },
    {
        id: "c2",
        name: "Thời trang nữ",
        slug: "thoi-trang-nu",
    },
    {
        id: "c3",
        name: "Thời trang trẻ em",
        slug: "thoi-trang-tre-em",
    },
];
let variants = [
  // ===== P1 =====
  { id: "v1", productId: "p1", size: "S", color: "Trắng", price: 179000, stock: 10 },
  { id: "v2", productId: "p1", size: "M", color: "Đen", price: 199000, stock: 12 },

  // ===== P2 =====
  { id: "v3", productId: "p2", size: "M", color: "Trắng", price: 259000, stock: 8 },
  { id: "v4", productId: "p2", size: "L", color: "Xanh", price: 279000, stock: 6 },

  // ===== P3 =====
  { id: "v5", productId: "p3", size: "30", color: "Xanh đậm", price: 499000, stock: 7 },
  { id: "v6", productId: "p3", size: "32", color: "Xanh nhạt", price: 519000, stock: 5 },

  // ===== P4 =====
  { id: "v7", productId: "p4", size: "M", color: "Xám", price: 379000, stock: 6 },
  { id: "v8", productId: "p4", size: "L", color: "Đen", price: 399000, stock: 4 },

  // ===== P5 =====
  { id: "v9", productId: "p5", size: "S", color: "Hồng", price: 189000, stock: 10 },
  { id: "v10", productId: "p5", size: "M", color: "Trắng", price: 199000, stock: 8 },

  // ===== P6 =====
  { id: "v11", productId: "p6", size: "S", color: "Đỏ", price: 349000, stock: 5 },
  { id: "v12", productId: "p6", size: "M", color: "Vàng", price: 369000, stock: 4 },

  // ===== P7 =====
  { id: "v13", productId: "p7", size: "M", color: "Trắng", price: 279000, stock: 6 },
  { id: "v14", productId: "p7", size: "L", color: "Be", price: 299000, stock: 5 },

  // ===== P8 =====
  { id: "v15", productId: "p8", size: "27", color: "Xanh", price: 459000, stock: 7 },
  { id: "v16", productId: "p8", size: "28", color: "Đen", price: 479000, stock: 6 },

  // ===== P9 =====
  { id: "v17", productId: "p9", size: "XS", color: "Vàng", price: 129000, stock: 10 },
  { id: "v18", productId: "p9", size: "S", color: "Xanh", price: 139000, stock: 9 },

  // ===== P10 =====
  { id: "v19", productId: "p10", size: "S", color: "Đỏ", price: 299000, stock: 6 },
  { id: "v20", productId: "p10", size: "M", color: "Xanh", price: 319000, stock: 5 },

  // ===== P11 =====
  { id: "v21", productId: "p11", size: "S", color: "Cam", price: 159000, stock: 8 },
  { id: "v22", productId: "p11", size: "M", color: "Xám", price: 169000, stock: 7 },

  // ===== P12 =====
  { id: "v23", productId: "p12", size: "S", color: "Hồng", price: 249000, stock: 6 },
  { id: "v24", productId: "p12", size: "M", color: "Tím", price: 269000, stock: 5 },
];
let products = [
  // ===== NAM =====
  {
    id: "p1",
    name: "Áo thun nam basic",
    slug: "ao-thun-nam-basic",
    description: "Áo thun nam chất liệu cotton 100%, mềm mại, thoáng mát, phù hợp mặc hàng ngày.",
    categoryId: "c1",
    thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: "p2",
    name: "Áo sơ mi nam",
    slug: "ao-so-mi-nam",
    description: "Áo sơ mi nam thiết kế lịch lãm, chất vải thoáng khí, phù hợp đi làm và dự tiệc.",
    categoryId: "c1",
    thumbnail: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
  },
  {
    id: "p3",
    name: "Quần jean nam",
    slug: "quan-jean-nam",
    description: "Quần jean nam form slim fit, co giãn nhẹ, dễ phối đồ.",
    categoryId: "c1",
    thumbnail: "https://images.unsplash.com/photo-1542272604-787c3835535d",
  },
  {
    id: "p4",
    name: "Áo hoodie nam",
    slug: "ao-hoodie-nam",
    description: "Áo hoodie nam chất nỉ dày dặn, giữ ấm tốt, phong cách trẻ trung.",
    categoryId: "c1",
    thumbnail: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },

  // ===== NỮ =====
  {
    id: "p5",
    name: "Áo thun nữ",
    slug: "ao-thun-nu",
    description: "Áo thun nữ form ôm nhẹ, chất cotton co giãn, dễ phối đồ.",
    categoryId: "c2",
    thumbnail: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: "p6",
    name: "Váy mùa hè",
    slug: "vay-mua-he",
    description: "Váy mùa hè thiết kế nhẹ nhàng, chất vải thoáng mát, phù hợp dạo phố.",
    categoryId: "c2",
    thumbnail: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },
  {
    id: "p7",
    name: "Áo sơ mi nữ",
    slug: "ao-so-mi-nu",
    description: "Áo sơ mi nữ thanh lịch, form rộng, dễ phối với quần hoặc chân váy.",
    categoryId: "c2",
    thumbnail: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
  },
  {
    id: "p8",
    name: "Quần jean nữ",
    slug: "quan-jean-nu",
    description: "Quần jean nữ form skinny, tôn dáng, chất liệu co giãn tốt.",
    categoryId: "c2",
    thumbnail: "https://images.unsplash.com/photo-1582552938357-32b906df40cb",
  },

  // ===== TRẺ EM =====
  {
    id: "p9",
    name: "Áo thun trẻ em",
    slug: "ao-thun-tre-em",
    description: "Áo thun trẻ em chất cotton mềm mại, an toàn cho da nhạy cảm.",
    categoryId: "c3",
    thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: "p10",
    name: "Áo khoác trẻ em",
    slug: "ao-khoac-tre-em",
    description: "Áo khoác trẻ em giữ ấm tốt, thiết kế dễ thương, phù hợp mùa lạnh.",
    categoryId: "c3",
    thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  },
  {
    id: "p11",
    name: "Quần short trẻ em",
    slug: "quan-short-tre-em",
    description: "Quần short trẻ em thoải mái, thoáng mát, phù hợp vận động.",
    categoryId: "c3",
    thumbnail: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
  {
    id: "p12",
    name: "Váy bé gái",
    slug: "vay-be-gai",
    description: "Váy bé gái thiết kế đáng yêu, chất liệu mềm mại, phù hợp đi chơi.",
    categoryId: "c3",
    thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
  },
];
// Lấy tất cả sản phẩm kèm biến thể và danh mục
app.get('/api/products', (req, res) => {
    const allProducts = products.map(product => {
        const category = categories.find(cat => cat.id === product.categoryId); 
        const productVariants = variants.filter(variant => variant.productId === product.id);
        return {
            ...product,
            category: category ? { id: category.id, name: category.name, slug: category.slug } : null,
            variants: productVariants.map(variant => ({
                id: variant.id,
                size: variant.size,
                color: variant.color,
                price: variant.price,
                stock: variant.stock,
            })),
        };
    });
    res.json(allProducts);
});
// Lấy chi tiết sản phẩm theo slug
app.get('/api/products/:slug', (req, res) => {
    const { slug } = req.params;
    const product = products.find(p => p.slug === slug);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    const category = categories.find(cat => cat.id === product.categoryId);
    const productVariants = variants.filter(variant => variant.productId === product.id);
    res.json({
        ...product,
        category: category ? { id: category.id, name: category.name, slug: category.slug } : null,
        variants: productVariants.map(variant => ({
            id: variant.id,
            size: variant.size,
            color: variant.color,
            price: variant.price,
            stock: variant.stock,
        })),
    });
});
// Sản phẩm liên quan theo slug sản phẩm có chứa variant
app.get('/api/productsrelated/:slug', (req, res) => { 
    const { slug } = req.params;
    const product = products.find(p => p.slug === slug);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    const category = categories.find(cat => cat.id === product.categoryId);
    const relatedProducts = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id);
    const relatedProductsWithVariants = relatedProducts.map(relProduct => {
        const relCategory = categories.find(cat => cat.id === relProduct.categoryId);
        const relVariants = variants.filter(variant => variant.productId === relProduct.id);
        return {
            ...relProduct,
            category: relCategory ? { id: relCategory.id, name: relCategory.name, slug: relCategory.slug } : null,
            variants: relVariants.map(variant => ({
                id: variant.id,
                size: variant.size,
                color: variant.color,
                price: variant.price,
                stock: variant.stock,
            })),
        };
    });
    res.json(relatedProductsWithVariants);
});
app.listen(port, () => {
    console.log(`Server listening at <http://localhost>:${port}`);

})