'use strict';
{
  // -------------------------- 変数の宣言 --------------------------
  let header = "";
  let footer = "";
  // -------------------------- 定数の宣言 --------------------------
  const headerText = '<div class="container  --spacebetween"><h1 id="header__logo"><a href="index.html"><img src="images/header_logo.svg" alt="神奈川のWeb制作会社｜Flash Front Times"></a></h1><nav id="header__nav"><ul class="--spacebetween"><li class="nav__li"><a href="index.html#">HOME</a></li><li class="nav__li"><a href="index.html#about_wrapper">ABOUT</a></li><li class="nav__li"><a href="index.html#service_wrapper">SERVICE</a></li><li class="nav__li"><a href="index.html#flow_wrapper">FLOW</a></li><li class="nav__li"><a href="index.html#works_wrapper">WORKS</a></li><li class="nav__li"><a href="company.html">COMPANY</a></li><li class="nav__li"><a href="recruit.html">RECRUIT</a></li><li class="nav__li"><a href="contact.html">CONTACT</a></li></ul></nav></div>'
  const footerText = '<div class="container"><div id="footer__left" class="--spacebetween"><h2 id="footer__logo"><a href="index.html#"><img src="images/footer_logo.svg" alt="神奈川のWeb制作会社｜Flash Front Times"></a></h2><ul id="footer__info"><li>株式会社 Flash Front Times</li><li id="footer__info--big">ACCESS</li><li>〒252-0303<br>神奈川県相模原市南区相模大野８丁目４ー10<br>サウスフロント相模大野ビル３-５F</li><li>TEL：042-767-2722<br>FAX：042-767-2755</li></ul></div><nav id="footer__right"><ul id="footer__nav"><li class="footer__nav__li"><a href="index.html#">HOME</a></li><li class="footer__nav__li"><a href="index.html#about_wrapper">ABOUT</a></li><li class="footer__nav__li"><a href="index.html#service_wrapper">SERVICE</a></li><li class="footer__nav__li"><a href="index.html#flow_wrapper">FLOW</a></li><li class="footer__nav__li"><a href="index.html#works_wrapper">WORKS</a></li><li class="footer__nav__li"><a href="company.html">COMPANY</a></li><li class="footer__nav__li"><a href="recruit.html">RECRUIT</a></li><li class="footer__nav__li"><a href="contact.html">CONTACT</a></li></ul></nav><p id="footer__copyright"><small>All Rights Reserved &copy; Flash Front Times Inc.</small></p></div>'
  // -------------------------- 処理の実行 --------------------------
  header = document.querySelector('header');
  header.innerHTML = headerText;
  footer = document.querySelector('footer');
  footer.innerHTML = footerText;
}