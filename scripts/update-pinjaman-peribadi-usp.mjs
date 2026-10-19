import { MongoClient } from 'mongodb';

async function update() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const db = client.db('loanbuddy-payload');

  const items = [
    {
      itemTitle: { ms: 'Kadar Faedah', en: 'Interest Rate' },
      itemDescription: {
        ms: 'Kadar faedah 1.5% sebulan atau 18% setahun (tetap)',
        en: 'Interest rate 1.5% monthly or 18% per annum (fixed)'
      }
    },
    {
      itemTitle: { ms: 'Amaun Pinjaman', en: 'Loan Amount' },
      itemDescription: {
        ms: 'Amaun pinjaman dari RM1,000 sehingga RM50,000',
        en: 'Loan amounts from RM1,000 up to RM50,000'
      }
    },
    {
      itemTitle: { ms: 'Tempoh Pinjaman', en: 'Loan Tenure' },
      itemDescription: {
        ms: 'Tempoh pinjaman fleksibel dari 12 bulan sehingga 60 bulan',
        en: 'Flexible loan tenure from 12 months up to 60 months'
      }
    },
    {
      itemTitle: { ms: 'Kad ATM', en: 'ATM Card' },
      itemDescription: {
        ms: 'Tidak pegang kad ATM, tiada bayaran pendahuluan',
        en: 'No ATM card retention, no upfront fees'
      }
    },
    {
      itemTitle: { ms: 'Kelulusan Pantas', en: 'Fast Approval' },
      itemDescription: {
        ms: 'Kelulusan permohonan pinjaman dalam masa 1-2 hari bekerja dan pindahan wang pada hari yang sama',
        en: 'Loan approval within 1-2 business days with same-day fund disbursement'
      }
    },
    {
      itemTitle: { ms: 'Pemberi Pinjaman Berlesen', en: 'Licensed Moneylender' },
      itemDescription: {
        ms: 'Pemberi pinjaman berlesen di bawah Kementerian Perumahan dan Kerajaan Tempatan (KPKT)',
        en: 'Licensed moneylender under the Ministry of Housing and Local Government (KPKT)'
      }
    }
  ];

  const res = await db.collection('pages').updateOne(
    { slug: 'pinjaman-peribadi' },
    { $set: { 'sections.0.items': items } }
  );

  console.log('MongoDB update result:', res);
  await client.close();
}

update().catch(console.error);
