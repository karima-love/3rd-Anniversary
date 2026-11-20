# 22:11 — A Story Called Us ♡

**A private-feeling, cinematic birthday and third-anniversary experience for Karima.**

- Her birthday: **22 November**
- Our story began: **22 November 2023**
- Third anniversary: **22 November 2026**
- Password (visual entrance only): `MK@2211`
- Stack: **React 19 + TypeScript + Vite + Tailwind CSS 4 + Motion + Lucide React**
- Hosting: **GitHub Pages only**, no backend or paid service

## 🚀 ابدأ من هنا — على كمبيوتر Windows

### الخطوة 1 — فك الضغط

1. Extract ملف الـZIP في أي مكان على الكمبيوتر.
2. هتلاقي فولدر اسمه `3rd-Anniversary`.
3. افتح الفولدر باستخدام VS Code أو File Explorer.
4. **مهم:** اشتغل على الفولدر ده مباشرة ومتغيرش أماكن ملفات المشروع.

### الخطوة 2 — أضف الصور والأغنية

صورك الأربعة بصيغة `.jpeg` داخل:

```text
3rd-Anniversary/
└── public/
    └── assets/
        ├── images/
        │   ├── year-1.jpeg      ← صورة السنة الأولى 2023–2024
        │   ├── year-2.jpeg      ← صورة السنة الثانية 2024–2025
        │   ├── year-3.jpeg      ← صورة السنة الثالثة 2025–2026
        │   └── forever.jpeg     ← صورة إن حكايتكم مكملة
        └── audio/
            └── our-song.mp3     ← الأغنية بتاعتكم
```

**مهم جدًا:** الاسم والامتداد يكونوا بالظبط كده. لو Windows مخفي امتداد الملف، فعّل **View → Show → File name extensions** قبل ما تعيد تسميته. صورة `year-1.jpeg` مش زي `year-1.jpg` أو `year-1.jpeg.jpeg`.

لأن صوركم وأغنيتكم مش مرفوعين هنا، الـZIP مش بيحتوي ملفات شخصية افتراضية. الموقع يعرض إطارات بديلة أنيقة لو صورة ناقصة، والموسيقى بتتعامل مع الملف الناقص من غير ما توقف باقي الموقع.

يفضّل الصور تكون مضغوطة بحجم مناسب للموبايل (مثلًا 1400–2000 بكسل للضلع الأطول، حسب الصورة). متغيرش امتدادات الملفات بمجرد تعديل الاسم؛ استخدم Export/Save As لو محتاج تحويل لصيغة JPEG.

### الخطوة 3 — تشغيل المشروع على الكمبيوتر

1. نزّل **Node.js LTS** من <https://nodejs.org/> (نسخة تدعم Node 20.19 أو أحدث؛ Node 22 مناسبة).
2. افتح Terminal داخل فولدر `3rd-Anniversary`.
3. نفّذ الأوامر دي بالترتيب:

```bash
npm install
npm run check:assets
npm run dev
```

4. **بديل أسرع على Windows:** ممكن تضغط مرتين على `START_LOCAL_WINDOWS.bat` بدل أوامر الـTerminal.
5. افتح عنوان المتصفح اللي هيظهر في Terminal (غالبًا `http://localhost:5173/3rd-Anniversary/`).
6. ادخل كلمة السر: `MK@2211`.

أول أمر `npm install` هينشئ ملف **`package-lock.json`** على الكمبيوتر. خليه مع باقي المشروع لما ترفعه؛ مهم علشان GitHub Actions يستخدم `npm ci` بنفس إصدارات المكتبات.

### الخطوة 4 — اختبار النسخة النهائية

```bash
npm run typecheck
npm run build
npm run preview
```

- `typecheck` يفحص TypeScript.
- `build` ينشئ نسخة نشر جاهزة داخل `dist/`.
- على Windows تقدر تستخدم `CHECK_BUILD_WINDOWS.bat` لتنفيذ الفحوصات دي بسهولة.
- `preview` يعرض النسخة النهائية محليًا.
- مش محتاج ترفع `dist/` على GitHub؛ GitHub Actions بيعمل build تلقائيًا.

> **ملاحظة:** النسخة دي تم إعدادها ككود مصدر، لكن لم يتم تنفيذ build محلي كامل أثناء إعداد الـZIP لأن تحميل مكتبات npm غير متاح في بيئة الإنشاء. نفّذ أوامر الاختبار اللي فوق، وأي خطأ يظهر انسخه للمساعدة في إصلاحه. GitHub Actions هينفذ الفحص والبناء كمان.

## 🌐 ارفع المشروع كله مرة واحدة على GitHub (من غير رفع كل ملف لوحده)

### الطريقة الأسهل: GitHub Desktop

1. نزّل **GitHub Desktop** من <https://desktop.github.com/> وسجّل دخول GitHub.
2. من GitHub Desktop اختر **File → Add Local Repository** وحدد فولدر `3rd-Anniversary`.
3. لو قال إن الفولدر مش Git repository، اختر **Create a repository here**.
4. اكتب اسم repository: **`3rd-Anniversary`**.
5. هتشوف كل ملفات المشروع في قائمة التغييرات. اكتب Summary مثل `Our story website` واضغط **Commit to main**.
6. اضغط **Publish repository** ثم ارفع باسم **`3rd-Anniversary`**.
7. لو عايز GitHub Pages المجاني على repository عام، لازم تكون عارف إن صوركم وكود الموقع هيكونوا قابلين للوصول العام. متستخدمش صور شخصية أو أغنية مش مسموح بنشرها لو الخصوصية مهمة.
8. افتح Repository على GitHub → **Settings → Pages**.
9. تحت **Build and deployment** اختر **Source: GitHub Actions**.
10. افتح تبويب **Actions** وتابع workflow باسم `Deploy 22:11 to GitHub Pages`.
11. بعد نجاح النشر، رابط الموقع هيبقى:

```text
https://YOUR_GITHUB_USERNAME.github.io/3rd-Anniversary/
```

**مهم:** أول مرة ترفع من غير `package-lock.json`، الـworkflow بيعمل lockfile مؤقت قبل `npm ci` علشان النشر الأول يشتغل. لكن الأفضل تعمل `npm install` محليًا وترفع ملف lock مع المشروع.

### بديل: باستخدام Git Terminal

داخل فولدر المشروع:

```bash
npm install
git init
git add .
git commit -m "Build 22:11 for Karima"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/3rd-Anniversary.git
git push -u origin main
```

اعمل repository فارغ على GitHub الأول بالاسم `3rd-Anniversary` قبل تنفيذ أمر `git remote`. استبدل `YOUR_GITHUB_USERNAME` باسمك الحقيقي. بعد الرفع فعّل GitHub Pages من Settings → Pages كما سبق.

### تعديل الموقع بعد كده

- غيّر الصور أو الأغنية في أماكنهم.
- عدّل كلام الرسالة داخل `src/content/messages.ts`.
- عدّل جمل الصور في `src/content/timeline.ts`.
- عدّل رسائل النجوم في `src/content/constellation.ts`.
- عدّل الألوان داخل `src/styles/globals.css`.
- في GitHub Desktop: **Commit** ثم **Push origin**. هيبدأ نشر النسخة الجديدة تلقائيًا.

## 📁 خريطة المشروع

| Location | Responsibility |
|---|---|
| `src/app/App.tsx` | Experience, chapter loading, replay |
| `src/chapters/` | All nine self-contained interactive story chapters |
| `src/components/` | Navigation, layouts, buttons, reusable visuals |
| `src/features/auth/` | Client-side password entrance and sessionStorage |
| `src/features/music/` | MP3 player, fades, mute, volume |
| `src/content/` | Egyptian-Arabic messages, letter, gallery timeline, 22 star notes |
| `src/config/` | Website setup, image paths, music, animations |
| `src/styles/` | Premium visual design and responsive CSS |
| `.github/workflows/deploy.yml` | Automated GitHub Pages deployment |
| `public/assets/` | Your photos and song |

## ♡ How the experience works

1. Password entrance — Our Private Universe.
2. Cinematic 22:11 introduction with Begin / Skip.
3. November's chrysanthemum and its meaning.
4. One date, two celebrations, plus 22:11 transformation.
5. Four-photo editorial gallery (swipe, keyboard, indicators).
6. 22 interactive constellation stars and final bloom.
7. Birthday cake: tap three candles to reveal her wish.
8. Four interactive pages about memories still to come.
9. A readable love letter and the final blooming anniversary scene.

The floating music player continues between chapters, and **Relive Our Story** restarts chapter interactions without a full page reload. All chapters support reduced-motion preferences.

## 🎵 Browser autoplay policy

The music is started after a real click (such as **Begin Our Story** or the player's Play button). Browsers generally prevent a site from starting audio automatically before a gesture. This implementation doesn't try to bypass that browser rule.

## 🔐 IMPORTANT PRIVACY / SECURITY LIMITATION

**This password is NOT secure authentication.** GitHub Pages only serves static files. The correct password is present in client code and can be found by anyone examining the source. The `.jpeg`, `.mp3`, and JavaScript files can be accessed by direct URLs without entering the password. `sessionStorage` only remembers that the visitor unlocked the visual gate during that browser-tab session.

**Do not publish sensitive or private pictures or messages if you need actual confidentiality.** A real protected site would require server-side authentication and protected storage, which are deliberately excluded from this GitHub-Pages-only project.

## 🛠 Troubleshooting

- **Blank screen / 404 for assets:** check that the GitHub repository is named `3rd-Anniversary`. If different, update `base` in `vite.config.ts` to `'/YOUR_REPO_NAME/'` and rebuild.
- **Pictures not showing:** confirm exact filenames, `.jpeg` extensions, and paths. Remember case-sensitivity on GitHub.
- **Song doesn't play:** confirm `public/assets/audio/our-song.mp3`, then click Play. Check the browser console if playback is blocked or corrupted.
- **`npm ci` fails:** run `npm install` on your PC, commit the generated `package-lock.json`, and push it.
- **Page isn't online:** go to GitHub → Settings → Pages → Source: GitHub Actions, then review the Actions log.
- **Direct link refresh:** the project is one page with anchored chapters, not React Router routes, so direct refreshes use a valid GitHub Pages URL.

Made with love — **22.11.2023 — ∞**.


## تحديث الإصدار — إصلاحات 20 نوفمبر 2026

- **إطار الصور ديناميكي**: بيتغير تلقائيا حسب عرض وارتفاع كل صورة JPEG، من غير قص ولا تمديد، وبيستجيب لمساحة شاشة الموبايل أو الكمبيوتر.
- **تنسيق الافتتاحية**: تصغير رقم `22:11` وتنظيم المسافات، ونقل `SCROLL TO EXPLORE` لداخل التدفق الطبيعي عشان مايتداخلش مع الأزرار.
- **وردة نوفمبر**: نص FIG. 01 والكابشن بقوا خارج إطار الوردة، من غير تداخل.
- **الأغنية**: بمجرد إدخال كلمة السر الصحيحة والضغط على Enter Our Story، الموقع بيبدأ تشغيل `our-song.mp3` بنفس ضغطة الدخول (من غير الحاجة للضغط على Begin Our Story).
- لو الموقع مفتوح من قبل بالفعل (Session محفوظة بعد Refresh)، المتصفح ممكن يمنع تشغيل الصوت تلقائيا لحد أول ضغطة على زر Play أو Begin Our Story. ده قيد المتصفح على المواقع العادية، مش عطل في المشروع.
- لو ظهرت بطاقة `YOUR MEMORY IS WAITING`، ده معناه الصورة مش موجودة في المسار المطلوب أو اسمها مختلف. البطاقة بتعرض اسم ملف الصورة الناقص. بعد ما تضيفها اعمل Refresh.

### استبدال النسخة القديمة بدون إضاعة صورك وأغنيتك
1. خد نسخة احتياطية من الصور الأربعة وملف `our-song.mp3` من مشروعك القديم.
2. فك ضغط نسخة ZIP الجديدة في فولدر مختلف.
3. انقل صورك إلى `public/assets/images/` والأغنية إلى `public/assets/audio/` داخل الفولدر الجديد.
4. افتح Terminal داخل الفولدر الجديد، نفّذ `npm install` ثم `npm run dev`.
5. لرفع التعديل إلى GitHub، استبدل محتوى مشروعك المحلي بملفات النسخة الجديدة **مع الاحتفاظ بفولدر `.git` الموجود**، ثم Commit وPush في GitHub Desktop.

### لو Smart App Control منع ملف .bat

مش محتاج توقف حماية Windows. افتح فولدر `3rd-Anniversary` في File Explorer، اضغط على شريط العنوان، واكتب `cmd` ثم Enter. داخل نافذة الأوامر نفّذ `npm install` ثم `npm run dev`، وبعدها افتح رابط الموقع اللي ظهر.
