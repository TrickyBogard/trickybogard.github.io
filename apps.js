// TrickyBogard Apps product catalog. Add one new object per released app.
// Never commit API keys, private contact details or unpublished app claims.
window.TB_CATALOG={
  apps:[
    {
      id:'quick-message',status:'live',platform:'Android',
      icon:'/assets/quick-message-icon.png',
      playUrl:'https://play.google.com/store/apps/details?id=com.trickybogard.quickwa',
      privacyUrl:'/privacy.html',termsUrl:'/terms.html',
      tr:{
        name:'Quick Message',
        summary:'Rehbere kaydetmeden, farklı platformlarda hızlı iletişim.',
        detail:'WhatsApp, Telegram, Signal, Viber ve SMS seçenekleriyle sohbet başlatın. WeChat için pano aktarımı; mesaj şablonları, OCR ve hatırlatıcılarla günlük işlerinizi kolaylaştırın.',
        features:['Rehbere kişi eklemeden sohbet','Hazır mesajlar ve dinamik şablonlar','OCR, mesaj hatırlatıcıları ve şifreli kasa']
      },
      en:{
        name:'Quick Message',
        summary:'Faster communication across apps, without saving contacts.',
        detail:'Start chats with WhatsApp, Telegram, Signal, Viber or SMS. Use clipboard handoff for WeChat, plus templates, OCR and reminders to simplify everyday messaging.',
        features:['Start chats without saving contacts','Reusable messages and dynamic templates','OCR, message reminders and secure vault']
      }
    }
    // To add another RELEASED app, add a comma and another object here.
    // Use unique id, status:"live", a real playUrl, privacyUrl and termsUrl.
    // Provide tr and en names, summaries, details and feature arrays.
  ]
};