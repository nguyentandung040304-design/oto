const { Document, Paragraph, TextRun, AlignmentType, PageBreak, Header, PageNumber, Packer, TabStopType, LeaderType } = require('docx');
const fs = require('fs');

// Helper to create body paragraphs
function bodyPara(text) {
    return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        indent: {
            firstLine: 720, // 0.5 inch = 1.27 cm indent
        },
        spacing: {
            line: 312,  // 1.3 line spacing
            after: 120, // 6pt after
            before: 0,
        },
        children: [
            new TextRun({
                text: text,
                font: "Times New Roman",
                size: 26, // 13pt
            }),
        ],
    });
}

// Helper for Heading 1 (e.g. LỜI MỞ ĐẦU, CHƯƠNG 1...)
function h1(text) {
    return new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 240, // 12pt
            after: 120,  // 6pt
            line: 312,
        },
        children: [
            new TextRun({
                text: text,
                font: "Times New Roman",
                size: 28, // 14pt
                bold: true,
            }),
        ],
    });
}

// Helper for Heading 2 (e.g. 1.1, 1.2...)
function h2(text) {
    return new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: {
            before: 240, // 12pt
            after: 120,  // 6pt
            line: 312,
        },
        children: [
            new TextRun({
                text: text,
                font: "Times New Roman",
                size: 26, // 13pt
                bold: true,
            }),
        ],
    });
}

// Helper for Heading 3 (e.g. 1.5.1, 1.5.2...)
function h3(text) {
    return new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: {
            before: 120, // 6pt
            after: 120,  // 6pt
            line: 312,
        },
        children: [
            new TextRun({
                text: text,
                font: "Times New Roman",
                size: 26, // 13pt
                bold: true,
                italic: true,
            }),
        ],
    });
}

// Helper for Table of Contents items
function createTOCLine(title, page) {
    return new Paragraph({
        tabStops: [
            {
                type: TabStopType.RIGHT,
                position: 9350, // aligned to right margin
                leader: LeaderType.DOT,
            },
        ],
        spacing: {
            line: 312,
            after: 120,
        },
        children: [
            new TextRun({
                text: title,
                font: "Times New Roman",
                size: 26,
                bold: title.startsWith("CHƯƠNG") || title === "LỜI MỞ ĐẦU" || title === "MỤC LỤC",
            }),
            new TextRun({
                text: "\t",
            }),
            new TextRun({
                text: page,
                font: "Times New Roman",
                size: 26,
                bold: title.startsWith("CHƯƠNG") || title === "LỜI MỞ ĐẦU" || title === "MỤC LỤC",
            }),
        ],
    });
}

// Create Document
const doc = new Document({
    styles: {
        default: {
            document: {
                run: {
                    font: "Times New Roman",
                    size: 26,
                },
                paragraph: {
                    spacing: {
                        line: 312,
                        after: 120,
                    },
                },
            },
        },
    },
    sections: [{
        properties: {
            titlePage: true, // DIFFERENT FIRST PAGE: no page number on cover page
            page: {
                size: {
                    width: 11906, // A4 width (210mm) in dxa
                    height: 16838, // A4 height (297mm) in dxa
                },
                margin: {
                    top: 1134, // 20mm in dxa
                    bottom: 1134, // 20mm in dxa
                    left: 1701, // 30mm in dxa
                    right: 850, // 15mm in dxa
                },
            },
        },
        headers: {
            default: new Header({
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 120, after: 120 },
                        children: [
                            new TextRun({
                                children: [PageNumber.CURRENT],
                                font: "Times New Roman",
                                size: 26,
                            }),
                        ],
                    }),
                ],
            }),
        },
        children: [
            // ─── COVER PAGE ───
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN",
                        font: "Times New Roman",
                        size: 26,
                        bold: true,
                    })
                ],
                spacing: { after: 60 }
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "KHOA KỸ THUẬT PHẦN MỀM",
                        font: "Times New Roman",
                        size: 26,
                        bold: true,
                    })
                ],
                spacing: { after: 240 }
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "----------",
                        font: "Times New Roman",
                        size: 26,
                        bold: true,
                    })
                ],
                spacing: { after: 1800 }
            }),
            new Paragraph({ spacing: { after: 800 } }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "BÁO CÁO BÀI TẬP LỚN",
                        font: "Times New Roman",
                        size: 32,
                        bold: true,
                    })
                ],
                spacing: { after: 240 }
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "MÔN HỌC: CÔNG NGHỆ WEB VÀ DỊCH VỤ TRỰC TUYẾN",
                        font: "Times New Roman",
                        size: 28,
                        bold: true,
                    })
                ],
                spacing: { after: 960 }
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "ĐỀ TÀI",
                        font: "Times New Roman",
                        size: 28,
                        bold: true,
                    })
                ],
                spacing: { after: 240 }
            }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "XÂY DỰNG WEBSITE TRƯNG BÀY XE VÀ ĐẶT LỊCH LÁI THỬ TRỰC TUYẾN CHO THƯƠNG HIỆU XE SANG MERCEDES-BENZ",
                        font: "Times New Roman",
                        size: 32,
                        bold: true,
                    })
                ],
                spacing: { after: 2000 }
            }),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                indent: { left: 4000 },
                children: [
                    new TextRun({
                        text: "Giảng viên hướng dẫn: TS. Trần Văn B",
                        font: "Times New Roman",
                        size: 26,
                        bold: true,
                    })
                ],
                spacing: { after: 120 }
            }),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                indent: { left: 4000 },
                children: [
                    new TextRun({
                        text: "Sinh viên thực hiện: Nguyễn Văn C",
                        font: "Times New Roman",
                        size: 26,
                    })
                ],
                spacing: { after: 120 }
            }),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                indent: { left: 4000 },
                children: [
                    new TextRun({
                        text: "Mã số sinh viên: 20261234",
                        font: "Times New Roman",
                        size: 26,
                    })
                ],
                spacing: { after: 120 }
            }),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                indent: { left: 4000 },
                children: [
                    new TextRun({
                        text: "Lớp: Kỹ thuật Phần mềm K18",
                        font: "Times New Roman",
                        size: 26,
                    })
                ],
                spacing: { after: 1440 }
            }),
            new Paragraph({ spacing: { after: 800 } }),
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({
                        text: "THÀNH PHỐ HỒ CHÍ MINH, NĂM 2026",
                        font: "Times New Roman",
                        size: 26,
                        bold: true,
                    })
                ]
            }),
            new Paragraph({ children: [ new PageBreak() ] }),

            // ─── TABLE OF CONTENTS ───
            new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 240, after: 480 },
                children: [
                    new TextRun({
                        text: "MỤC LỤC",
                        font: "Times New Roman",
                        size: 28,
                        bold: true,
                    })
                ]
            }),
            createTOCLine("LỜI MỞ ĐẦU", "3"),
            createTOCLine("CHƯƠNG 1. VẤN ĐỀ VÀ CƠ SỞ LÝ THUYẾT", "4"),
            createTOCLine("1.1 Lý do lựa chọn đề tài", "4"),
            createTOCLine("1.2 Tầm quan trọng của đề tài", "4"),
            createTOCLine("1.3 Mục tiêu và Nội dung", "5"),
            createTOCLine("1.4 Đối tượng, phạm vi và Phương pháp nghiên cứu", "5"),
            createTOCLine("1.5 Các công cụ sử dụng", "6"),
            createTOCLine("1.5.1 Công nghệ định dạng giao diện HTML và CSS", "6"),
            createTOCLine("1.5.2 Ngôn ngữ lập trình JavaScript", "6"),
            createTOCLine("1.5.3 Hệ quản trị cơ sở dữ liệu MongoDB", "7"),
            new Paragraph({ children: [ new PageBreak() ] }),

            // ─── INTRODUCTION (LỜI MỞ ĐẦU) ───
            h1("LỜI MỞ ĐẦU"),
            bodyPara("Sự bùng nổ của mạng lưới liên kết toàn cầu và sự phát triển mạnh mẽ của công nghệ phần mềm đã thay đổi sâu sắc diện mạo của nền kinh tế thế giới. Thương mại điện tử không còn giới hạn ở các mặt hàng tiêu dùng nhanh hay các dịch vụ phổ thông, mà đã mở rộng sang cả các ngành hàng cao cấp, trong đó có lĩnh vực kinh doanh xe ô tô hạng sang. Khách hàng ngày nay đòi hỏi thông tin phải được cung cấp một cách nhanh chóng, minh bạch và có tính tương tác cao trước khi đưa ra quyết định mua sắm thực tế."),
            bodyPara("Mercedes-Benz là một trong những thương hiệu xe hơi hạng sang hàng đầu tại thị trường Việt Nam. Khách hàng của thương hiệu này luôn hướng tới những giá trị tinh tế, sự tiện nghi vượt trội và tính tiên phong về mặt công nghệ. Do đó, việc xây dựng một hệ thống trực tuyến xứng tầm để giới thiệu sản phẩm, hỗ trợ khách hàng so sánh các dòng xe và đặt lịch trải nghiệm thực tế là một yêu cầu cấp thiết."),
            bodyPara("Đề tài nghiên cứu tập trung vào việc thiết kế và xây dựng một hệ thống website trưng bày xe kết hợp với dịch vụ đặt lịch lái thử trực tuyến dành cho đại lý Mercedes-Benz. Ứng dụng này nhằm mục đích số hóa quy trình tiếp cận khách hàng, giảm thiểu thời gian xử lý thủ tục tại đại lý, đồng thời nâng cao hiệu quả quản trị dữ liệu nội bộ. Thông qua các công nghệ cốt lõi của lập trình web hiện đại, hệ thống hứa hẹn mang lại giải pháp tối ưu cho cả người tiêu dùng lẫn đơn vị vận hành kinh doanh."),
            new Paragraph({ children: [ new PageBreak() ] }),

            // ─── CHAPTER 1 ───
            h1("CHƯƠNG 1. VẤN ĐỀ VÀ CƠ SỞ LÝ THUYẾT"),
            
            h2("1.1 Lý do lựa chọn đề tài"),
            bodyPara("Trong những năm gần đây, xu hướng số hóa toàn diện đã tác động mạnh mẽ đến hành vi tiêu dùng của khách hàng. Đối với các sản phẩm có giá trị kinh tế lớn như xe hơi hạng sang, quy trình tìm hiểu thông tin và trải nghiệm sản phẩm đóng vai trò quyết định đến sự thành bại của giao dịch. Khách hàng hiện nay có xu hướng chủ động nghiên cứu các thông số kỹ thuật, giá bán và các gói trang bị thông qua các phương tiện truyền thông số trước khi trực tiếp đến showroom của hãng."),
            bodyPara("Thương hiệu Mercedes-Benz sở hữu nhiều phân khúc sản phẩm đa dạng từ các dòng sedan sang trọng như C-Class, E-Class, S-Class, các phiên bản thể thao hiệu năng cao thuộc phân khúc AMG cho đến các mẫu siêu sang như Maybach và các dòng xe thuần điện EQ. Việc thiếu đi một kênh trực tuyến tích hợp đầy đủ thông tin chi tiết và chức năng đặt lịch hẹn sẽ gây khó khăn cho khách hàng trong việc tiếp cận sản phẩm một cách hệ thống."),
            bodyPara("Bên cạnh đó, việc quản lý các yêu cầu liên hệ, lịch lái thử của khách hàng và đơn đặt cọc mẫu tại các showroom hiện nay vẫn còn phụ thuộc nhiều vào các phương pháp ghi chép thủ công hoặc sử dụng các bảng tính rời rạc. Điều này dễ dẫn đến tình trạng sai sót thông tin, trùng lịch hẹn hoặc chậm trễ trong việc phản hồi yêu cầu của khách hàng. Vì vậy, nhóm nghiên cứu lựa chọn xây dựng đề tài thiết kế website trưng bày xe và đặt lịch trực tuyến nhằm mang lại một giải pháp đồng bộ, đáp ứng nhu cầu trải nghiệm của khách hàng và tối ưu hóa quy trình quản trị nội bộ."),

            h2("1.2 Tầm quan trọng của đề tài"),
            bodyPara("Đối với khách hàng, website đóng vai trò như một showroom ảo hoạt động liên tục không phụ thuộc vào thời gian và không gian. Giao diện trực quan cho phép khách hàng chủ động tìm kiếm các mẫu xe theo phân khúc, xem chi tiết về động cơ, hộp số, công suất, mô-men xoắn, cũng như mức giá niêm yết và số tiền trả trước tối thiểu cần thiết để sở hữu xe. Khách hàng cũng có thể đăng ký tài khoản cá nhân để thực hiện đặt cọc xe trực tuyến, gửi thông điệp liên hệ và đăng ký lịch hẹn lái thử một cách nhanh chóng."),
            bodyPara("Đối với doanh nghiệp, hệ thống này cung cấp một công cụ tiếp thị số mạnh mẽ, giúp nâng cao tính chuyên nghiệp và định vị thương hiệu cao cấp trên môi trường internet. Nhờ việc cung cấp đầy đủ thông số kỹ thuật trực tuyến, nhân viên tư vấn bán hàng có thể giảm thiểu thời gian giải thích các thông tin cơ bản cho khách hàng, từ đó tập trung vào việc đàm phán và hoàn tất thủ tục hợp đồng."),
            bodyPara("Đối với công tác quản trị nội bộ, hệ thống cung cấp các giao diện quản lý chuyên biệt dành cho nhân viên và quản trị viên hệ thống. Mọi yêu cầu đăng ký lịch hẹn lái thử xe hay đơn đặt cọc của khách hàng đều được lưu trữ tập trung và hiển thị rõ ràng về mặt trạng thái để bộ phận chức năng xử lý kịp thời. Điều này giúp loại bỏ hoàn toàn các rủi ro liên quan đến việc thất lạc dữ liệu hoặc xử lý thiếu nhất quán giữa các bộ phận tại showroom."),

            h2("1.3 Mục tiêu và Nội dung"),
            bodyPara("Mục tiêu của đề tài bao gồm cả mục tiêu tổng quát và các mục tiêu cụ thể nhằm định hướng cho quá trình xây dựng hệ thống:"),
            bodyPara("Về mục tiêu tổng quát, đề tài hướng đến việc thiết kế và phát triển một hệ thống ứng dụng web trưng bày xe hơi hạng sang Mercedes-Benz có tính thẩm mỹ cao, vận hành mượt mà và tích hợp chức năng đặt lịch lái thử, đặt cọc xe trực tuyến nhằm tự động hóa quy trình nghiệp vụ bán hàng tại showroom."),
            bodyPara("Về mục tiêu cụ thể, đề tài tập trung hoàn thành các yêu cầu kỹ thuật sau:"),
            bodyPara("Một là, lập trình phần giao diện phía người dùng đạt tiêu chuẩn thẩm mỹ cao cấp, bố cục tối giản và hiện đại, tương thích hoàn hảo trên các thiết bị di động, máy tính bảng và máy tính để bàn để tối ưu hóa trải nghiệm khách hàng."),
            bodyPara("Hai là, xây dựng máy chủ xử lý dữ liệu phía sau hoạt động ổn định, có hiệu năng truy xuất cao và bảo mật thông tin tài khoản người dùng, xử lý chính xác các dịch vụ API."),
            bodyPara("Ba là, thiết kế cấu trúc lưu trữ cơ sở dữ liệu linh hoạt để quản lý thông tin xe, danh sách lịch hẹn lái thử, các đơn đặt cọc mẫu và các yêu cầu liên hệ."),
            bodyPara("Bốn là, phân quyền hạn truy cập dữ liệu hệ thống một cách chặt chẽ cho ba nhóm đối tượng người dùng bao gồm khách hàng, nhân viên đại lý và quản trị viên hệ thống."),
            bodyPara("Nội dung nghiên cứu và triển khai của đề tài bao gồm năm phần việc chính sau:"),
            bodyPara("Nội dung thứ nhất là phân tích thiết kế hệ thống. Nhóm thực hiện việc khảo sát thực tiễn quy trình đăng ký và kiểm duyệt lịch lái thử tại showroom để xây dựng sơ đồ ca sử dụng, sơ đồ tuần tự và sơ đồ hoạt động, làm cơ sở định hình các tính năng phần mềm."),
            bodyPara("Nội dung thứ hai là lập trình phía người dùng. Thực hiện viết mã nguồn HTML và CSS để xây dựng giao diện trang chủ trưng bày thương hiệu, trang danh mục bộ sưu tập xe, trang so sánh xe hơi, trang thông tin chi tiết xe, trang thanh toán đặt cọc mẫu và biểu mẫu đăng ký lái thử trực tuyến."),
            bodyPara("Nội dung thứ ba là lập trình phía máy chủ. Phát triển máy chủ bằng môi trường Node.js để định tuyến các yêu cầu kết nối, thực hiện xử lý nghiệp vụ đăng ký tài khoản, đăng nhập hệ thống, gửi yêu cầu đặt cọc xe và xử lý luồng dữ liệu quản trị nội bộ."),
            bodyPara("Nội dung thứ tư là thiết kế và liên kết cơ sở dữ liệu. Thiết lập cơ sở dữ liệu MongoDB để lưu trữ các bộ sưu tập dữ liệu, đồng thời thực hiện kết nối bất đồng bộ giữa máy chủ Node.js và cơ sở dữ liệu để truy xuất thông tin."),
            bodyPara("Nội dung thứ năm là kiểm thử và vận hành thử nghiệm hệ thống. Áp dụng phương pháp kiểm thử hộp đen để rà soát toàn bộ các luồng chức năng từ phía khách hàng đến phía nhân viên và quản trị viên nhằm đảm bảo tính đúng đắn và hiệu năng ổn định của hệ thống trước khi nghiệm thu."),

            h2("1.4 Đối tượng, phạm vi và Phương pháp nghiên cứu"),
            bodyPara("Đối tượng nghiên cứu của đề tài bao gồm quy trình tìm kiếm thông tin xe hơi của khách hàng, các bước thiết lập và kiểm duyệt lịch hẹn lái thử tại showroom, luồng nghiệp vụ ghi nhận đơn đặt cọc trực tuyến của khách hàng và các mô hình thiết kế giao diện ứng dụng web cao cấp."),
            bodyPara("Phạm vi nghiên cứu được giới hạn trong việc xây dựng hệ thống website phục vụ giới thiệu sản phẩm xe hơi thuộc bốn thương hiệu con của Mercedes-Benz tại Việt Nam là Mercedes-Benz, Mercedes-AMG, Mercedes-Maybach và Mercedes-EQ. Hệ thống thực hiện việc lưu trữ thông tin, kiểm duyệt trạng thái lịch hẹn và đơn đặt hàng trong phạm vi dữ liệu nội bộ của hệ thống. Nghiên cứu không bao gồm việc tích hợp trực tiếp với các cổng thanh toán điện tử của bên thứ ba hay việc xử lý các giao dịch tài chính thực tế mà chỉ mô phỏng việc ghi nhận số tiền đặt cọc."),
            bodyPara("Phương pháp nghiên cứu được áp dụng kết hợp giữa nghiên cứu lý thuyết và thực nghiệm phát triển phần mềm. Nhóm nghiên cứu thực hiện khảo sát thực tế các tiêu chuẩn thiết kế giao diện cao cấp của hãng xe, tiến hành phân tích hệ thống bằng cách vẽ các sơ đồ ca sử dụng để mô tả chức năng, sơ đồ tuần tự để mô tả quá trình truyền nhận thông điệp và sơ đồ hoạt động để mô tả luồng xử lý dữ liệu. Về mặt kỹ thuật, hệ thống được lập trình theo mô hình kiến trúc ba lớp phân tách rõ ràng giữa tầng dữ liệu, tầng logic điều khiển và tầng hiển thị giao diện. Cuối cùng, phương pháp kiểm thử hộp đen được áp dụng để rà soát toàn bộ các luồng chức năng, bảo đảm phần mềm vận hành ổn định và không phát sinh lỗi nghiệp vụ."),

            h2("1.5 Các công cụ sử dụng"),
            bodyPara("Để hiện thực hóa hệ thống, nhóm nghiên cứu đã lựa chọn các công nghệ nền tảng của lập trình web hiện đại nhằm bảo đảm tốc độ truy xuất tối ưu và khả năng tùy biến giao diện linh hoạt nhất."),

            h3("1.5.1 Công nghệ định dạng giao diện HTML và CSS"),
            bodyPara("Ngôn ngữ đánh dấu siêu văn bản HTML được sử dụng để định hình cấu trúc ngữ nghĩa cho toàn bộ các trang giao diện của hệ thống từ trang chủ, trang chi tiết sản phẩm cho đến các bảng điều khiển dành cho quản trị viên. Việc sử dụng mã nguồn HTML chuẩn giúp tối ưu hóa khả năng đọc hiểu của trình duyệt và tăng cường hiệu năng hiển thị."),
            bodyPara("Ngôn ngữ định dạng CSS được ứng dụng để thiết lập hệ thống phong cách trực quan cao cấp cho website. Thiết kế sử dụng tông màu đen tuyền làm chủ đạo kết hợp với chữ màu sáng và các đường kẻ phân tách mảnh màu xám đậm nhằm mang lại cảm giác sang trọng, lịch lãm phù hợp với nhận diện thương hiệu Mercedes-Benz. Các kỹ thuật của CSS như bố cục lưới và hộp linh hoạt cũng được áp dụng triệt để giúp giao diện tự động co giãn tương thích hoàn hảo trên các màn hình có kích thước khác nhau từ điện thoại di động đến máy tính để bàn."),

            h3("1.5.2 Ngôn ngữ lập trình JavaScript"),
            bodyPara("JavaScript được sử dụng đồng thời ở cả phía giao diện và phía máy chủ, giúp tối ưu hóa tính nhất quán của mã nguồn và đẩy nhanh tốc độ phát triển dự án."),
            bodyPara("Ở phía client, JavaScript xử lý toàn bộ các tương tác động của người dùng mà không cần tải lại toàn bộ trang web. Các chức năng như bộ lọc xe theo thương hiệu, hiển thị hộp thoại đặt lịch hẹn lái thử và so sánh động thông số kỹ thuật của các dòng xe được thực thi mượt mà thông qua việc thao tác trực tiếp trên cây cấu trúc tài liệu."),
            bodyPara("Ở phía máy chủ, môi trường Node.js được sử dụng để xây dựng máy chủ xử lý các yêu cầu. Bằng việc tận dụng cơ chế vào ra bất đồng bộ và hướng sự kiện, Node.js có khả năng xử lý đồng thời nhiều kết nối từ khách hàng một cách hiệu quả. Máy chủ Node.js tiếp nhận các yêu cầu truy vấn thông tin xe, thực hiện kiểm tra quyền truy cập của người dùng và gửi trả dữ liệu dưới dạng định dạng trao đổi thông tin gọn nhẹ cho phía client xử lý hiển thị."),

            h3("1.5.3 Hệ quản trị cơ sở dữ liệu MongoDB"),
            bodyPara("MongoDB được lựa chọn làm hệ quản trị cơ sở dữ liệu chính cho hệ thống nhờ vào mô hình lưu trữ tài liệu phi cấu trúc linh hoạt. Thông số kỹ thuật của các dòng xe hơi rất đa dạng và có thể thay đổi tùy thuộc vào từng phiên bản cụ thể, do đó việc sử dụng cơ sở dữ liệu quan hệ truyền thống sẽ gây khó khăn cho việc thay đổi cấu trúc bảng dữ liệu."),
            bodyPara("Hệ thống lưu trữ thông tin dưới dạng các tài liệu có cấu trúc tương đương với đối tượng JavaScript, giúp quá trình truyền nhận và xử lý dữ liệu giữa cơ sở dữ liệu và máy chủ Node.js diễn ra một cách tự nhiên và nhanh chóng. Cơ sở dữ liệu này quản lý các bộ sưu tập dữ liệu quan trọng bao gồm thông tin chi tiết xe, tài khoản người dùng, đơn đặt hàng của khách hàng, lịch đăng ký lái thử xe và các nội dung phản hồi liên hệ.")
        ],
    }],
});

// Pack and write file
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Bao_Cao_BTL_Chuong_1.docx", buffer);
    console.log("Document generated successfully at Bao_Cao_BTL_Chuong_1.docx");
}).catch((error) => {
    console.error("Error generating document:", error);
});
