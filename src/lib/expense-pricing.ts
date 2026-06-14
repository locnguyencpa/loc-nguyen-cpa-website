export type PricingTier = {
  min: number;
  max: number | null;
  standardPrice: number | null;
  firstYearPrice: number | null;
};

export type BookkeepingFrequency = "monthly" | "quarterly" | "annual";

export const corporationTaxTiers: PricingTier[] = [
  { min: 0, max: 4_999, standardPrice: 1_950, firstYearPrice: 1_450 },
  { min: 5_000, max: 499_999, standardPrice: 2_750, firstYearPrice: 2_250 },
  { min: 500_000, max: 999_999, standardPrice: 3_250, firstYearPrice: 2_750 },
  { min: 1_000_000, max: null, standardPrice: null, firstYearPrice: null },
];

export const bookkeepingTiers: Record<BookkeepingFrequency, PricingTier[]> = {
  monthly: [
    { min: 0, max: 14_999, standardPrice: 599, firstYearPrice: 499 },
    { min: 15_000, max: 29_999, standardPrice: 650, firstYearPrice: 550 },
    { min: 30_000, max: 49_999, standardPrice: 750, firstYearPrice: 650 },
    { min: 50_000, max: 79_999, standardPrice: 850, firstYearPrice: 750 },
    { min: 80_000, max: 119_999, standardPrice: 950, firstYearPrice: 850 },
    { min: 120_000, max: 159_999, standardPrice: 1_050, firstYearPrice: 950 },
    { min: 160_000, max: 199_999, standardPrice: 1_150, firstYearPrice: 1_050 },
    { min: 200_000, max: 299_999, standardPrice: 1_380, firstYearPrice: 1_280 },
    { min: 300_000, max: 399_999, standardPrice: 1_656, firstYearPrice: 1_556 },
    { min: 400_000, max: 499_999, standardPrice: 1_987, firstYearPrice: 1_887 },
    { min: 500_000, max: 599_999, standardPrice: 2_385, firstYearPrice: 2_285 },
    { min: 600_000, max: 699_999, standardPrice: 2_862, firstYearPrice: 2_762 },
    { min: 700_000, max: 799_999, standardPrice: 3_434, firstYearPrice: 3_334 },
    { min: 800_000, max: 899_999, standardPrice: 4_121, firstYearPrice: 4_021 },
    { min: 900_000, max: 999_999, standardPrice: 4_945, firstYearPrice: 4_845 },
    { min: 1_000_000, max: null, standardPrice: null, firstYearPrice: null },
  ],
  quarterly: [
    { min: 0, max: 44_999, standardPrice: 1_198, firstYearPrice: 1_098 },
    { min: 45_000, max: 89_999, standardPrice: 1_300, firstYearPrice: 1_200 },
    { min: 90_000, max: 149_999, standardPrice: 1_500, firstYearPrice: 1_400 },
    { min: 150_000, max: 239_999, standardPrice: 1_700, firstYearPrice: 1_600 },
    { min: 240_000, max: 359_999, standardPrice: 1_900, firstYearPrice: 1_800 },
    { min: 360_000, max: 479_999, standardPrice: 2_100, firstYearPrice: 2_000 },
    { min: 480_000, max: 599_999, standardPrice: 2_300, firstYearPrice: 2_200 },
    { min: 600_000, max: 899_999, standardPrice: 2_760, firstYearPrice: 2_660 },
    { min: 900_000, max: 1_199_999, standardPrice: 3_312, firstYearPrice: 3_212 },
    { min: 1_200_000, max: 1_499_999, standardPrice: 3_974, firstYearPrice: 3_874 },
    { min: 1_500_000, max: null, standardPrice: null, firstYearPrice: null },
  ],
  annual: [
    { min: 0, max: 4_999, standardPrice: 950, firstYearPrice: 850 },
    { min: 5_000, max: 499_999, standardPrice: 1_950, firstYearPrice: 1_850 },
    { min: 500_000, max: 999_999, standardPrice: 3_250, firstYearPrice: 3_150 },
    { min: 1_000_000, max: null, standardPrice: null, firstYearPrice: null },
  ],
};

export const bookkeepingFrequencyDetails = {
  monthly: {
    label: "Monthly",
    periodLabel: "per month",
    expenseDivisor: 12,
    annualMaximum: 12_000_000,
    annualStep: 5_000,
  },
  quarterly: {
    label: "Quarterly",
    periodLabel: "per quarter",
    expenseDivisor: 4,
    annualMaximum: 6_000_000,
    annualStep: 5_000,
  },
  annual: {
    label: "Annual",
    periodLabel: "per year",
    expenseDivisor: 1,
    annualMaximum: 1_000_000,
    annualStep: 1_000,
  },
} satisfies Record<
  BookkeepingFrequency,
  {
    label: string;
    periodLabel: string;
    expenseDivisor: number;
    annualMaximum: number;
    annualStep: number;
  }
>;

export function findPricingTier(tiers: PricingTier[], expenses: number) {
  return tiers.find(
    (tier) => expenses >= tier.min && (tier.max === null || expenses <= tier.max),
  ) ?? tiers[tiers.length - 1];
}
