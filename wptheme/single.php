<?php get_template_part('header'); ?>
<div id="page" class="page">
  <?php
  if (have_posts()) :
    while (have_posts()) :
      the_post();
  ?>
  <div class="page__header">
    <div class="page__header__date">
      <time datetime="<?php the_time('Y-m-d'); ?>" pubdate>
        <?php the_date(get_option('date_format')); ?>
      </time>
    </div>
    <h1 class="page__header__title"><?php the_title(); ?></h1>
  </div>
  <article class="page__content">
    <?php the_content(); ?>
  </article>
  <ul class="pager">
    <?php next_post_link('<li class="pager__button pager__button--next">%link<li>'); ?>
    <?php previous_post_link('<li class="pager__button pager__button--prev">%link</li>'); ?>
  </ul>
  <?php
    endwhile;
  endif;
  ?>
</div>
<?php get_template_part('footer'); ?>
