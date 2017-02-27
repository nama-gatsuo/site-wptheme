<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php get_template_part('header-ogp'); ?>
  <title><?php
    if (!is_home()):
      wp_title('|', true, 'right');
    endif;
    bloginfo('name'); ?></title>
  <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/dist/css/main.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.4.0/velocity.min.js"></script>
  <?php wp_head(); ?>
</head>
<body>
<?php include_once("analyticstracking.php") ?>
