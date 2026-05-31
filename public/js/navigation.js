/**
 * Centralized Navigation and Footer for Mercedes-Benz Việt Nam
 */

// Translation Dictionaries
const pageTranslations = {
    en: {
        "Các mẫu xe": "Models",
        "Mua": "Purchase",
        "Dịch vụ": "Services",
        "Thương hiệu": "Brand",
        "Showroom": "Showrooms",
        "Đăng nhập": "Login",
        "QUẢN TRỊ": "ADMIN",
        "Chào": "Hello",
        "Tìm kiếm mẫu xe, dịch vụ...": "Search models, services...",
        "Gợi ý: M3, M4, X5, M8, Lái thử...": "Suggestions: M3, M4, X5, M8, Test drive...",
        "Không tìm thấy kết quả phù hợp cho": "No matching results found for",
        "Tất cả các dòng xe": "All Vehicles",
        "Các mẫu mới": "New Models",
        "Mẫu xe điện": "Electric Models",
        "Mẫu xe hybrid cắm sạc": "Plug-in Hybrid Models",
        "Sedans": "Sedans",
        "Xe địa hình / SUV": "Off-Road / SUVs",
        "Xe Coupé": "Coupés",
        "Cabriolet": "Cabriolets",
        "Xe đa dụng": "Vans",
        "Trải nghiệm & Mua hàng": "Experience & Purchase",
        "Xe mới": "New Cars",
        "Ưu đãi mới nhất": "Latest Offers",
        "Khối doanh nghiệp & khách hàng ưu tiên": "Corporate & Preferred Customers",
        "Xe đã qua sử dụng": "Certified Pre-Owned",
        "Bảng giá & Brochure": "Pricelist & Brochures",
        "Cấu hình xe": "Car Configurator",
        "Đặt lịch lái thử": "Book a Test Drive",
        "Đăng ký lái thử": "Book a Test Drive",
        "Phụ kiện kỹ thuật & bộ sưu tập": "Technical Accessories & Collection",
        "Đặt lịch hẹn dịch vụ trực tuyến": "Book a Service Appointment Online",
        "Ưu đãi Dịch vụ khách hàng": "Customer Service Offers",
        "Dịch vụ & Sửa chữa": "Service & Repair",
        "Dịch vụ hỗ trợ & cứu hộ 24h": "24h Roadside Assistance & Rescue",
        "Bảo hiểm & Bảo hành": "Insurance & Warranty",
        "Hướng dẫn sử dụng xe điện tử": "Electronic User Manual",
        "Liên hệ & Chăm sóc khách hàng": "Contact & Customer Care",
        "Về chúng tôi": "About Us",
        "AMG - Hiệu năng cao": "AMG - High Performance",
        "MAYBACH - Sự sang trọng tối thượng": "MAYBACH - Ultimate Luxury",
        "Công nghệ dẫn đầu": "Leading Technologies",
        "Xu hướng xe chạy điện": "Electric Vehicle Trends",
        "Mua xe": "Buy Cars",
        "Tư vấn & Dịch vụ": "Consulting & Services",
        "Về Mercedes-Benz": "About Mercedes-Benz",
        "Mercedes-AMG": "Mercedes-AMG",
        "Mercedes-Maybach": "Mercedes-Maybach",
        "Tin tức & Sự kiện": "News & Events",
        "Showroom Việt Nam": "Showrooms Vietnam",
        "Địa chỉ: Khu đô thị Mới, Hà Đông, Hà Nội": "Address: New Urban Area, Ha Dong, Hanoi",
        "Hotline: 0961 40 8888": "Hotline: 0961 40 8888",
        "Thông tin pháp lý": "Legal Info",
        "Quyền riêng tư": "Privacy Policy",
        "Cài đặt Cookies": "Cookie Settings",
        "&copy; 2026 Mercedes-Benz Việt Nam. Tất cả quyền được bảo lưu.": "&copy; 2026 Mercedes-Benz Vietnam. All rights reserved.",
        "Mercedes-Benz Việt Nam | Trang chủ chính thức": "Mercedes-Benz Vietnam | Official Homepage",
        "Giới Thiệu | Mercedes-Benz Việt Nam": "About Us | Mercedes-Benz Vietnam",
        "Bộ Sưu Tập | Mercedes-Benz Việt Nam": "Collection | Mercedes-Benz Vietnam",
        "Chi Tiết Xe | Mercedes-Benz Việt Nam": "Vehicle Details | Mercedes-Benz Vietnam",
        "So Sánh Xe | Mercedes-Benz Việt Nam": "Compare Vehicles | Mercedes-Benz Vietnam",
        "Liên Hệ & Showroom | Mercedes-Benz Việt Nam": "Contact & Showrooms | Mercedes-Benz Vietnam",
        "Đặt Lịch Lái Thử | Mercedes-Benz Việt Nam": "Book a Test Drive | Mercedes-Benz Vietnam",
        "Đăng Nhập | Mercedes-Benz Việt Nam": "Login | Mercedes-Benz Vietnam",
        "Đăng Ký Tài Khoản | Mercedes-Benz Việt Nam": "Register | Mercedes-Benz Vietnam",
        "Thông Tin Tài Khoản | Mercedes-Benz Việt Nam": "Account Info | Mercedes-Benz Vietnam",
        "Thanh Toán | Mercedes-Benz Việt Nam": "Checkout | Mercedes-Benz Vietnam",
        "Chính Sách Bảo Hành & Bảo Dưỡng | Mercedes-Benz Việt Nam": "Warranty & Maintenance Policy | Mercedes-Benz Vietnam",
        "Mercedes-Benz Việt Nam · Sự Sang Trọng Đích Thực": "Mercedes-Benz Vietnam · True Luxury",
        "Chào mừng kỷ niệm<br>140 năm tiên phong.": "Celebrating 140 years<br>of pioneering heritage.",
        "Chào mừng kỷ niệm 140 năm tiên phong.": "Celebrating 140 years of pioneering heritage.",
        "Khám phá bộ sưu tập": "Explore the Collection",
        "Câu chuyện thương hiệu": "Brand Story",
        "Dòng xe nổi bật": "Featured Models",
        "Khám phá các mẫu xe": "Discover Our Models",
        "Tất cả": "All",
        "Điện": "Electric",
        "Xem tất cả các dòng xe": "View All Models",
        "Di sản & Công nghệ": "Heritage & Technology",
        "Vị thế<br>vượt thời gian": "Timeless<br>Prestige",
        "Vị thế vượt thời gian": "Timeless Prestige",
        "Khám phá di sản công nghệ và nghệ thuật chế tác đỉnh cao. Mỗi chiếc xe không chỉ là phương tiện di chuyển — đó là biểu tượng của sự sang trọng, đẳng cấp và tiên phong. Hãy để chúng tôi đồng hành cùng bạn.": "Discover our technological heritage and ultimate craftsmanship. Every vehicle is not just a mode of transport — it is a symbol of luxury, prestige, and pioneering spirit. Let us accompany you.",
        "Tìm hiểu thêm": "Learn More",
        "Trải nghiệm trực tiếp cảm giác lái xe tại showroom chúng tôi. Hoàn toàn miễn phí.": "Experience the driving sensation firsthand at our showroom. Completely free of charge.",
        "Bảo hành chính hãng": "Official Warranty",
        "Dịch vụ bảo dưỡng và bảo hành toàn diện với đội ngũ kỹ thuật viên được đào tạo bài bản.": "Comprehensive maintenance and warranty service with our highly trained technical team.",
        "Tư vấn cá nhân": "Personal Consultation",
        "Đội ngũ chuyên gia sẵn sàng tư vấn riêng, giúp bạn tìm chiếc xe phù hợp nhất.": "Our team of experts is ready to consult with you personally, helping you find the perfect vehicle.",
        "Tìm xe có sẵn": "Find Available Cars",
        "Liên hệ showroom": "Contact Showroom",
        "Tìm showroom": "Find a Showroom",
        "Tìm Showroom Mercedes-Benz": "Find a Mercedes-Benz Showroom",
        "Tìm kiếm đại lý ủy quyền chính thức của Mercedes-Benz gần nhất tại Việt Nam.": "Find the nearest authorized Mercedes-Benz dealership in Vietnam.",
        "Nhập tên showroom, địa chỉ hoặc thành phố để tìm kiếm...": "Enter showroom name, address, or city to search...",
        "Tất Cả": "All Regions",
        "Miền Bắc": "North",
        "Miền Trung": "Central",
        "Miền Nam": "South",
        "Xem Bản Đồ": "View Map",
        "Bản đồ showroom": "Showroom Map",
        "Không tìm thấy showroom nào phù hợp.": "No matching showrooms found.",
        "Liên Hệ Với Chúng Tôi": "Contact Us",
        "Đội ngũ tư vấn viên của Mercedes-Benz luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của Quý khách hàng.": "Our Mercedes-Benz consultant team is always ready to support and answer all of your questions.",
        "Showroom Trung Tâm": "Central Showroom",
        "Khu đô thị Mới, Hà Đông, Hà Nội": "New Urban Area, Ha Dong, Hanoi",
        "Hotline Hỗ Trợ": "Support Hotline",
        "Phục vụ 24/7": "Available 24/7",
        "Email Liên Hệ": "Contact Email",
        "Gửi Yêu Cầu Tư Vấn": "Submit Inquiry",
        "Họ và Tên": "Full Name",
        "Lời nhắn": "Message",
        "Tôi muốn tìm hiểu thông tin về dòng xe...": "I would like to request information about...",
        "Gửi Lời Nhắn": "Send Message",
        "Lịch Sử Liên Hệ": "Contact History",
        "Đang chờ phản hồi...": "Pending response...",
        "Mercedes-Benz phản hồi:": "Mercedes-Benz replied:",
        "Gửi ngày:": "Sent on:",
        "Chọn Xe": "Choose Vehicle",
        "-- Chọn dòng xe --": "-- Select model --",
        "Ngày Hẹn": "Appointment Date",
        "Khung Giờ": "Time Slot",
        "Ghi chú thêm": "Additional Notes",
        "Yêu cầu đặc biệt...": "Special requests...",
        "Xác Nhận Đăng Ký": "Confirm Registration",
        "Giới Thiệu": "About Us",
        "Câu Chuyện Thương Hiệu": "Brand Story",
        "Khởi nguồn từ di sản lâu đời của sự tiên phong, <strong>Mercedes-Benz</strong> luôn khẳng định vị thế dẫn đầu trong việc định hình tương lai ngành công nghiệp ô tô.": "Originating from a long heritage of pioneering, <strong>Mercedes-Benz</strong> always asserts its leading position in shaping the future of the automotive industry.",
        "Chúng tôi không chỉ kiến tạo những cỗ máy hoàn hảo kết hợp giữa công nghệ đỉnh cao và sự sang trọng tinh tế, mà còn mang đến trải nghiệm sống đẳng cấp vượt trội dành cho quý khách hàng sở hữu dòng xe ngôi sao ba cánh.": "We not only build perfect machines combining peak technology and refined luxury, but also offer an outstanding premium living experience for customers owning the three-pointed star vehicles.",
        "Mỗi sản phẩm Mercedes-Benz bàn giao đều mang sứ mệnh kiến tạo những chuẩn mực mới về thiết kế, sự an toàn và hiệu năng vận hành, đồng hành cùng khát vọng vươn tới sự hoàn mỹ của từng vị chủ nhân.": "Every delivered Mercedes-Benz vehicle carries the mission of creating new standards in design, safety, and performance, accompanying the aspiration for perfection of each owner.",
        "Xe bàn giao tại Việt Nam": "Vehicles Delivered in Vietnam",
        "Năm đồng hành cùng khách hàng": "Years Accompanying Customers",
        "So Sánh Xe": "Compare Vehicles",
        "So Sánh Thông Số Kỹ Thuật": "Compare Specifications",
        "Danh sách so sánh đang trống. Hãy quay lại": "The comparison list is empty. Go back to",
        "Sưu tập": "Collection",
        "để thêm xe.": "to add vehicles.",
        "Xóa danh sách so sánh": "Clear comparison list",
        "Sản phẩm": "Product",
        "Giá niêm yết": "List Price",
        "Loại xe": "Vehicle Type",
        "Nhiên liệu": "Fuel",
        "Động cơ": "Engine",
        "Công suất": "Power",
        "Mô-men xoắn": "Torque",
        "Bộ sưu tập": "Collection",
        "TẤT CẢ CÁC DÒNG XE": "All Models",
        "Khám phá bộ sưu tập xe Mercedes-Benz chính hãng tại Việt Nam.": "Explore the official Mercedes-Benz vehicle collection in Vietnam.",
        "Tìm kiếm mẫu xe...": "Search models...",
        "Tìm kiếm": "Search",
        "Bộ lọc": "Filters",
        "Giá bán": "Price",
        "Nguồn gốc": "Origin",
        "Xăng": "Petrol",
        "Hybrid": "Hybrid",
        "Nhập khẩu": "Imported",
        "Lắp ráp": "Assembled",
        "Trong nước": "Domestic",
        "Tự động": "Automatic",
        "Số sàn": "Manual",
        "Chi tiết": "Details",
        "Lái thử": "Test Drive",
        "Đang tải thông tin xe...": "Loading vehicle details...",
        "Không có mô tả cho dòng xe này.": "No description available for this vehicle.",
        "Giá tham khảo": "Reference Price",
        "Hộp số": "Transmission",
        "Đặt Lịch Lái Thử": "Book a Test Drive",
        "Đặt Cọc Ngay": "Deposit Now",
        "Thêm vào so sánh": "Add to Compare",
        "✓ Đã chọn so sánh (Xóa)": "✓ Selected to Compare (Remove)",
        "+ Thêm vào so sánh": "+ Add to Compare",
        "Đã xóa xe khỏi danh sách so sánh!": "Removed vehicle from compare list!",
        "Chỉ có thể so sánh tối đa 3 xe cùng lúc!": "Can only compare up to 3 vehicles at once!",
        "Đã thêm xe vào danh sách so sánh!": "Added vehicle to compare list!",
        "Khám phá thêm": "Discover More",
        "+ So sánh": "+ Compare",
        "✓ Đã chọn": "✓ Selected",
        "xe được tìm thấy": "vehicles found",
        "mẫu xe có sẵn": "models available",
        "Không tìm thấy xe phù hợp": "No matching vehicles found",
        "Không thể tải dữ liệu. Vui lòng thử lại.": "Unable to load data. Please try again.",
        "Sắp xếp mặc định": "Default Sorting",
        "Giá: Thấp đến cao": "Price: Low to High",
        "Giá: Cao đến thấp": "Price: High to Low",
        "Tên: A → Z": "Name: A → Z",
        "Bộ sưu tập xe": "Vehicle Collection",
        "Đang tải danh sách...": "Loading list...",
        "Tìm tên xe, hãng...": "Search vehicle, brand...",
        "Tất cả kiểu dáng": "All body styles",
        "Tất cả phân hiệu": "All divisions",
        "Phân hiệu": "Division",
        "Kiểu dáng": "Body style",
        "Giá tối đa (VNĐ)": "Max Price (VND)",
        "Ví dụ: 5000000000": "E.g., 5000000000",
        "Áp dụng": "Apply",
        "Từ": "From",
        "Email": "Email",
        "Mật khẩu": "Password",
        "Chưa có tài khoản?": "Don't have an account?",
        "Đăng ký ngay": "Register now",
        "Đăng Ký": "Register",
        "Tên của bạn": "Your Name",
        "Số điện thoại": "Phone Number",
        "Xác nhận mật khẩu": "Confirm Password",
        "Đã có tài khoản?": "Already have an account?",
        "Đăng nhập ngay": "Login now",
        "Tài Khoản": "Account",
        "Thông tin tài khoản": "Account Details",
        "Lịch sử đặt hàng": "Order History",
        "Đăng xuất": "Logout",
        "Cập Nhật Thông Tin": "Update Profile",
        "Cập nhật": "Update",
        "Mã đặt hàng": "Order Code",
        "Ngày đặt": "Order Date",
        "Trạng thái": "Status",
        "Tổng tiền": "Total",
        "Đang chờ duyệt": "Pending",
        "Đã duyệt": "Approved",
        "Đã giao": "Delivered",
        "Đã hủy": "Cancelled",
        "Đặt cọc": "Deposit",
        "Thông Tin Đặt Cọc": "Deposit Information",
        "Xe đặt cọc": "Reserved Vehicle",
        "Giá xe": "Vehicle Price",
        "Số tiền đặt cọc": "Deposit Amount",
        "Thông Tin Khách Hàng": "Customer Information",
        "Địa chỉ nhận xe": "Delivery Address",
        "Phương Thức Thanh Toán": "Payment Method",
        "Chuyển khoản ngân hàng": "Bank Transfer",
        "Thanh toán qua thẻ (Visa/Master)": "Card Payment (Visa/Master)",
        "Hoàn Tất Đặt Cọc": "Complete Deposit",
        "Chính Sách Bảo Hành &amp; Bảo Dưỡng": "Warranty & Maintenance Policy",
        "Chính Sách Bảo Hành & Bảo Dưỡng": "Warranty & Maintenance Policy",
        "Mui trần": "Convertible",
        "MPV": "MPV",
        "Mercedes-EQ": "Mercedes-EQ",
        "SINCE 1995": "SINCE 1995",
        "Mercedes-Benz Journal": "Mercedes-Benz Journal",
        "Tin Tức &amp; Thế Giới Xe": "News & World of Cars",
        "Tin Tức & Thế Giới Xe": "News & World of Cars",
        "Mercedes-Benz GLC thế hệ mới: Chuẩn mực SUV hạng sang tầm trung": "The new Mercedes-Benz GLC: The standard for luxury mid-size SUVs",
        "Định nghĩa lại sự xa hoa của kỷ nguyên số với màn hình vô cực MBUX Hyperscreen trải rộng và phạm vi di chuyển ấn tượng.": "Redefining digital luxury with the expansive MBUX Hyperscreen and impressive range.",
        "nguyentandung.040304@gmail.com": "nguyentandung.040304@gmail.com",
        "Tóm tắt đơn hàng": "Order Summary",
        "VietQR Chuẩn Napas247": "VietQR Standard Napas247",
        "Ngân hàng thụ hưởng:": "Beneficiary Bank:",
        "Vietcombank (VCB)": "Vietcombank (VCB)",
        "Sao chép": "Copy",
        "Tên người thụ hưởng:": "Beneficiary Name:",
        "MERCEDES BENZ VIETNAM": "MERCEDES BENZ VIETNAM",
        "Nội dung chuyển khoản:": "Transfer Reference:",
        "DATCOCXE": "DATCOCXE",
        "Xác nhận đã chuyển khoản": "Confirm Transfer",
        "Thanh toán sau (Về trang cá nhân)": "Pay Later (Back to Profile)",
        "Chúng tôi cam kết mang lại sự an tâm tuyệt đối trên mọi hành trình. Đội ngũ kỹ thuật viên chuyên nghiệp được đào tạo theo tiêu chuẩn Mercedes-Benz toàn cầu sẽ chăm sóc chiếc xe của Quý khách tốt nhất.": "We commit to absolute peace of mind on every journey. Our professional team of technicians, trained to global Mercedes-Benz standards, will provide the best care for your vehicle.",
        "Yêu Cầu Bảo Hành": "Warranty Claim",
        "Lịch Hẹn Bảo Dưỡng": "Maintenance Appointment",
        "Sáng (08:00 - 10:00)": "Morning (08:00 - 10:00)",
        "Sáng (10:00 - 12:00)": "Morning (10:00 - 12:00)",
        "Chiều (14:00 - 16:00)": "Afternoon (14:00 - 16:00)",
        "Chiều (16:00 - 18:00)": "Afternoon (16:00 - 18:00)",
        "Thông Tin Xe (Tên xe &amp; Biển số)": "Vehicle Info (Name & Plate Number)",
        "Thông Tin Xe (Tên xe & Biển số)": "Vehicle Info (Name & Plate Number)",
        "Linh kiện và phụ tùng thay thế chính hãng 100%.": "100% genuine replacement parts.",
        "Kiểm tra chẩn đoán lỗi chuyên sâu bằng thiết bị chính hãng.": "In-depth error diagnostics using genuine equipment.",
        "Liên hệ kỹ thuật viên hỗ trợ nhanh": "Contact technician for quick support",
        "Trang Cá Nhân | Mercedes-Benz Việt Nam": "My Profile | Mercedes-Benz Vietnam",
        "Lịch Sử Hoạt Động": "Activity History",
        "Cài Đặt Thông Báo": "Notification Settings",
        "Chưa có đơn hàng nào.": "No orders placed yet.",
        "Chưa có lịch hẹn nào.": "No appointments booked yet.",
        "Cài Đặt Hệ Thống": "System Settings",
        "Nhận Thông Báo Và Khuyến Mãi": "Receive Notifications & Promotions",
        "Hệ thống có thể gửi thông báo ưu đãi cho bạn. Hãy chọn các loại thông báo bạn muốn nhận:": "The system can send you promotion notifications. Please choose the notifications you wish to receive:",
        "Thông báo giảm giá": "Discount Notifications",
        "Khuyến mãi mới": "New Promotions",
        "Các gói quà tặng và ưu đãi đặc quyền dành cho bạn.": "Gift packages and exclusive offers tailored for you.",
        "Nhận tin ngay khi có xe Mercedes-Benz mới cập bến.": "Get news as soon as new Mercedes-Benz vehicles arrive.",
        "LƯU CÀI ĐẶT THÔNG BÁO": "SAVE NOTIFICATION SETTINGS",
        "GỬI ĐÁNH GIÁ": "SUBMIT REVIEW",
        "Tối thiểu 10 ký tự": "Minimum 10 characters",
        "Tối thiểu 1 số": "Minimum 1 number",
        "Tối thiểu 1 chữ cái viết hoa": "Minimum 1 uppercase letter",
        "Tối thiểu 1 ký tự đặc biệt": "Minimum 1 special character",
        "Tối thiểu 1 chữ cái thường": "Minimum 1 lowercase letter",
        "Không có ký tự nào không hợp lệ": "No invalid characters",
        "Tên *": "First Name *",
        "Họ *": "Last Name *",
        "Tùy chọn khu vực": "Region Options",
        "🌐 Việt Nam (Vietnam)": "🌐 Vietnam (Việt Nam)",
        "🌐 Quốc Tế (Global)": "🌐 Global (Quốc Tế)",
        "Tôi đồng ý với các điều khoản sau *": "I agree to the following terms *",
        "Điều khoản sử dụng Mercedes-Benz ID": "Mercedes-Benz ID Terms of Use",
        "Bạn có thể tìm thấy thông tin xử lý dữ liệu của dữ liệu Mercedes-Benz ID trong": "You can find data processing information for Mercedes-Benz ID in",
        "* Ô bắt buộc": "* Required field",
        "Mercedes-Benz ID đã có sẵn?": "Already have a Mercedes-Benz ID?",
        "Dashboard Nhân Viên | Mercedes-Benz Việt Nam": "Employee Dashboard | Mercedes-Benz Vietnam",
        "Dashboard Nhân Viên": "Employee Dashboard",
        "Về trang chủ": "Go to Homepage",
        "Quyền hạn nhân viên": "Employee Permissions",
        "Chào mừng nhân viên đến với hệ thống. Tài khoản của bạn đã được tạo và có thể đăng nhập bình thường.": "Welcome to the system. Your account has been created and you can log in normally.",
        "Nhân viên hiện tại có thể đăng nhập và sử dụng các chức năng chung của website. Nếu bạn muốn, tôi có thể mở rộng thêm bảng điều khiển nhân viên với các tính năng riêng như xử lý đơn hàng, quản lý lịch hẹn, hoặc phản hồi khách hàng.": "Employees can currently log in and use general website functions. If you wish, I can expand the employee dashboard with dedicated features such as order processing, appointment management, or customer feedback.",
        "Quản Lý Lịch Hẹn | Admin": "Manage Appointments | Admin",
        "MERCEDES-BENZ ADMIN": "MERCEDES-BENZ ADMIN",
        "Tổng Quan": "Overview",
        "Quản Lý Xe": "Manage Vehicles",
        "Thoát": "Exit",
        "Thoát Admin": "Exit Admin",
        "Lịch Hẹn Xem Xe": "Car Viewing Appointments",
        "Siêu xe quan tâm": "Vehicles of Interest",
        "Hành động": "Actions",
        "VỀ TRANG CHỦ (VIEW SITE)": "VIEW SITE",
        "Quản lý lịch hẹn": "Manage Appointments",
        "Tổng Quan Kinh Doanh": "Business Overview",
        "Xe Hiện Có": "Available Vehicles",
        "Doanh Thu Ngày": "Daily Revenue",
        "Doanh Thu Tháng": "Monthly Revenue",
        "Doanh Thu Năm": "Annual Revenue",
        "Biểu Đồ Doanh Thu (Tỷ VND)": "Revenue Chart (Billion VND)",
        "Hoạt động gần đây": "Recent Activity",
        "Quản Lý Đơn Hàng | Admin": "Manage Orders | Admin",
        "Quản lý đơn hàng": "Manage Orders",
        "Siêu xe": "Vehicle",
        "Số tiền cọc": "Deposit Amount",
        "Quản Lý Xe | Admin": "Manage Vehicles | Admin",
        "Quản lý kho xe": "Manage Vehicle Stock",
        "Danh Mục Siêu Xe": "Vehicle Catalog",
        "Chọn dòng xe (Hãng)": "Select Brand",
        "Hình ảnh siêu xe": "Vehicle Image",
        "LƯU LẠI": "SAVE",
        "HỦY BỎ": "CANCEL",
        "Hình ảnh": "Image",
        "Danh mục": "Category",
        "Quản Lý Khách Hàng | Admin": "Manage Customers | Admin",
        "Quản lý người dùng": "Manage Users",
        "Thêm nhân viên mới": "Add New Employee",
        "Vai trò:": "Role:",
        "Điền mẫu nhân viên": "Fill Employee Form",
        "Thêm người dùng": "Add User",
        "Vai trò": "Role",
        "Ngày tham gia": "Date Joined",
        "Đang tải...": "Loading..."
},
    de: {
        "Các mẫu xe": "Modelle",
        "Mua": "Kauf",
        "Dịch vụ": "Service",
        "Thương hiệu": "Marke",
        "Showroom": "Showrooms",
        "Đăng nhập": "Anmelden",
        "QUẢN TRỊ": "VERWALTUNG",
        "Chào": "Hallo",
        "Tìm kiếm mẫu xe, dịch vụ...": "Modelle, Services suchen...",
        "Gợi ý: M3, M4, X5, M8, Lái thử...": "Vorschläge: M3, M4, X5, M8, Probefahrt...",
        "Không tìm thấy kết quả phù hợp cho": "Keine passenden Ergebnisse gefunden für",
        "Tất cả các dòng xe": "Alle Fahrzeuge",
        "Các mẫu mới": "Neue Modelle",
        "Mẫu xe điện": "Elektromodelle",
        "Mẫu xe hybrid cắm sạc": "Plug-in-Hybridmodelle",
        "Sedans": "Limousinen",
        "Xe địa hình / SUV": "Geländewagen / SUVs",
        "Xe Coupé": "Coupés",
        "Cabriolet": "Cabriolets",
        "Xe đa dụng": "Vans",
        "Trải nghiệm & Mua hàng": "Erlebnis & Kauf",
        "Xe mới": "Neuwagen",
        "Ưu đãi mới nhất": "Aktuelle Angebote",
        "Khối doanh nghiệp & khách hàng ưu tiên": "Firmen- & Premiumkunden",
        "Xe đã qua sử dụng": "Gebrauchtwagen",
        "Bảng giá & Brochure": "Preisliste & Broschüren",
        "Cấu hình xe": "Konfigurator",
        "Đặt lịch lái thử": "Probefahrt vereinbaren",
        "Đăng ký lái thử": "Probefahrt vereinbaren",
        "Phụ kiện kỹ thuật & bộ sưu tập": "Zubehör & Kollektion",
        "Đặt lịch hẹn dịch vụ trực tuyến": "Online-Servicetermin vereinbaren",
        "Ưu đãi Dịch vụ khách hàng": "Kundenservice-Angebote",
        "Dịch vụ & Sửa chữa": "Service & Reparatur",
        "Dịch vụ hỗ trợ & cứu hộ 24h": "24h Pannenhilfe & Rettung",
        "Bảo hiểm & Bảo hành": "Versicherung & Garantie",
        "Hướng dẫn sử dụng xe điện tử": "Elektronische Betriebsanleitung",
        "Liên hệ & Chăm sóc khách hàng": "Kontakt & Kundenbetreuung",
        "Về chúng tôi": "Über uns",
        "AMG - Hiệu năng cao": "AMG - Hochleistung",
        "MAYBACH - Sự sang trọng tối thượng": "MAYBACH - Ultimativer Luxus",
        "Công nghệ dẫn đầu": "Führende Technologien",
        "Xu hướng xe chạy điện": "E-Mobilitätstrends",
        "Mua xe": "Fahrzeuge kaufen",
        "Tư vấn & Dịch vụ": "Beratung & Service",
        "Về Mercedes-Benz": "Über Mercedes-Benz",
        "Mercedes-AMG": "Mercedes-AMG",
        "Mercedes-Maybach": "Mercedes-Maybach",
        "Tin tức & Sự kiện": "News & Events",
        "Showroom Việt Nam": "Showrooms Vietnam",
        "Địa chỉ: Khu đô thị Mới, Hà Đông, Hà Nội": "Adresse: Neubaugebiet, Ha Dong, Hanoi",
        "Hotline: 0961 40 8888": "Hotline: 0961 40 8888",
        "Thông tin pháp lý": "Rechtliche Hinweise",
        "Quyền riêng tư": "Datenschutz",
        "Cài đặt Cookies": "Cookie-Einstellungen",
        "&copy; 2026 Mercedes-Benz Việt Nam. Tất cả quyền được bảo lưu.": "&copy; 2026 Mercedes-Benz Vietnam. Alle Rechte vorbehalten.",
        "Mercedes-Benz Việt Nam | Trang chủ chính thức": "Mercedes-Benz Vietnam | Offizielle Homepage",
        "Giới Thiệu | Mercedes-Benz Việt Nam": "Über uns | Mercedes-Benz Vietnam",
        "Bộ Sưu Tập | Mercedes-Benz Việt Nam": "Kollektion | Mercedes-Benz Vietnam",
        "Chi Tiết Xe | Mercedes-Benz Việt Nam": "Fahrzeug-Details | Mercedes-Benz Vietnam",
        "So Sánh Xe | Mercedes-Benz Việt Nam": "Fahrzeuge vergleichen | Mercedes-Benz Vietnam",
        "Liên Hệ & Showroom | Mercedes-Benz Việt Nam": "Kontakt & Showrooms | Mercedes-Benz Vietnam",
        "Đặt Lịch Lái Thử | Mercedes-Benz Việt Nam": "Probefahrt vereinbaren | Mercedes-Benz Vietnam",
        "Đăng Nhập | Mercedes-Benz Việt Nam": "Anmelden | Mercedes-Benz Vietnam",
        "Đăng Ký Tài Khoản | Mercedes-Benz Việt Nam": "Registrieren | Mercedes-Benz Vietnam",
        "Thông Tin Tài Khoản | Mercedes-Benz Việt Nam": "Konto-Info | Mercedes-Benz Vietnam",
        "Thanh Toán | Mercedes-Benz Việt Nam": "Kasse | Mercedes-Benz Vietnam",
        "Chính Sách Bảo Hành & Bảo Dưỡng | Mercedes-Benz Việt Nam": "Garantie- & Wartungsrichtlinie | Mercedes-Benz Vietnam",
        "Mercedes-Benz Việt Nam · Sự Sang Trọng Đích Thực": "Mercedes-Benz Vietnam · Wahre Luxus",
        "Chào mừng kỷ niệm<br>140 năm tiên phong.": "140 Jahre Pioniergeist<br>feiern.",
        "Chào mừng kỷ niệm 140 năm tiên phong.": "140 Jahre Pioniergeist feiern.",
        "Khám phá bộ sưu tập": "Kollektion erkunden",
        "Câu chuyện thương hiệu": "Markengeschichte",
        "Dòng xe nổi bật": "Hervorragende Modelle",
        "Khám phá các mẫu xe": "Entdecken Sie unsere Modelle",
        "Tất cả": "Alle",
        "Điện": "Elektrisch",
        "Xem tất cả các dòng xe": "Alle Modelle anzeigen",
        "Di sản & Công nghệ": "Erbe & Technologie",
        "Vị thế<br>vượt thời gian": "Zeitloses<br>Ansehen",
        "Vị thế vượt thời gian": "Zeitloses Ansehen",
        "Khám phá di sản công nghệ và nghệ thuật chế tác đỉnh cao. Mỗi chiếc xe không chỉ là phương tiện di chuyển — đó là biểu tượng của sự sang trọng, đẳng cấp và tiên phong. Hãy để chúng tôi đồng hành cùng bạn.": "Entdecken Sie unser technologisches Erbe und vollendete Handwerkskunst. Jedes Fahrzeug ist nicht nur ein Fortbewegungsmittel — es ist ein Symbol für Luxus, Prestige und Pioniergeist.",
        "Tìm hiểu thêm": "Mehr erfahren",
        "Trải nghiệm trực tiếp cảm giác lái xe tại showroom chúng tôi. Hoàn toàn miễn phí.": "Erleben Sie das Fahrgefühl hautnah in unserem Showroom. Völlig kostenlos.",
        "Bảo hành chính hãng": "Offizielle Garantie",
        "Dịch vụ bảo dưỡng và bảo hành toàn diện với đội ngũ kỹ thuật viên được đào tạo bài bản.": "Umfassender Wartungs- und Garantieservice mit unserem bestens geschulten Technikteam.",
        "Tư vấn cá nhân": "Persönliche Beratung",
        "Đội ngũ chuyên gia sẵn sàng tư vấn riêng, giúp bạn tìm chiếc xe phù hợp nhất.": "Unser Expertenteam berät Sie gerne persönlich und hilft Ihnen, das perfekte Fahrzeug zu finden.",
        "Tìm xe có sẵn": "Fahrzeuge finden",
        "Liên hệ showroom": "Showroom kontaktieren",
        "Tìm showroom": "Showroom finden",
        "Tìm Showroom Mercedes-Benz": "Mercedes-Benz Showroom finden",
        "Tìm kiếm đại lý ủy quyền chính thức của Mercedes-Benz gần nhất tại Việt Nam.": "Finden Sie den nächstgelegenen autorisierten Mercedes-Benz Händler in Vietnam.",
        "Nhập tên showroom, địa chỉ hoặc thành phố để tìm kiếm...": "Geben Sie den Namen, die Adresse oder die Stadt des Showrooms ein...",
        "Tất Cả": "Alle Regionen",
        "Miền Bắc": "Norden",
        "Miền Trung": "Mitte",
        "Miền Nam": "Süden",
        "Xem Bản Đồ": "Karte anzeigen",
        "Bản đồ showroom": "Showroom-Karte",
        "Không tìm thấy showroom nào phù hợp.": "Keine passenden Showrooms gefunden.",
        "Liên Hệ Với Chúng Tôi": "Kontaktieren Sie uns",
        "Đội ngũ tư vấn viên của Mercedes-Benz luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của Quý khách hàng.": "Unser Mercedes-Benz Beraterteam steht Ihnen jederzeit gerne zur Verfügung und beantwortet Ihre Fragen.",
        "Showroom Trung Tâm": "Zentraler Showroom",
        "Khu đô thị Mới, Hà Đông, Hà Nội": "Neubaugebiet, Ha Dong, Hanoi",
        "Hotline Hỗ Trợ": "Support-Hotline",
        "Phục vụ 24/7": "Rund um die Uhr verfügbar",
        "Email Liên Hệ": "Kontakt-E-Mail",
        "Gửi Yêu Cầu Tư Vấn": "Anfrage absenden",
        "Họ và Tên": "Vollständiger Name",
        "Lời nhắn": "Nachricht",
        "Tôi muốn tìm hiểu thông tin về dòng xe...": "Ich wünsche Informationen zu...",
        "Gửi Lời Nhắn": "Nachricht senden",
        "Lịch Sử Liên Hệ": "Kontaktverlauf",
        "Đang chờ phản hồi...": "Antwort ausstehend...",
        "Mercedes-Benz phản hồi:": "Mercedes-Benz antwortete:",
        "Gửi ngày:": "Gesendet am:",
        "Chọn Xe": "Fahrzeug Auswählen",
        "-- Chọn dòng xe --": "-- Modell auswählen --",
        "Ngày Hẹn": "Termin-Datum",
        "Khung Giờ": "Zeitfenster",
        "Ghi chú thêm": "Zusätzliche Notizen",
        "Yêu cầu đặc biệt...": "Besondere Wünsche...",
        "Xác Nhận Đăng Ký": "Anmeldung Bestätigen",
        "Giới Thiệu": "Über uns",
        "Câu Chuyện Thương Hiệu": "Markengeschichte",
        "Khởi nguồn từ di sản lâu đời của sự tiên phong, <strong>Mercedes-Benz</strong> luôn khẳng định vị thế dẫn đầu trong việc định hình tương lai ngành công nghiệp ô tô.": "Ausgehend von einer langen Tradition des Pioniergeists behauptet <strong>Mercedes-Benz</strong> stets seine führende Position bei der Gestaltung der Zukunft der Automobilindustrie.",
        "Chúng tôi không chỉ kiến tạo những cỗ máy hoàn hảo kết hợp giữa công nghệ đỉnh cao và sự sang trọng tinh tế, mà còn mang đến trải nghiệm sống đẳng cấp vượt trội dành cho quý khách hàng sở hữu dòng xe ngôi sao ba cánh.": "Wir bauen nicht nur perfekte Fahrzeuge, die Spitzentechnologie und raffinierten Luxus vereinen, sondern bieten auch ein herausragendes Premium-Lebenserlebnis für Kunden, die Fahrzeuge mit dem Dreizack-Stern besitzen.",
        "Mỗi sản phẩm Mercedes-Benz bàn giao đều mang sứ mệnh kiến tạo những chuẩn mực mới về thiết kế, sự an toàn và hiệu năng vận hành, đồng hành cùng khát vọng vươn tới sự hoàn mỹ của từng vị chủ nhân.": "Jedes ausgelieferte Mercedes-Benz Fahrzeug hat die Mission, neue Maßstäbe in Design, Sicherheit und Leistung zu setzen und das Streben nach Perfektion jedes Besitzers zu begleiten.",
        "Xe bàn giao tại Việt Nam": "Fahrzeuge in Vietnam ausgeliefert",
        "Năm đồng hành cùng khách hàng": "Jahre an der Seite unserer Kunden",
        "So Sánh Xe": "Fahrzeuge vergleichen",
        "So Sánh Thông Số Kỹ Thuật": "Spezifikationen vergleichen",
        "Danh sách so sánh đang trống. Hãy quay lại": "Die Vergleichsliste ist leer. Gehen Sie zurück zur",
        "Sưu tập": "Kollektion",
        "để thêm xe.": "um Fahrzeuge hinzuzufügen.",
        "Xóa danh sách so sánh": "Vergleichsliste löschen",
        "Sản phẩm": "Produkt",
        "Giá niêm yết": "Listenpreis",
        "Loại xe": "Fahrzeugtyp",
        "Nhiên liệu": "Kraftstoff",
        "Động cơ": "Motor",
        "Công suất": "Leistung",
        "Mô-men xoắn": "Drehmoment",
        "Bộ sưu tập": "Kollektion",
        "TẤT CẢ CÁC DÒNG XE": "Alle Modelle",
        "Khám phá bộ sưu tập xe Mercedes-Benz chính hãng tại Việt Nam.": "Entdecken Sie die offizielle Mercedes-Benz Fahrzeugkollektion in Vietnam.",
        "Tìm kiếm mẫu xe...": "Fahrzeuge suchen...",
        "Tìm kiếm": "Suchen",
        "Bộ lọc": "Filter",
        "Giá bán": "Preis",
        "Nguồn gốc": "Herkunft",
        "Xăng": "Benzin",
        "Hybrid": "Hybrid",
        "Nhập khẩu": "Importiert",
        "Lắp ráp": "Montiert",
        "Trong nước": "Inland",
        "Tự động": "Automatik",
        "Số sàn": "Schaltgetriebe",
        "Chi tiết": "Details",
        "Lái thử": "Probefahrt",
        "Đang tải thông tin xe...": "Fahrzeuginformationen werden geladen...",
        "Không có mô tả cho dòng xe này.": "Keine Beschreibung für dieses Fahrzeug verfügbar.",
        "Giá tham khảo": "Unverbindliche Preisempfehlung",
        "Hộp số": "Getriebe",
        "Đặt Lịch Lái Thử": "Probefahrt buchen",
        "Đặt Cọc Ngay": "Jetzt reservieren",
        "Thêm vào so sánh": "Vergleichen",
        "✓ Đã chọn so sánh (Xóa)": "✓ Zum Vergleich ausgewählt (Löschen)",
        "+ Thêm vào so sánh": "+ Zum Vergleich hinzufügen",
        "Đã xóa xe khỏi danh sách so sánh!": "Fahrzeug aus der Vergleichsliste gelöscht!",
        "Chỉ có thể so sánh tối đa 3 xe cùng lúc!": "Es können nur bis zu 3 Fahrzeuge gleichzeitig verglichen werden!",
        "Đã thêm xe vào danh sách so sánh!": "Fahrzeug zur Vergleichsliste hinzugefügt!",
        "Khám phá thêm": "Mehr entdecken",
        "+ So sánh": "+ Vergleichen",
        "✓ Đã chọn": "✓ Ausgewählt",
        "xe được tìm thấy": "Fahrzeuge gefunden",
        "mẫu xe có sẵn": "Modelle verfügbar",
        "Không tìm thấy xe phù hợp": "Keine passenden Fahrzeuge gefunden",
        "Không thể tải dữ liệu. Vui lòng thử lại.": "Daten konnten nicht geladen werden. Bitte versuchen Sie es erneut.",
        "Sắp xếp mặc định": "Standard-Sortierung",
        "Giá: Thấp đến cao": "Preis: Gering bis Hoch",
        "Giá: Cao đến thấp": "Preis: Hoch bis Gering",
        "Tên: A → Z": "Name: A → Z",
        "Bộ sưu tập xe": "Fahrzeugkollektion",
        "Đang tải danh sách...": "Liste wird geladen...",
        "Tìm tên xe, hãng...": "Fahrzeug, Marke suchen...",
        "Tất cả kiểu dáng": "Alle Karosserieformen",
        "Tất cả phân hiệu": "Alle Sparten",
        "Phân hiệu": "Sparte",
        "Kiểu dáng": "Karosserieform",
        "Giá tối đa (VNĐ)": "Höchstpreis (VND)",
        "Ví dụ: 5000000000": "Z.B., 5000000000",
        "Áp dụng": "Anwenden",
        "Từ": "Ab",
        "Email": "E-Mail",
        "Mật khẩu": "Passwort",
        "Chưa có tài khoản?": "Noch kein Konto?",
        "Đăng ký ngay": "Jetzt registrieren",
        "Đăng Ký": "Registrieren",
        "Tên của bạn": "Ihr Name",
        "Số điện thoại": "Telefonnummer",
        "Xác nhận mật khẩu": "Passwort bestätigen",
        "Đã có tài khoản?": "Bereits ein Konto?",
        "Đăng nhập ngay": "Jetzt anmelden",
        "Tài Khoản": "Konto",
        "Thông tin tài khoản": "Kontodetails",
        "Lịch sử đặt hàng": "Bestellverlauf",
        "Đăng xuất": "Abmelden",
        "Cập Nhật Thông Tin": "Profil aktualisieren",
        "Cập nhật": "Aktualisieren",
        "Mã đặt hàng": "Bestellcode",
        "Ngày đặt": "Bestelldatum",
        "Trạng thái": "Status",
        "Tổng tiền": "Total",
        "Đang chờ duyệt": "Ausstehend",
        "Đã duyệt": "Genehmigt",
        "Đã giao": "Geliefert",
        "Đã hủy": "Storniert",
        "Đặt cọc": "Anzahlung",
        "Thông Tin Đặt Cọc": "Anzahlungsinformationen",
        "Xe đặt cọc": "Reserviertes Fahrzeug",
        "Giá xe": "Fahrzeugpreis",
        "Số tiền đặt cọc": "Anzahlungsbetrag",
        "Thông Tin Khách Hàng": "Kundeninformationen",
        "Địa chỉ nhận xe": "Lieferadresse",
        "Phương Thức Thanh Toán": "Zahlungsmethode",
        "Chuyển khoản ngân hàng": "Banküberweisung",
        "Thanh toán qua thẻ (Visa/Master)": "Kartenzahlung (Visa/Master)",
        "Hoàn Tất Đặt Cọc": "Anzahlung abschließen",
        "Chính Sách Bảo Hành &amp; Bảo Dưỡng": "Garantie- & Wartungsrichtlinie",
        "Chính Sách Bảo Hành & Bảo Dưỡng": "Garantie- & Wartungsrichtlinie",
        "Mui trần": "Cabriolet",
        "MPV": "MPV",
        "Mercedes-EQ": "Mercedes-EQ",
        "SINCE 1995": "SEIT 1995",
        "Mercedes-Benz Journal": "Mercedes-Benz Journal",
        "Tin Tức &amp; Thế Giới Xe": "News & Autowelt",
        "Tin Tức & Thế Giới Xe": "News & Autowelt",
        "Mercedes-Benz GLC thế hệ mới: Chuẩn mực SUV hạng sang tầm trung": "Der neue Mercedes-Benz GLC: Der Maßstab für luxuriöse Mittelklasse-SUVs",
        "Định nghĩa lại sự xa hoa của kỷ nguyên số với màn hình vô cực MBUX Hyperscreen trải rộng và phạm vi di chuyển ấn tượng.": "Digitale Luxusklasse neu definiert mit dem weitläufigen MBUX Hyperscreen und beeindruckender Reichweite.",
        "nguyentandung.040304@gmail.com": "nguyentandung.040304@gmail.com",
        "Tóm tắt đơn hàng": "Bestellübersicht",
        "VietQR Chuẩn Napas247": "VietQR Standard Napas247",
        "Ngân hàng thụ hưởng:": "Begünstigte Bank:",
        "Vietcombank (VCB)": "Vietcombank (VCB)",
        "Sao chép": "Kopieren",
        "Tên người thụ hưởng:": "Begünstigter Name:",
        "MERCEDES BENZ VIETNAM": "MERCEDES BENZ VIETNAM",
        "Nội dung chuyển khoản:": "Verwendungszweck:",
        "DATCOCXE": "DATCOCXE",
        "Xác nhận đã chuyển khoản": "Zahlung bestätigen",
        "Thanh toán sau (Về trang cá nhân)": "Später bezahlen (Zum Profil)",
        "Chúng tôi cam kết mang lại sự an tâm tuyệt đối trên mọi hành trình. Đội ngũ kỹ thuật viên chuyên nghiệp được đào tạo theo tiêu chuẩn Mercedes-Benz toàn cầu sẽ chăm sóc chiếc xe của Quý khách tốt nhất.": "Wir garantieren absolute Sorgenfreiheit auf jeder Reise. Unser professionelles Team von Technikern, ausgebildet nach weltweiten Mercedes-Benz Standards, kümmert sich bestens um Ihr Fahrzeug.",
        "Yêu Cầu Bảo Hành": "Garantieanspruch",
        "Lịch Hẹn Bảo Dưỡng": "Wartungstermin",
        "Sáng (08:00 - 10:00)": "Vormittag (08:00 - 10:00)",
        "Sáng (10:00 - 12:00)": "Vormittag (10:00 - 12:00)",
        "Chiều (14:00 - 16:00)": "Nachmittag (14:00 - 16:00)",
        "Chiều (16:00 - 18:00)": "Nachmittag (16:00 - 18:00)",
        "Thông Tin Xe (Tên xe &amp; Biển số)": "Fahrzeuginfo (Name & Kennzeichen)",
        "Thông Tin Xe (Tên xe & Biển số)": "Fahrzeuginfo (Name & Kennzeichen)",
        "Linh kiện và phụ tùng thay thế chính hãng 100%.": "100% Original-Ersatzteile.",
        "Kiểm tra chẩn đoán lỗi chuyên sâu bằng thiết bị chính hãng.": "Tiefgehende Fehlerdiagnose mit Originalgeräten.",
        "Liên hệ kỹ thuật viên hỗ trợ nhanh": "Techniker für schnellen Support kontaktieren",
        "Trang Cá Nhân | Mercedes-Benz Việt Nam": "Mein Profil | Mercedes-Benz Vietnam",
        "Lịch Sử Hoạt Động": "Aktivitätsverlauf",
        "Cài Đặt Thông Báo": "Benachrichtigungseinstellungen",
        "Chưa có đơn hàng nào.": "Noch keine Bestellungen aufgegeben.",
        "Chưa có lịch hẹn nào.": "Noch keine Termine vereinbart.",
        "Cài Đặt Hệ Thống": "Systemeinstellungen",
        "Nhận Thông Báo Và Khuyến Mãi": "Benachrichtigungen & Aktionen erhalten",
        "Hệ thống có thể gửi thông báo ưu đãi cho bạn. Hãy chọn các loại thông báo bạn muốn nhận:": "Das System kann Ihnen Benachrichtigungen über Sonderaktionen senden. Bitte wählen Sie aus, welche Benachrichtigungen Sie erhalten möchten:",
        "Thông báo giảm giá": "Rabattbenachrichtigungen",
        "Khuyến mãi mới": "Neue Angebote",
        "Các gói quà tặng và ưu đãi đặc quyền dành cho bạn.": "Für Sie maßgeschneiderte Geschenkpakete und exklusive Angebote.",
        "Nhận tin ngay khi có xe Mercedes-Benz mới cập bến.": "Erhalten Sie Benachrichtigungen, sobald neue Mercedes-Benz Modelle eintreffen.",
        "LƯU CÀI ĐẶT THÔNG BÁO": "BENACHRICHTIGUNGSEINSTELLUNGEN SPEICHERN",
        "GỬI ĐÁNH GIÁ": "BEWERTUNG ABSCHICKEN",
        "Tối thiểu 10 ký tự": "Mindestens 10 Zeichen",
        "Tối thiểu 1 số": "Mindestens 1 Zahl",
        "Tối thiểu 1 chữ cái viết hoa": "Mindestens 1 Großbuchstabe",
        "Tối thiểu 1 ký tự đặc biệt": "Mindestens 1 Sonderzeichen",
        "Tối thiểu 1 chữ cái thường": "Mindestens 1 Kleinbuchstabe",
        "Không có ký tự nào không hợp lệ": "Keine ungültigen Zeichen",
        "Tên *": "Vorname *",
        "Họ *": "Nachname *",
        "Tùy chọn khu vực": "Regionseinstellungen",
        "🌐 Việt Nam (Vietnam)": "🌐 Vietnam (Việt Nam)",
        "🌐 Quốc Tế (Global)": "🌐 Global (Quốc Tế)",
        "Tôi đồng ý với các điều khoản sau *": "Ich stimme den folgenden Bedingungen zu *",
        "Điều khoản sử dụng Mercedes-Benz ID": "Nutzungsbedingungen für die Mercedes-Benz ID",
        "Bạn có thể tìm thấy thông tin xử lý dữ liệu của dữ liệu Mercedes-Benz ID trong": "Informationen zur Datenverarbeitung für die Mercedes-Benz ID finden Sie unter",
        "* Ô bắt buộc": "* Pflichtfeld",
        "Mercedes-Benz ID đã có sẵn?": "Bereits eine Mercedes-Benz ID?",
        "Dashboard Nhân Viên | Mercedes-Benz Việt Nam": "Mitarbeiter-Dashboard | Mercedes-Benz Vietnam",
        "Dashboard Nhân Viên": "Mitarbeiter-Dashboard",
        "Về trang chủ": "Zur Startseite",
        "Quyền hạn nhân viên": "Mitarbeiterrechte",
        "Chào mừng nhân viên đến với hệ thống. Tài khoản của bạn đã được tạo và có thể đăng nhập bình thường.": "Willkommen im System. Ihr Konto wurde erstellt und Sie können sich normal anmelden.",
        "Nhân viên hiện tại có thể đăng nhập và sử dụng các chức năng chung của website. Nếu bạn muốn, tôi có thể mở rộng thêm bảng điều khiển nhân viên với các tính năng riêng như xử lý đơn hàng, quản lý lịch hẹn, hoặc phản hồi khách hàng.": "Mitarbeiter können sich derzeit anmelden und allgemeine Website-Funktionen nutzen. Wenn Sie möchten, kann ich das Mitarbeiter-Dashboard um dedizierte Funktionen wie Bestellabwicklung, Terminverwaltung oder Kundenfeedback erweitern.",
        "Quản Lý Lịch Hẹn | Admin": "Termine verwalten | Admin",
        "MERCEDES-BENZ ADMIN": "MERCEDES-BENZ VERWALTUNG",
        "Tổng Quan": "Übersicht",
        "Quản Lý Xe": "Fahrzeuge verwalten",
        "Thoát": "Verlassen",
        "Thoát Admin": "Admin verlassen",
        "Lịch Hẹn Xem Xe": "Fahrzeugbesichtigungstermine",
        "Siêu xe quan tâm": "Interessante Fahrzeuge",
        "Hành động": "Aktionen",
        "VỀ TRANG CHỦ (VIEW SITE)": "WEBSITE ANZEIGEN",
        "Quản lý lịch hẹn": "Termine verwalten",
        "Tổng Quan Kinh Doanh": "Geschäftsübersicht",
        "Xe Hiện Có": "Verfügbare Fahrzeuge",
        "Doanh Thu Ngày": "Täglicher Umsatz",
        "Doanh Thu Tháng": "Monatlicher Umsatz",
        "Doanh Thu Năm": "Jährlicher Umsatz",
        "Biểu Đồ Doanh Thu (Tỷ VND)": "Umsatzdiagramm (Milliarden VND)",
        "Hoạt động gần đây": "Kürzliche Aktivitäten",
        "Quản Lý Đơn Hàng | Admin": "Bestellungen verwalten | Admin",
        "Quản lý đơn hàng": "Bestellungen verwalten",
        "Siêu xe": "Fahrzeug",
        "Số tiền cọc": "Anzahlungsbetrag",
        "Quản Lý Xe | Admin": "Fahrzeuge verwalten | Admin",
        "Quản lý kho xe": "Fahrzeugbestand verwalten",
        "Danh Mục Siêu Xe": "Fahrzeugkatalog",
        "Chọn dòng xe (Hãng)": "Marke auswählen",
        "Hình ảnh siêu xe": "Fahrzeugbild",
        "LƯU LẠI": "SPEICHERN",
        "HỦY BỎ": "ABBRECHEN",
        "Hình ảnh": "Bild",
        "Danh mục": "Kategorie",
        "Quản Lý Khách Hàng | Admin": "Kunden verwalten | Admin",
        "Quản lý người dùng": "Benutzer verwalten",
        "Thêm nhân viên mới": "Neuen Mitarbeiter hinzufügen",
        "Vai trò:": "Rolle:",
        "Điền mẫu nhân viên": "Mitarbeiterformular ausfüllen",
        "Thêm người dùng": "Benutzer hinzufügen",
        "Vai trò": "Rolle",
        "Ngày tham gia": "Beitrittsdatum",
        "Đang tải...": "Wird geladen..."
}
};;;

// Normalize all dictionary keys and values to NFC on script load
for (const l in pageTranslations) {
    const normalizedDict = {};
    for (const k in pageTranslations[l]) {
        normalizedDict[k.normalize('NFC')] = pageTranslations[l][k].normalize('NFC');
    }
    pageTranslations[l] = normalizedDict;
}

// Global tracking maps
const originalTexts = new WeakMap();
const originalPlaceholders = new WeakMap();
const originalHTMLs = new WeakMap();
let originalTitle = document.title ? document.title.normalize('NFC') : '';
let observer = null;

function translateTitle(lang) {
    if (!originalTitle) return;
    if (lang === 'vi') {
        document.title = originalTitle;
    } else {
        const dict = pageTranslations[lang];
        if (dict) {
            const matchKey = Object.keys(dict).find(k => k.toLowerCase() === originalTitle.toLowerCase());
            if (matchKey && dict[matchKey]) {
                document.title = dict[matchKey];
            }
        }
    }
}

function translateElementTree(element, lang) {
    if (!element) return;
    
    // Exclude sections handled elsewhere
    if (element.tagName && (
        element.tagName.toLowerCase() === 'script' ||
        element.tagName.toLowerCase() === 'style' ||
        element.closest('header') ||
        element.closest('footer') ||
        element.closest('#mb-sidebar') ||
        element.closest('#mb-search-overlay') ||
        element.closest('#mb-lang-dropdown')
    )) {
        return;
    }

    // Check if the element's innerHTML matches a key with tags
    const htmlVal = element.innerHTML.trim().normalize('NFC');
    if (!originalHTMLs.has(element)) {
        const matchKey = Object.keys(pageTranslations.en).find(k => k.toLowerCase() === htmlVal.toLowerCase());
        if (matchKey) {
            originalHTMLs.set(element, matchKey);
        }
    }
    
    if (originalHTMLs.has(element)) {
        const orig = originalHTMLs.get(element);
        const dict = pageTranslations[lang];
        if (lang === 'vi') {
            element.innerHTML = orig;
        } else if (dict && dict[orig]) {
            element.innerHTML = dict[orig];
        }
        return; // Skip traversing children of block-translated nodes
    }

    // Translate attributes
    if (element.placeholder) {
        const placeholderVal = element.placeholder.normalize('NFC');
        if (!originalPlaceholders.has(element)) {
            const matchKey = Object.keys(pageTranslations.en).find(k => k.toLowerCase() === placeholderVal.toLowerCase());
            if (matchKey) {
                originalPlaceholders.set(element, matchKey);
            }
        }
        const orig = originalPlaceholders.get(element);
        const dict = pageTranslations[lang];
        if (orig) {
            if (lang === 'vi') {
                element.placeholder = orig;
            } else if (dict && dict[orig]) {
                element.placeholder = dict[orig];
            }
        }
    }

    // Translate select option texts
    if (element.tagName && element.tagName.toLowerCase() === 'option') {
        const text = element.textContent.trim().normalize('NFC');
        if (text) {
            if (!originalTexts.has(element)) {
                const matchKey = Object.keys(pageTranslations.en).find(k => k.toLowerCase() === text.toLowerCase());
                if (matchKey) {
                    originalTexts.set(element, matchKey);
                }
            }
            if (originalTexts.has(element)) {
                const orig = originalTexts.get(element);
                const dict = pageTranslations[lang];
                if (lang === 'vi') {
                    element.textContent = orig;
                } else if (dict && dict[orig]) {
                    element.textContent = dict[orig];
                }
            }
        }
        return; // Skip option children
    }

    // Traverse children
    for (let child = element.firstChild; child !== null; child = child.nextSibling) {
        if (child.nodeType === Node.TEXT_NODE) {
            const val = child.nodeValue.trim();
            if (val) {
                const valNormalized = val.normalize('NFC');
                if (!originalTexts.has(child)) {
                    const matchKey = Object.keys(pageTranslations.en).find(k => k.toLowerCase() === valNormalized.toLowerCase());
                    if (matchKey) {
                        originalTexts.set(child, matchKey);
                    }
                }
                if (originalTexts.has(child)) {
                    const orig = originalTexts.get(child);
                    const dict = pageTranslations[lang];
                    const normNodeValue = child.nodeValue.normalize('NFC');
                    const idx = normNodeValue.toLowerCase().indexOf(valNormalized.toLowerCase());
                    if (idx !== -1) {
                        const exactSub = normNodeValue.substring(idx, idx + valNormalized.length);
                        if (lang === 'vi') {
                            child.nodeValue = normNodeValue.replace(exactSub, orig);
                        } else if (dict && dict[orig]) {
                            child.nodeValue = normNodeValue.replace(exactSub, dict[orig]);
                        }
                    }
                }
            }
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            translateElementTree(child, lang);
        }
    }
}

function observeDOM(lang) {
    if (observer) observer.disconnect();
    
    observer = new MutationObserver((mutations) => {
        // Disconnect observer to avoid inf loop from translations
        observer.disconnect();
        
        translateElementTree(document.body, lang);
        
        // Reconnect observer
        observer.observe(document.body, { childList: true, subtree: true });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}

const Navigation = {
    renderHeader: function() {
        const header = document.querySelector('header');
        if (!header || document.body.classList.contains('admin-body')) return;

        // Fetch selected language
        const lang = localStorage.getItem('lang') || 'vi';

        // Inject navigation styles
        if (!document.getElementById('mb-nav-styles')) {
            const style = document.createElement('style');
            style.id = 'mb-nav-styles';
            style.innerHTML = `
                .nav-trigger-btn {
                    color: rgba(255,255,255,0.75) !important;
                    text-decoration: none;
                    font-size: 0.82rem;
                    font-weight: 400;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    padding: 0.4rem 1rem !important;
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    border: 1px solid transparent !important;
                    border-radius: 2px;
                    background: transparent;
                    height: auto !important;
                }
                .nav-trigger-btn:hover {
                    color: #ffffff !important;
                }
                .nav-trigger-btn.active-menu {
                    border-color: var(--primary) !important;
                    color: #ffffff !important;
                }
                .user-dropdown-container {
                    position: relative;
                    display: inline-block;
                }
                .user-dropdown-menu {
                    visibility: hidden;
                    opacity: 0;
                    display: flex;
                    position: absolute;
                    top: 100%;
                    right: 0;
                    margin-top: 8px;
                    background-color: rgba(18, 18, 18, 0.95);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    min-width: 250px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.6);
                    z-index: 10000;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 8px;
                    flex-direction: column;
                    padding: 0.8rem 0;
                    transform: translateY(-10px);
                    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
                /* Invisible bridge to keep hover active */
                .user-dropdown-menu::before {
                    content: '';
                    position: absolute;
                    top: -15px;
                    left: 0;
                    right: 0;
                    height: 15px;
                    background: transparent;
                }
                .user-dropdown-container:hover .user-dropdown-menu {
                    visibility: visible;
                    opacity: 1;
                    transform: translateY(0);
                }
                .user-dropdown-menu a {
                    color: rgba(255, 255, 255, 0.85);
                    padding: 0.85rem 1.5rem;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    font-size: 0.82rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    transition: all 0.25s ease;
                }
                .user-dropdown-menu a:hover {
                    background-color: rgba(255, 255, 255, 0.04);
                    color: var(--primary);
                    padding-left: 1.8rem;
                }
                /* Optional separator if we have multiple groups, though not strictly needed here */
                .user-dropdown-menu hr {
                    border: none;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    margin: 0.5rem 0;
                }
            `;
            document.head.appendChild(style);
        }

        const currentPath = window.location.pathname;
        const user = typeof API !== 'undefined' ? API.getCurrentUser() : null;

        let authHtml = '';
        if (user) {
            authHtml = `<a href="/profile" style="color: var(--primary);">${lang === 'vi' ? 'Chào' : (lang === 'en' ? 'Hello' : 'Hallo')}, ${user.name}</a>`;
            if (user.role === 'admin' || user.role === 'employee') {
                authHtml += `<a href="/admin/dashboard" style="margin-left: 1.5rem; background: var(--primary); color: #fff; padding: 0.4rem 1rem; border-radius: 2px; font-size: 0.8rem; font-weight: 800;">${lang === 'vi' ? 'QUẢN TRỊ' : (lang === 'en' ? 'ADMIN' : 'VERWALTUNG')}</a>`;
            }
        } else {
            authHtml = `<a href="/login" class="btn-gold" style="padding: 0.5rem 1.5rem; font-size: 0.8rem; border-radius: 2px;">${lang === 'vi' ? 'Đăng nhập' : (lang === 'en' ? 'Login' : 'Anmelden')}</a>`;
        }

        header.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
            display: flex; align-items: center;
            padding: 0 4%;
            height: 64px;
            background: #000000;
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            transition: background 0.3s, height 0.3s;
        `;

        header.innerHTML = `
            <!-- LEFT: Main nav -->
            <nav style="flex:1; display:flex; align-items:center; gap:0.5rem; height:100%;">
                <a href="#" id="nav-cac-mau-xe" class="nav-trigger-btn">
                    ${lang === 'vi' ? 'Các mẫu xe' : (lang === 'en' ? 'Models' : 'Modelle')}
                </a>
                <a href="#" id="nav-mua" class="nav-trigger-btn">
                    ${lang === 'vi' ? 'Mua' : (lang === 'en' ? 'Purchase' : 'Kauf')}
                </a>
                <a href="#" id="nav-dich-vu" class="nav-trigger-btn">
                    ${lang === 'vi' ? 'Dịch vụ' : (lang === 'en' ? 'Services' : 'Service')}
                </a>
                <a href="#" id="nav-thuong-hieu" class="nav-trigger-btn">
                    ${lang === 'vi' ? 'Thương hiệu' : (lang === 'en' ? 'Brand' : 'Marke')}
                </a>
            </nav>

            <!-- CENTER: Logo -->
            <a href="/" style="
                position:absolute; left:50%; transform:translateX(-50%);
                display:flex; align-items:center; justify-content:center;
                text-decoration:none; z-index:2;
            ">
                <svg viewBox="0 0 100 100" width="40" height="40">
                    <circle cx="50" cy="50" r="47" fill="none" stroke="white" stroke-width="3"/>
                    <circle cx="50" cy="50" r="41" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                    <!-- Top ray -->
                    <polygon points="50,8 46,50 54,50" fill="white" opacity="0.95"/>
                    <polygon points="50,8 54,50 57,44" fill="rgba(255,255,255,0.5)" opacity="0.8"/>
                    <!-- Bottom-right ray -->
                    <polygon points="84,70 50,50 50,55" fill="white" opacity="0.95"/>
                    <polygon points="84,70 50,50 55,47" fill="rgba(255,255,255,0.5)" opacity="0.8"/>
                    <!-- Bottom-left ray -->
                    <polygon points="16,70 50,50 50,55" fill="white" opacity="0.95"/>
                    <polygon points="16,70 50,50 45,47" fill="rgba(255,255,255,0.5)" opacity="0.8"/>
                </svg>
            </a>

            <!-- RIGHT: Utilities -->
            <div id="auth-links" style="flex:1; display:flex; align-items:center; justify-content:flex-end; gap:0.2rem; height:100%;">
                <a href="/contact#showroom-locator" style="
                    color:rgba(255,255,255,0.75); text-decoration:none;
                    font-size:0.78rem; letter-spacing:0.8px; text-transform:uppercase;
                    padding:0 1rem; height:100%; display:flex; align-items:center;
                    gap:0.4rem; transition:color 0.2s; white-space:nowrap;
                " onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.75)'">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    ${lang === 'vi' ? 'Showroom' : (lang === 'en' ? 'Showroom' : 'Showroom')}
                </a>
                <button id="nav-search-btn" style="
                    background:none; border:none; color:rgba(255,255,255,0.75);
                    padding:0 0.8rem; height:100%; cursor:pointer;
                    display:flex; align-items:center; transition:color 0.2s;
                " onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.75)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
                </button>
                <button id="nav-lang-btn" style="
                    background:none; border:none; color:rgba(255,255,255,0.75);
                    padding:0 0.8rem; height:100%; cursor:pointer;
                    display:flex; align-items:center; transition:color 0.2s;
                " onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.75)'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                </button>
                ${user
                    ? `<div class="user-dropdown-container" onclick="const m = this.querySelector('.user-dropdown-menu'); m.style.display = (m.style.display === 'flex' ? 'none' : 'flex');">
                        <a href="#" onclick="return false;" style="
                        color:rgba(255,255,255,0.85); text-decoration:none;
                        font-size:0.78rem; letter-spacing:0.8px; text-transform:uppercase;
                        padding:0.5rem 1rem; margin-left:0.5rem;
                        border:1px solid rgba(255,255,255,0.25); display:flex;
                        align-items:center; gap:0.5rem; transition:all 0.2s; cursor: pointer;
                    " onmouseover="this.style.borderColor='#fff';this.style.color='#fff'" onmouseout="this.style.borderColor='rgba(255,255,255,0.25)';this.style.color='rgba(255,255,255,0.85)'">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/></svg>
                        ${user.name.split(' ').pop()}
                        ${user.role==='admin'?`<span style="background:var(--primary);color:#fff;font-size:0.65rem;padding:0.1rem 0.4rem;letter-spacing:0.5px;border-radius:2px;">ADMIN</span>`:(user.role==='employee'?`<span style="background:var(--primary);color:#fff;font-size:0.65rem;padding:0.1rem 0.4rem;letter-spacing:0.5px;border-radius:2px;">NHÂN VIÊN</span>`:'')}
                        </a>
                        <div class="user-dropdown-menu">
                            <a href="/profile">${lang === 'vi' ? 'Trang cá nhân' : (lang === 'en' ? 'Profile' : 'Profil')}</a>
                            ${user.role === 'admin' || user.role === 'employee' ? `<a href="/admin/dashboard">${lang === 'vi' ? 'Trang quản trị' : (lang === 'en' ? 'Admin Dashboard' : 'Verwaltung')}</a>` : ''}
                            <a href="#" onclick="API.logout(); return false;">${lang === 'vi' ? 'Đăng xuất' : (lang === 'en' ? 'Logout' : 'Abmelden')}</a>
                        </div>
                    </div>`
                    : `<a href="/login" style="
                        color:rgba(255,255,255,0.85); text-decoration:none;
                        font-size:0.78rem; letter-spacing:0.8px; text-transform:uppercase;
                        padding:0.5rem 1.2rem; margin-left:0.5rem;
                        background:var(--primary); display:flex;
                        align-items:center; gap:0.5rem; transition:background 0.2s;
                        font-weight:500;
                    " onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background='var(--primary)'">
                        ${lang === 'vi' ? 'Đăng nhập' : (lang === 'en' ? 'Login' : 'Anmelden')}
                    </a>`
                }
            </div>
        `;

        // Inject Sidebar Drawer & Overlay if not already present
        if (!document.getElementById('mb-sidebar')) {
            const sidebarHtml = `
                <div id="mb-sidebar" style="position: fixed; top: 0; left: -420px; width: 420px; height: 100vh; background: var(--bg-card); color: var(--text-white); box-shadow: 10px 0 30px rgba(0,0,0,0.5); z-index: 10000; border-right: 1px solid var(--border); transition: left 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); padding: 4rem 2.5rem; overflow-y: auto; font-family: 'Inter', sans-serif;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem;">
                        <span id="mb-sidebar-title" style="font-family: 'Inter', sans-serif; font-size: 2.2rem; font-weight: 700; color: var(--text-white); letter-spacing: -0.5px; text-transform: uppercase;"></span>
                        <button id="close-mb-sidebar" style="background: none; border: none; font-size: 2rem; cursor: pointer; color: var(--text-white); line-height: 1; transition: 0.2s;" onmouseover="this.style.opacity='0.6'" onmouseout="this.style.opacity='1'">&times;</button>
                    </div>
                    <div id="mb-sidebar-content"></div>
                </div>
                <div id="mb-sidebar-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); backdrop-filter: blur(3px); z-index: 9999; display: none; transition: opacity 0.3s ease; opacity: 0;"></div>
            `;
            const div = document.createElement('div');
            div.innerHTML = sidebarHtml;
            document.body.appendChild(div);
        }

        // Inject Search Overlay if not already present
        if (!document.getElementById('mb-search-overlay')) {
            const searchHtml = `
                <div id="mb-search-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.4); backdrop-filter: blur(3px); z-index: 10100; display: none; opacity: 0; transition: opacity 0.3s ease; font-family: 'Inter', sans-serif;">
                    <div id="mb-search-card" style="position: absolute; top: 64px; right: 4%; width: 550px; max-width: 92vw; background: #ffffff; padding: 2rem 2.5rem; box-shadow: 0 15px 35px rgba(0,0,0,0.3); display: flex; flex-direction: column; border-radius: 0px !important; transform: translateY(-10px); transition: transform 0.3s ease;">
                        <div style="display: flex; justify-content: flex-end; margin-bottom: 0.5rem;">
                            <button id="close-mb-search" style="background: none; border: none; color: #000; font-size: 1.5rem; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.6'" onmouseout="this.style.opacity='1'">&times;</button>
                        </div>
                        <div style="position: relative; background: #e6e6e6; border: 2px solid #0078D6; display: flex; align-items: center; padding: 0.8rem 1.2rem; margin-bottom: 0.8rem;">
                            <input type="text" id="mb-search-input" placeholder="${lang === 'vi' ? 'Làm thế nào chúng tôi có thể giúp đỡ?' : (lang === 'en' ? 'How can we help you?' : 'Wie können wir Ihnen helfen?')}" style="width: 90%; background: none !important; border: none !important; color: #000 !important; font-size: 1rem; font-family: 'Inter', sans-serif; font-weight: 400; outline: none !important; padding: 0 !important; text-transform: none !important; letter-spacing: 0px;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="cursor: pointer; margin-left: 0.5rem;">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div style="color: #666; font-size: 0.82rem; margin-bottom: 1.5rem;">${lang === 'vi' ? 'Tìm kiếm mô hình xe, mã cấu hình, phụ kiện hoặc thông tin khác' : (lang === 'en' ? 'Search for vehicle models, build codes, accessories or other information' : 'Nach Fahrzeugmodellen, Bau-Codes, Zubehör oder anderen Informationen suchen')}</div>
                        <div id="mb-search-results" style="display: grid; grid-template-columns: 1fr; gap: 0.8rem; max-height: 300px; overflow-y: auto; padding-right: 5px;"></div>
                    </div>
                </div>
            `;
            const searchDiv = document.createElement('div');
            searchDiv.innerHTML = searchHtml;
            document.body.appendChild(searchDiv.firstElementChild);
        }

        // Inject Language Dropdown if not already present
        // Statically styled as text badges like in the screenshot
        if (!document.getElementById('mb-lang-dropdown')) {
            const langHtml = `
                <div id="mb-lang-dropdown" style="position: absolute; top: 60px; right: 4%; background: #121212; border: 1px solid #222222; border-radius: 0px; width: 220px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); z-index: 10050; display: none; opacity: 0; transition: opacity 0.2s ease, transform 0.2s ease; transform: translateY(-10px); padding: 0.8rem 0; font-family: 'Inter', sans-serif;">
                    <a href="#" class="lang-option ${lang === 'vi' ? 'active' : ''}" data-lang="vi" style="display: flex; align-items: center; gap: 1.2rem; padding: 0.8rem 1.5rem; color: ${lang === 'vi' ? '#fff' : '#ccc'}; text-decoration: none; font-size: 0.95rem; transition: 0.2s; font-weight: 500;">
                        <span style="font-size: 0.85rem; font-weight: 700; width: 25px; color: ${lang === 'vi' ? '#fff' : '#888'};">VN</span> Tiếng Việt
                    </a>
                    <a href="#" class="lang-option ${lang === 'en' ? 'active' : ''}" data-lang="en" style="display: flex; align-items: center; gap: 1.2rem; padding: 0.8rem 1.5rem; color: ${lang === 'en' ? '#fff' : '#ccc'}; text-decoration: none; font-size: 0.95rem; transition: 0.2s; font-weight: 500;">
                        <span style="font-size: 0.85rem; font-weight: 700; width: 25px; color: ${lang === 'en' ? '#fff' : '#888'};">GB</span> English
                    </a>
                    <a href="#" class="lang-option ${lang === 'de' ? 'active' : ''}" data-lang="de" style="display: flex; align-items: center; gap: 1.2rem; padding: 0.8rem 1.5rem; color: ${lang === 'de' ? '#fff' : '#ccc'}; text-decoration: none; font-size: 0.95rem; transition: 0.2s; font-weight: 500;">
                        <span style="font-size: 0.85rem; font-weight: 700; width: 25px; color: ${lang === 'de' ? '#fff' : '#888'};">DE</span> Deutsch
                    </a>
                </div>
            `;
            const headerEl = document.querySelector('header');
            if (headerEl) {
                const langDiv = document.createElement('div');
                langDiv.innerHTML = langHtml;
                headerEl.appendChild(langDiv.firstElementChild);
            }
        }

        // Add event listeners for sidebar
        const sidebar = document.getElementById('mb-sidebar');
        const overlay = document.getElementById('mb-sidebar-overlay');
        const closeBtn = document.getElementById('close-mb-sidebar');
        const sidebarTitle = document.getElementById('mb-sidebar-title');
        const sidebarContent = document.getElementById('mb-sidebar-content');

        const menuData = {
            'cac-mau-xe': {
                title: lang === 'vi' ? 'Các mẫu xe' : (lang === 'en' ? 'Models' : 'Modelle'),
                html: `
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.5rem;">
                        <li><a href="/collection" style="color: #fff; text-decoration: none; font-size: 1.1rem; font-weight: 700; transition: 0.2s; text-transform: uppercase; letter-spacing: 0.5px;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Tất cả các dòng xe' : (lang === 'en' ? 'All Vehicles' : 'Alle Fahrzeuge')}</a></li>
                        <li><a href="/collection?search=2024" style="color: #bbb; text-decoration: none; font-size: 1rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#bbb'">${lang === 'vi' ? 'Các mẫu mới' : (lang === 'en' ? 'New Models' : 'Neue Modelle')}</a></li>
                        <li><a href="/collection?fuel=điện" style="color: #bbb; text-decoration: none; font-size: 1rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#bbb'">${lang === 'vi' ? 'Mẫu xe điện' : (lang === 'en' ? 'Electric Models' : 'Elektromodelle')}</a></li>
                        <li><a href="/collection?fuel=hybrid" style="color: #bbb; text-decoration: none; font-size: 1rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#bbb'">${lang === 'vi' ? 'Mẫu xe hybrid cắm sạc' : (lang === 'en' ? 'Plug-in Hybrid Models' : 'Plug-in-Hybridmodelle')}</a></li>
                        <hr style="border: none; border-top: 1px solid var(--border); margin: 1rem 0;">
                        <li><a href="/collection?type=Sedan" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">Sedans</a></li>
                        <li><a href="/collection?type=SUV" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Xe địa hình / SUV' : (lang === 'en' ? 'Off-Road / SUVs' : 'Geländewagen / SUVs')}</a></li>
                        <li><a href="/collection?type=Coupe" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Xe Coupé' : (lang === 'en' ? 'Coupés' : 'Coupés')}</a></li>
                        <li><a href="/collection?type=Cabriolet" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">Cabriolet</a></li>
                        <li><a href="/collection?type=Van" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Xe đa dụng' : (lang === 'en' ? 'Vans' : 'Vans')}</a></li>
                    </ul>
                    <div style="margin-top: 4rem; border-top: 1px solid var(--border); padding-top: 2rem;">
                        <a href="/booking" style="display: block; background: var(--text-white); color: var(--bg-dark); text-align: center; padding: 1rem; text-decoration: none; font-weight: 700; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1.2px; transition: 0.3s;" onmouseover="this.style.background='var(--primary)'; this.style.color='#fff';" onmouseout="this.style.background='var(--text-white)'; this.style.color='var(--bg-dark)';">${lang === 'vi' ? 'Trải nghiệm & Mua hàng' : (lang === 'en' ? 'Experience & Purchase' : 'Erlebnis & Kauf')}</a>
                    </div>
                `
            },
            'mua': {
                title: lang === 'vi' ? 'Mua' : (lang === 'en' ? 'Purchase' : 'Kauf'),
                html: `
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.2rem;">
                        <li><a href="/collection" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Xe mới' : (lang === 'en' ? 'New Cars' : 'Neuwagen')}</a></li>
                        <hr style="border: none; border-top: 1px solid var(--border); margin: 0.5rem 0;">
                        <li><a href="/collection?search=2024" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Ưu đãi mới nhất' : (lang === 'en' ? 'Latest Offers' : 'Aktuelle Angebote')}</a></li>
                        <li><a href="/contact" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Khối doanh nghiệp & khách hàng ưu tiên' : (lang === 'en' ? 'Corporate & Preferred Customers' : 'Firmen- & Premiumkunden')}</a></li>
                        <li><a href="/collection" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Bảng giá & Brochure' : (lang === 'en' ? 'Pricelist & Brochures' : 'Preisliste & Broschüren')}</a></li>
                        <hr style="border: none; border-top: 1px solid var(--border); margin: 0.5rem 0;">
                        <li><a href="/collection" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Cấu hình xe' : (lang === 'en' ? 'Car Configurator' : 'Konfigurator')}</a></li>
                        <li><a href="/booking" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Đặt lịch lái thử' : (lang === 'en' ? 'Book a Test Drive' : 'Probefahrt vereinbaren')}</a></li>
                        <hr style="border: none; border-top: 1px solid var(--border); margin: 0.5rem 0;">
                        <li><a href="/contact" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Phụ kiện kỹ thuật & bộ sưu tập' : (lang === 'en' ? 'Technical Accessories & Collection' : 'Zubehör & Kollektion')}</a></li>
                    </ul>
                `
            },
            'dich-vu': {
                title: lang === 'vi' ? 'Dịch vụ' : (lang === 'en' ? 'Services' : 'Service'),
                html: `
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.5rem;">
                        <li><a href="/booking" style="color: #fff; text-decoration: none; font-size: 1.1rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Đặt lịch hẹn dịch vụ trực tuyến' : (lang === 'en' ? 'Book a Service Appointment Online' : 'Online-Servicetermin vereinbaren')}</a></li>
                        <li><a href="/service-offers" style="color: #bbb; text-decoration: none; font-size: 1rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#bbb'">${lang === 'vi' ? 'Ưu đãi Dịch vụ khách hàng' : (lang === 'en' ? 'Customer Service Offers' : 'Kundenservice-Angebote')}</a></li>
                        <li><a href="/service-repair" style="color: #bbb; text-decoration: none; font-size: 1rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#bbb'">${lang === 'vi' ? 'Dịch vụ & Sửa chữa' : (lang === 'en' ? 'Service & Repair' : 'Service & Reparatur')}</a></li>
                        <li><a href="/service-rescue" style="color: #bbb; text-decoration: none; font-size: 1rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#bbb'">${lang === 'vi' ? 'Dịch vụ hỗ trợ & cứu hộ 24h' : (lang === 'en' ? '24h Roadside Assistance & Rescue' : '24h Pannenhilfe & Rettung')}</a></li>
                        <hr style="border: none; border-top: 1px solid var(--border); margin: 1rem 0;">
                        <li><a href="/warranty" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Bảo hiểm & Bảo hành' : (lang === 'en' ? 'Insurance & Warranty' : 'Versicherung & Garantie')}</a></li>
                        <li><a href="/warranty" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Hướng dẫn sử dụng xe điện tử' : (lang === 'en' ? 'Electronic User Manual' : 'Elektronische Betriebsanleitung')}</a></li>
                        <li><a href="/contact" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Liên hệ & Chăm sóc khách hàng' : (lang === 'en' ? 'Contact & Customer Care' : 'Kontakt & Kundenbetreuung')}</a></li>
                    </ul>
                `
            },
            'thuong-hieu': {
                title: lang === 'vi' ? 'Thương hiệu' : (lang === 'en' ? 'Brand' : 'Marke'),
                html: `
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.5rem;">
                        <li><a href="/about" style="color: #fff; text-decoration: none; font-size: 1.1rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Về chúng tôi' : (lang === 'en' ? 'About Us' : 'Über uns')}</a></li>
                        <li><a href="/collection?brand=Mercedes-AMG" style="color: #bbb; text-decoration: none; font-size: 1rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#bbb'">${lang === 'vi' ? 'AMG - Hiệu năng cao' : (lang === 'en' ? 'AMG - High Performance' : 'AMG - Hochleistung')}</a></li>
                        <li><a href="/collection?brand=Mercedes-Maybach" style="color: #bbb; text-decoration: none; font-size: 1rem; font-weight: 300; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#bbb'">${lang === 'vi' ? 'MAYBACH - Sự sang trọng tối thượng' : (lang === 'en' ? 'MAYBACH - Ultimate Luxury' : 'MAYBACH - Ultimativer Luxus')}</a></li>
                        <hr style="border: none; border-top: 1px solid var(--border); margin: 1rem 0;">
                        <li><a href="/collection" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Công nghệ dẫn đầu' : (lang === 'en' ? 'Leading Technologies' : 'Führende Technologien')}</a></li>
                        <li><a href="/collection?brand=Mercedes-EQ" style="color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 700; transition: 0.2s; text-transform: uppercase;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='#fff'">${lang === 'vi' ? 'Xu hướng xe chạy điện' : (lang === 'en' ? 'Electric Vehicle Trends' : 'E-Mobilitätstrends')}</a></li>
                    </ul>
                `
            }
        };

        const openSidebar = (menuKey) => {
            const data = menuData[menuKey];
            if (!data) return;
            sidebarTitle.innerText = data.title;
            sidebarContent.innerHTML = data.html;
            sidebar.style.left = '0';
            overlay.style.display = 'block';
            setTimeout(() => { overlay.style.opacity = '1'; }, 50);
            document.body.style.overflow = 'hidden';

            // Add active border to clicked menu link
            const triggers = {
                'cac-mau-xe': 'nav-cac-mau-xe',
                'mua': 'nav-mua',
                'dich-vu': 'nav-dich-vu',
                'thuong-hieu': 'nav-thuong-hieu'
            };
            Object.keys(triggers).forEach(key => {
                const el = document.getElementById(triggers[key]);
                if (el) {
                    if (key === menuKey) {
                        el.classList.add('active-menu');
                    } else {
                        el.classList.remove('active-menu');
                    }
                }
            });
        };

        const closeSidebar = () => {
            sidebar.style.left = '-420px';
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.display = 'none'; }, 300);
            document.body.style.overflow = 'auto';

            // Reset active menu links in header
            const ids = ['nav-cac-mau-xe', 'nav-mua', 'nav-dich-vu', 'nav-thuong-hieu'];
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.remove('active-menu');
            });
        };

        const bindTrigger = (id, key) => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.onclick = (e) => {
                    e.preventDefault();
                    openSidebar(key);
                };
            }
        };

        bindTrigger('nav-cac-mau-xe', 'cac-mau-xe');
        bindTrigger('nav-mua', 'mua');
        bindTrigger('nav-dich-vu', 'dich-vu');
        bindTrigger('nav-thuong-hieu', 'thuong-hieu');

        if (closeBtn) closeBtn.onclick = closeSidebar;
        if (overlay) overlay.onclick = closeSidebar;

        // Search functionality
        const searchBtn = document.getElementById('nav-search-btn');
        const searchOverlay = document.getElementById('mb-search-overlay');
        const closeSearchBtn = document.getElementById('close-mb-search');
        const searchInput = document.getElementById('mb-search-input');
        const searchResults = document.getElementById('mb-search-results');

        let vehiclesCache = [];

        const loadVehiclesForSearch = async () => {
            if (vehiclesCache.length > 0) return;
            try {
                const res = await fetch('/api/vehicles');
                if (res.ok) vehiclesCache = await res.json();
            } catch (err) {
                console.error('Lỗi tải dữ liệu xe cho tìm kiếm:', err);
            }
        };

        const openSearch = async () => {
            searchOverlay.style.display = 'block';
            setTimeout(() => {
                searchOverlay.style.opacity = '1';
                const card = document.getElementById('mb-search-card');
                if (card) card.style.transform = 'translateY(0)';
                if (searchInput) searchInput.focus();
            }, 50);
            await loadVehiclesForSearch();
        };

        const closeSearch = () => {
            searchOverlay.style.opacity = '0';
            const card = document.getElementById('mb-search-card');
            if (card) card.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                searchOverlay.style.display = 'none';
                if (searchInput) searchInput.value = '';
                if (searchResults) searchResults.innerHTML = '';
            }, 300);
        };

        if (searchBtn) searchBtn.onclick = openSearch;
        if (closeSearchBtn) closeSearchBtn.onclick = closeSearch;

        // Click backdrop to close
        if (searchOverlay) {
            searchOverlay.onclick = (e) => {
                if (e.target === searchOverlay) {
                    closeSearch();
                }
            };
        }

        // Escape key closes search
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.style.display === 'block') {
                closeSearch();
            }
        });

        if (searchInput) {
            searchInput.oninput = () => {
                const query = searchInput.value.trim().toLowerCase();
                if (!query) {
                    searchResults.innerHTML = '';
                    return;
                }
                const matches = vehiclesCache.filter(car => 
                    car.name.toLowerCase().includes(query) ||
                    (car.description && car.description.toLowerCase().includes(query)) ||
                    (car.type && car.type.toLowerCase().includes(query))
                );

                let html = matches.map(car => `
                    <a href="/product-detail.html?id=${car._id}" style="display: flex; gap: 1.5rem; background: #f8f9fa; border: 1px solid #e5e5e5; border-radius: 0px; padding: 0.8rem; text-decoration: none; color: #121212; transition: 0.3s; align-items: center;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='#e5e5e5'">
                        <img src="${(car.images && car.images.length > 0) ? car.images[0] : 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=200'}" style="width: 70px; height: 45px; object-fit: cover; border-radius: 0px;">
                        <div>
                            <div style="font-weight: 600; font-size: 0.9rem; color: #121212;">${car.name}</div>
                            <div style="font-size: 0.78rem; color: var(--primary); font-weight: 700; margin-top: 0.2rem;">${(car.price || 0).toLocaleString('vi-VN')} VNĐ</div>
                        </div>
                    </a>
                `).join('');

                const suggestions = [
                    { keyword: 'lái thử', title: lang === 'vi' ? 'Đặt lịch hẹn & Lái thử' : 'Book a Test Drive', path: '/booking' },
                    { keyword: 'liên hệ', title: lang === 'vi' ? 'Liên hệ Showroom' : 'Contact Showroom', path: '/contact' },
                    { keyword: 'dịch vụ', title: lang === 'vi' ? 'Đặt lịch dịch vụ & Phụ kiện' : 'Book Service', path: '/contact' },
                    { keyword: 'bộ sưu tập', title: lang === 'vi' ? 'Bộ sưu tập xe hơi' : 'Car Collection', path: '/collection' }
                ];
                const matchedSuggestions = suggestions.filter(s => s.keyword.includes(query) || query.includes(s.keyword));
                html += matchedSuggestions.map(s => `
                    <a href="${s.path}" style="display: flex; flex-direction: column; justify-content: center; background: #f8f9fa; border: 1px solid #e5e5e5; border-radius: 0px; padding: 0.8rem; text-decoration: none; color: #121212; transition: 0.3s;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='#e5e5e5'">
                        <div style="font-weight: 600; font-size: 0.9rem; color: var(--primary); display: flex; align-items: center; gap: 0.5rem;"><i class="fas fa-external-link-alt"></i> ${s.title}</div>
                        <div style="font-size: 0.72rem; color: #666; margin-top: 0.2rem;">${lang === 'vi' ? 'Liên kết nhanh đến dịch vụ hãng' : 'Quick access link'}</div>
                    </a>
                `).join('');

                if (!html) {
                    searchResults.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #777; padding: 1.5rem 0; font-size: 0.85rem;">${lang === 'vi' ? 'Không tìm thấy kết quả phù hợp cho' : 'No matching results found for'} "${searchInput.value}"</div>`;
                } else {
                    searchResults.innerHTML = html;
                }
            };
        }

        // Language Selector functionality
        const langBtn = document.getElementById('nav-lang-btn');
        const langDropdown = document.getElementById('mb-lang-dropdown');

        const toggleLangDropdown = (e) => {
            e.stopPropagation();
            if (langDropdown.style.display === 'none' || !langDropdown.style.display) {
                langDropdown.style.display = 'block';
                setTimeout(() => {
                    langDropdown.style.opacity = '1';
                    langDropdown.style.transform = 'translateY(0)';
                }, 50);
            } else {
                closeLangDropdown();
            }
        };

        const closeLangDropdown = () => {
            if (langDropdown) {
                langDropdown.style.opacity = '0';
                langDropdown.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    langDropdown.style.display = 'none';
                }, 200);
            }
        };

        if (langBtn) langBtn.onclick = toggleLangDropdown;

        document.addEventListener('click', closeLangDropdown);

        const showToast = (message) => {
            const existingToast = document.getElementById('mb-toast');
            if (existingToast) existingToast.remove();

            const toast = document.createElement('div');
            toast.id = 'mb-toast';
            toast.innerHTML = message;
            toast.style.cssText = `
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%) translateY(20px);
                background: rgba(0,0,0,0.9);
                color: #fff;
                border: 1px solid var(--primary);
                padding: 1rem 2rem;
                border-radius: 50px;
                z-index: 10200;
                font-family: 'Inter', sans-serif;
                font-size: 0.95rem;
                font-weight: 500;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                transition: transform 0.3s ease, opacity 0.3s ease;
                opacity: 0;
            `;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '1';
                toast.style.transform = 'translateX(-50%) translateY(0)';
            }, 50);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(20px)';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        };

        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(opt => {
            opt.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const newLang = opt.getAttribute('data-lang');
                localStorage.setItem('lang', newLang);

                // Update active state in UI
                langOptions.forEach(o => {
                    o.classList.remove('active');
                    o.style.color = '#ccc';
                    const span = o.querySelector('span');
                    if (span) span.style.color = '#888';
                });
                opt.classList.add('active');
                opt.style.color = '#fff';
                const activeSpan = opt.querySelector('span');
                if (activeSpan) activeSpan.style.color = '#fff';

                // Re-render header & footer
                Navigation.renderHeader();
                Navigation.renderFooter();

                // Instantly translate in-page title and body contents
                translateTitle(newLang);
                translateElementTree(document.body, newLang);
                observeDOM(newLang);

                const toastMsgs = {
                    vi: "Đã chuyển đổi giao diện sang Tiếng Việt",
                    en: "Language switched to English",
                    de: "Sprache auf Deutsch umgestellt"
                };
                showToast(toastMsgs[newLang]);
                closeLangDropdown();
            };
        });
    },

    renderFooter: function() {
        const footer = document.querySelector('footer');
        if (!footer) {
            // Create footer if it doesn't exist
            const newFooter = document.createElement('footer');
            document.body.appendChild(newFooter);
            this.renderFooter();
            return;
        }

        const lang = localStorage.getItem('lang') || 'vi';

        footer.innerHTML = `
            <div style="background: #000000; color: #ffffff; padding: 5rem 8% 3rem 8%; font-family: 'Inter', sans-serif; border-top: 1px solid var(--border);">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; border-bottom: 1px solid var(--border); padding-bottom: 4rem;">
                    <div>
                        <h4 style="color: #ffffff; font-size: 0.95rem; font-weight: 700; margin-bottom: 1.8rem; text-transform: uppercase; letter-spacing: -0.5px;">${lang === 'vi' ? 'Mua xe' : (lang === 'en' ? 'Buy Cars' : 'Fahrzeuge kaufen')}</h4>
                        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.9rem;">
                            <li><a href="/collection" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Xe mới' : (lang === 'en' ? 'New Cars' : 'Neuwagen')}</a></li>
                            <li><a href="/collection" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Cấu hình xe' : (lang === 'en' ? 'Car Configurator' : 'Konfigurator')}</a></li>
                            <li><a href="/booking" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Đăng ký lái thử' : (lang === 'en' ? 'Book a Test Drive' : 'Probefahrt buchen')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: #ffffff; font-size: 0.95rem; font-weight: 700; margin-bottom: 1.8rem; text-transform: uppercase; letter-spacing: -0.5px;">${lang === 'vi' ? 'Tư vấn & Dịch vụ' : (lang === 'en' ? 'Consulting & Services' : 'Beratung & Service')}</h4>
                        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.9rem;">
                            <li><a href="/booking" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Đặt lịch hẹn dịch vụ' : (lang === 'en' ? 'Book a Service Appointment' : 'Servicetermin vereinbaren')}</a></li>
                            <li><a href="/service-offers" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Ưu đãi dịch vụ' : (lang === 'en' ? 'Service Offers' : 'Serviceangebote')}</a></li>
                            <li><a href="/contact" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Phụ kiện chính hãng' : (lang === 'en' ? 'Genuine Accessories' : 'Original-Zubehör')}</a></li>
                            <li><a href="/service-rescue" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Hỗ trợ đường bộ 24h' : (lang === 'en' ? '24h Roadside Assistance' : '24h-Pannenhilfe')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: #ffffff; font-size: 0.95rem; font-weight: 700; margin-bottom: 1.8rem; text-transform: uppercase; letter-spacing: -0.5px;">${lang === 'vi' ? 'Thương hiệu' : (lang === 'en' ? 'Brand' : 'Marke')}</h4>
                        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.9rem;">
                            <li><a href="/about" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Về chúng tôi' : (lang === 'en' ? 'About Us' : 'Über uns')}</a></li>
                            <li><a href="/collection?brand=Mercedes-AMG" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'AMG - Hiệu năng cao' : (lang === 'en' ? 'AMG - High Performance' : 'AMG - Hochleistung')}</a></li>
                            <li><a href="/collection?brand=Mercedes-Maybach" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'MAYBACH - Sự sang trọng tối thượng' : (lang === 'en' ? 'MAYBACH - Ultimate Luxury' : 'MAYBACH - Ultimativer Luxus')}</a></li>
                            <li><a href="/collection?brand=Mercedes-EQ" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'EQ - Xe Thuần Điện' : (lang === 'en' ? 'EQ - Pure Electric' : 'EQ - Rein Elektrisch')}</a></li>
                            <li><a href="/news" style="color: #999; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">${lang === 'vi' ? 'Tin tức & Sự kiện' : (lang === 'en' ? 'News & Events' : 'News & Events')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: #ffffff; font-size: 0.95rem; font-weight: 700; margin-bottom: 1.8rem; text-transform: uppercase; letter-spacing: -0.5px;">${lang === 'vi' ? 'Showroom Việt Nam' : (lang === 'en' ? 'Showrooms Vietnam' : 'Showrooms Vietnam')}</h4>
                        <p style="color: #999; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">${lang === 'vi' ? 'Địa chỉ: Khu đô thị Mới, Hà Đông, Hà Nội' : (lang === 'en' ? 'Address: New Urban Area, Ha Dong, Hanoi' : 'Adresse: Neubaugebiet, Ha Dong, Hanoi')}</p>
                        <p style="color: #999; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">${lang === 'vi' ? 'Hotline: 0961 40 8888' : 'Hotline: 0961 40 8888'}</p>
                        <div style="display: flex; gap: 1.2rem; margin-top: 1.5rem;">
                            <a href="#" style="color: #999; font-size: 1.3rem; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" style="color: #999; font-size: 1.3rem; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'"><i class="fab fa-youtube"></i></a>
                            <a href="#" style="color: #999; font-size: 1.3rem; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'"><i class="fab fa-instagram"></i></a>
                            <a href="#" style="color: #999; font-size: 1.3rem; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'"><i class="fab fa-tiktok"></i></a>
                        </div>
                        <div style="margin-top: 1.5rem;">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119223.7505193952!2d105.7000881!3d20.9634289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452d7e9895257%3A0x6b4fbdb32768d904!2zSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1716301382405!5m2!1sen!2s" width="100%" height="120" style="border:0; border-radius: 2px; filter: grayscale(80%) invert(90%) contrast(1.2);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; font-size: 0.8rem; color: #666;">
                    <span>${lang === 'vi' ? '&copy; 2026 Mercedes-Benz Việt Nam. Tất cả các quyền được bảo hộ.' : (lang === 'en' ? '&copy; 2026 Mercedes-Benz Vietnam. All rights reserved.' : '&copy; 2026 Mercedes-Benz Vietnam. Alle Rechte vorbehalten.')}</span>
                    <div style="display: flex; gap: 1.8rem;">
                        <a href="#" style="color: #666; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#666'">${lang === 'vi' ? 'Thông tin pháp lý' : (lang === 'en' ? 'Legal Info' : 'Rechtliche Hinweise')}</a>
                        <a href="#" style="color: #666; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#666'">${lang === 'vi' ? 'Quyền riêng tư' : (lang === 'en' ? 'Privacy Policy' : 'Datenschutz')}</a>
                        <a href="#" style="color: #666; text-decoration: none; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#666'">${lang === 'vi' ? 'Cài đặt Cookies' : (lang === 'en' ? 'Cookie Settings' : 'Cookie-Einstellungen')}</a>
                    </div>
                </div>
            </div>
        `;
    },

    init: function() {
        // Load Font Awesome
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const faLink = document.createElement('link');
            faLink.rel = 'stylesheet';
            faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
            document.head.appendChild(faLink);
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        }
        
        this.renderHeader();
        this.renderFooter();

        // Capture initial page values and run translations
        originalTitle = document.title;
        const currentLang = localStorage.getItem('lang') || 'vi';
        
        translateTitle(currentLang);
        translateElementTree(document.body, currentLang);
        
        // Setup MutationObserver to translate any dynamic DOM updates synchronously
        observeDOM(currentLang);

        // Add scroll effect for header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => Navigation.init());
// Run immediately if DOM is already parsed
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    Navigation.init();
}


document.addEventListener('DOMContentLoaded', () => {
    const currentUser = API.getCurrentUser();
    if (currentUser && currentUser.role === 'employee') {
        document.querySelectorAll('a[href="/admin/users"]').forEach(l => l.style.display = 'none');
        document.querySelectorAll('nav a[href="/"]').forEach(l => l.textContent = 'Thoát trang quản trị');
    }
});
