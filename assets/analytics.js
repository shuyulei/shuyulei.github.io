(function () {
  'use strict';
  var measurementId = 'G-9BVPZNJX72';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (/Shuyu-Lei-CV\.pdf(?:$|[?#])/i.test(href)) {
      window.gtag('event', 'cv_download', {
        file_name: 'Shuyu-Lei-CV.pdf',
        link_url: link.href,
        link_text: (link.textContent || '').trim()
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var footerLinks = document.querySelector('.footer-bottom div');
    if (!footerLinks || footerLinks.querySelector('[data-privacy-link]')) return;
    var privacy = document.createElement('a');
    privacy.href = 'privacy.html';
    privacy.textContent = 'Privacy';
    privacy.dataset.privacyLink = '';
    footerLinks.appendChild(privacy);
  });
}());
