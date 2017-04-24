<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,user-scalable=no" />
    <?php get_template_part('header-ogp'); ?>
    <title><?php bloginfo('name'); ?></title>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/main.css" />
    <link href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.4.0/velocity.min.js"></script>
    <?php wp_head(); ?>
  </head>
  <body>
    <?php include_once("analyticstracking.php"); ?>
    <div id="loading" class="loading">
      <div class="loading__header">Loading...</div>
      <div class="loading__area">
        <div class="loadingItem">
          <div class="loadingItem__name">WP Data</div>
          <div class="loadingItem__gauge">
            <div class="gauge__parent">
              <div id="progress--wp" class="gauge__progress"></div>
            </div>
          </div>
        </div>
        <div class="loadingItem">
          <div class="loadingItem__name">Resources</div>
          <div class="loadingItem__gauge">
            <div class="gauge__parent">
              <div id="progress--res" class="gauge__progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="wgl"></div>
    <div id="menuBtn" class="menuBtn">
      <div class="menuBtn__bar"></div>
      <div class="menuBtn__bar"></div>
      <div class="menuBtn__bar"></div>
    </div>
    <nav id="menu" class="menu">
      <div class="menu__area toggler">
        <div class="menu__header toggler__button">BLOG</div>
        <div id="menu__blog" class="toggler__area"></div>
      </div>
      <div class="menu__area toggler">
        <div class="menu__header toggler__button">WORKS</div>
        <div id="menu__works" class="toggler__area"></div>
      </div>
      <div class="menu__area">
        <div class="menu__header">
          <a href="https://www.instagram.com/ayumu_naga/" target="_blank">SKETCHES</a>
        </div>
      </div>
      <div class="menu__area">
        <div class="menu__header">
          <a href="<?php bloginfo('url');?>/profile/" target="_blank">PROFILE</a>
        </div>
      </div>
      <div class="menu__area toggler">
        <div class="menu__header toggler__button">LINKS</div>
        <div class="toggler__area">
          <ul class="menu__area__wrapper">
            <li class="links__item"><a href="https://twitter.com/ayumu_naga" target="_blank">
              <img src="<?php bloginfo('template_url'); ?>/asset/img/icon/tw.png" alt="twitter" />
            </a></li>
            <li class="links__item"><a href="https://www.facebook.com/ayumu.nagamatsu" target="_blank">
              <img src="<?php bloginfo('template_url'); ?>/asset/img/icon/fb.png" alt="facebook" />
            </a></li>
            <li class="links__item"><a href="https://github.com/nama-gatsuo" target="_blank">
              <img src="<?php bloginfo('template_url'); ?>/asset/img/icon/gh.png" alt="github" />
            </a></li>
            <li class="links__item"><a href="https://www.youtube.com/channel/UC4WGY_mHCT9RPXGnczRku2Q" target="_blank">
              <img src="<?php bloginfo('template_url'); ?>/asset/img/icon/yt.png" alt="youtube" />
            </a></li>
            <li class="links__item"><a href="https://www.instagram.com/ayumu_naga/" target="_blank">
              <img src="<?php bloginfo('template_url'); ?>/asset/img/icon/ig.png" alt="instagram" />
            </a></li>
            <li class="links__item"><a href="" target="_blank">
              <img src="<?php bloginfo('template_url'); ?>/asset/img/icon/sc.png" alt="soundcloud" />
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
  </body>
  <script src="<?php bloginfo('template_url'); ?>/dist/js/main.js"></script>
  <?php wp_footer(); ?>
</html>
