const https = require('https');
const urls = [
  { name: 'Malkara Belediyesi', id: 43 },
  { name: 'Saray Belediyesi', id: 40 },
  { name: 'Çerkezköy Belediyesi', id: 38 },
  { name: 'Şarköy Belediyesi', id: 36 },
  { name: 'Çorlu Belediyesi', id: 34 },
  { name: 'Süleymanpaşa Belediyesi', id: 32 },
  { name: 'Muratlı Belediyesi', id: 30 },
  { name: 'Marmaraereğlisi Belediyesi', id: 28 },
  { name: 'Kapaklı Belediyesi', id: 26 },
  { name: 'Hayrabolu Belediyesi', id: 24 },
  { name: 'Ergene Belediyesi', id: 22 }
];

async function fetchDetails() {
  const results = [];
  for (const url of urls) {
    await new Promise((resolve) => {
      https.get('https://www.tekirdag.bel.tr/atik_yonetimi_detay/' + url.id, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          let birim = '', sorumlu = '', tel = '', eposta = '';
          const bMatch = data.match(/İlgili Birim\s*:\s*<\/strong>\s*([^<]+)/);
          if (bMatch) birim = bMatch[1].trim();

          const sMatch = data.match(/Sorumlu Adı Soyadı\s*:\s*<\/strong>\s*([^<]+)/);
          if (sMatch) sorumlu = sMatch[1].trim();

          const tMatch = data.match(/Telefon(?: & Fax)?\s*:\s*<\/strong>\s*([^<]+)/);
          if (tMatch) tel = tMatch[1].trim();

          const eMatch = data.match(/E-Posta\s*:\s*<\/strong>\s*([^<]+)/);
          if (eMatch) eposta = eMatch[1].trim();

          results.push({ name: url.name, birim, sorumlu, tel, eposta });
          resolve();
        });
      }).on('error', resolve);
    });
  }
  console.log(JSON.stringify(results, null, 2));
}
fetchDetails();
