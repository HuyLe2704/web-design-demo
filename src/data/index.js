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

// Keywords data
export const keywords = [
    'áo sơ mi',
    'áo thun',
    'áo khoác',
    'áo hoodie',
    'áo len',
    'áo croptop',
    'áo tanktop',
    'áo ngực',
    'bàn làm việc',
    'balo',
    'bình nước',
    'bánh kẹo',
    'bàn chải',
    'bếp điện',
    'bút bi',
    'bột giặt',
    'cà phê',
    'cáp sạc',
    'camera',
    'cốc',
    'chén',
    'chăn',
    'chảo',
    'công cụ',
    'cơm rang đóng gói',
    'dép nữ',
    'dép',
    'dép nam',
    'dép lông',
    'dê',
    'đũa',
    'đĩa',
    'đường',
    'đá lạnh',
    'Gạo lứt ',
    'Giày búp bê nữ ',
    'Giày chạy bộ Nike Air Zoom Pegasus',
    'Giày thể thao Adidas Ultraboost',
    'iPad Pro ',
    'iPhone 13 Pro Max',
    'iPhone 12 Pro Max ',
    'Kem dưỡng da Laneige Water Bank ',
    'Kính râm Ray-Ban ',
    'Lego City',
    'Lều cắm trại',
    'Lò vi sóng Panasonic',
    'MacBook Air M1 ',
    'Máy ảnh Canon EOS',
    'Máy chạy bộ điện tử',
    'Máy đo huyết áp Omron',
    'Máy giặt LG Inverter',
    'Máy lọc không khí Xiaomi',
    'Máy pha cà phê Nespresso',
    'Máy tập thể dục đa năng',
    'Máy tiệt trùng bình sữa',
    'Máy xay cà phê điện',
    'Máy xay sinh tố Philips',
    'Nệm cao su tự nhiên',
    'Nước hoa Chanel No.5 ',
    'Ốp lưng điện thoại chống sốc',
    "Quần jeans Levi's ",
    'Quần vợt Wilson',
    'Quạt điều hòa không khí',
    'Robot hút bụi thông minh',
    "Sách 'Hành trình về phương Đông'",
    'Sách nấu ăn',
    'Samsung Galaxy S21',
    'Sổ tay Moleskine',
    'Son môi MAC',
    'Tai nghe không dây Apple AirPods',
    'Thức ăn cho mèo Whiskas',
    'Tivi Samsung 4K',
    'Túi xách Michael Kors',
    'Váy maxi họa tiết',
    'Vợt cầu lông Yonex',
    'Xe đạp trẻ em',
    'Xiaomi Redmi Note 10',
    'zippo',
    'zara',
    'zenbook',
    'zoom lens',
    'zucchini',
    'zebra toy',
    'zombie game',
    'zest soap',
    '1TB SSD',
    '12 Pro Max',
    '1st edition books',
    '100% cotton',
    '1 person tent',
    '10-speed blender',
    '1-year subscription',
    '1st birthday',
    '9 ball pool',
    '90s fashion',
    '9V battery',
    '9 inch tablet',
    '9 pocket binder',
    '90 degree HDMI',
    '9ft umbrella',
    '9-in-1 multi tool',
];

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

export const carouselItems = [
    {
        id: 1,
        img: 'https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi',
        alt: 'First slide',
    },
    {
        id: 2,
        img: 'https://cf.shopee.vn/file/vn-50009109-597672c6eadad7b28523819d116dcde3_xxhdpi',
        alt: 'Second slide',
    },
    {
        id: 3,
        img: 'https://cf.shopee.vn/file/vn-50009109-81d211996d8a6cd0872de79f7323e74e_xxhdpi',
        alt: 'Third slide',
    },
    {
        id: 4,
        img: 'https://cf.shopee.vn/file/vn-50009109-f0e89c72384e2da28826a2c26e2f2840_xxhdpi',
        alt: 'Fourth slide',
    },
    {
        id: 5,
        img: 'https://cf.shopee.vn/file/vn-50009109-0ac7d495b49e1cc324445c8ddf22b5ff_xxhdpi',
        alt: 'Fifth slide',
    },
    {
        id: 6,
        img: 'https://cf.shopee.vn/file/vn-50009109-980a8f4977b5c81796265311f2ec882a_xxhdpi',
        alt: 'Sisth slide',
    },
    {
        id: 7,
        img: 'https://cf.shopee.vn/file/vn-50009109-e4dd3d3d836cab20e1add9fae5c016c5_xxhdpi',
        alt: 'Seventh slide',
    },
    {
        id: 8,
        img: 'https://cf.shopee.vn/file/vn-50009109-aa5a26442094343f2249181b5b40d14d_xxhdpi',
        alt: 'Eighth slide',
    },
    {
        id: 9,
        img: 'https://cf.shopee.vn/file/vn-50009109-8e619b23b3e12c3df4f46a32d35f3dd3_xxhdpi',
        alt: 'Ninth slide',
    },
];

// promotional icons
export const promotionalIcons = [
    {
        id: 1,
        name: 'Khung Giờ Săn Sale',
        img: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
    },
    {
        id: 2,
        name: 'Miễn Phí Hết Ship',
        img: 'https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi',
    },
    {
        id: 3,
        name: 'Voucher Giảm Đến 500.000Đ',
        img: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi',
    },
    {
        id: 4,
        name: 'Mã Giảm Giá',
        img: 'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi',
    },
    {
        id: 5,
        name: 'Hàng Hiệu Outlet Giảm 50%',
        img: 'https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi',
    },
    {
        id: 6,
        name: 'Nạp thẻ, Dịch Vụ & Data',
        img: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi',
    },
    {
        id: 7,
        name: 'Hàng Quốc Tế',
        img: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi',
    },
    {
        id: 8,
        name: 'Bắt Trend - Giá Sốc',
        img: 'https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi',
    },
];

export const categoryItems = [
    {
        id: 1,
        name: 'Thời Trang Nam',
        img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 2,
        name: 'Điện Thoại & Phụ Kiện',
        img: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
    },
    {
        id: 3,
        name: 'Thiết Bị Điện Tử',
        img: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
    },
    {
        id: 4,
        name: 'Máy Tính & Laptop',
        img: 'https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
    },
    {
        id: 5,
        name: 'Máy Ảnh & Máy Quay Phim',
        img: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    },
    {
        id: 6,
        name: 'Đồng Hồ',
        img: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn',
    },
    {
        id: 7,
        name: 'Giày Dép Nam',
        img: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
    },
    {
        id: 8,
        name: 'Thiết Bị Điện Gia Dụng',
        img: 'https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn',
    },
    {
        id: 9,
        name: 'Thể Thao & Du Lịch',
        img: 'https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn',
    },
    {
        id: 10,
        name: 'Ô Tô & Xe Máy & Xe Đạp',
        img: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn',
    },
    {
        id: 11,
        name: 'Thời Trang Nữ',
        img: 'https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
    },
    {
        id: 12,
        name: 'Mẹ & Bé',
        img: 'https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn',
    },
    {
        id: 13,
        name: 'Nhà Cửa & Đời Sống',
        img: 'https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn',
    },
    {
        id: 14,
        name: 'Sắc Đẹp',
        img: 'https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn',
    },
    {
        id: 15,
        name: 'Sức Khoẻ',
        img: 'https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn',
    },
    {
        id: 16,
        name: 'Giày Dép Nữ',
        img: 'https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn',
    },
    {
        id: 17,
        name: 'Túi Ví Nữ',
        img: 'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
    },
    {
        id: 18,
        name: 'Phụ Kiện & Trang Sức Nữ',
        img: 'https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
    },
    {
        id: 19,
        name: 'Bách Hóa Online',
        img: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
    },
    {
        id: 20,
        name: 'Nhà Sách Online',
        img: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
    },
    {
        id: 21,
        name: 'Balo & Túi Ví Nam',
        img: 'https://down-vn.img.susercontent.com/file/18fd9d878ad946db2f1bf4e33760c86f_tn',
    },
    {
        id: 22,
        name: 'Giặt Giũ & Chăm Sóc Nhà Cửa',
        img: 'https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn',
    },
    {
        id: 23,
        name: 'Thời Trang Trẻ Em',
        img: 'https://down-vn.img.susercontent.com/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn',
    },
    {
        id: 24,
        name: 'Đồ chơi',
        img: 'https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684_tn',
    },
    {
        id: 25,
        name: 'Chăm Sóc Thú Cưng',
        img: 'https://down-vn.img.susercontent.com/file/cdf21b1bf4bfff257efe29054ecea1ec_tn',
    },
    {
        id: 26,
        name: 'Voucher & Dịch Vụ',
        img: 'https://down-vn.img.susercontent.com/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn',
    },
    {
        id: 27,
        name: 'Dụng cụ và thiết bị tiện ích',
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
