const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/vehicle_store';

async function seed() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db();

        await db.collection('vehicles').deleteMany({});
        await db.collection('users').deleteMany({});

        const vehicles = [
            {
                name: "Mercedes-Benz C 200 Avantgarde",
                brand: "Mercedes-Benz",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 100,
                origin: "Lắp ráp",
                price: 1599000000,
                prepaid: 479000000,
                stock: 5,
                images: ["/images/xe1.jpg","/images/OIP (1).jpg"],
                description: "Mẫu sedan hạng sang cỡ nhỏ mang phong cách thiết kế thể thao đột phá, ngập tràn công nghệ thông minh hàng đầu phân khúc C-Class.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz C 300 AMG",
                brand: "Mercedes-Benz",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 50,
                origin: "Lắp ráp",
                price: 2099000000,
                prepaid: 629000000,
                stock: 4,
                images: ["/images/mercedes-c300-amg-giao-ngay-1-1024x768.jpg","/images/OIP (2).jpg"],
                description: "Đỉnh cao công nghệ của dòng C-Class thế hệ mới với trang bị AMG Line thể thao, hệ thống đèn pha Digital Light tối tân và động cơ EQ Boost mạnh mẽ.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz E 200 Exclusive",
                brand: "Mercedes-Benz",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 200,
                origin: "Lắp ráp",
                price: 2540000000,
                prepaid: 762000000,
                stock: 3,
                images: ["/images/xe3.jpg","/images/OIP (3).jpg"],
                description: "Mẫu sedan doanh nhân mang phong cách Exclusive sang trọng cổ điển, trang bị hiện đại hàng đầu phân khúc E-Class.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz E 300 AMG",
                brand: "Mercedes-Benz",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 150,
                origin: "Lắp ráp",
                price: 3209000000,
                prepaid: 962000000,
                stock: 3,
                images: ["/images/OIP (4).jpg","/images/OIP (5).jpg"],
                description: "Dòng sedan cao cấp biểu trưng cho sự năng động và thanh lịch doanh nhân, sở hữu gói thiết kế thể thao AMG ấn tượng.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz S 450",
                brand: "Mercedes-Benz",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 5039000000,
                prepaid: 1511000000,
                stock: 2,
                images: ["/images/OIP (6).jpg","/images/OIP (7).jpg"],
                description: "Đại diện ưu tú nhất của phân khúc xe sang cỡ lớn, định hình tương lai công nghệ ô tô và nâng tầm vị thế chủ nhân lên tầm cao mới.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Maybach S 450 4Matic",
                brand: "Mercedes-Maybach",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 8199000000,
                prepaid: 2459000000,
                stock: 2,
                images: ["/images/OIP (8).jpg","/images/OIP (9).jpg"],
                description: "Đỉnh cao tuyệt mỹ của thương hiệu siêu sang Mercedes-Maybach, sở hữu khoang thương gia đẳng cấp độc nhất vô nhị cùng công nghệ êm ái tối thượng.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Maybach S 680 4Matic",
                brand: "Mercedes-Maybach",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 15990000000,
                prepaid: 4797000000,
                stock: 1,
                images: ["/images/OIP (10).jpg","/images/OIP (11).jpg"],
                description: "Tuyệt tác nghệ thuật cao cấp nhất thế giới xe sang, sở hữu động cơ huyền thoại V12 BiTurbo uy mãnh cùng sự xa hoa bậc nhất ở mọi chi tiết thiết kế.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz GLB 200 AMG",
                brand: "Mercedes-Benz",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 2089000000,
                prepaid: 626000000,
                stock: 3,
                images: ["/images/OIP (12).jpg","/images/OIP (13).jpg"],
                description: "SUV 7 chỗ ngồi linh hoạt mang DNA thể thao AMG trẻ trung và cá tính, hoàn hảo cho những chuyến dã ngoại của gia đình hiện đại.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz GLC 200 4Matic",
                brand: "Mercedes-Benz",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 100,
                origin: "Lắp ráp",
                price: 2299000000,
                prepaid: 689000000,
                stock: 5,
                images: ["/images/OIP (14).jpg","/images/OIP (15).jpg"],
                description: "Mẫu SUV hạng sang thế hệ mới được ưa chuộng bậc nhất toàn cầu, trang bị động cơ EQ Boost tối tân cùng dẫn động 4 bánh toàn thời gian 4Matic linh hoạt.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz GLC 300 4Matic",
                brand: "Mercedes-Benz",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 50,
                origin: "Lắp ráp",
                price: 2799000000,
                prepaid: 839000000,
                stock: 4,
                images: ["/images/OIP (16).jpg","/images/OIP (17).jpg"],
                description: "Đại diện thể thao tối thượng của dòng GLC thế hệ mới, sở hữu gói thiết kế AMG Line đậm chất thể thao cùng khả năng vượt địa hình xuất sắc.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz GLE 450 4Matic",
                brand: "Mercedes-Benz",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 10,
                origin: "Nhập khẩu",
                price: 4619000000,
                prepaid: 1385000000,
                stock: 3,
                images: ["/images/OIP (18).jpg","/images/OIP.jpg"],
                description: "Mẫu SUV hạng sang cỡ trung uy nghi và vệ thế, sở hữu không gian 7 chỗ cao cấp cùng cỗ máy I6 tăng áp 3.0L hoạt động bền bỉ, êm ái.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz GLS 450 4Matic",
                brand: "Mercedes-Benz",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 5389000000,
                prepaid: 1616000000,
                stock: 2,
                images: ["/images/xe1.jpg","/images/xe3.jpg"],
                description: "'S-Class của phân khúc SUV' - không gian 7 chỗ cỡ lớn thực thụ cho cả 3 hàng ghế cùng công nghệ và tiện nghi cao cấp vượt trội.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Maybach GLS 600 4Matic",
                brand: "Mercedes-Maybach",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 11619000000,
                prepaid: 3485000000,
                stock: 2,
                images: ["/images/OIP (1).jpg","/images/OIP (2).jpg"],
                description: "Định nghĩa mới về sự xa xỉ trong thế giới SUV siêu sang, trang bị khoang lái độc quyền hạng thương gia với tủ lạnh mini, bàn làm việc gấp gọn.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-AMG G 63",
                brand: "Mercedes-AMG",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 11750000000,
                prepaid: 3525000000,
                stock: 2,
                images: ["/images/OIP (3).jpg","/images/OIP (4).jpg"],
                description: "Ông vua địa hình SUV huyền thoại sở hữu thiết kế vuông vức cơ bắp vượt thời gian, kết hợp cùng khối động cơ V8 4.0L BiTurbo cực kỳ mạnh mẽ.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-EQ EQB 250",
                brand: "Mercedes-EQ",
                type: "SUV",
                fuel: "Điện",
                year: 2024,
                mileage: 50,
                origin: "Nhập khẩu",
                price: 2289000000,
                prepaid: 686000000,
                stock: 4,
                images: ["/images/OIP (5).jpg","/images/OIP (6).jpg"],
                description: "SUV thuần điện 7 chỗ nhỏ gọn năng động tiên phong vì tương lai xanh, vận hành thông minh và thân thiện tuyệt đối với môi trường.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-EQ EQS 450+",
                brand: "Mercedes-EQ",
                type: "Sedan",
                fuel: "Điện",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 4839000000,
                prepaid: 1451000000,
                stock: 2,
                images: ["/images/OIP (7).jpg","/images/OIP (8).jpg"],
                description: "Kiệt tác khí động học xe sedan thuần điện hạng sang, sở hữu màn hình Hyperscreen kỹ thuật số siêu lớn trải dài toàn bộ táp-lô.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-EQ EQS 500 4Matic SUV",
                brand: "Mercedes-EQ",
                type: "SUV",
                fuel: "Điện",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 4999000000,
                prepaid: 1499000000,
                stock: 3,
                images: ["/images/OIP (9).jpg","/images/OIP (10).jpg"],
                description: "SUV thuần điện 7 chỗ cỡ lớn đẳng cấp tương lai, mở ra chương mới đầy đột phá cho trải nghiệm di chuyển sang trọng bền vững.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-AMG GT 53 4Matic+ 4-Door",
                brand: "Mercedes-AMG",
                type: "Coupe",
                fuel: "Xăng",
                year: 2024,
                mileage: 10,
                origin: "Nhập khẩu",
                price: 6719000000,
                prepaid: 2015000000,
                stock: 2,
                images: ["/images/OIP (11).jpg","/images/OIP (12).jpg"],
                description: "Mẫu xe coupe thể thao 4 cửa sở hữu linh hồn xe đua tốc độ AMG thuần chất kết hợp hoàn hảo cùng sự tiện nghi lịch lãm hằng ngày.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-AMG SL 43",
                brand: "Mercedes-AMG",
                type: "Cabriolet",
                fuel: "Xăng",
                year: 2024,
                mileage: 5,
                origin: "Nhập khẩu",
                price: 6959000000,
                prepaid: 2087000000,
                stock: 2,
                images: ["/images/OIP (13).jpg","/images/OIP (14).jpg"],
                description: "Huyền thoại xe mui trần SL Roadster biểu tượng đầy kiêu hãnh của Mercedes-Benz đã trở lại với diện mạo thể thao quyến rũ không thể chối từ.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz V 250 AMG",
                brand: "Mercedes-Benz",
                type: "Van",
                fuel: "Xăng",
                year: 2024,
                mileage: 1000,
                origin: "Nhập khẩu",
                price: 3759000000,
                prepaid: 1127000000,
                stock: 4,
                images: ["/images/OIP (15).jpg","/images/OIP (16).jpg"],
                description: "Mẫu xe đa dụng MPV cao cấp hàng đầu với khoang thương gia 7 chỗ siêu rộng rãi cùng gói thiết kế thể thao AMG thời thượng.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz GLA 200",
                brand: "Mercedes-Benz",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 1869000000,
                prepaid: 560000000,
                stock: 4,
                images: ["/images/OIP (17).jpg", "/images/OIP (18).jpg"],
                description: "Mẫu SUV đô thị cỡ nhỏ phong cách thể thao thế hệ mới, trang bị động cơ tăng áp 1.3L mạnh mẽ và thiết kế hiện đại cuốn hút.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz GLB 200",
                brand: "Mercedes-Benz",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 50,
                origin: "Nhập khẩu",
                price: 2069000000,
                prepaid: 620000000,
                stock: 3,
                images: ["/images/OIP (19).jpg", "/images/OIP (20).jpg"],
                description: "Không gian 7 chỗ rộng rãi kết hợp thiết kế việt dã sang trọng vượt trội, mẫu xe gia đình đô thị hoàn hảo lý tưởng.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz E 180",
                brand: "Mercedes-Benz",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 100,
                origin: "Lắp ráp",
                price: 2159000000,
                prepaid: 647000000,
                stock: 3,
                images: ["/images/OIP (21).jpg", "/images/OIP (22).jpg"],
                description: "Mẫu sedan hạng sang cỡ trung E-Class với thiết kế khí động học tinh tế, tích hợp công nghệ an toàn và hỗ trợ người lái vượt trội.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Benz S 450 Luxury",
                brand: "Mercedes-Benz",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 5559000000,
                prepaid: 1667000000,
                stock: 2,
                images: ["/images/OIP (23).jpg", "/images/OIP (24).jpg"],
                description: "Đỉnh cao của sự sang trọng xa xỉ với trang bị ghế thương gia đệm đỡ bắp chân, âm thanh vòm Burmester 3D đỉnh cấp.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-AMG A 35 4Matic",
                brand: "Mercedes-AMG",
                type: "Sedan",
                fuel: "Xăng",
                year: 2024,
                mileage: 10,
                origin: "Nhập khẩu",
                price: 2429000000,
                prepaid: 728000000,
                stock: 2,
                images: ["/images/OIP (25).jpg", "/images/OIP (1).jpg"],
                description: "Mẫu sedan thể thao hiệu năng cao mang linh hồn xe đua AMG đích thực, kết hợp dẫn động 4 bánh toàn thời gian bám đường vượt trội.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-AMG CLA 45 S 4Matic+",
                brand: "Mercedes-AMG",
                type: "Coupe",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 4309000000,
                prepaid: 1292000000,
                stock: 1,
                images: ["/images/OIP (2).jpg", "/images/OIP (3).jpg"],
                description: "Khối động cơ 4 xi-lanh thương mại mạnh nhất thế giới sản sinh 421 mã lực, mang lại khả năng tăng tốc thể thao đầy phấn khích.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-AMG GLB 35 4Matic",
                brand: "Mercedes-AMG",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 20,
                origin: "Nhập khẩu",
                price: 2849000000,
                prepaid: 854000000,
                stock: 2,
                images: ["/images/OIP (4).jpg", "/images/OIP (5).jpg"],
                description: "SUV hiệu năng cao 7 chỗ năng động, kết hợp không gian thực dụng đa dụng và cỗ máy thể thao AMG tăng áp uy lực.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-Maybach GLS 480 4Matic",
                brand: "Mercedes-Maybach",
                type: "SUV",
                fuel: "Xăng",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 8679000000,
                prepaid: 2603000000,
                stock: 2,
                images: ["/images/OIP (6).jpg", "/images/OIP (7).jpg"],
                description: "Vẻ ngoài bệ thế quyền quý kết hợp khoang lái siêu sang thương gia Maybach tối thượng, êm ái tuyệt đối trên mọi cung đường.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-EQ EQA 250",
                brand: "Mercedes-EQ",
                type: "SUV",
                fuel: "Điện",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 1989000000,
                prepaid: 596000000,
                stock: 3,
                images: ["/images/OIP (8).jpg", "/images/OIP (9).jpg"],
                description: "SUV thuần điện cỡ nhỏ năng động thông minh, mở đầu xu thế giao thông xanh đô thị không khí thải thời thượng.",
                isActive: true,
                createdAt: new Date()
            },
            {
                name: "Mercedes-EQ EQE 500 4Matic SUV",
                brand: "Mercedes-EQ",
                type: "SUV",
                fuel: "Điện",
                year: 2024,
                mileage: 0,
                origin: "Nhập khẩu",
                price: 3999000000,
                prepaid: 1199000000,
                stock: 3,
                images: ["/images/OIP (10).jpg", "/images/OIP (11).jpg"],
                description: "Mẫu SUV điện cỡ trung sang trọng đỉnh cấp tương lai, tích hợp tính năng dẫn động 4 bánh toàn thời gian điện tử thông minh.",
                isActive: true,
                createdAt: new Date()
            }
        ];

        const vehiclesWithSpecs = vehicles.map(v => {
            let engine = "2.0L I4 Turbo";
            let transmission = "9G-TRONIC";
            let horsepower = 258;
            let torque = 400;

            if (v.name.includes("EQS 450+")) {
                engine = "Động cơ điện";
                transmission = "Hộp số đơn cấp";
                horsepower = 329;
                torque = 565;
            } else if (v.name.includes("EQS 500") || v.name.includes("EQE 500")) {
                engine = "Động cơ điện (Dual Motor)";
                transmission = "Hộp số đơn cấp";
                horsepower = 449;
                torque = 828;
            } else if (v.name.includes("EQB 250") || v.name.includes("EQA 250")) {
                engine = "Động cơ điện";
                transmission = "Hộp số đơn cấp";
                horsepower = 190;
                torque = 385;
            } else if (v.name.includes("C 200") || v.name.includes("GLA 200") || v.name.includes("GLB 200") || v.name.includes("E 180")) {
                engine = "1.5L I4 Turbo";
                horsepower = 204;
                torque = 300;
            } else if (v.name.includes("C 300") || v.name.includes("GLC 300") || v.name.includes("E 300") || v.name.includes("GLB 35") || v.name.includes("A 35")) {
                engine = "2.0L I4 Turbo";
                horsepower = 306;
                torque = 400;
            } else if (v.name.includes("CLA 45 S")) {
                engine = "2.0L I4 Turbo";
                horsepower = 421;
                torque = 500;
            } else if (v.name.includes("GLC 200")) {
                engine = "2.0L I4 Turbo";
                horsepower = 197;
                torque = 320;
            } else if (v.name.includes("S 450") || v.name.includes("GLE 450") || v.name.includes("GLS 450") || v.name.includes("GT 53") || v.name.includes("GLS 480")) {
                engine = "3.0L I6 Turbo";
                horsepower = 367;
                torque = 500;
            } else if (v.name.includes("S 680")) {
                engine = "6.0L V12 BiTurbo";
                horsepower = 612;
                torque = 900;
            } else if (v.name.includes("GLS 600") || v.name.includes("G 63")) {
                engine = "4.0L V8 BiTurbo";
                horsepower = 585;
                torque = 850;
            } else if (v.name.includes("SL 43")) {
                engine = "2.0L I4 Turbo (Electric Motor)";
                horsepower = 381;
                torque = 480;
            } else if (v.name.includes("V 250")) {
                engine = "2.0L I4 Turbo";
                horsepower = 211;
                torque = 350;
            }

            return {
                ...v,
                engine,
                transmission,
                specs: { horsepower, torque }
            };
        });

        await db.collection('vehicles').insertMany(vehiclesWithSpecs);

        await db.collection('users').deleteMany({});
        const customers = [
            { name: "Quản Trị Viên", email: "admin@luxury.com", password: "admin", role: "admin", createdAt: new Date() },
            { name: "Nguyễn Văn Hùng", email: "hung.nguyen@gmail.com", password: "password123", role: "customer", phone: "0912345678", createdAt: new Date() },
            { name: "Trần Thị Lan", email: "lan.tran@gmail.com", password: "password123", role: "customer", phone: "0922334455", createdAt: new Date() },
            { name: "Lê Minh Tuấn", email: "tuan.le@gmail.com", password: "password123", role: "customer", phone: "0933445566", createdAt: new Date() },
            { name: "Phạm Hồng Hạnh", email: "hanh.pham@gmail.com", password: "password123", role: "customer", phone: "0944556677", createdAt: new Date() },
            { name: "Hoàng Gia Bảo", email: "bao.hoang@gmail.com", password: "password123", role: "customer", phone: "0955667788", createdAt: new Date() },
            { name: "Đỗ Mạnh Cường", email: "cuong.do@gmail.com", password: "password123", role: "customer", phone: "0966778899", createdAt: new Date() },
            { name: "Bùi Tuyết Mai", email: "mai.bui@gmail.com", password: "password123", role: "customer", phone: "0977889900", createdAt: new Date() },
            { name: "Vũ Hải Đăng", email: "dang.vu@gmail.com", password: "password123", role: "customer", phone: "0988990011", createdAt: new Date() },
            { name: "Ngô Quốc Anh", email: "anh.ngo@gmail.com", password: "password123", role: "customer", phone: "0999001122", createdAt: new Date() },
            { name: "Lý Thu Thảo", email: "thao.ly@gmail.com", password: "password123", role: "customer", phone: "0900112233", createdAt: new Date() }
        ];

        await db.collection('users').insertMany(customers);

        // Tạo 20 đơn hàng mẫu
        const allVehicles = await db.collection('vehicles').find().toArray();
        const allCustomers = await db.collection('users').find({ role: "customer" }).toArray();
        
        const orders = [];
        for (let i = 0; i < 20; i++) {
            const randomVehicle = allVehicles[Math.floor(Math.random() * allVehicles.length)];
            const randomCustomer = allCustomers[Math.floor(Math.random() * allCustomers.length)];
            
            orders.push({
                customerEmail: randomCustomer.email,
                customerName: randomCustomer.name,
                vehicleId: randomVehicle._id,
                vehicleName: randomVehicle.name,
                depositAmount: randomVehicle.prepaid || 200000000,
                status: ["pending", "confirmed"][Math.floor(Math.random() * 2)],
                createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000))
            });
        }

        await db.collection('orders').deleteMany({});
        await db.collection('orders').insertMany(orders);

        // Tạo 10 lịch hẹn mẫu dựa trên xe Mercedes
        const bookings = [
            { name: "Nguyễn Văn Hùng", email: "hung.nguyen@gmail.com", phone: "0912345678", date: "2024-05-10", time: "09:00", vehicleName: "Mercedes-Benz GLC 200 4Matic", status: "pending", createdAt: new Date() },
            { name: "Trần Thị Lan", email: "lan.tran@gmail.com", phone: "0922334455", date: "2024-05-11", time: "14:30", vehicleName: "Mercedes-Benz C 200 Avantgarde", status: "confirmed", createdAt: new Date() },
            { name: "Lê Minh Tuấn", email: "tuan.le@gmail.com", phone: "0933445566", date: "2024-05-12", time: "10:00", vehicleName: "Mercedes-Benz S 450", status: "pending", createdAt: new Date() },
            { name: "Phạm Hồng Hạnh", email: "hanh.pham@gmail.com", phone: "0944556677", date: "2024-05-10", time: "16:00", vehicleName: "Mercedes-EQ EQS 450+", status: "pending", createdAt: new Date() },
            { name: "Hoàng Gia Bảo", email: "bao.hoang@gmail.com", phone: "0955667788", date: "2024-05-13", time: "08:30", vehicleName: "Mercedes-Benz E 300 AMG", status: "confirmed", createdAt: new Date() },
            { name: "Đỗ Mạnh Cường", email: "cuong.do@gmail.com", phone: "0966778899", date: "2024-05-11", time: "15:00", vehicleName: "Mercedes-Benz GLB 200 AMG", status: "pending", createdAt: new Date() },
            { name: "Bùi Tuyết Mai", email: "mai.bui@gmail.com", phone: "0977889900", date: "2024-05-12", time: "11:30", vehicleName: "Mercedes-Benz C 300 AMG", status: "pending", createdAt: new Date() },
            { name: "Vũ Hải Đăng", email: "dang.vu@gmail.com", phone: "0988990011", date: "2024-05-14", time: "09:30", vehicleName: "Mercedes-Maybach S 450 4Matic", status: "pending", createdAt: new Date() },
            { name: "Ngô Quốc Anh", email: "anh.ngo@gmail.com", phone: "0999001122", date: "2024-05-10", time: "13:00", vehicleName: "Mercedes-Benz GLS 450 4Matic", status: "confirmed", createdAt: new Date() },
            { name: "Lý Thu Thảo", email: "thao.ly@gmail.com", phone: "0900112233", date: "2024-05-11", time: "10:30", vehicleName: "Mercedes-AMG SL 43", status: "pending", createdAt: new Date() }
        ];

        await db.collection('bookings').deleteMany({});
        await db.collection('bookings').insertMany(bookings);

        console.log('Database successfully seeded with 30 authentic Mercedes-Benz sub-brands, random orders and mock bookings!');
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

seed();
