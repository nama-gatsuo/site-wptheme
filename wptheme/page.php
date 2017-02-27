<?php get_template_part('header'); ?>
<div id="page" class="page">
  <?php
  if (have_posts()) :
    while (have_posts()) :
      the_post();
  ?>
  <div class="page__header">
    <h1 class="page__header__title"><?php the_title(); ?></h1>
  </div>
  <article class="page__content">
    <?php the_content(); ?>
  </article>
  <ul class="pager">
  <?php
      $parent = $post->post_parent;
      if ($parent) :
        $menu_order = $post->menu_order;

        $next_post = $wpdb->get_row(
          "SELECT * FROM wp_posts
            WHERE post_parent = $parent
              AND post_status = 'publish'
              AND menu_order > $menu_order
            ORDER BY menu_order"
          );
        if($next_post) :
  ?>
    <li class="pager__button pager__button--next">
      <a href="<?php echo get_page_link($next_post->ID); ?>">
        &lt; Next
      </a>
    </li>
  <?php
        endif;

        $prev_post = $wpdb->get_row(
          "SELECT * FROM wp_posts
            WHERE post_parent = $parent
              AND post_status = 'publish'
              AND menu_order < $menu_order
            ORDER BY menu_order DESC"
          );
        if($prev_post) :
  ?>
    <li class="pager__button pager__button--prev">
      <a href="<?php echo get_page_link($prev_post->ID); ?>">
        Prev &gt;
      </a>
    </li>
  <?php
        endif;
      endif;
  ?>
  </ul>
  <?php
    endwhile;
  endif;
  ?>
</div>
<?php get_template_part('footer'); ?>
