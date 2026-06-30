export default function Announcements() {
  return (
    <section className="bg-gray-50 px-6 py-8">

      <h2 className="text-xl font-bold text-[#0F2D52] mb-4">
        Duyurular
      </h2>

      <div className="space-y-3">

        {["Meclis Toplantısı", "Su Kesintisi", "Ulaşım Güncellemesi"].map(
          (a) => (
            <div
              key={a}
              className="bg-white p-4 rounded-xl border-l-4 border-[#0F2D52]"
            >
              {a}
            </div>
          )
        )}

      </div>

    </section>
  );
}