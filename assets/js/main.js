/**
 * Application Entry Point & Bilingual Experience Engine
 * Orchestrates i18n localization (Hindi/English), interactive festivity tabs,
 * royal modal dialog, countdown timer & smooth animations.
 * Compatible with all modern browsers, mobile devices & local file:// executions.
 */
(function () {
  'use strict';

  /* ==========================================================================
     Bilingual Translation Dictionary & State Management
     ========================================================================== */
  const WeddingI18n = {
    currentLang: 'en',
    
    translations: {
      en: {
        page_title: 'Suhani & Aayush | Royal Jaipur Wedding Invitation',
        nav_invitation: 'Invitation',
        nav_celebrations: 'Celebrations',
        nav_lang_toggle: 'हिन्दी',
        hero_eyebrow: 'Together with their families',
        hero_names: 'Suhani <span class="amp">&amp;</span> Aayush',
        hero_date: 'Saturday, 12 December 2026',
        hero_place: 'Agarsen Bhawan · Jhunjhunu, Rajasthan',
        hero_cta: 'Discover our celebration <span aria-hidden="true">↓</span>',
        invitation_eyebrow: 'A sacred invitation',
        invitation_title: 'A celebration woven<br>with love.',
        invitation_lead: 'With hearts full of joy and families full of blessings, we invite you to celebrate the beautiful beginning of Suhani and Aayush’s forever—surrounded by colour, music and the warmth of those we love.',
        countdown_eyebrow: 'The royal day awaits',
        countdown_days: 'Days',
        countdown_hours: 'Hours',
        countdown_minutes: 'Minutes',
        countdown_seconds: 'Seconds',
        celebrations_eyebrow: 'Ceremonies &amp; Festivities',
        celebrations_title: 'The wedding festivities',
        celebrations_lead: 'Nine cherished moments. One unforgettable celebration.',
        tab1_name: 'Mangal Paath',
        tab1_date: '08 Dec',
        tab2_name: 'Ganesh Pooja',
        tab2_date: '09 Dec',
        tab3_name: 'Haldi',
        tab3_date: '10 Dec',
        tab4_name: 'Mehendi',
        tab4_date: '10 Dec',
        tab5_name: 'Engagement',
        tab5_date: '11 Dec',
        tab6_name: 'Sangeet',
        tab6_date: '11 Dec',
        tab7_name: 'Mayra',
        tab7_date: '12 Dec',
        tab8_name: 'Baraat Swagat',
        tab8_date: '12 Dec',
        tab9_name: 'The Wedding',
        tab9_date: '12 Dec',
        meta_label_date: 'Date',
        meta_label_time: 'Time',
        meta_label_venue: 'Venue',
        panel_btn: 'View Venue Location <span aria-hidden="true">↗</span>',
        panel1_tag: '✦ Auspicious Ritual ✦',
        panel1_title: 'Shri Dadi Ji Mangal Paath',
        panel1_subtitle: 'Devotional chanting, sacred hymns &amp; Kuldevi blessings',
        panel1_date: 'Tuesday, 08 December 2026',
        panel1_time: 'Afternoon 02:00 PM onwards',
        panel1_venue: 'Khetan Home, Jhunjhunu',
        panel1_desc: 'Commencing our auspicious wedding festivities with the divine blessings of Shri Rani Sati Dadi Ji. Family and loved ones unite for an enchanting devotional Mangal Paath and spiritual bhajans to shower sacred grace upon the couple.',
        panel2_tag: '✦ Sacred Invocation ✦',
        panel2_title: 'Shree Ganesh Sthapana &amp; Pooja',
        panel2_subtitle: 'Invoking Lord Ganesha for auspicious beginnings',
        panel2_date: 'Wednesday, 09 December 2026',
        panel2_time: 'Morning 11:30 AM onwards',
        panel2_venue: 'Khetan Home, Jhunjhunu',
        panel2_desc: 'Invoking the supreme blessings of Vighnaharta Lord Ganesha with traditional Vedic chants, modak offerings, and Mangal Sthapana to ensure our wedding journey proceeds smoothly and joyfully.',
        panel3_tag: '✦ Auspicious Ritual ✦',
        panel3_title: 'Haldi Rasam',
        panel3_subtitle: 'Sunshine, smiles and sacred turmeric blessings',
        panel3_date: 'Thursday, 10 December 2026',
        panel3_time: 'Morning 11:30 AM onwards',
        panel3_venue: 'Khetan Home, Jhunjhunu',
        panel3_desc: 'A joyous morning draped in golden sunshine, marigold petals, and heartfelt blessings. Family and loved ones unite to apply fragrant haldi paste, sanctifying the bride and groom for their sacred journey ahead.',
        panel4_tag: '✦ Auspicious Celebration ✦',
        panel4_title: 'Mehendi Ki Raat',
        panel4_subtitle: 'An evening of intricate henna and musical memories',
        panel4_date: 'Thursday, 10 December 2026',
        panel4_time: 'Evening onwards',
        panel4_venue: 'Khetan Home, Jhunjhunu',
        panel4_desc: 'An enchanting celebration filled with the fragrant scent of fresh henna, folk melodies, and laughter. Watch the intricate mehndi bloom into deep crimson hues representing timeless love and prosperity.',
        panel5_tag: '✦ Auspicious Ceremony ✦',
        panel5_title: 'The Royal Engagement (Sagai)',
        panel5_subtitle: 'A sacred promise of forever &amp; ring ceremony',
        panel5_date: 'Friday, 11 December 2026',
        panel5_time: 'Evening 06:00 PM onwards',
        panel5_venue: 'Royal Banquet Hall, Agrasen Bhawan, Jhunjhunu',
        panel5_desc: 'An elegant and royal gathering where two souls pledge their eternal devotion. Suhani and Aayush exchange rings amidst family warmth, sacred Vedic blessings, and celebratory toasts.',
        panel6_tag: '✦ Auspicious Celebration ✦',
        panel6_title: 'Sangeet Sandhya',
        panel6_subtitle: 'Dance, laughter, dholak beats and a night to remember',
        panel6_date: 'Friday, 11 December 2026',
        panel6_time: 'Night 07:00 PM onwards',
        panel6_venue: 'Main Palace Stage, Agrasen Bhawan, Jhunjhunu',
        panel6_desc: 'A dazzling night of rhythm, celebration, and joy! Both families come together on stage to celebrate the union with electric performances, Rajasthani folk dances, and foot-tapping music.',
        panel7_tag: '✦ Traditional Shagun ✦',
        panel7_title: 'Shubh Mayra (Bhaat)',
        panel7_subtitle: 'Maternal blessings, royal chunri &amp; traditional shagun',
        panel7_date: 'Saturday, 12 December 2026',
        panel7_time: 'Morning 10:30 AM onwards',
        panel7_venue: 'Agrasen Bhawan Courtyard, Jhunjhunu',
        panel7_desc: 'A heartwarming Rajasthani tradition where maternal uncles and grandparents present auspicious Chunri, traditional shagun gifts, and heartfelt blessings to celebrate family lineage and love.',
        panel8_tag: '✦ Auspicious Welcome ✦',
        panel8_title: 'Shahi Baraat Swagat',
        panel8_subtitle: 'A royal Rajasthani welcome with ghodi, toran and shehnai',
        panel8_date: 'Saturday, 12 December 2026',
        panel8_time: 'Evening onwards',
        panel8_venue: 'Grand Palace Entrance, Agrasen Bhawan, Jhunjhunu',
        panel8_desc: 'A grand arrival marked by the majestic regal ghodi, joyous brass bands, showering of rose petals, the traditional Toran ritual, and the affectionate Milni ceremony uniting both families.',
        panel9_tag: '✦ The Sacred Union ✦',
        panel9_title: 'Shubh Vivaah (Saat Pheras)',
        panel9_subtitle: 'Sacred Vedic Agni Kund pheras &amp; our forever begins',
        panel9_date: 'Saturday, 12 December 2026',
        panel9_time: 'Auspicious Wedding Muhurat',
        panel9_venue: 'Vedic Mandapam, Agrasen Bhawan, Jhunjhunu',
        panel9_desc: 'Beneath the illuminated Mandapam and beside the sacred Agni Kund, Suhani and Aayush take the auspicious seven pheras and solemn vows, joining their hands and lives for eternity.',
        ctrl_prev: '<span aria-hidden="true">←</span> Previous',
        ctrl_next: 'Next <span aria-hidden="true">→</span>',
        footer_names: 'Suhani Khetan · Aayush Agarwal',
        footer_place: '12 December 2026 · Jhunjhunu, Rajasthan'
      },
      hi: {
        page_title: 'सुहानी एवं आयुष | शाही विवाह निमंत्रण',
        nav_invitation: 'शुभ निमंत्रण',
        nav_celebrations: 'उत्सव शृंखला',
        nav_lang_toggle: 'English',
        hero_eyebrow: 'सपरिवार सस्नेह निमंत्रण',
        hero_names: 'सुहानी <span class="amp">&amp;</span> आयुष',
        hero_date: 'शनिवार, 12 दिसंबर 2026',
        hero_place: 'अग्रसेन भवन · झुंझुनू, राजस्थान',
        hero_cta: 'शुभ विवाह उत्सव दर्शन <span aria-hidden="true">↓</span>',
        invitation_eyebrow: 'पावन निमंत्रण',
        invitation_title: 'स्नेह और परंपरा से सजी<br>एक पावन शुरुआत।',
        invitation_lead: 'हृदय में असीम आनंद और परिजनों के शुभाशीष के साथ, हम आपको सुहानी और आयुष के मंगल परिणय उत्सव में सादर आमंत्रित करते हैं—जहाँ परंपरा, संगीत और अपनों का स्नेह इस शुभ बेला को अविस्मरणीय बनाएगा।',
        countdown_eyebrow: 'शुभ विवाह वेला की प्रतीक्षा',
        countdown_days: 'दिन',
        countdown_hours: 'घंटे',
        countdown_minutes: 'मिनट',
        countdown_seconds: 'सेकंड',
        celebrations_eyebrow: 'मांगलिक उत्सव एवं रस्में',
        celebrations_title: 'शुभ विवाह उत्सव शृंखला',
        celebrations_lead: 'नौ पावन अवसर, एक अविस्मरणीय परिणय उत्सव।',
        tab1_name: 'मंगल पाठ',
        tab1_date: '08 Dec',
        tab2_name: 'गणेश पूजा',
        tab2_date: '09 Dec',
        tab3_name: 'हल्दी',
        tab3_date: '10 Dec',
        tab4_name: 'मेहंदी',
        tab4_date: '10 Dec',
        tab5_name: 'सगाई',
        tab5_date: '11 Dec',
        tab6_name: 'संगीत',
        tab6_date: '11 Dec',
        tab7_name: 'मायरा',
        tab7_date: '12 Dec',
        tab8_name: 'बारात स्वागत',
        tab8_date: '12 Dec',
        tab9_name: 'शुभ विवाह',
        tab9_date: '12 Dec',
        meta_label_date: 'दिनांक',
        meta_label_time: 'समय',
        meta_label_venue: 'स्थान',
        panel_btn: 'स्थान का नक्शा देखें <span aria-hidden="true">↗</span>',
        panel1_tag: '✦ पावन शुरुआत ✦',
        panel1_title: 'श्री दादी जी मंगल पाठ',
        panel1_subtitle: 'श्री राणी सती दादी जी का पावन गुणगान एवं मंगल पाठ',
        panel1_date: 'मंगलवार, 08 दिसंबर 2026',
        panel1_time: 'दोपहर 02:00 बजे से',
        panel1_venue: 'खेतान निवास, झुंझुनू',
        panel1_desc: 'शुभ विवाह उत्सव की पावन शुरुआत श्री राणी सती दादी जी के पावन आशीर्वाद से। आप सभी सपरिवार मंगल पाठ, मधुर भजनों एवं दादी जी के गुणगान में सम्मिलित होकर वर-वधू को अपना स्नेहिल शुभाशीष प्रदान करें।',
        panel2_tag: '✦ विघ्नहर्ता पूजन ✦',
        panel2_title: 'श्री गणेश स्थापना एवं पूजन',
        panel2_subtitle: 'प्रथम पूज्य भगवान श्री गणेश जी की पावन आराधना',
        panel2_date: 'बुधवार, 09 दिसंबर 2026',
        panel2_time: 'प्रातः 11:30 बजे से',
        panel2_venue: 'खेतान निवास, झुंझुनू',
        panel2_desc: 'समस्त मांगलिक कार्यों के निर्विघ्न संपन्न होने हेतु प्रथम पूज्य विघ्नहर्ता भगवान श्री गणेश जी की वैदिक मंत्रोच्चार, मोदक भोग एवं मंगल स्थापना के साथ विधि-विधान से पावन पूजा-अर्चना।',
        panel3_tag: '✦ शुभ शुरुआत ✦',
        panel3_title: 'हल्दी की रस्म',
        panel3_subtitle: 'पीत वर्ण, उल्लास और मंगल हल्दी का पावन लेपन',
        panel3_date: 'गुरुवार, 10 दिसंबर 2026',
        panel3_time: 'प्रातः 11:30 बजे से',
        panel3_venue: 'खेतान निवास, झुंझुनू',
        panel3_desc: 'मांगलिक उत्सवों की पावन और सुनहरी शुरुआत। परिजन और स्नेहीजन दूल्हा-दुल्हन को शुभ हल्दी का उबटन लगाकर मंगल लोकगीतों, गेंदे के फूलों और हंसी-खुशी के साथ आशीर्वाद प्रदान करेंगे।',
        panel4_tag: '✦ कला एवं परंपरा ✦',
        panel4_title: 'मेहंदी की रात',
        panel4_subtitle: 'रंग-बिरंगी हिना, सुरीले लोकगीत और सजीली शाम',
        panel4_date: 'गुरुवार, 10 दिसंबर 2026',
        panel4_time: 'सायंकाल से',
        panel4_venue: 'खेतान निवास, झुंझुनू',
        panel4_desc: 'राजस्थानी परंपरा से सजी एक मनमोहक शाम। ढोलक की मधुर थाप और स्वादिष्ट व्यंजनों के बीच, हथेलियों पर प्रेम और सौभाग्य के सुंदर मेहंदी के गहरे रंग सजेंगे।',
        panel5_tag: '✦ पावन संकल्प ✦',
        panel5_title: 'शुभ सगाई एवं मुद्रिका रस्म',
        panel5_subtitle: 'एक दूजे का हाथ थामने का पावन संकल्प',
        panel5_date: 'शुक्रवार, 11 दिसंबर 2026',
        panel5_time: 'सायं 06:00 बजे से',
        panel5_venue: 'रॉयल बैंक्वेट हॉल, अग्रसेन भवन, झुंझुनू',
        panel5_desc: 'एक गरिमामयी मांगलिक अवसर जहाँ सुहानी और आयुष एक-दूसरे को मुद्रिका पहनाकर जीवन भर साथ निभाने का संकल्प लेंगे और दोनों परिवारों का स्नेहिल आशीर्वाद प्राप्त करेंगे।',
        panel6_tag: '✦ सुरमई शाम ✦',
        panel6_title: 'संगीत संध्या',
        panel6_subtitle: 'नृत्य, हास-परिहास, ढोलक की थाप और यादगार शाम',
        panel6_date: 'शुक्रवार, 11 दिसंबर 2026',
        panel6_time: 'रात्रि 07:00 बजे से',
        panel6_venue: 'मुख्य मंच, अग्रसेन भवन, झुंझुनू',
        panel6_desc: 'परिजनों की शानदार नृत्य प्रस्तुतियाँ, मनमोहक संगीत और उल्लास से भरी एक रंगारंग संगीतमय शाम, जहाँ सुर और ताल के संग देर रात तक उत्सव का रंग जमेगा।',
        panel7_tag: '✦ ननिहाल का नेह ✦',
        panel7_title: 'शुभ मायरा (भात) रस्म',
        panel7_subtitle: 'मातृकुल का स्नेहिल सत्कार, चुनरी ओढ़ाव एवं शुभ शगुन',
        panel7_date: 'शनिवार, 12 दिसंबर 2026',
        panel7_time: 'प्रातः 10:30 बजे से',
        panel7_venue: 'अग्रसेन भवन प्रांगण, झुंझुनू',
        panel7_desc: 'राजस्थानी संस्कृति की अत्यंत भावपूर्ण एवं गौरवमयी परंपरा। ननिहाल पक्ष द्वारा पारंपरिक चुनरी ओढ़ाव, मंगल शगुन एवं स्नेहपूर्ण उपहारों के साथ लाडली को आशीर्वाद प्रदान किया जाएगा।',
        panel8_tag: '✦ शाही अगवानी ✦',
        panel8_title: 'शाही बारात स्वागत एवं तोरण',
        panel8_subtitle: 'सजीली घोड़ी, शहनाई की मंगल धुन और शाही आवभगत',
        panel8_date: 'शनिवार, 12 दिसंबर 2026',
        panel8_time: 'सायंकाल से',
        panel8_venue: 'मुख्य प्रवेश द्वार, अग्रसेन भवन, झुंझुनू',
        panel8_desc: 'शहनाई की गूंज, ढोल-नगाड़ों की थाप और पुष्प वर्षा के साथ वर पक्ष की शाही अगवानी, पारंपरिक तोरण रस्म और दोनों परिवारों का स्नेहपूर्ण मिलनी समारोह।',
        panel9_tag: '✦ पावन परिणय ✦',
        panel9_title: 'शुभ विवाह एवं पावन सप्तपदी',
        panel9_subtitle: 'पवित्र अग्नि कुंड के सात फेरे और सात मंगल वचन',
        panel9_date: 'शनिवार, 12 दिसंबर 2026',
        panel9_time: 'शुभ लग्न वेला (रात्रि)',
        panel9_venue: 'वैदिक मंडपम, अग्रसेन भवन, झुंझुनू',
        panel9_desc: 'पुष्पमंडित वैदिक मंडप में पवित्र अग्नि को साक्षी मानकर सुहानी और आयुष सात पावन फेरे एवं सात मंगल वचन लेंगे और आजीवन एक दूजे के होने का पावन संकल्प पूर्ण करेंगे।',
        ctrl_prev: '<span aria-hidden="true">←</span> पिछला उत्सव',
        ctrl_next: 'अगला उत्सव <span aria-hidden="true">→</span>',
        footer_names: 'सुहानी खेतान · आयुष अग्रवाल',
        footer_place: '12 दिसंबर 2026 · झुंझुनू, राजस्थान'
      }
    },

    applyLanguage: function (lang) {
      if (!this.translations[lang]) return;
      this.currentLang = lang;

      // Update HTML lang attribute
      document.documentElement.lang = lang;

      // Update Document Title
      if (this.translations[lang].page_title) {
        document.title = this.translations[lang].page_title;
      }

      // Update all elements with data-i18n
      const dict = this.translations[lang];
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });
    },

    toggleLanguage: function () {
      const targetLang = this.currentLang === 'en' ? 'hi' : 'en';
      this.applyLanguage(targetLang);
    }
  };

  /* ==========================================================================
     Language Selection Modal ("Always Ask" on Entry)
     ========================================================================== */
  function initLanguageModal() {
    const modal = document.getElementById('lang-modal');
    if (!modal) return;

    // Show modal automatically on page open
    modal.classList.remove('hidden');

    function closeModal() {
      modal.classList.add('hidden');
    }

    // Modal Option Buttons
    modal.querySelectorAll('.lang-option-card').forEach((btn) => {
      btn.addEventListener('click', function () {
        const chosenLang = this.getAttribute('data-lang');
        WeddingI18n.applyLanguage(chosenLang);
        closeModal();
      });
    });

    // Close on Escape Key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    // Close on click outside modal card
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     Navbar Language Switcher Button
     ========================================================================== */
  function initLanguageToggle() {
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', function () {
      WeddingI18n.toggleLanguage();
    });
  }

  /* ==========================================================================
     Interactive UI Modules
     ========================================================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      });
    });
  }

  function initFestivityTabs() {
    const tabsContainer = document.querySelector('.tabs-container');
    if (!tabsContainer) return;

    const tabs = Array.from(tabsContainer.querySelectorAll('.festivity-tab-btn'));
    const panels = Array.from(tabsContainer.querySelectorAll('.festivity-panel'));
    const dots = Array.from(tabsContainer.querySelectorAll('.dot-btn'));
    const prevBtn = tabsContainer.querySelector('.prev-btn');
    const nextBtn = tabsContainer.querySelector('.next-btn');

    if (tabs.length === 0 || panels.length === 0) return;

    let currentIndex = 0;

    function switchTab(newIndex, focusTab) {
      if (newIndex < 0) newIndex = tabs.length - 1;
      if (newIndex >= tabs.length) newIndex = 0;

      currentIndex = newIndex;

      // Update tabs
      tabs.forEach(function (tab, i) {
        const isSelected = i === currentIndex;
        tab.classList.toggle('active', isSelected);
        tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        tab.setAttribute('tabindex', isSelected ? '0' : '-1');
        if (isSelected && focusTab) {
          tab.focus();
        }
      });

      // Update panels
      panels.forEach(function (panel, i) {
        const isActive = i === currentIndex;
        panel.classList.toggle('active', isActive);
        if (isActive) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });

      // Update dots
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === currentIndex);
      });

      // Scroll active tab button smoothly into view in nav wrapper on mobile/overflow
      const activeTab = tabs[currentIndex];
      if (activeTab && activeTab.scrollIntoView) {
        activeTab.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }

    // Tab Button Clicks & Keyboard Navigation
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        switchTab(index, false);
      });

      tab.addEventListener('keydown', function (e) {
        let targetIndex = -1;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          targetIndex = (currentIndex + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          e.preventDefault();
          targetIndex = 0;
        } else if (e.key === 'End') {
          e.preventDefault();
          targetIndex = tabs.length - 1;
        }

        if (targetIndex !== -1) {
          switchTab(targetIndex, true);
        }
      });
    });

    // Dot indicators
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        switchTab(index, false);
      });
    });

    // Previous / Next Navigation Controls
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        switchTab(currentIndex - 1, false);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        switchTab(currentIndex + 1, false);
      });
    }
  }

  function initStickyNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    function handleScroll() {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  function initScrollspy() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.links a');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.05
    });

    sections.forEach((section) => observer.observe(section));
  }

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });
  }

  function initApp() {
    // 1. Initialize Bilingual Support & Modal
    initLanguageModal();
    initLanguageToggle();

    // 2. Initialize Real-Time Countdown for 12 December 2026, 4:00 PM IST
    if (window.WeddingCountdown && typeof window.WeddingCountdown.init === 'function') {
      window.WeddingCountdown.init('2026-12-12T16:00:00+05:30');
    }

    // 3. Initialize Enhanced Smooth Scrolling for in-page anchors
    initSmoothScroll();

    // 4. Initialize Interactive Wedding Festivities Tabs & Showcase
    initFestivityTabs();

    // 5. Initialize Sticky Frosted Navigation
    initStickyNav();

    // 6. Initialize Scrollspy Active Navigation Links
    initScrollspy();

    // 7. Initialize Viewport Scroll-Driven Reveals
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();

