const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\sude_\\.gemini\\antigravity\\brain\\ec97bb4e-e9b5-41d5-ae39-9d668b7f67df\\.system_generated\\steps\\733\\content.md', 'utf8');

// The file has blocks like:
// <div class="page-content__description margin-top-20">
//   <strong>2026 Yılı Gelir Tarifeleri</strong>
// </div>
// Followed by <div class="documents-files ..."> ... <ul> ... <li><a href="...">... <div class="title">...</div>

const yearRegex = /<strong>(\d{4})\s+Yılı Gelir Tarifeleri<\/strong>/g;
let match;
const blocks = [];
while ((match = yearRegex.exec(content)) !== null) {
  blocks.push({
    year: parseInt(match[1]),
    index: match.index
  });
}

blocks.sort((a, b) => a.index - b.index);

const result = [];

for (let i = 0; i < blocks.length; i++) {
  const block = blocks[i];
  const nextIndex = i + 1 < blocks.length ? blocks[i+1].index : content.length;
  
  const chunk = content.substring(block.index, nextIndex);
  
  const linkRegex = /href="([^"]+)"[^>]*>[\s\S]*?<div class="title">\s*([\s\S]*?)\s*<\/div>/g;
  let linkMatch;
  const files = [];
  while ((linkMatch = linkRegex.exec(chunk)) !== null) {
    let title = linkMatch[2].replace(/\n/g, '').replace(/\r/g, '').trim().replace(/\s+/g, ' ');
    // remove HTML tags if any
    title = title.replace(/<[^>]*>?/gm, '');
    let url = linkMatch[1];
    files.push({ title, url });
  }
  
  if (files.length > 0) {
    result.push({ year: block.year, files });
  }
}

const fileContent = `export interface TarifeDosyasi {
  title: string;
  url: string;
}

export interface YilTarifesi {
  year: number;
  files: TarifeDosyasi[];
}

export const gelirTarifeleri: YilTarifesi[] = ${JSON.stringify(result, null, 2)};
`;

fs.writeFileSync('d:\\deneme\\src\\app\\yayinlar\\gelir-tarifeleri\\data.ts', fileContent, 'utf8');
console.log('Done writing data.ts');
