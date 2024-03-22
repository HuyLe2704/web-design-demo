const { faBell, faCircleQuestion } = require('@fortawesome/free-regular-svg-icons');
const { faGlobe } = require('@fortawesome/free-solid-svg-icons');

// Navbar support data
export const supportNav = [
    {
        id: 1,
        name: 'Thông báo',
        icon: faBell,
        arrow: false,
    },
    {
        id: 2,
        name: 'Hỗ trợ',
        icon: faCircleQuestion,
        arrow: false,
    },
    {
        id: 3,
        name: 'Tiếng Việt',
        icon: faGlobe,
        arrow: true,
    },
];

export const removeVietnameseTones = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    // Some systems use đ for d
    str = str.replace(/\u0111/g, 'd');
    // Combining Diacritical Marks
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return str;
};

// suggest header data
export const suggestHeaderData = [
    {
        id: 1,
        name: 'Áo khoác 1k Freeship',
    },
    {
        id: 2,
        name: 'Săn Sale iPhone 14 Pro Max 1k',
    },
    {
        id: 3,
        name: 'Áo 0đ',
    },
    {
        id: 4,
        name: 'Vợt cầu lông',
    },
    {
        id: 5,
        name: 'Gấu Bông 1k',
    },
    {
        id: 6,
        name: 'Dép 0đ',
    },
    {
        id: 7,
        name: 'Váy 1k Freeship',
    },
    {
        id: 8,
        name: 'Set Đồ',
    },
    {
        id: 9,
        name: 'Pot Điện Tử Hút',
    },
    {
        id: 10,
        name: 'Hàng 0 đ',
    },
];

// promotional icons
export const promotionalIcons = [
    {
        id: 1,
        name: 'SALE_TIME',
        img: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        imgContent: 'https://down-vn.img.susercontent.com/file/vn-50009109-93e73ea2915932df52f7160f85b1d9a3',
    },
    {
        id: 2,
        name: 'FREE_ALL_SHIP',
        img: 'https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi',
        imgContent: 'https://down-vn.img.susercontent.com/file/vn-50009109-8f4d950a5e26d3ce72a5bda562dd9b0c',
    },
    {
        id: 3,
        name: 'VOUCHER_500K',
        img: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi',
        imgContent: 'https://down-vn.img.susercontent.com/file/vn-50009109-bc3f9350b9895e8479f613a69c82bdcc',
    },
    {
        id: 4,
        name: 'DISCOUNT_CODE',
        img: 'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi',
        imgContent: 'https://down-vn.img.susercontent.com/file/vn-50009109-9030bd159d3d04a7110052bac23ab942',
    },
    {
        id: 5,
        name: 'BRANDED_OUTLET_50',
        img: 'https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi',
        imgContent: 'https://down-vn.img.susercontent.com/file/vn-50009109-6817f3cf270fc7a03407f1ad4dca9916',
    },
    {
        id: 6,
        name: 'DATA_SERVICE',
        img: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi',
        imgContent: 'https://shopee.vn/digital-product/shop/_next/static/media/slide.vn.a7e9a923.gif',
    },
    {
        id: 7,
        name: 'INTERNATIONAL_PRODUCTS',
        img: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi',
        imgContent: 'https://down-vn.img.susercontent.com/file/vn-50009109-5dee412ecb5e00e43c81ffd7b71aab7c',
    },
    {
        id: 8,
        name: 'TRENDING_DISCOUNT_PRIME',
        img: 'https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi',
        imgContent: 'https://down-vn.img.susercontent.com/file/vn-50009109-8219f365c42524b1381aa6c2ec17080a',
    },
];

export const flashSaleCategoryItems = [
    {
        id: 1,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll0ueyuvq8crcb_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 19000,
        sold: 'ĐÃ BÁN 48',
        discount: '41%',
        progress: 30,
    },
    {
        id: 2,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-f785a8b777e812544fe191e3374d6307_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-7359f3e27b7acff9c49963b6bf5402c0_tn',
        price: 825000,
        sold: '18 SOLD',
        discount: '42%',
        progress: 36,
    },
    {
        id: 3,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhu2lvhnpxmtfa_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-999a5b5a9ecda5f38d00ffd5a1a2d34d_tn',
        price: 9000,
        sold: '84 SOLD',
        discount: '84%',
        progress: 58,
    },
    {
        id: 4,
        img: 'https://down-vn.img.susercontent.com/file/0fe8016baa9ce70455e5755dad9ff64c_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-83b59b9cd67f6ebf5ce1d92df2420193_tn',
        price: 5015,
        sold: '44 SOLD',
        discount: '68%',
        progress: 46,
    },
    {
        id: 5,
        img: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-7m0me8kk7ljvd0_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-83b59b9cd67f6ebf5ce1d92df2420193_tn',
        price: 355000,
        sold: '122 SOLD',
        discount: '40%',
        progress: 12,
    },
    {
        id: 6,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134601-7qukw-lkby63wpe6jg4a_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-999a5b5a9ecda5f38d00ffd5a1a2d34d_tn',
        price: 13190000,
        sold: 'SELLING_FAST',
        discount: '7%',
        progress: 20,
    },
    {
        id: 7,
        img: 'https://down-vn.img.susercontent.com/file/9ab593c1a755a396879b8ca24328a7e7_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 10950000,
        sold: 'SELLING_FAST',
        discount: '32%',
        progress: 5,
    },
    {
        id: 8,
        img: 'https://down-vn.img.susercontent.com/file/9ab593c1a755a396879b8ca24328a7e7_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 10790000,
        sold: 'SELLING_FAST',
        discount: '7%',
        progress: 5,
    },
    {
        id: 9,
        img: 'https://down-vn.img.susercontent.com/file/92d4cba014e3f23a9f9dd399c2cf84df_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 16799000,
        sold: 'SELLING_FAST',
        discount: '35%',
        progress: 5,
    },
    {
        id: 10,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn5s2fxu7ua9d_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 19890000,
        sold: 'SELLING_FAST',
        discount: '67%',
        progress: 5,
    },
    {
        id: 11,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll5aqv5ozi6g89_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 11900000,
        sold: 'SELLING_FAST',
        discount: '48%',
        progress: 5,
    },
    {
        id: 12,
        img: 'https://down-vn.img.susercontent.com/file/575e04c0e1d08b5f1b9f624a8d6b1419_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 19190000,
        sold: 'SELLING_FAST',
        discount: '34%',
        progress: 5,
    },
    {
        id: 13,
        img: 'https://down-vn.img.susercontent.com/file/e97b579f7fdfd7cc61089fe234404c22_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 11190000,
        sold: 'SELLING_FAST',
        discount: '38%',
        progress: 5,
    },
    {
        id: 14,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxdfg3rk63j0e_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 30490000,
        sold: 'ONLY 5',
        discount: '5%',
        progress: 88,
    },
    {
        id: 15,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nkerg1c_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 21890000,
        sold: '36 SOLD',
        discount: '5%',
        progress: 24,
    },
    {
        id: 16,
        img: 'https://down-vn.img.susercontent.com/file/80386b46b38542ed0c673e130e72672f_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 10950000,
        sold: 'SELLING_FAST',
        discount: '32%',
        progress: 5,
    },
];

export const mallItems = [
    {
        id: 1,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-cebfae17cd5979d823fb74ac79a922fa_xhdpi',
        desc: 'Mua là có quà',
    },
    {
        id: 2,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-06fb832ef52b45481158c26831cc459b_xhdpi',
        desc: 'Thời trang -50%',
    },
    {
        id: 3,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2_xhdpi',
        desc: 'Ưu đãi đến 50%',
    },
    {
        id: 4,
        img: 'https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d_xhdpi',
        desc: 'Deli siêu sale',
    },
    {
        id: 5,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-e8e0b80b57828bee61eb7e31c3d83765_xhdpi',
        desc: 'Giảm đến 50%',
    },
    {
        id: 6,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-079ef6ec5c89b6a436c4455226841cd6_xhdpi',
        desc: 'Mua là có quà',
    },
    {
        id: 7,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec_xhdpi',
        desc: 'Quà mọi đơn',
    },
    {
        id: 8,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-0be3ac214d6174200ed4f3096a0faa9a_xhdpi',
        desc: 'Voucher 100k',
    },
    {
        id: 9,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-87186ed98227adab30afbe0f244f49a4_xhdpi',
        desc: 'Giảm đến 50%',
    },
    {
        id: 10,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-855ec340d8a8291c824a3999789a0e56_xhdpi',
        desc: 'Giảm đến 40%',
    },
    {
        id: 11,
        img: 'https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b_xhdpi',
        desc: 'Mua 1 tặng 1',
    },
    {
        id: 12,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-b44bb96f2e16efe70badc41661365c8a_xhdpi',
        desc: 'Mua 1 tặng 1',
    },
    {
        id: 13,
        img: 'https://down-vn.img.susercontent.com/file/3b18e2ec25c1f5c2a0ee9c9499a3ca0b_xhdpi',
        desc: 'Giảm đến 40%',
    },
    {
        id: 14,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-7ce7d5800afb2b6c80a7242236ec7409_xhdpi',
        desc: 'Mua là có quà',
    },
    {
        id: 15,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-5d6b20755f4ef36cf1f73d431c819c9e_xhdpi',
        desc: 'Mua là có quà',
    },
    {
        id: 16,
        img: 'https://down-vn.img.susercontent.com/file/vn-50009109-5d6b20755f4ef36cf1f73d431c819c9e_xhdpi',
        desc: 'Mua là có quà',
    },
];

export const categoryCarousel = [
    {
        id: 1,
        img: 'https://cf.shopee.vn/file/856d76a2fb06e2fbf00a82d2e37151d9',
    },
    {
        id: 2,
        img: 'https://cf.shopee.vn/file/vn-50009109-5c0e988c624caa34c0dafdf0deb1aeca',
    },
    {
        id: 3,
        img: 'https://cf.shopee.vn/file/vn-50009109-05669f9c5b8337cf0cbb9f0fb3bb3eaa',
    },
    {
        id: 4,
        img: 'https://cf.shopee.vn/file/vn-50009109-b50fdcdc6b7ee189986683b349e2e2d3',
    },
    {
        id: 5,
        img: 'https://cf.shopee.vn/file/vn-50009109-8386f02c44995e777e78bd525176c28c',
    },
    {
        id: 6,
        img: 'https://cf.shopee.vn/file/vn-50009109-0bb3beef4e29a1cdf77235269046a28a',
    },
];
