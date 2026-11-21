# ⚽🏀 Maç Analiz – APK ve PC Uygulaması Kurulumu

Bu klasördeki dosyalar GitHub'a yüklenince GitHub sunucuları **otomatik olarak** iki dosya üretir:

- **MacAnaliz-Android-APK** → telefona kurulacak `app-debug.apk`
- **MacAnaliz-Windows** → PC için kurulum dosyası (`MacAnaliz-…-nsis.exe`) ve kurulumsuz çalışan `MacAnaliz-Tasinabilir.exe`

Senin bilgisayarına hiçbir program kurman gerekmiyor. Hepsi tarayıcıdan yapılıyor.

---

## Adım 1: GitHub hesabı aç (yoksa)

1. **github.com** adresine gir ve **Sign up** de.
2. E-posta, şifre ve kullanıcı adı girip hesabı onayla.

## Adım 2: Yeni bir depo (repository) oluştur

1. Sağ üstteki **+** işaretine bas ve **New repository** seç.
2. **Repository name** alanına `mac-analiz` yaz.
3. **Private** (gizli) seç.
4. Başka hiçbir kutuyu işaretleme ve **Create repository**'ye bas.

## Adım 3: Dosyaları yükle

1. Açılan sayfada **"uploading an existing file"** linkine tıkla.
2. Bilgisayarında **mac-analiz-app** klasörünü aç (zip'ten çıkardığın klasör).
3. Klasörün **içindeki her şeyi** seç (Ctrl+A) ve tarayıcıdaki yükleme alanına sürükle:
   `web`, `android`, `desktop`, `.github`, `KURULUM.md`, `.gitignore`
4. Yükleme bitince alttaki yeşil **Commit changes** butonuna bas.

⚠️ **`.github` klasörü gizli olabilir.** Görmüyorsan Windows Gezgini'nde **Görünüm → Göster → Gizli öğeler** seçeneğini aç. Bu klasör yüklenmezse derleme başlamaz. Yine de yüklenmezse Adım 3b'yi uygula.

### Adım 3b (sadece .github yüklenmediyse)
1. Depo sayfasında **Add file → Create new file** de.
2. Dosya adı kutusuna tam olarak şunu yaz: `.github/workflows/build.yml`
3. Klasördeki `.github/workflows/build.yml` dosyasını Not Defteri ile aç, içeriğini kopyala ve buraya yapıştır.
4. **Commit changes** butonuna bas.

## Adım 4: Derlemeyi bekle

1. Depo sayfasında üstteki **Actions** sekmesine gir.
2. **"Uygulamalari derle"** adlı işin çalıştığını göreceksin (sarı dönen simge).
3. 5–10 dakika bekle. İki yeşil tik (✅ Android APK, ✅ Windows uygulamasi) çıkınca hazır.
4. İşin adına tıkla ve sayfanın altındaki **Artifacts** bölümünden iki dosyayı indir:
   - **MacAnaliz-Android-APK**
   - **MacAnaliz-Windows**

İnen dosyalar `.zip` olarak gelir, içlerinden APK ve EXE dosyaları çıkar.

> Actions sekmesinde iş görünmüyorsa: **Actions** → yeşil **"I understand my workflows, go ahead and enable them"** butonuna bas, sonra **Uygulamalari derle → Run workflow** de.

## Adım 5: Telefona kur (APK)

1. `app-debug.apk` dosyasını telefona gönder. Kendine Telegram veya WhatsApp ile atabilir, ya da kabloyla kopyalayabilirsin.
2. Telefonda dosyaya dokun.
3. "Bilinmeyen kaynaklardan yüklemeye izin ver" uyarısı çıkarsa **Ayarlar → İzin ver** de.
4. **Yükle** de. Ana ekranda **Maç Analiz** simgesi çıkacak.
5. Play Protect "tanınmayan uygulama" derse **Yine de yükle** de. Uygulamayı sen derlediğin için tanımıyor, bu normal.

## Adım 6: PC'ye kur (Windows)

- **Kurulumlu sürüm:** `MacAnaliz-…-nsis.exe` dosyasını çalıştır. Masaüstünde simge oluşur.
- **Kurulumsuz sürüm:** `MacAnaliz-Tasinabilir.exe` dosyasına çift tıklaman yeterli.
- Windows "Bilgisayarınız korundu" uyarısı verirse **Ek bilgi → Yine de çalıştır** de. İmzasız uygulamalarda bu uyarı normal.

## Adım 7: İlk açılış

1. Uygulama API anahtarını soracak.
2. **dashboard.api-football.com** adresinden ücretsiz kayıt ol, **Account → My Access** bölümündeki **API Key**'i kopyala.
3. Uygulamaya yapıştır ve **Kaydet**'e bas. "✅ Anahtar çalışıyor" yazısını görünce hazırsın.

Anahtarı telefona ve PC'ye ayrı ayrı girmen gerekiyor. Anahtar her cihazda sadece o cihazda saklanır.

---

## Kullanım

- Üstte **Dün / Bugün / Yarın** ve **Futbol / Basketbol** seçimi var.
- Bir maça dokununca detaylı analiz açılır: model tahmini, sezon, korner, kart, şut, xG, aralarındaki maçlar, eksikler ve yorum.
- **Takım ara** kutusuna takım adı yazınca o takımın sıradaki maçı analiz edilir.
- **⚙ Ayarlar** bölümünden lig ekleyip çıkarabilirsin. Örneğin "albania" yazıp Arnavutluk Superliga'yı ekleyebilirsin.
- Ücretsiz plan günde 100 istek veriyor. Bir futbol analizi yaklaşık 6 istek harcar. Aynı maçı tekrar açınca önbellekten gelir, kota harcanmaz.

## Güncelleme

Ben uygulamada değişiklik yaptığımda sadece **web/index.html** dosyasını GitHub'da değiştirmen yeterli. Dosyaya tıkla, **✏️ (Edit)** de, yeni içeriği yapıştır ve **Commit** et. Actions yeni APK ve EXE'yi otomatik derler.

## Sorun olursa

- **Actions'ta kırmızı ❌ varsa:** işe tıkla, kırmızı adımı aç, hata yazısının ekran görüntüsünü bana gönder.
- **Uygulamada "⚠️ …" uyarısı varsa:** ekran görüntüsünü bana gönder. API anahtarının görünmediğinden emin ol.
