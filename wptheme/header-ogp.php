<!-- OGP -->
<meta property="og:title" content="<?php
if (!is_home()) :
  wp_title('|', true, 'right');
endif;
bloginfo('name');
?>" />
<meta property="og:type" content="<?php
if (is_home()) :
  echo "website";
else :
  echo "article";
endif;
?>" />
<meta property="og:url" content="<?php echo get_permalink(); ?>" />
<meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
<meta property="og:locale" content="ja_JP" />
<?php if (has_post_thumbnail()) :
  $img = get_thumbnail_image_url();
  ?>
<meta property="og:image" content="<?php echo $img[0]; ?>" />
<meta property="og:image:width" content="<?php echo $img[1]; ?>" />
<meta property="og:image:height" content="<?php echo $img[2]; ?>" />
<?php else : ?>
<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/screenshot.png" />
<?php endif; ?>
<meta property="og:description" content="<?php
if (is_single()) :
  $content = strip_tags($post->post_content);
  $content = mb_substr($content, 0, 90, 'UTF-8');
  $content = preg_replace('/¥s¥s+/','', $content);
  $content = preg_replace('/[¥r¥n+]/','', $content);
  $content = esc_attr($content) . ' ...';
  echo $content;
else :
  echo "This is a Portfolio website of Ayumu Nagamatsu.";
endif;
?>" />
<!-- OGP:TWITTER -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@ayumu_naga">
<meta name="twitter:creator" content="@ayumu_naga">
<meta name="twitter:domain" content="ayumu-nagamatsu.com">
