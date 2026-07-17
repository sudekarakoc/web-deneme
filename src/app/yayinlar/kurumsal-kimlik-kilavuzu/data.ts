export interface GuidelineDoc {
  id: string;
  title: string;
  description: string;
  url: string;
  format: "PDF" | "PPTX" | "ZIP" | string;
  size?: string;
  iconType: "book" | "presentation" | "palette" | "logo";
}

export const documents: GuidelineDoc[] = [
  {
    id: "kilavuz",
    title: "Kurumsal Kimlik Kılavuzu",
    description: "Tekirdağ Büyükşehir Belediyesi'nin resmi logo, renk, tipografi ve kurumsal evrak standartlarını içeren kapsamlı rehber.",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/kurumsal_kimlik_kilavuzu/kurumsal_kimlik_kilavuzu.pdf",
    format: "PDF",
    iconType: "book"
  },
  {
    id: "sunum",
    title: "Sunum Dosyası (Şablon)",
    description: "Kurumsal sunumlarınızda kullanabileceğiniz, resmi kimlik kurallarına uygun olarak hazırlanmış PowerPoint şablonu.",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/kurumsal_kimlik_kilavuzu/sunum_master.pptx",
    format: "PPTX",
    iconType: "presentation"
  }
];
