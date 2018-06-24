<?php
add_theme_support('post-thumbnails');

register_nav_menus(array(
	'main_menu' => 'Main_Menu',
));

// return thumbnail url
function get_thumbnail_image_url() {
  $image_id = get_post_thumbnail_id();
  $image = wp_get_attachment_image_src($image_id, true);
  return $image;
}

// add category to page
add_action('init','add_categories_for_pages');

function add_categories_for_pages(){
	register_taxonomy_for_object_type('category', 'page');
}
add_action( 'pre_get_posts', 'nobita_merge_page_categories_at_category_archive' );

function nobita_merge_page_categories_at_category_archive( $query ) {
	if ( $query->is_category== true && $query->is_main_query() ) {
		$query->set('post_type', array( 'post', 'page', 'nav_menu_item'));
	}
}

?>
