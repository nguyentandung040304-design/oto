const fs = require('fs');
const HTMLtoDOCX = require('html-to-docx');

(async () => {
    const htmlString = fs.readFileSync('content.html', 'utf-8');
    const fileBuffer = await HTMLtoDOCX(htmlString, null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true,
    });

    fs.writeFileSync('CHƯƠNG_2_3_HOÀN_CHỈNH.docx', fileBuffer);
    console.log('Successfully generated CHƯƠNG_2_3_HOÀN_CHỈNH.docx');
})();
