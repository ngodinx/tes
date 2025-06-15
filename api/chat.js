// File: api/chat.js

export default async function handler(req, res) {
  try {
    const response = await puter.ai.chat([
      {
        role: "system",
        content: "Halo! Ada yang bisa saya bantu hari ini?"
      },
      {
        role: "user",
        content: "Halo, saya ingin belajar membuat website pribadi. Bisa bantu?"
      },
      {
        role: "system",
        content: "Tentu! Kamu ingin website seperti apa? Portofolio, blog, atau lainnya?"
      },
      {
        role: "user",
        content: "Saya Adi, ingin membuat website portofolio."
      },
      {
        role: "system",
        content: "Bagus! Apakah kamu sudah memiliki domain dan hosting?"
      },
      {
        role: "user",
        content: "Belum, saya masih bingung memilihnya."
      },
      {
        role: "system",
        content: "Tidak masalah. Saya bisa bantu rekomendasikan penyedia domain dan hosting terjangkau. Mau?"
      },
      {
        role: "user",
        content: "Ya, tolong rekomendasinya."
      }
    ]);

    res.status(200).json({ result: response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Terjadi kesalahan' });
  }
}
