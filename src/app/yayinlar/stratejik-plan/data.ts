export interface Plan {
  period: string;
  title: string;
  description: string;
  url: string;
}

export const plans: Plan[] = [
  { 
    period: "2025 - 2029", 
    title: "Stratejik Plan (2025 - 2029)", 
    description: "2025 - 2029 Stratejik Plan Dosyasını Görüntülemek İçin Tıklayınız",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/statejik_plan/stratejik_plan_2025_2029.pdf" 
  },
  { 
    period: "2020 - 2024", 
    title: "Stratejik Plan (2020 - 2024)", 
    description: "2020 - 2024 Stratejik Plan Dosyasını Görüntülemek İçin Tıklayınız",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/statejik_plan/stratejik_plan_2020_2024.pdf" 
  },
  { 
    period: "2015 - 2019", 
    title: "Stratejik Plan (2015 - 2019)", 
    description: "2015 - 2019 Stratejik Plan Dosyasını Görüntülemek İçin Tıklayınız",
    url: "https://www.tekirdag.bel.tr/content/WebSource/file/statejik_plan/stratejik_plan.pdf" 
  },
];
