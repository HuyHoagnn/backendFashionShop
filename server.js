const jwt = require('jsonwebtoken');
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
    { id: "v2", productId: "p1", size: "M", color: "Trắng", price: 179000, stock: 10 },
    { id: "v3", productId: "p1", size: "S", color: "Đen", price: 199000, stock: 12 },
    { id: "v4", productId: "p1", size: "M", color: "Đen", price: 199000, stock: 12 },

    // ===== P2 =====
    { id: "v5", productId: "p2", size: "S", color: "Trắng", price: 259000, stock: 8 },
    { id: "v6", productId: "p2", size: "M", color: "Trắng", price: 259000, stock: 8 },
    { id: "v7", productId: "p2", size: "S", color: "Xanh", price: 279000, stock: 6 },
    { id: "v8", productId: "p2", size: "M", color: "Xanh", price: 279000, stock: 6 },

    // ===== P3 =====
    { id: "v9", productId: "p3", size: "30", color: "Xanh đậm", price: 499000, stock: 7 },
    { id: "v10", productId: "p3", size: "32", color: "Xanh đậm", price: 499000, stock: 5 },
    { id: "v11", productId: "p3", size: "30", color: "Xanh nhạt", price: 519000, stock: 7 },
    { id: "v12", productId: "p3", size: "32", color: "Xanh nhạt", price: 519000, stock: 5 },

    // ===== P4 =====
    { id: "v13", productId: "p4", size: "M", color: "Xám", price: 379000, stock: 6 },
    { id: "v14", productId: "p4", size: "L", color: "Xám", price: 379000, stock: 4 },
    { id: "v15", productId: "p4", size: "M", color: "Đen", price: 399000, stock: 6 },
    { id: "v16", productId: "p4", size: "L", color: "Đen", price: 399000, stock: 4 },

    // ===== P5 =====
    { id: "v17", productId: "p5", size: "S", color: "Hồng", price: 189000, stock: 10 },
    { id: "v18", productId: "p5", size: "M", color: "Hồng", price: 189000, stock: 8 },
    { id: "v19", productId: "p5", size: "S", color: "Trắng", price: 199000, stock: 10 },
    { id: "v20", productId: "p5", size: "M", color: "Trắng", price: 199000, stock: 8 },

    // ===== P6 =====
    { id: "v21", productId: "p6", size: "S", color: "Đỏ", price: 349000, stock: 5 },
    { id: "v22", productId: "p6", size: "M", color: "Đỏ", price: 349000, stock: 4 },
    { id: "v23", productId: "p6", size: "S", color: "Vàng", price: 369000, stock: 5 },
    { id: "v24", productId: "p6", size: "M", color: "Vàng", price: 369000, stock: 4 },

    // ===== P7 =====
    { id: "v25", productId: "p7", size: "M", color: "Trắng", price: 279000, stock: 6 },
    { id: "v26", productId: "p7", size: "L", color: "Trắng", price: 279000, stock: 5 },
    { id: "v27", productId: "p7", size: "M", color: "Be", price: 299000, stock: 6 },
    { id: "v28", productId: "p7", size: "L", color: "Be", price: 299000, stock: 5 },

    // ===== P8 =====
    { id: "v29", productId: "p8", size: "27", color: "Xanh", price: 459000, stock: 7 },
    { id: "v30", productId: "p8", size: "28", color: "Xanh", price: 459000, stock: 6 },
    { id: "v31", productId: "p8", size: "27", color: "Đen", price: 479000, stock: 7 },
    { id: "v32", productId: "p8", size: "28", color: "Đen", price: 479000, stock: 6 },

    // ===== P9 =====
    { id: "v33", productId: "p9", size: "XS", color: "Vàng", price: 129000, stock: 10 },
    { id: "v34", productId: "p9", size: "S", color: "Vàng", price: 129000, stock: 9 },
    { id: "v35", productId: "p9", size: "XS", color: "Xanh", price: 139000, stock: 10 },
    { id: "v36", productId: "p9", size: "S", color: "Xanh", price: 139000, stock: 9 },

    // ===== P10 =====
    { id: "v37", productId: "p10", size: "S", color: "Đỏ", price: 299000, stock: 6 },
    { id: "v38", productId: "p10", size: "M", color: "Đỏ", price: 299000, stock: 5 },
    { id: "v39", productId: "p10", size: "S", color: "Xanh", price: 319000, stock: 6 },
    { id: "v40", productId: "p10", size: "M", color: "Xanh", price: 319000, stock: 5 },

    // ===== P11 =====
    { id: "v41", productId: "p11", size: "S", color: "Cam", price: 159000, stock: 8 },
    { id: "v42", productId: "p11", size: "M", color: "Cam", price: 159000, stock: 7 },
    { id: "v43", productId: "p11", size: "S", color: "Xám", price: 169000, stock: 8 },
    { id: "v44", productId: "p11", size: "M", color: "Xám", price: 169000, stock: 7 },

    // ===== P12 =====
    { id: "v45", productId: "p12", size: "S", color: "Hồng", price: 249000, stock: 6 },
    { id: "v46", productId: "p12", size: "M", color: "Hồng", price: 249000, stock: 5 },
    { id: "v47", productId: "p12", size: "S", color: "Tím", price: 269000, stock: 6 },
    { id: "v48", productId: "p12", size: "M", color: "Tím", price: 269000, stock: 5 },
    // ===== P13 =====
    { id: "v25", productId: "p13", size: "M", color: "Trắng", price: 299000, stock: 8 },
    { id: "v26", productId: "p13", size: "L", color: "Trắng", price: 299000, stock: 8 },
    { id: "v27", productId: "p13", size: "M", color: "Đen", price: 319000, stock: 8 },
    { id: "v28", productId: "p13", size: "L", color: "Đen", price: 319000, stock: 8 },

    // ===== P14 =====
    { id: "v29", productId: "p14", size: "S", color: "Hồng", price: 459000, stock: 6 },
    { id: "v30", productId: "p14", size: "M", color: "Hồng", price: 459000, stock: 6 },
    { id: "v31", productId: "p14", size: "S", color: "Trắng", price: 479000, stock: 6 },
    { id: "v32", productId: "p14", size: "M", color: "Trắng", price: 479000, stock: 6 },

    // ===== P15 =====
    { id: "v33", productId: "p15", size: "XS", color: "Xanh", price: 199000, stock: 10 },
    { id: "v34", productId: "p15", size: "S", color: "Xanh", price: 199000, stock: 10 },
    { id: "v35", productId: "p15", size: "XS", color: "Vàng", price: 209000, stock: 10 },
    { id: "v36", productId: "p15", size: "S", color: "Vàng", price: 209000, stock: 10 },
];
let products = [
    // ===== NAM =====
    {
        id: "p1",
        name: "Áo thun nam basic",
        hot : true,
        slug: "ao-thun-nam-basic",
        description: "Áo thun nam chất liệu cotton 100%, mềm mại.",
        categoryId: "c1",
        thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
        ]
    },

    {
        id: "p2",
        name: "Áo sơ mi nam",
        slug: "ao-so-mi-nam",
        description: "Áo sơ mi nam lịch lãm.",
        categoryId: "c1",
        thumbnail: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
        images: [
            "https://images.unsplash.com/photo-1603252109303-2751441dd157",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10"
        ]
    },

    {
        id: "p3",
        name: "Quần jean nam",
        slug: "quan-jean-nam",
        categoryId: "c1",
        thumbnail: "https://images.unsplash.com/photo-1542272604-787c3835535d",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a"
        ]
    },

    {
        id: "p4",
        name: "Áo hoodie nam",
        slug: "ao-hoodie-nam",
        categoryId: "c1",
        thumbnail: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
        ]
    },

    {
        id: "p5",
        name: "Áo Polo Classic Men",
        slug: "ao-polo-classic-men",
        categoryId: "c1",
        thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
        ]
    },

    // ===== NỮ =====
    {
        id: "p6",
        name: "Áo thun nữ",
        hot : true,
        slug: "ao-thun-nu",
        categoryId: "c2",
        thumbnail: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        images: [
            "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b"
        ]
    },

    {
        id: "p7",
        name: "Váy mùa hè",
        slug: "vay-mua-he",
        categoryId: "c2",
        thumbnail: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
        images: [
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
        ]
    },

    {
        id: "p8",
        name: "Áo sơ mi nữ",
        slug: "ao-so-mi-nu",
        categoryId: "c2",
        thumbnail: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
        images: [
            "https://images.unsplash.com/photo-1554568218-0f1715e72254",
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
        ]
    },

    {
        id: "p9",
        name: "Quần jean nữ",
        slug: "quan-jean-nu",
        categoryId: "c2",
        thumbnail: "https://images.unsplash.com/photo-1582552938357-32b906df40cb",
        images: [
            "https://images.unsplash.com/photo-1582552938357-32b906df40cb",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
        ]
    },

    {
        id: "p10",
        name: "Váy Midi Elegant",
        slug: "vay-midi-elegant",
        categoryId: "c2",
        thumbnail: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
        images: [
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b"
        ]
    },

    // ===== TRẺ EM =====
    {
        id: "p11",
        name: "Áo thun trẻ em",
        hot : true,
        slug: "ao-thun-tre-em",
        categoryId: "c3",
        thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        images: [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"
        ]
    },

    {
        id: "p12",
        name: "Áo khoác trẻ em",
        slug: "ao-khoac-tre-em",
        categoryId: "c3",
        thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
        images: [
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
            "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
        ]
    },

    {
        id: "p13",
        name: "Quần short trẻ em",
        slug: "quan-short-tre-em",
        categoryId: "c3",
        thumbnail: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        images: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"
        ]
    },

    {
        id: "p14",
        name: "Váy bé gái",
        slug: "vay-be-gai",
        categoryId: "c3",
        thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
        images: [
            "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba"
        ]
    },

    {
        id: "p15",
        name: "Set Bé Trai Summer",
        hot : true,
        slug: "set-be-trai-summer",
        categoryId: "c3",
        thumbnail: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
        images: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ]
    }
];

let users = [
    {
        id: "1",
        name: "Nguyễn Văn A",
        email: "a@gmail.com",
        password: "123456",
        role: "customer"
    },
    {
        id: "2",
        name: "Nguyễn Văn B",
        email: "b@gmail.com",
        password: "123456",
        role: "admin"
    }
];
// Lấy tất cả user 
app.get('/api/users', (req, res) => {
    res.json(users);
});

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
// Chức năng đăng ký 
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email and password are required" });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = {
        id: String(users.length + 1),
        name,
        email,
        password,
        role: "customer"
    };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
});
// Chức năng đăng nhập
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email, role: user.role }, 'your_jwt_secret_key', { expiresIn: '1h' });
    res.json({ message: "Login successful", token });
});




app.listen(port, () => {
    console.log(`Server listening at <http://localhost>:${port}`);

})

