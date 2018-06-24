import $ from 'jquery'
import NodeScene from './wgl/NodeScene'

var loadCounter = 0;
const loadNum = 3;

var glScene;
var isMenuOpen = false;

var check = () => {
    loadCounter++;

    // progress update
    $('#progress--wp').css({
        width: 200 * loadCounter / loadNum
    });

    if (loadCounter == loadNum) {
        glScene = new NodeScene();
    }
};

var createBlogMenu = () => {
    // 最新月から一番古い月までボタン作成する
    // 記事のjsonデータからそれぞれの月の件数を算出する

    let latest = { y: null, m: null };
    let oldest = { y: null, m: null };

    let d = [];

    for (let i = 0; i < POSTS.length; i++) {
        let date = new Date(POSTS[i].date);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;

        d.push({ y: year, m: month });

        if (i == 0) {
            latest.y = year;
            latest.m = month;
        } else if (i == POSTS.length - 1) {
            oldest.y = year;
            oldest.m = month;
        }

    }

    let $mb = $('#menu__blog');

    for (let y = latest.y; y > oldest.y - 1; y--) {

        let dy = d.filter(item => {
            return item.y == y;
        });

        let startm;
        if (y == latest.y) startm = latest.m;
        else startm = 12;

        let endm;
        if (y == oldest.y) endm = oldest.m;
        else endm = 1;

        let $dy = $('<div/>');
        $dy.addClass("year__header " + y);
        $dy.text(y);
        $dy.click(()=>{
            glScene.fetchPostsByYear(y);
        });

        $mb.append($dy);

        let $ul = $('<ul/>');
        $ul.addClass('menu__area__wrapper');

        for (let m = startm; m > endm - 1; m--) {

            let dm = dy.filter(item => {
                return item.m == m;
            });

            let num = dm.length;

            let $lm = $('<li/>');
            $lm.addClass("year__month");

            if (num > 0) {
                let r, g, b;
                r = Math.floor(45 + 108 / 8 * num);
                g = Math.floor(76 + 179 / 8 * num);
                b = Math.floor(66 + 155 / 8 * num);

                $lm.css({
                    backgroundColor: 'rgb('+r+','+g+','+b+')',
                });
                $lm.addClass('isClickable');

                $lm.click(()=>{
                    glScene.fetchPostsByMonth(y, m);
                });
            }

            $lm.text(m);

            $ul.append($lm);

        }

        $mb.append($ul);

    }

};

var createWorksMenu = () => {
    // タグとその件数を抽出して表示する

    let $mw = $('#menu__works');
    let $ul = $('<ul/>');
    $ul.addClass('menu__area__wrapper');

    for (let i = 0; i < CATEGORIES.length; i++) {
        let name = CATEGORIES[i].name;
        let num = CATEGORIES[i].count;

        let $lc = $('<li/>');
        $lc.text(name);
        $lc.addClass('works__category');

        if (num > 0) {
            let r, g, b;
            r = Math.floor(45 + 108 / 8 * num);
            g = Math.floor(76 + 179 / 8 * num);
            b = Math.floor(66 + 155 / 8 * num);

            $lc.css({
                backgroundColor: 'rgb('+r+','+g+','+b+')',
            });
            $lc.addClass('isClickable');

            $lc.click(()=>{
                glScene.fetchPagesByCategory(CATEGORIES[i].id);
            });
        }

        $ul.append($lc);
    }

    $mw.append($ul);
};

var setHambuger = () => {

    let $btn = $('#menuBtn');
    $btn.hover((e) => {
        $(e.currentTarget).velocity({
            opacity: 1.0
        },{
            duration: 200
        });
    }, (e) => {
        $(e.currentTarget).velocity({
            opacity: 0.5
        },{
            duration: 200
        });
    });

    $btn.click(() => {
        if (isMenuOpen) closeMenu();
        else openMenu();
    });

};

var openMenu = () => {
    $('#menu').show().velocity({
        right: 0
    }, {
        duration: 200
    });
    isMenuOpen = true;
};
var closeMenu = () => {
    $('#menu').velocity({
        right: -300
    }, {
        duration: 200,
        onComplete: (e) => {
            $('#menu').hide();
        }
    });
    isMenuOpen = false;
};

var setToggler = () => {

    $('.toggler__button').click(e => {
        let $t = $(e.currentTarget).parent();
        let $ta = $t.find('.toggler__area');
        $ta.toggle(200);
    });

};

window.onload = () => {

    let data = { _wp_json_nonce: window.nonce };
    let url = "https://ayumu-nagamatsu.com/wp-json/wp/v2/pages?_embed&parent=7&orderby=menu_order&order=desc&per_page=100";
    let filter = "&fields=link,title,categories,_embedded.wp:featuredmedia";
    url += filter;

    $.getJSON(url, data).done((result) => {
        window.PAGES = result;
        check();
    });

    data = { _wp_json_nonce: window.nonce };
    url = "https://ayumu-nagamatsu.com/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=100";
    filter = "&fields=link,title,date";
    url += filter;

    $.getJSON(url, data).done((result) => {
        window.POSTS = result;
        createBlogMenu();
        check();
    });

    data = { _wp_json_nonce: window.nonce };
    url = "https://ayumu-nagamatsu.com/wp-json/wp/v2/categories?parent=9";

    $.getJSON(url, data).done((result) => {
        window.CATEGORIES = result;
        createWorksMenu();
        check();
    });

    setHambuger();
    setToggler();
};
