const nodemailer = require('nodemailer');

function isConfigured() {
    return Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
}

function createTransporter() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
}

async function sendPasswordResetEmail(toEmail, resetLink) {
    const transporter = createTransporter();

    const mailOptions = {
        from: `"Mercedes-Benz Việt Nam" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Yêu cầu đặt lại mật khẩu - Mercedes-Benz Việt Nam',
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Helvetica Neue', Arial, sans-serif; }
                .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
                .header { text-align: center; padding: 50px 0 30px; border-bottom: 1px solid #222; }
                .header svg { width: 60px; height: 60px; }
                .brand { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #999; margin-top: 12px; }
                .body { padding: 50px 40px; background: #111; border: 1px solid #1e1e1e; margin-top: 0; }
                .greeting { font-size: 13px; color: #888; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; }
                .headline { font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; margin-bottom: 20px; line-height: 1.3; }
                .description { font-size: 15px; color: #aaa; line-height: 1.8; margin-bottom: 40px; }
                .btn-container { text-align: center; margin: 40px 0; }
                .btn { display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #d4af37, #b38f24); color: #000; text-decoration: none; font-weight: 700; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; border-radius: 4px; }
                .divider { height: 1px; background: #222; margin: 40px 0; }
                .notice { font-size: 12px; color: #555; line-height: 1.8; }
                .link-fallback { word-break: break-all; color: #d4af37; font-size: 12px; }
                .footer { text-align: center; padding: 30px 0; }
                .footer-text { font-size: 11px; color: #444; letter-spacing: 1px; text-transform: uppercase; }
            </style>
        </head>
        <body>
            <div class="wrapper">
                <div class="header">
                    <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="47" fill="none" stroke="#d4af37" stroke-width="2"/>
                        <polygon points="50,8 46,50 54,50" fill="#d4af37"/>
                        <polygon points="84,70 50,50 50,55" fill="#d4af37"/>
                        <polygon points="16,70 50,50 50,55" fill="#d4af37"/>
                    </svg>
                    <div class="brand">Mercedes-Benz Việt Nam</div>
                </div>
                <div class="body">
                    <div class="greeting">Xin chào,</div>
                    <div class="headline">Đặt lại mật<br>khẩu của bạn</div>
                    <div class="description">
                        Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản được liên kết với địa chỉ email này.
                        Nhấn vào nút bên dưới để tạo mật khẩu mới.
                    </div>
                    <div class="btn-container">
                        <a href="${resetLink}" class="btn">Đặt lại mật khẩu</a>
                    </div>
                    <div class="divider"></div>
                    <div class="notice">
                        ⚠️ Link này sẽ hết hạn sau <strong style="color:#fff;">30 phút</strong>. Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.<br><br>
                        Nếu nút không hoạt động, sao chép và dán đường link sau vào trình duyệt:<br>
                        <a href="${resetLink}" class="link-fallback">${resetLink}</a>
                    </div>
                </div>
                <div class="footer">
                    <div class="footer-text">© 2026 Mercedes-Benz Việt Nam · Tất cả quyền được bảo lưu</div>
                </div>
            </div>
        </body>
        </html>
        `
    };

    return transporter.sendMail(mailOptions);
}

async function sendContactEmail(contact) {
    if (!isConfigured()) {
        console.log('[CONTACT] Email not configured — skip notification for', contact.email);
        return;
    }
    const transporter = createTransporter();
    const to = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
    return transporter.sendMail({
        from: `"Mercedes-Benz Việt Nam" <${process.env.EMAIL_USER}>`,
        to,
        subject: `[Liên hệ mới] ${contact.name || 'Khách hàng'}`,
        html: `
            <h2 style="font-family:Arial,sans-serif;">Liên hệ mới từ website</h2>
            <p><strong>Họ tên:</strong> ${escapeHtml(contact.name || '')}</p>
            <p><strong>Email:</strong> ${escapeHtml(contact.email || '')}</p>
            <p><strong>Nội dung:</strong></p>
            <div style="background:#f7f7f7;padding:12px;border-left:3px solid #d4af37;">
                ${escapeHtml(contact.message || '').replace(/\n/g, '<br>')}
            </div>
            <p style="color:#888;font-size:12px;">Thời gian: ${new Date().toLocaleString('vi-VN')}</p>
        `
    });
}

async function sendReplyEmail(contact, reply) {
    if (!isConfigured()) {
        console.log('[REPLY] Email not configured — skip reply to', contact.email);
        return;
    }
    const transporter = createTransporter();
    return transporter.sendMail({
        from: `"Mercedes-Benz Việt Nam" <${process.env.EMAIL_USER}>`,
        to: contact.email,
        subject: 'Phản hồi liên hệ - Mercedes-Benz Việt Nam',
        html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#222;">
                <h2 style="color:#d4af37;">Mercedes-Benz Việt Nam — Phản hồi liên hệ</h2>
                <p>Xin chào ${escapeHtml(contact.name || 'Quý khách')},</p>
                <p>Cảm ơn bạn đã liên hệ với chúng tôi. Dưới đây là phản hồi từ đội ngũ tư vấn:</p>
                <div style="background:#f7f7f7;padding:16px;border-left:3px solid #d4af37;margin:16px 0;">
                    ${escapeHtml(reply || '').replace(/\n/g, '<br>')}
                </div>
                <p style="color:#666;font-size:13px;">Tin nhắn ban đầu của bạn:</p>
                <blockquote style="color:#888;font-style:italic;border-left:2px solid #ddd;padding-left:12px;">
                    ${escapeHtml(contact.message || '').replace(/\n/g, '<br>')}
                </blockquote>
                <p style="margin-top:24px;">Trân trọng,<br>Mercedes-Benz Việt Nam</p>
            </div>
        `
    });
}

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

module.exports = { sendPasswordResetEmail, sendContactEmail, sendReplyEmail };
