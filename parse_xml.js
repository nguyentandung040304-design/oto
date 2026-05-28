const fs = require('fs');
const xml = fs.readFileSync('extracted_docx/word/document.xml', 'utf8');

// Regex to extract text within <w:t> tags
const regex = /<w:t(?:[^>]*)>([^<]*)<\/w:t>/g;
let match;
let text = '';
while ((match = regex.exec(xml)) !== null) {
    text += match[1];
}

fs.writeFileSync('extracted_text.txt', text);
console.log('Text extracted to extracted_text.txt');
