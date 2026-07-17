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

async function run() {
  for (const item of urls) {
    try {
      const data = await new Promise((resolve, reject) => {
        https.get('https://www.tekirdag.bel.tr/atik_yonetimi_detay/' + item.id, {
          rejectUnauthorized: false
        }, res => {
          let body = '';
          res.on('data', c => body += c);
          res.on('end', () => resolve(body));
        }).on('error', reject);
      });

      const match = data.match(/class="page-content__description[^>]*>([\s\S]*?)<\/div>/);
      let content = match ? match[1] : '';
      console.log('--- ' + item.name + ' ---');
      console.log(content.replace(/<[^>]+>/g, '').trim());
      console.log('-------------------------');
    } catch (e) {
      console.error(e);
    }
  }
}

run();
