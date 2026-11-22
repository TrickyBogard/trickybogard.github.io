/* TrickyBogard Quick Message — 15-language presentation, without tracking. */
(function(){
'use strict';
const langs=['tr','en','de','fr','es','it','pt','ru','ja','ko','zh','id','hi','vi','ar'];
const names={tr:'Türkçe',en:'English',de:'Deutsch',fr:'Français',es:'Español',it:'Italiano',pt:'Português',ru:'Русский',ja:'日本語',ko:'한국어',zh:'中文',id:'Indonesia',hi:'हिन्दी',vi:'Tiếng Việt',ar:'العربية'};
/* Order: nav apps, nav features, nav guide, nav download, eyebrow, hero first/second lines, hero lead,
   main CTA, secondary CTA, micro, gallery eyebrow/title/subtitle, features eyebrow/title/subtitle,
   feature title/desc × 5, how eyebrow/title/lead, step title/desc ×3,
   guide eyebrow/title/lead/button, footer, privacy, terms, pause, resume, screenshot caption ×6. */
const keys='apps features guide download eyebrow hero1 hero2 intro getApp seeScreens micro galleryEye galleryHead galleryLead featureEye featureHead featureLead f1 f1d f2 f2d f3 f3d f4 f4d f5 f5d howEye howHead howLead step1 step1d step2 step2d step3 step3d guideEye guideHead guideLead guideLink footer privacy terms pause resume cap1 cap2 cap3 cap4 cap5 cap6'.split(' ');
const raw={
tr:['Uygulama','Özellikler','Rehber','Google Play','Hızlı, sade, senin kontrolünde','Rehbere kaydetmeden.','Mesajını başlat.','Tek seferlik numaralar için rehberini doldurma. Quick Message ile numarayı gir, mesajını hazırla ve tercih ettiğin mesajlaşma uygulamasında devam et.','Google Play’den indir','Ekranları keşfet','Android için · Mesaj gönderimi seçtiğin uygulamada tamamlanır','GERÇEK UYGULAMA EKRANLARI','Uygulamayı olduğu gibi gör.','Gösterilen altı ekran, Quick Message’ın yayımlanmış Google Play görsellerinden alınmıştır.','GÜNLÜK HAYAT İÇİN','Daha az işlem. Daha çok kolaylık.','Her özellik, iletişimini daha pratik hale getirmek için.','Hızlı mesaj','Numarayı rehbere eklemeden sohbet başlat.','Hazır şablonlar','Tekrar kullandığın mesajlarını kolayca düzenle.','OCR tarama','Görsellerdeki telefon numaralarını tanı.','Hatırlatıcılar','Mesajı ne zaman göndereceğini hatırla; gönderimi sen yap.','Güvenli kasa','Seçtiğin kayıtları cihazında şifreli sakla.','NASIL ÇALIŞIR?','Üç küçük adım.','Gereksiz kişi kaydı yok, otomatik mesaj gönderimi yok. Kontrol sende.','Numarayı gir','Ülke kodunu seç ve telefon numarasını yaz veya yapıştır.','Mesajını hazırla','İstersen şablon kullan, metni düzenle veya OCR’dan yararlan.','Sohbeti aç','Desteklenen mesajlaşma uygulamasına geç ve mesajı kendin gönder.','DAHA FAZLASINI ÖĞREN','Pratik kullanım rehberi.','Kurye, küçük işletme ve günlük kullanım için rehbere kaydetmeden mesajlaşma ipuçları.','Rehberi oku','Quick Message bağımsız bir yardımcı uygulamadır; adı geçen mesajlaşma servisleriyle resmî bağlantısı yoktur. Bazı özellikler Premium gerektirebilir.','Gizlilik','Kullanım şartları','Durdur','Oynat','Mesaj oluşturma','Mesaj kütüphanesi','Dinamik şablonlar','Hatırlatıcılar','Araçlar','Ayarlar'],
en:['App','Features','Guide','Google Play','Fast, simple, in your control','No saved contact.','Just a conversation.','Keep one-time phone numbers out of your address book. Enter a number, prepare your message, and continue in the messaging app you choose.','Get it on Google Play','Explore the screens','For Android · You send the message in your chosen app','REAL APP SCREENSHOTS','See the actual app.','These six images are from Quick Message’s published Google Play screenshots.','MADE FOR EVERYDAY USE','Less busywork. More done.','Thoughtful tools to make everyday communication easier.','Fast Send','Start a chat without saving the number.','Message templates','Organize replies you use again and again.','OCR scanning','Recognize phone numbers in images.','Reminders','Remember when to message; you stay in charge of sending.','Secure Vault','Keep selected records encrypted on your device.','HOW IT WORKS','Three simple steps.','No unnecessary contact saving, no automatic message sending. You stay in control.','Enter a number','Choose a country code, then type or paste a number.','Prepare your message','Write your own text or use templates and OCR.','Open the chat','Continue in a supported messaging app and send it yourself.','LEARN MORE','A practical guide.','Tips for couriers, small businesses and everyday messaging without saving contacts.','Read the guide','Quick Message is an independent utility, not affiliated with the messaging services mentioned. Some features may require Premium.','Privacy','Terms','Pause','Play','Compose','Library','Dynamic templates','Reminders','Tools','Settings'],
de:['App','Funktionen','Ratgeber','Google Play','Schnell, einfach, selbstbestimmt','Keine Nummer speichern.','Einfach chatten.','Halte einmalige Nummern aus deinem Adressbuch fern. Nummer eingeben, Nachricht vorbereiten und in deiner Messaging-App fortfahren.','Bei Google Play laden','Screenshots ansehen','Für Android · Du sendest die Nachricht selbst','ECHTE APP-SCREENSHOTS','So sieht die App aus.','Diese sechs Bilder stammen aus dem veröffentlichten Google-Play-Eintrag.','FÜR DEN ALLTAG','Weniger Aufwand. Mehr Zeit.','Praktische Funktionen für die tägliche Kommunikation.','Schnellnachricht','Chat starten, ohne die Nummer zu speichern.','Vorlagen','Häufig verwendete Antworten organisieren.','OCR-Erkennung','Telefonnummern in Bildern erkennen.','Erinnerungen','An Nachrichten denken und selbst senden.','Sicherer Tresor','Ausgewählte Daten verschlüsselt auf dem Gerät speichern.','SO GEHT ES','Drei einfache Schritte.','Keine unnötigen Kontakte und kein automatischer Versand.','Nummer eingeben','Landesvorwahl wählen und Nummer eingeben oder einfügen.','Nachricht vorbereiten','Text schreiben oder Vorlagen und OCR nutzen.','Chat öffnen','Messaging-App öffnen und selbst senden.','MEHR ERFAHREN','Praktischer Ratgeber.','Tipps für Kurierdienste, kleine Firmen und den Alltag.','Ratgeber lesen','Quick Message ist unabhängig und nicht mit den genannten Nachrichtendiensten verbunden. Manche Funktionen benötigen Premium.','Datenschutz','Nutzungsbedingungen','Pausieren','Abspielen','Verfassen','Bibliothek','Dynamische Vorlagen','Erinnerungen','Werkzeuge','Einstellungen'],
fr:['Application','Fonctions','Guide','Google Play','Rapide, simple, maîtrisé','Sans enregistrer de contact.','Lancez la discussion.','Évitez d’ajouter les numéros temporaires à votre répertoire. Saisissez un numéro, préparez votre texte et continuez dans votre messagerie.','Télécharger sur Google Play','Voir les écrans','Pour Android · Vous envoyez le message vous-même','CAPTURES RÉELLES','Découvrez la vraie application.','Ces six images proviennent de la fiche Google Play publiée.','AU QUOTIDIEN','Moins de manipulations.','Des outils pratiques pour simplifier la communication.','Envoi rapide','Démarrez une discussion sans enregistrer le numéro.','Modèles','Organisez les réponses que vous réutilisez.','Reconnaissance OCR','Reconnaissez les numéros dans les images.','Rappels','Rappelez-vous d’écrire, puis envoyez vous-même.','Coffre sécurisé','Conservez certaines données chiffrées sur l’appareil.','MODE D’EMPLOI','Trois étapes simples.','Pas d’enregistrement inutile ni d’envoi automatique.','Saisir un numéro','Choisissez l’indicatif puis saisissez ou collez le numéro.','Préparer le message','Rédigez votre texte ou utilisez modèles et OCR.','Ouvrir la discussion','Continuez dans l’application choisie et envoyez le message.','EN SAVOIR PLUS','Guide pratique.','Conseils pour livreurs, petites entreprises et usage quotidien.','Lire le guide','Quick Message est indépendant des services de messagerie mentionnés. Certaines fonctions exigent Premium.','Confidentialité','Conditions','Pause','Lecture','Rédaction','Bibliothèque','Modèles dynamiques','Rappels','Outils','Paramètres'],
es:['Aplicación','Funciones','Guía','Google Play','Rápido, sencillo, a tu manera','Sin guardar contactos.','Inicia la conversación.','Evita llenar tus contactos con números temporales. Introduce un número, prepara el mensaje y continúa en tu app de mensajería favorita.','Descargar en Google Play','Ver pantallas','Para Android · Tú envías el mensaje','CAPTURAS REALES','Conoce la aplicación real.','Estas seis imágenes proceden de la ficha publicada en Google Play.','PARA EL DÍA A DÍA','Menos pasos. Más tiempo.','Herramientas que facilitan la comunicación.','Envío rápido','Inicia un chat sin guardar el número.','Plantillas','Organiza las respuestas que usas a menudo.','Escáner OCR','Reconoce números de teléfono en imágenes.','Recordatorios','Recuerda escribir y envía tú mismo.','Bóveda segura','Guarda ciertos datos cifrados en tu dispositivo.','CÓMO FUNCIONA','Tres pasos sencillos.','Sin contactos innecesarios ni mensajes automáticos.','Introduce un número','Elige el prefijo y escribe o pega el número.','Prepara el mensaje','Escribe o usa plantillas y OCR.','Abre el chat','Continúa en tu app de mensajería y envía.','DESCUBRE MÁS','Guía práctica.','Consejos para repartidores, pequeñas empresas y el uso diario.','Leer la guía','Quick Message es independiente de los servicios mencionados. Algunas funciones requieren Premium.','Privacidad','Condiciones','Pausar','Reproducir','Redactar','Biblioteca','Plantillas dinámicas','Recordatorios','Herramientas','Ajustes'],
it:['App','Funzioni','Guida','Google Play','Veloce, semplice, sotto controllo','Senza salvare il numero.','Inizia la chat.','Non riempire la rubrica di numeri temporanei. Inserisci un numero, prepara il messaggio e prosegui nell’app di messaggistica scelta.','Scarica da Google Play','Esplora le schermate','Per Android · Invii tu il messaggio','SCHERMATE REALI','Guarda la vera app.','Queste sei immagini provengono dalla scheda Google Play pubblicata.','PER OGNI GIORNO','Meno passaggi. Più tempo.','Funzioni pratiche per comunicare meglio.','Invio rapido','Apri una chat senza salvare il numero.','Modelli','Organizza le risposte che usi più spesso.','Scansione OCR','Riconosci numeri di telefono nelle immagini.','Promemoria','Ricorda quando scrivere; invii tu.','Archivio sicuro','Conserva alcuni dati cifrati sul dispositivo.','COME FUNZIONA','Tre semplici passi.','Niente contatti inutili né invii automatici.','Inserisci un numero','Scegli il prefisso e inserisci o incolla il numero.','Prepara il messaggio','Scrivi o usa modelli e OCR.','Apri la chat','Continua nell’app scelta e invia personalmente.','SCOPRI DI PIÙ','Guida pratica.','Consigli per corrieri, piccole attività e uso quotidiano.','Leggi la guida','Quick Message è indipendente dai servizi citati. Alcune funzioni richiedono Premium.','Privacy','Condizioni','Pausa','Riproduci','Componi','Libreria','Modelli dinamici','Promemoria','Strumenti','Impostazioni'],
pt:['Aplicativo','Recursos','Guia','Google Play','Rápido, simples, no seu controle','Sem salvar o contato.','Comece a conversa.','Não encha sua agenda com números temporários. Digite o número, prepare a mensagem e continue no app de sua escolha.','Baixar no Google Play','Ver telas','Para Android · Você mesmo envia a mensagem','CAPTURAS REAIS','Conheça o aplicativo real.','Estas seis imagens são da página publicada no Google Play.','PARA O DIA A DIA','Menos etapas. Mais tempo.','Recursos práticos para facilitar a comunicação.','Envio rápido','Inicie uma conversa sem salvar o número.','Modelos','Organize respostas que você usa sempre.','Leitura OCR','Reconheça telefones em imagens.','Lembretes','Lembre-se de enviar; você decide quando.','Cofre seguro','Guarde determinados dados criptografados no aparelho.','COMO FUNCIONA','Três etapas simples.','Sem contatos desnecessários ou envios automáticos.','Digite um número','Escolha o código do país e digite ou cole o número.','Prepare a mensagem','Escreva ou use modelos e OCR.','Abra o chat','Continue no app escolhido e envie a mensagem.','SAIBA MAIS','Guia prático.','Dicas para entregadores, pequenas empresas e o cotidiano.','Ler guia','Quick Message é independente dos serviços citados. Alguns recursos exigem Premium.','Privacidade','Termos','Pausar','Reproduzir','Escrever','Biblioteca','Modelos dinâmicos','Lembretes','Ferramentas','Configurações'],
ru:['Приложение','Функции','Руководство','Google Play','Быстро, просто, под контролем','Не сохраняйте номер.','Начните диалог.','Не засоряйте контакты временными номерами. Введите номер, подготовьте сообщение и перейдите в удобный мессенджер.','Скачать в Google Play','Посмотреть экраны','Для Android · Сообщение отправляете вы','НАСТОЯЩИЕ СКРИНШОТЫ','Посмотрите приложение.','Эти шесть изображений взяты из опубликованной страницы Google Play.','НА КАЖДЫЙ ДЕНЬ','Меньше действий.','Удобные инструменты для общения.','Быстрое сообщение','Начните чат, не сохраняя номер.','Шаблоны','Упорядочите часто используемые ответы.','Распознавание OCR','Находите номера телефонов на изображениях.','Напоминания','Не забудьте написать и отправьте сами.','Защищённое хранилище','Храните выбранные данные с шифрованием на устройстве.','КАК ЭТО РАБОТАЕТ','Три простых шага.','Никаких лишних контактов и автоотправки.','Введите номер','Выберите код страны, введите или вставьте номер.','Подготовьте сообщение','Напишите текст или используйте шаблоны и OCR.','Откройте чат','Перейдите в мессенджер и отправьте сами.','ПОДРОБНЕЕ','Практическое руководство.','Советы для курьеров, малого бизнеса и повседневных задач.','Читать руководство','Quick Message не связан с упомянутыми мессенджерами. Некоторые функции требуют Premium.','Конфиденциальность','Условия','Пауза','Играть','Создание','Библиотека','Шаблоны','Напоминания','Инструменты','Настройки'],
ja:['アプリ','機能','ガイド','Google Play','速く、シンプルに、自分で操作','連絡先に保存せず、','すぐにチャット。','一度だけ使う番号で連絡先を増やさずに。番号を入力してメッセージを準備し、お好みのメッセージアプリで続けられます。','Google Playで入手','画面を見る','Android向け・送信操作はご自身で行います','実際のアプリ画面','本物の画面をご紹介。','公開中のGoogle Playページから取得した6枚の画像です。','日々のやり取りに','少ない操作で、もっと便利に。','毎日のコミュニケーションを助ける機能。','クイック送信','番号を保存せずにチャットを開始。','テンプレート','よく使う返信を整理できます。','OCR読み取り','画像から電話番号を認識。','リマインダー','送信の予定を通知。送信は自分で行います。','安全な保管庫','選んだデータを端末で暗号化して保存。','使い方','かんたん3ステップ。','不要な連絡先の保存も自動送信もありません。','番号を入力','国番号を選び、番号を入力または貼り付け。','文章を準備','テキスト入力、テンプレート、OCRを活用。','チャットを開く','メッセージアプリを開き、自分で送信。','詳しく見る','使い方ガイド。','配達、店舗運営、日常で使えるヒント。','ガイドを読む','Quick Messageは独立したアプリであり、記載のサービスとは提携していません。一部の機能にはPremiumが必要です。','プライバシー','利用規約','停止','再生','作成','ライブラリ','動的テンプレート','リマインダー','ツール','設定'],
ko:['앱','기능','가이드','Google Play','빠르고 간단하게, 내가 제어','연락처 저장 없이,','바로 대화하세요.','일회성 번호로 연락처를 채우지 마세요. 번호를 입력하고 메시지를 준비한 뒤 원하는 메신저에서 이어가세요.','Google Play에서 받기','화면 살펴보기','Android용 · 메시지는 직접 전송합니다','실제 앱 화면','실제 화면을 만나보세요.','이 여섯 이미지는 공개된 Google Play 스크린샷입니다.','일상 속에서','더 적은 단계, 더 큰 편리함.','일상적인 소통을 돕는 실용적인 기능.','빠른 메시지','번호 저장 없이 대화를 시작하세요.','메시지 템플릿','자주 쓰는 답장을 정리하세요.','OCR 인식','이미지에서 전화번호를 인식합니다.','알림','메시지 시간을 기억하고 직접 보내세요.','보안 보관함','선택한 데이터를 기기에 암호화해 보관합니다.','사용 방법','간단한 세 단계.','불필요한 연락처 저장이나 자동 전송이 없습니다.','번호 입력','국가 번호를 선택하고 번호를 입력하세요.','메시지 준비','텍스트를 쓰거나 템플릿과 OCR을 사용하세요.','채팅 열기','메신저로 이동해 직접 전송하세요.','더 알아보기','실용적인 가이드.','배달, 소규모 사업자, 일상 사용자를 위한 팁.','가이드 읽기','Quick Message는 언급된 메신저와 제휴하지 않은 독립 앱입니다. 일부 기능은 Premium이 필요합니다.','개인정보','약관','일시정지','재생','작성','라이브러리','동적 템플릿','알림','도구','설정'],
zh:['应用','功能','指南','Google Play','快速、简洁、由你掌控','无需保存联系人，','直接开始聊天。','不必把临时号码存进通讯录。输入号码、准备消息，然后在所选聊天应用中继续。','从 Google Play 下载','查看界面','适用于 Android · 消息由你亲自发送','真实应用截图','看看真实界面。','这六张图片来自已发布的 Google Play 商店页面。','日常沟通','步骤更少，沟通更轻松。','实用工具让日常交流更简单。','快速发送','无需保存号码即可开始聊天。','消息模板','整理常用回复，重复使用。','OCR 识别','识别图片中的电话号码。','提醒','记住发送时间，由你亲自发送。','安全保险箱','在设备上加密保存选定资料。','如何使用','简单三步。','无需多余联系人，也不会自动发送。','输入号码','选择国家代码并输入或粘贴号码。','准备消息','撰写文本，或使用模板与 OCR。','打开聊天','转到所选聊天应用并手动发送。','了解更多','实用指南。','适合配送员、小商家和日常使用者的技巧。','阅读指南','Quick Message 是独立应用，与所提及的聊天服务无附属关系。部分功能需要 Premium。','隐私','条款','暂停','播放','撰写','资料库','动态模板','提醒','工具','设置'],
id:['Aplikasi','Fitur','Panduan','Google Play','Cepat, simpel, tetap terkendali','Tanpa simpan kontak.','Langsung mulai chat.','Jangan penuhi kontak dengan nomor sementara. Masukkan nomor, siapkan pesan, lalu lanjutkan di aplikasi chat pilihanmu.','Unduh di Google Play','Lihat layar','Untuk Android · Pesan dikirim sendiri','TANGKAPAN LAYAR ASLI','Lihat aplikasi aslinya.','Keenam gambar ini berasal dari halaman Google Play resmi.','UNTUK SEHARI-HARI','Lebih sedikit langkah.','Alat praktis untuk komunikasi harian.','Kirim cepat','Mulai chat tanpa menyimpan nomor.','Template pesan','Atur balasan yang sering digunakan.','Pemindaian OCR','Kenali nomor telepon dalam gambar.','Pengingat','Ingat kapan harus mengirim; kirim sendiri.','Brankas aman','Simpan data tertentu secara terenkripsi di perangkat.','CARA KERJA','Tiga langkah mudah.','Tanpa kontak yang tidak perlu atau kirim otomatis.','Masukkan nomor','Pilih kode negara, lalu ketik atau tempel nomor.','Siapkan pesan','Tulis pesan atau pakai template dan OCR.','Buka chat','Lanjutkan di aplikasi chat dan kirim sendiri.','PELAJARI LAGI','Panduan praktis.','Tips untuk kurir, usaha kecil, dan pengguna sehari-hari.','Baca panduan','Quick Message adalah alat independen, tidak berafiliasi dengan layanan chat yang disebut. Beberapa fitur memerlukan Premium.','Privasi','Ketentuan','Jeda','Putar','Tulis','Pustaka','Template dinamis','Pengingat','Alat','Setelan'],
hi:['ऐप','विशेषताएँ','गाइड','Google Play','तेज़, आसान, आपके नियंत्रण में','संपर्क सहेजे बिना,','सीधे बातचीत शुरू करें।','अस्थायी नंबरों से संपर्क सूची न भरें। नंबर दर्ज करें, संदेश तैयार करें और अपनी पसंद के मैसेजिंग ऐप में आगे बढ़ें।','Google Play से पाएँ','स्क्रीन देखें','Android के लिए · संदेश आप स्वयं भेजते हैं','असली ऐप स्क्रीनशॉट','वास्तविक ऐप देखें।','ये छह तस्वीरें प्रकाशित Google Play पेज से ली गई हैं।','रोज़मर्रा के लिए','कम चरण, अधिक सुविधा।','दैनिक संवाद को आसान बनाने वाले उपकरण।','त्वरित संदेश','नंबर सहेजे बिना चैट शुरू करें।','संदेश टेम्पलेट','बार-बार उपयोग किए जाने वाले जवाब व्यवस्थित करें।','OCR स्कैन','तस्वीरों से फ़ोन नंबर पहचानें।','रिमाइंडर','भेजने का समय याद रखें; संदेश स्वयं भेजें।','सुरक्षित वॉल्ट','चुना हुआ डेटा डिवाइस पर एन्क्रिप्ट रखें।','कैसे काम करता है','तीन आसान चरण।','अनावश्यक संपर्क या अपने-आप भेजे जाने वाले संदेश नहीं।','नंबर दर्ज करें','देश कोड चुनकर नंबर लिखें या पेस्ट करें।','संदेश तैयार करें','टेक्स्ट लिखें या टेम्पलेट और OCR इस्तेमाल करें।','चैट खोलें','मैसेजिंग ऐप खोलकर स्वयं संदेश भेजें।','और जानें','व्यावहारिक गाइड।','कूरियर, छोटे व्यवसाय और रोज़मर्रा की जरूरतों के टिप्स।','गाइड पढ़ें','Quick Message स्वतंत्र ऐप है और उल्लिखित मैसेजिंग सेवाओं से संबद्ध नहीं है। कुछ सुविधाओं के लिए Premium आवश्यक हो सकता है।','गोपनीयता','नियम','रोकें','चलाएँ','संदेश लिखें','लाइब्रेरी','डायनेमिक टेम्पलेट','रिमाइंडर','टूल','सेटिंग्स'],
vi:['Ứng dụng','Tính năng','Hướng dẫn','Google Play','Nhanh, đơn giản, chủ động','Không cần lưu số.','Bắt đầu trò chuyện.','Đừng thêm số tạm thời vào danh bạ. Nhập số, soạn tin nhắn và tiếp tục trong ứng dụng nhắn tin bạn chọn.','Tải trên Google Play','Xem giao diện','Dành cho Android · Bạn tự gửi tin nhắn','ẢNH CHỤP MÀN HÌNH THẬT','Xem ứng dụng thực tế.','Sáu hình này lấy từ trang Google Play đã phát hành.','DÙNG MỖI NGÀY','Ít thao tác hơn.','Công cụ thiết thực cho giao tiếp hàng ngày.','Gửi nhanh','Bắt đầu trò chuyện mà không lưu số.','Mẫu tin nhắn','Sắp xếp câu trả lời thường dùng.','Quét OCR','Nhận dạng số điện thoại trong ảnh.','Nhắc nhở','Ghi nhớ thời điểm gửi; bạn tự quyết định.','Kho bảo mật','Lưu dữ liệu đã chọn dưới dạng mã hóa trên thiết bị.','CÁCH HOẠT ĐỘNG','Ba bước đơn giản.','Không lưu liên hệ thừa, không tự động gửi.','Nhập số','Chọn mã quốc gia rồi nhập hoặc dán số.','Soạn tin','Viết văn bản hoặc dùng mẫu và OCR.','Mở trò chuyện','Tiếp tục trong ứng dụng nhắn tin và tự gửi.','TÌM HIỂU THÊM','Hướng dẫn thực tế.','Mẹo cho tài xế giao hàng, hộ kinh doanh và người dùng hàng ngày.','Đọc hướng dẫn','Quick Message là công cụ độc lập, không liên kết với các dịch vụ nhắn tin nêu trên. Một số tính năng cần Premium.','Quyền riêng tư','Điều khoản','Tạm dừng','Phát','Soạn','Thư viện','Mẫu động','Nhắc nhở','Công cụ','Cài đặt'],
ar:['التطبيق','الميزات','الدليل','Google Play','سريع وبسيط وتحت سيطرتك','دون حفظ الرقم.','ابدأ المحادثة.','لا تملأ جهات الاتصال بأرقام مؤقتة. أدخل الرقم، وجهّز رسالتك، ثم تابع في تطبيق المراسلة الذي تختاره.','حمّل من Google Play','استعرض الشاشات','لنظام Android · أنت من يرسل الرسالة','لقطات حقيقية للتطبيق','شاهد التطبيق كما هو.','هذه الصور الست مأخوذة من صفحة Google Play المنشورة.','للاستخدام اليومي','خطوات أقل. سهولة أكبر.','أدوات مفيدة للتواصل اليومي.','إرسال سريع','ابدأ محادثة دون حفظ الرقم.','قوالب الرسائل','نظّم الردود التي تستخدمها كثيرًا.','التعرّف الضوئي OCR','تعرّف على أرقام الهواتف في الصور.','التذكيرات','تذكر موعد الرسالة وأرسلها بنفسك.','الخزنة الآمنة','احفظ بيانات محددة مشفّرة على جهازك.','كيف يعمل','ثلاث خطوات بسيطة.','لا حفظ غير ضروري لجهات الاتصال ولا إرسال تلقائي.','أدخل الرقم','اختر رمز الدولة واكتب الرقم أو الصقه.','جهّز الرسالة','اكتب النص أو استخدم القوالب والتعرّف الضوئي.','افتح المحادثة','انتقل إلى تطبيق المراسلة وأرسل بنفسك.','اعرف المزيد','دليل عملي.','نصائح للمندوبين والمتاجر الصغيرة والاستخدام اليومي.','اقرأ الدليل','Quick Message تطبيق مستقل وغير تابع لخدمات المراسلة المذكورة. قد تتطلب بعض الميزات اشتراك Premium.','الخصوصية','الشروط','إيقاف','تشغيل','إنشاء','المكتبة','قوالب ديناميكية','التذكيرات','الأدوات','الإعدادات']
};
const shots=[
'https://play-lh.googleusercontent.com/uQDaQVM3Ch8ej-zspKB-YPMwfj5bxPBJs92-y0KOFPvGGYKeNN4zzK7tYN6kMdFcyLzXeJNZliHaiRbqg3nbR5I=w526-h296',
'https://play-lh.googleusercontent.com/eTR3dohNaqKUCyV4JmZrG_E5jW4eT9thH7dDG81tkZBuKexnVwaK1aVCatO-3tOwy6eWW9D_eWLVn80MwIoYVA=w526-h296',
'https://play-lh.googleusercontent.com/rsd9lOWgoJaqnmztALahSDsnMiVRlcMTPXOgJlENGo3uW_LMlQ3wZBcBS2h1RF6iZwvXP7cnqeIx2ip9k_eFIQ=w526-h296',
'https://play-lh.googleusercontent.com/oL7MVrP0pJb3r-F4tr6pAGXBFJe35BZ3AYQmGYo4t2s6et6Ky4U3y_ztFeh9RwIpGKkMpLhf2KL25uPGPx2SFA=w526-h296',
'https://play-lh.googleusercontent.com/u3Vvjdb5IdZFjxBUoQOzGNxO8yi543s8zjkYvx0BahCy1cBSEs5Bea2b1UtWcXUVVwGcBKFTj0_dvigtUvW78g=w526-h296',
'https://play-lh.googleusercontent.com/DWeY-F7tVvJEActZZE2Vr-zyq2wTkKS1TP4SKZDW99rzWGF42dDRlG55aoMhVlFNakAOJdL401at_bilR7gv=w526-h296'
];
const playUrl='https://play.google.com/store/apps/details?id=com.trickybogard.quickwa';
const root=(l)=>l==='tr'?'/':'/'+l+'/';
const guide=(l)=>l==='tr'?'/article-tr.html':l==='en'?'/article-en.html':'/'+l+'/guide.html';
const pageLang=()=>{const q=new URLSearchParams(location.search).get('lang');const d=document.documentElement.dataset.lang||'tr';return langs.includes(q)?q:(langs.includes(d)?d:'tr')};
const lang=pageLang();document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
const data=Object.fromEntries(keys.map((k,i)=>[k,raw[lang][i]]));
document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(data[k])el.textContent=data[k]});
document.querySelectorAll('[data-site-home]').forEach(el=>el.setAttribute('href',root(lang)));
document.querySelectorAll('[data-site-guide]').forEach(el=>el.setAttribute('href',guide(lang)));
document.querySelectorAll('[data-site-play]').forEach(el=>el.setAttribute('href',playUrl));
document.querySelectorAll('[data-site-privacy]').forEach(el=>el.setAttribute('href','/privacy.html?lang='+(lang==='tr'?'tr':'en')));
document.querySelectorAll('[data-site-terms]').forEach(el=>el.setAttribute('href','/terms.html?lang='+(lang==='tr'?'tr':'en')));
const select=document.getElementById('language');if(select){select.innerHTML=langs.map(l=>'<option value="'+l+'">'+names[l]+'</option>').join('');select.value=lang;select.addEventListener('change',()=>{let l=select.value;location.assign(document.body.dataset.page==='guide'?guide(l):root(l))})}
const path=location.pathname;
const q=new URLSearchParams(location.search).get('lang');
if(q&&langs.includes(q)&&document.body.dataset.page==='home'&&path!==root(q)&&path!==root(q)+'index.html'){location.replace(root(q));return}
if(q&&langs.includes(q)&&document.body.dataset.page==='guide'&&path!==guide(q)){location.replace(guide(q));return}
const track=document.getElementById('carouselTrack');
if(track){
 const labels=[data.cap1,data.cap2,data.cap3,data.cap4,data.cap5,data.cap6];
 const viewport=document.createElement('div');
 viewport.className='carousel-viewport';
 track.parentNode.insertBefore(viewport,track);
 viewport.appendChild(track);
 track.innerHTML=shots.map((src,i)=>'<div class="shot"><img loading="'+(i<2?'eager':'lazy')+'" width="526" height="296" src="'+src+'" alt="'+labels[i]+' — Quick Message Google Play"/><div class="shot-caption">'+labels[i]+'</div></div>').join('');
 const cards=Array.from(track.children);
 const dots=document.getElementById('carouselDots');
 const prev=document.getElementById('carouselPrev');
 const next=document.getElementById('carouselNext');
 const pause=document.getElementById('carouselPause');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const isRTL=document.documentElement.dir==='rtl';
 let active=0,paused=false,lastManual=0,autoDirection=1,hovered=false,focused=false;
 const visibleCount=()=>window.matchMedia('(max-width: 800px)').matches?1:2;
 const maxStart=()=>Math.max(0,cards.length-visibleCount());
 let dotButtons=[];
 function reposition(){
  active=Math.min(Math.max(active,0),maxStart());
  // Offset-based movement does not scroll the surrounding page.
  const distance=cards[0].offsetLeft-cards[active].offsetLeft;
  track.style.transform='translate3d('+distance+'px,0,0)';
  dotButtons.forEach((button,i)=>button.setAttribute('aria-current',i===active?'true':'false'));
  prev.setAttribute('aria-label',isRTL?'Next screenshot':'Previous screenshot');
  next.setAttribute('aria-label',isRTL?'Previous screenshot':'Next screenshot');
 }
 function goTo(index,manual=true){
  active=Math.min(Math.max(index,0),maxStart());
  if(manual){lastManual=Date.now();autoDirection=1}
  reposition();
 }
 function buildDots(){
  const count=maxStart()+1;
  dots.replaceChildren();
  dotButtons=[];
  for(let i=0;i<count;i++){
   const b=document.createElement('button');
   b.type='button';
   b.setAttribute('aria-label',(lang==='tr'?'Görsel ':'Screenshot ')+(i+1));
   b.addEventListener('click',()=>goTo(i));
   dots.appendChild(b);dotButtons.push(b);
  }
  reposition();
 }
 const advance=delta=>{const max=maxStart();goTo((active+delta+max+1)%(max+1))};
 prev.addEventListener('click',()=>advance(-1));
 next.addEventListener('click',()=>advance(1));
 pause.textContent=data.pause;
 pause.addEventListener('click',()=>{
  paused=!paused;lastManual=Date.now();
  pause.textContent=paused?data.resume:data.pause;
  pause.setAttribute('aria-pressed',String(paused));
 });
 track.addEventListener('keydown',e=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
  e.preventDefault();
  if(e.key==='Home')goTo(0);
  else if(e.key==='End')goTo(maxStart());
  else advance((e.key==='ArrowRight'?1:-1)*(isRTL?-1:1));
 });
 let startX=null;
 viewport.addEventListener('touchstart',e=>{startX=e.changedTouches[0]?e.changedTouches[0].clientX:null},{passive:true});
 viewport.addEventListener('touchend',e=>{
  if(startX===null||!e.changedTouches[0])return;
  const delta=e.changedTouches[0].clientX-startX;
  startX=null;
  if(Math.abs(delta)>45)advance((delta<0?1:-1)*(isRTL?-1:1));
 },{passive:true});
 viewport.addEventListener('pointerenter',()=>hovered=true);
 viewport.addEventListener('pointerleave',()=>hovered=false);
 track.addEventListener('focusin',()=>focused=true);
 track.addEventListener('focusout',()=>focused=false);
 let resizePending=false;
 window.addEventListener('resize',()=>{
  if(resizePending)return;
  resizePending=true;
  window.requestAnimationFrame(()=>{resizePending=false;buildDots()});
 },{passive:true});
 buildDots();
 if(!reduced.matches){
  window.setInterval(()=>{
   if(paused||hovered||focused||document.hidden||Date.now()-lastManual<12000)return;
   if(active>=maxStart())autoDirection=-1;
   else if(active===0)autoDirection=1;
   goTo(active+autoDirection,false);
  },6500);
 }
}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
window.QuickMessageLocales=langs;window.QuickMessageText=data;
})();
