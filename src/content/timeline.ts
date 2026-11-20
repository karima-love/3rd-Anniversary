import { photos } from '../config/photos';
export const timeline = [
  {
    year: '2023 — 2024', number: '01', photo: photos.firstYear,
    title: 'أول سنة لينا',
    text: 'فاكره أول أيامنا؟ وقتها مكنتش أعرف إنك هتبقي قريبة مني بالشكل ده، ولا إن وجودك هيبقى جزء مهم أوي من يومي. بس واحدة واحدة، بقيتي من أحلى الحاجات اللي حصلتلي.',
    quote: 'Every beautiful story has a beginning. Mine began with you.'
  },
  {
    year: '2024 — 2025', number: '02', photo: photos.secondYear,
    title: 'تاني سنة لينا',
    text: 'سنة تانية عدت وإحنا سوا، فيها أيام حلوة وأيام مش سهلة، بس كل يوم كان بيأكدلي إن وجودك في حياتي حاجة غالية عندي أوي.',
    quote: 'Love is choosing each other, again and again.'
  },
  {
    year: '2025 — 2026', number: '03', photo: photos.thirdYear,
    title: 'تالت سنة لينا',
    text: 'تلات سنين يا حبيبتي، ولسه في حاجات صغيرة بتعمليها بتفرحني كأنها أول مرة. ولسه بحب أسمع صوتك وأحكيلك عن يومي وأشاركك تفاصيل يمكن متهمش حد غيرنا.',
    quote: "Three years later, and you're still my favorite part of every day."
  },
  {
    year: '2026 — ∞', number: '04', photo: photos.forever,
    title: 'ولسه حكايتنا مكملة',
    text: 'الصورة دي مش نهاية الألبوم، دي بداية لكل الصور اللي لسه هناخدها، والأماكن اللي لسه هنروحها، والأيام اللي لسه هنعيشها سوا.',
    quote: "My favorite memories are the ones we haven't made yet."
  }
] as const;
