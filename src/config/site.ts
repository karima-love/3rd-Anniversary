export const siteConfig = {
  name: '22:11 — A Story Called Us',
  lovedOne: 'Karima',
  password: 'MK@2211', // Public in static JS: visual gate only, NOT secure authentication.
  anniversary: '2023-11-22',
  birthday: 'November 22',
  storageKey: '2211-karima-unlocked',
} as const;

export const chapterLinks = [
  { id: 'opening', title: 'The Beginning', number: '01' },
  { id: 'flower', title: "November's Flower", number: '02' },
  { id: 'reasons', title: 'One Date', number: '03' },
  { id: 'our-story', title: 'Our Story', number: '04' },
  { id: 'stars', title: 'Our Constellation', number: '05' },
  { id: 'birthday', title: 'Your Birthday', number: '06' },
  { id: 'future', title: 'Future Pages', number: '07' },
  { id: 'letter', title: 'A Love Letter', number: '08' },
  { id: 'forever', title: 'Forever', number: '09' },
] as const;
export type ChapterId = typeof chapterLinks[number]['id'];
