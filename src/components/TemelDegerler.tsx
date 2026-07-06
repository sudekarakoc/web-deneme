// components/TemelDegerler.tsx

export default function TemelDegerler() {
  const degerler = [
    "Cumhuriyetin değer ve ilkelerine bağlı,",
    "Kaliteli ve vatandaş odaklı hizmet sunan,",
    "Güler yüzlü, yapıcı ve çözüm odaklı yaklaşıma sahip,",
    "Çevreye, insana ve diğer canlılara, kültürel değerlere ve tarihi dokuya saygılı,",
    "Sosyal, adil, şeffaf, katılımcı ve demokratik belediyecilik hizmeti sunan,",
    "Etkili, verimli ve sürdürülebilir kaynak tahsisi ve kullanımına odaklanmış,",
    "İlçe belediyeleri ve diğer kurumlarla uyum, işbirliği ve koordinasyon içinde çalışan."
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-full">
      
      {/* Başlık */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B4F8A] tracking-tight mb-5">
          Temel Değerlerimiz
        </h1>
        {/* Dekoratif Kurumsal Çizgi */}
        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-full bg-[#009FE3] rounded-full"></div>
        </div>
      </header>

      {/* Değerler Listesi */}
      <ul className="flex flex-col gap-4">
        {degerler.map((deger, index) => (
          <li 
            key={index}
            className="group flex items-start p-4 rounded-xl border border-transparent hover:border-[#73B646]/30 hover:bg-[#EAF4E2]/20 transition-colors duration-300"
          >
            <div className="flex-shrink-0 mt-0.5">
              {/* Kurumsal Check İkonu */}
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#EAF4E2] group-hover:bg-[#73B646] transition-colors duration-300">
                <svg 
                  className="h-3.5 w-3.5 text-[#73B646] group-hover:text-white transition-colors duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="ml-4 text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              {deger}
            </p>
          </li>
        ))}
      </ul>
      
    </div>
  );
}