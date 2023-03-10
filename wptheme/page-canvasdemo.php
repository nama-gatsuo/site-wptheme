<?php 
/*
Template Name: CanvasDemo
*/
?>
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
    <style>
        * {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
  </style>
  <?php wp_head(); ?>
</head>
<body>
<?php include_once("analyticstracking.php"); ?>
    <div id="canvas-container"></div>
</body>
<?php wp_footer(); ?>
</html>

