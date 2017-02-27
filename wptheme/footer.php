<?php get_template_part('menu'); ?>
</body>
<script>
(function(){
  var isMenuOpen = false;

  var setHambuger = function() {
    var $btn = $('#menuBtn');
      $btn.hover(function(e){
          $(e.currentTarget).velocity({
              opacity: 1.0
          },{
              duration: 200
          });
      }, function(e) {
          $(e.currentTarget).velocity({
              opacity: 0.5
          },{
              duration: 200
          });
      });

      $btn.click(function() {
          if (isMenuOpen) closeMenu();
          else openMenu();
      });

  };
  var openMenu = function(){
    $('#menu').show().velocity({
      right: 0
    }, {
      duration: 200
    });
    isMenuOpen = true;
  };
  var closeMenu = function(){
    $('#menu').velocity({
      right: -300
    }, {
      duration: 200,
      onComplete: function(e) {
        $('#menu').hide();
      }
    });
    isMenuOpen = false;
  };
  var setToggler = function(){
    $('.toggler__button').click(function(e){
      var $t = $(e.currentTarget).parent();
      var $ta = $t.find('.toggler__area');
      $ta.toggle(200);
    });
  };

  window.onload = function() {
    setHambuger();
    setToggler();
  };
})();
</script>
<?php wp_footer(); ?>
</html>
