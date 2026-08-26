import { MongoClient } from 'mongodb';

async function update() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const db = client.db('loanbuddy-payload');
  const pages = db.collection('pages');
  const res = await pages.updateOne(
    { slug: 'home' },
    {
      $set: {
        'banners.1.heading': {
          ms: 'Loanbuddy Credit\ndi Hujung Jari Anda',
          en: 'Loanbuddy Credit\nat Your Fingertips'
        },
        'banners.1.subheading': {
          ms: 'Permohonan pinjaman peribadi kini lebih pantas dan mudah. Muat turun aplikasi kami sekarang untuk memohon pada bila-bila masa, di mana jua.',
          en: 'Personal loan applications are now faster and easier. Download our app now to apply anytime, anywhere.'
        },
        'banners.1.primaryCtaText': {
          ms: 'Ketahui Lebih Lanjut',
          en: 'Learn More'
        },
        'banners.1.primaryCtaLink': 'loan-compare'
      }
    }
  );
  console.log('MongoDB update result:', res);
  await client.close();
}

update().catch(console.error);
