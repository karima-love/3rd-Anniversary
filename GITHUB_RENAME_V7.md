# تحديث اسم Repository إلى 3rd-Anniversary

- الاسم الجديد المطلوب للـRepository على GitHub: `3rd-Anniversary`
- `vite.config.ts`: `base: '/3rd-Anniversary/'`
- `scripts/verify-source.mjs`: حدّثنا فحص الـbase عشان يطابق الاسم الجديد.
- `.github/workflows/deploy.yml`: إعداد GitHub Pages على مرحلتين (Build ثم Deploy)، مع التعامل مع غياب `package-lock.json` في أول رفع.
- `package.json`: غيّرنا اسم الحزمة الداخلي لـ`3rd-anniversary`.
- لا يوجد تغيير في اسم هدية الموقع الظاهر للزائر: `22:11 — A Story Called Us`.

## غيّر اسم الـRepository على GitHub

1. افتح الـRepository القديم على GitHub.
2. Settings → General → Repository name.
3. اكتب `3rd-Anniversary` ثم Rename.
4. Settings → Pages → Source: GitHub Actions.
5. ارفع ملفات التحديث الموجودة في ZIP التحديث داخل فولدر المشروع الأصلي، مع الحفاظ على `.git` والصور والأغنية.
6. في GitHub Desktop: Commit ثم Push origin. ولو ظهرت مشكلة في remote، افتح Repository → Repository Settings → Remote واستخدم رابط الـRepository الجديد.
7. تابع GitHub → Actions حتى نجاح مرحلتي Build وDeploy.

الرابط المتوقع لو اسم المستخدم `karima-love`:

`https://karima-love.github.io/3rd-Anniversary/`

**ملحوظة:** النشر للإنترنت لن يبدأ بمجرد تعديل الملف على الكمبيوتر؛ لازم تغيير اسم الـRepository ورفع الملفات على GitHub. صور وأغنية Karima الشخصية غير مضمنة في الـZIP، لأن صاحب الموقع بيضيفها بنفسه.
