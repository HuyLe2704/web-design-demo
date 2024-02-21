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

export const categoryItems = [
    {
        id: 1,
        name: 'MEN_CLOTHES',
        img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 2,
        name: 'MOBILE_GADGETS',
        img: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
    },
    {
        id: 3,
        name: 'CONSUMER_ELECTRONICS',
        img: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
    },
    {
        id: 4,
        name: 'COMPUTER_ACCESSORIES',
        img: 'https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
    },
    {
        id: 5,
        name: 'CAMERAS',
        img: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
        id: 6,
        name: 'WATCHES',
        img: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn',
    },
    {
        id: 7,
        name: 'MEN_SHOES',
        img: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
    },
    {
        id: 8,
        name: 'HOME_APPLIANCES',
        img: 'https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn',
    },
    {
        id: 9,
        name: 'SPORT_OUTDOOR',
        img: 'https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn',
    },
    {
        id: 10,
        name: 'AUTOMOTIVE',
        img: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn',
    },
    {
        id: 11,
        name: 'WOMEN_CLOTHES',
        img: 'https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
    },
    {
        id: 12,
        name: 'MOM_KIDS',
        img: 'https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn',
    },
    {
        id: 13,
        name: 'HOME_LIVING',
        img: 'https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn',
    },
    {
        id: 14,
        name: 'BEAUTY',
        img: 'https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn',
    },
    {
        id: 15,
        name: 'HEALTH',
        img: 'https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn',
    },
    {
        id: 16,
        name: 'WOMEN_SHOES',
        img: 'https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn',
    },
    {
        id: 17,
        name: 'WOMEN_BAGS',
        img: 'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
    },
    {
        id: 18,
        name: 'FASHION_ACCESSORIES',
        img: 'https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
    },
    {
        id: 19,
        name: 'GROCERY',
        img: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
    },
    {
        id: 20,
        name: 'BOOKS_STATIONERY',
        img: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
    },
    {
        id: 21,
        name: 'MEN_BAGS',
        img: 'https://down-vn.img.susercontent.com/file/18fd9d878ad946db2f1bf4e33760c86f_tn',
    },
    {
        id: 22,
        name: 'HOME_CARE',
        img: 'https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn',
    },
    {
        id: 23,
        name: 'KID_FASHION',
        img: 'https://down-vn.img.susercontent.com/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn',
    },
    {
        id: 24,
        name: 'TOYS',
        img: 'https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684_tn',
    },
    {
        id: 25,
        name: 'PETS',
        img: 'https://down-vn.img.susercontent.com/file/cdf21b1bf4bfff257efe29054ecea1ec_tn',
    },
    {
        id: 26,
        name: 'VOUCHERS_SERVICE',
        img: 'https://down-vn.img.susercontent.com/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn',
    },
    {
        id: 27,
        name: 'TOOLS_IMPROVEMENT',
        img: 'https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0_tn',
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
        sold: 'ĐÃ BÁN 18',
        discount: '42%',
        progress: 36,
    },
    {
        id: 3,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhu2lvhnpxmtfa_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-999a5b5a9ecda5f38d00ffd5a1a2d34d_tn',
        price: 9000,
        sold: 'ĐÃ BÁN 84',
        discount: '84%',
        progress: 58,
    },
    {
        id: 4,
        img: 'https://down-vn.img.susercontent.com/file/0fe8016baa9ce70455e5755dad9ff64c_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-83b59b9cd67f6ebf5ce1d92df2420193_tn',
        price: 5015,
        sold: 'ĐÃ BÁN 44',
        discount: '68%',
        progress: 46,
    },
    {
        id: 5,
        img: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-7m0me8kk7ljvd0_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-83b59b9cd67f6ebf5ce1d92df2420193_tn',
        price: 355000,
        sold: 'ĐÃ BÁN 122',
        discount: '40%',
        progress: 12,
    },
    {
        id: 6,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134601-7qukw-lkby63wpe6jg4a_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-999a5b5a9ecda5f38d00ffd5a1a2d34d_tn',
        price: 13190000,
        sold: 'ĐANG BÁN CHẠY',
        discount: '7%',
        progress: 20,
    },
    {
        id: 7,
        img: 'https://down-vn.img.susercontent.com/file/9ab593c1a755a396879b8ca24328a7e7_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 10950000,
        sold: 'ĐANG BÁN CHẠY',
        discount: '32%',
        progress: 5,
    },
    {
        id: 8,
        img: 'https://down-vn.img.susercontent.com/file/9ab593c1a755a396879b8ca24328a7e7_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 10790000,
        sold: 'ĐANG BÁN CHẠY',
        discount: '7%',
        progress: 5,
    },
    {
        id: 9,
        img: 'https://down-vn.img.susercontent.com/file/92d4cba014e3f23a9f9dd399c2cf84df_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 16799000,
        sold: 'ĐANG BÁN CHẠY',
        discount: '35%',
        progress: 5,
    },
    {
        id: 10,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn5s2fxu7ua9d_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 19890000,
        sold: 'ĐANG BÁN CHẠY',
        discount: '67%',
        progress: 5,
    },
    {
        id: 11,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll5aqv5ozi6g89_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 11900000,
        sold: 'ĐANG BÁN CHẠY',
        discount: '48%',
        progress: 5,
    },
    {
        id: 12,
        img: 'https://down-vn.img.susercontent.com/file/575e04c0e1d08b5f1b9f624a8d6b1419_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 19190000,
        sold: 'ĐANG BÁN CHẠY',
        discount: '34%',
        progress: 5,
    },
    {
        id: 13,
        img: 'https://down-vn.img.susercontent.com/file/e97b579f7fdfd7cc61089fe234404c22_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 11190000,
        sold: 'ĐANG BÁN CHẠY',
        discount: '38%',
        progress: 5,
    },
    {
        id: 14,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxdfg3rk63j0e_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 30490000,
        sold: 'CHỈ CÒN 5',
        discount: '5%',
        progress: 88,
    },
    {
        id: 15,
        img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nkerg1c_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 21890000,
        sold: 'ĐÃ BÁN 36',
        discount: '5%',
        progress: 24,
    },
    {
        id: 16,
        img: 'https://down-vn.img.susercontent.com/file/80386b46b38542ed0c673e130e72672f_tn',
        imgBot: 'https://down-vn.img.susercontent.com/file/vn-50009109-61e1a0db1962e3299fdfa77dd14bf161_tn',
        price: 10950000,
        sold: 'ĐANG BÁN CHẠY',
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

export const cartVouchers = [
    {
        id: 1,
        name: 'Mã vận chuyển',
        minPrice: 50000,
        maxDiscount: 50000,
        img: 'https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3',
        timeDiscount: 8,
        description: 'Dành riêng cho bạn',
        hidden: 0,
    },
    {
        id: 2,
        name: 'Mã vận chuyển',
        minPrice: 0,
        maxDiscount: 45000,
        img: 'https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3',
        timeDiscount: 12,
        description: 'Tối đa 20K/45K',
        hidden: 0,
    },
    {
        id: 3,
        name: 'Tất cả hình thức thanh toán',
        minPrice: 0,
        maxDiscount: 15000,
        img: 'https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3',
        timeDiscount: 12,
        description: 'Freeship hôm nay',
        hidden: 1,
    },
    {
        id: 4,
        name: 'FREESHIP XTRA',
        minPrice: 45000,
        maxDiscount: 300000,
        img: 'https://cf.shopee.vn/file/vn-11134004-7r98o-lnsgkt98pujx04',
        timeDiscount: 12,
        description: 'Đã dùng 89%, HSD: 21.02.2024',
        hidden: 1,
    },
    {
        id: 5,
        name: 'Tất cả hình thức thanh toán',
        minPrice: 0,
        maxDiscount: 15000,
        img: 'https://cf.shopee.vn/file/sg-11134004-23030-2tumducng5nv1a',
        timeDiscount: 'Đã dùng 62%, HSD: 24.02.2024',
        description: 'Freeship Thời Trang',
        hidden: 1,
    },
    {
        id: 6,
        name: 'Tất cả hình thức thanh toán',
        minPrice: 0,
        maxDiscount: 15000,
        img: 'https://cf.shopee.vn/file/sg-11134004-23030-w8j4x1rmg5nv37',
        timeDiscount: 'Đã dùng 78%, HSD: 24.02.2024',
        description: 'Freeship Làm Đẹp',
        hidden: 1,
    },
];
