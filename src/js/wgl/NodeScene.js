import TWEEN from 'tween.js'
import $ from 'jquery'
import './libs/TrackballControls'
import NodeDAO from './NodeDAO'

// theme url
const template_url = "http://ayumu-nagamatsu.com/wp-content/themes/myportfolio_v2/";

export default class NodeScene {
    constructor(){

        this.NV = { kanji: [], alph: [], t: 0.0, n: 0, pv: null, lv: null, pm: null, lm: null };
        this.PAGE_IMAGE = new Array(PAGES.length);

        this.dao = new NodeDAO();
        this.preload();

    }

    preload(){
        let manager = new THREE.LoadingManager();
        let jl = new THREE.JSONLoader(manager);
        let tl = new THREE.TextureLoader(manager);

        jl.load(template_url + "asset/json/kanji.json", (geometry)=>{
            for (let i = 0; i < geometry.vertices.length; i++) {
                let v = geometry.vertices[i];
                v.multiplyScalar(20.0).applyAxisAngle(new THREE.Vector3(1,0,0), Math.PI / 2);
                v.z = 3.0 * Math.random();
                this.NV.kanji.push( v );
            }

            this.NV.n = geometry.vertices.length;
        });

        jl.load(template_url + "asset/json/alph.json", (geometry)=>{
            for (let i = 0; i < geometry.vertices.length; i++) {
                let v = geometry.vertices[i];
                v.multiplyScalar(10.0).applyAxisAngle(new THREE.Vector3(1,0,0), Math.PI / 2);
                v.z = 3.0 * Math.random();
                this.NV.alph.push( v );
            }
            this.NV.n = geometry.vertices.length;
        });

        for (let i = 0; i < PAGES.length; i++) {

            let url = PAGES[i]["_embedded"]["wp:featuredmedia"][0]["media_details"]["sizes"]["medium"]["source_url"];

            tl.load(url, (tex)=>{

                let aspect = tex.image.width / tex.image.height;

                let g = new THREE.PlaneBufferGeometry(12.0, 12.0 / aspect, 1, 1);
                let m = new THREE.MeshBasicMaterial({
                    map: tex, side: THREE.DoubleSide, transparent: true, opacity: 0.5
                });
                let mesh = new THREE.Mesh(g, m);

                this.PAGE_IMAGE[i] = mesh;

            });
        }

        manager.onProgress = (url, itemsLoaded, itemsTotal) => {
            $('#progress--res').css({
                width: 200 * itemsLoaded / itemsTotal
            });

        };

        manager.onLoad = () => {
            $('#loading').hide(100);
            this.init();
        };
    }

    init(){
        this.scene = new THREE.Scene();

        this.offset = 12;
        this.w = window.innerWidth - this.offset * 2;
        this.h = window.innerHeight - this.offset * 2;

        this.camera = new THREE.PerspectiveCamera(45, this.w / this.h, 0.1, 1000);
        this.camera.position.set(0, 0, 200);
        this.camera.lookAt(this.scene.position);

        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();

        // create blog node
        let blog = this.createHeaderNode("BLOG");
        blog.position.set(-70, Math.random()*20-10, Math.random()*20-10);
        this.scene.add(blog);

        for (let i = 0; i < POSTS.length; i++) {

            let canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 128;
            let ctxt = canvas.getContext('2d');

            ctxt.fillStyle = "#003355"; // color
            ctxt.fillRect(0, 0, 512, 128);

            ctxt.font = "400 24px 'Noto Sans Japanese'";
            ctxt.fillStyle = "#99ffdd"; // color
            ctxt.fillText(POSTS[i].title.rendered, 12, 64);

            ctxt.fillStyle = "#99ffdd";
            ctxt.font = "400 16px 'Noto Sans Japanese'";
            ctxt.fillText(this.getDate(POSTS[i]["date"]), 12, 96);

            // objの作成
            let tex = new THREE.CanvasTexture(canvas);
            let textGeo = new THREE.PlaneBufferGeometry(44.0, 11.0, 1, 1);
            let textMat = new THREE.MeshBasicMaterial({
                map: tex, side: THREE.DoubleSide, transparent: true, opacity: 0.5
            });
            let obj = new THREE.Mesh(textGeo, textMat);

            let p = this.createRandomSphereCoord();
            obj.position.set(
                p.x + blog.position.x,
                p.y + blog.position.y,
                p.z + blog.position.z
            );
            this.scene.add(obj);
            this.dao.addPost(obj, POSTS[i]["date"], POSTS[i]["link"]);

        }

        // create work node
        let works = this.createHeaderNode("WORKS");
        works.position.set(70, Math.random()*20-10, Math.random()*20-10);
        this.scene.add(works);

        for (let i = 0; i < PAGES.length; i++) {

            let canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            let ctxt = canvas.getContext('2d');

            ctxt.font = "400 18px 'Noto Sans Japanese'";
            ctxt.fillStyle = "#99ffdd"; // color
            let ts = PAGES[i].title.rendered.split(' ');
            for (let i = 0; i < ts.length; i++) {
                ctxt.fillText(ts[i], 12, 24 * (i+1));
            }

            let tex = new THREE.CanvasTexture(canvas);
            let textGeo = new THREE.PlaneBufferGeometry(12.0, 12.0, 1, 1);
            let textMat = new THREE.MeshBasicMaterial({
                map: tex, side: THREE.DoubleSide, transparent: true, opacity: 0.9
            });
            let text = new THREE.Mesh(textGeo, textMat);
            text.position.set(0, -10.0, 1);
            this.PAGE_IMAGE[i].add(text);

            let p = this.createRandomSphereCoord();
            this.PAGE_IMAGE[i].position.set(
                p.x + works.position.x,
                p.y + works.position.y,
                p.z + works.position.z
            );

            this.scene.add(this.PAGE_IMAGE[i]);

            this.dao.addPage(this.PAGE_IMAGE[i], PAGES[i]["categories"], PAGES[i]["link"]);

        }

        this.lines = new THREE.Object3D();

        let pages = this.dao.getAllPages();
        let blogs = this.dao.getAllPosts();

        for (let i = 0; i < blogs.length; i++) {

            let o = blogs[i];
            this.lines.add(this.createLine(blog.position, o.position));

        }

        for (let i = 0; i < pages.length; i++) {

            let o = pages[i];
            this.lines.add(this.createLine(works.position, o.position));

        }

        this.lines.add(this.createLine(this.scene.position, works.position));
        this.lines.add(this.createLine(this.scene.position, blog.position));
        this.scene.add(this.lines);

        this.createNameObject();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        this.renderer.setSize( this.w, this.h );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setClearColor( new THREE.Color( 0x000000 ) );
        let container = document.getElementById('wgl');
        container.appendChild(this.renderer.domElement);

        // controls
        this.controls = new THREE.TrackballControls(this.camera);
        this.controls.rotateSpeed = 0.7;
        this.controls.zoomSpeed = 0.5;
        this.controls.noPan = true;
        this.controls.minDistance = 10;
        this.controls.maxDistance = 1000;

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        container.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        container.addEventListener('click', this.onMouseClick.bind(this), false);

        this.animate();
    }

    createRandomSphereCoord(){
        let u = Math.random() * 2.0 - 1.0;
        let t = Math.random() * Math.PI * 2;
        let r = Math.random() * 40 + 30;

        let v = new THREE.Vector3(
            r * Math.sqrt(1 - u * u) * Math.cos(t),
            r * Math.sqrt(1 - u * u) * Math.sin(t),
            r * u
        );

        return v;
    }

    createHeaderNode(text){
        let c = document.createElement('canvas');
        c.width = 256;
        c.height = 128;
        let ct = c.getContext('2d');

        ct.font = "400 64px 'Noto Sans Japanese'";
        ct.fillStyle = "#99ffdd"; // color
        ct.fillText(text, 12, 64);

        let t = new THREE.CanvasTexture(c);

        let g = new THREE.PlaneBufferGeometry(16.0, 8.0, 1, 1);
        let m = new THREE.MeshBasicMaterial({
            map: t, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.5, side: THREE.DoubleSide
        });

        let mesh = new THREE.Mesh(g, m);

        return mesh;
    }

    animate(){

        requestAnimationFrame( this.animate.bind(this) );

        TWEEN.update();
        this.controls.update();
        this.updateName();
        this.updateLines();

        this.renderer.render(this.scene, this.camera);

    }

    createLine(v1, v2){

        let g = new THREE.Geometry();
        g.vertices.push(v1, v2);

        let m = new THREE.LineBasicMaterial({
            color: 0x99ffdd, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.5
        });

        let l = new THREE.Line(g, m);

        return l;
    }

    getDate(text){
        let date = new Date( text );
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();

        let t = year + " / " + month + " / " + day;

        return t;
    }

    createNameObject(){
        // points
        let pg = new THREE.BufferGeometry();
        this.NV.pv = new Float32Array(this.NV.n * 3);
        for (let i = 0; i < this.NV.n; i++) {
            this.NV.pv[i*3] = this.NV.alph[i].x;
            this.NV.pv[i*3+1] = this.NV.alph[i].y;
            this.NV.pv[i*3+2] = this.NV.alph[i].z;
        }

        pg.addAttribute('position', new THREE.BufferAttribute(this.NV.pv, 3).setDynamic(true));

        let pm = new THREE.LineBasicMaterial({
            color: 0x99ffdd, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.7
        });

        let p = new THREE.Line(pg, pm);
        this.NV.pm = p;
        this.scene.add(p);

        // lines
        let lg = new THREE.BufferGeometry();
        let lineNum = this.NV.n * this.NV.n;
        this.NV.lv = new Float32Array(lineNum * 3);
        lg.addAttribute('position', new THREE.BufferAttribute(this.NV.lv, 3).setDynamic(true));

        let lm = new THREE.LineBasicMaterial({
            color: 0x99ffdd, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.3, lineWidth: 1
        });

        let l = new THREE.LineSegments(lg, lm);
        this.NV.lm = l;
        this.scene.add(l);

        this.loopName();

    }

    loopName(){
        if (this.NV.t <= 0.0) {

            new TWEEN.Tween(this.NV)
            .to({t: 1.0}, 4000)
            .delay(1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(this.loopName.bind(this))
            .start();

        } else if (this.NV.t >= 1.0) {

            new TWEEN.Tween(this.NV)
            .to({t: 0.0}, 4000)
            .delay(1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onComplete(this.loopName.bind(this))
            .start();

        }

    }

    onWindowResize(){
        this.w = window.innerWidth - this.offset * 2;
        this.h = window.innerHeight - this.offset * 2;
        this.renderer.setSize(this.w, this.h);
        this.camera.aspect = this.w / this.h;
        this.camera.updateProjectionMatrix();
    }
    onMouseClick(e){
        for (let i = 0; i < this.dao.getLength(); i++) {

            let d = this.dao.data[i];

            if (d.isHover == true) {

                window.location.href = d.url;

            }

        }
    }
    onMouseMove(e){
        e.preventDefault();

        this.mouse.x = ((e.clientX - this.offset) / this.w) * 2 - 1;
        this.mouse.y = - ((e.clientY - this.offset) / this.h) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);

        let objs = this.raycaster.intersectObjects(this.dao.getAll());

        if (objs.length > 0) {
            this.updateMaterial(objs[0].object);
        } else {
            this.resetMaterial();
        }

    }
    resetMaterial(){
        for (let i = 0; i < this.dao.getLength(); i++) {

            let o = this.dao.getByIndex(i);
            let d = this.dao.data[i];

            if (d.isHover == true) {
                o.material.opacity = 0.5;
                o.material.needsUpdate = true;
                d.isHover = false;
            }

        }
    }
    updateMaterial(obj){

        let index = this.dao.findObj(obj);

        for (let i = 0; i < this.dao.getLength(); i++) {

            let o = this.dao.getByIndex(i);
            let d = this.dao.data[i];

            if (index == i) {

                d.isHover = true;

                o.material.opacity = 1.0;
                o.material.needsUpdate = true;

            } else {

                d.isHover = false;

                o.material.opacity = 0.5;
                o.material.needsUpdate = true;

            }

        }
    }

    updateName(){

        let vertexPos = 0;
        let numConnected = 0;

        for (let i = 0; i < this.NV.n; i++) {

            // update vertices
            this.NV.pv[i*3] = this.NV.alph[i].x * this.NV.t + this.NV.kanji[i].x * (1 - this.NV.t);
            this.NV.pv[i*3 + 1] = this.NV.alph[i].y * this.NV.t + this.NV.kanji[i].y * (1 - this.NV.t);
            this.NV.pv[i*3 + 2] = this.NV.alph[i].z * this.NV.t + this.NV.kanji[i].z * (1 - this.NV.t);

            for (let j = i + 1; j < this.NV.n; j++) {

                let dx = this.NV.pv[ i*3 ] - this.NV.pv[ j*3 ];
                let dy = this.NV.pv[i*3 + 1] - this.NV.pv[j*3 + 1];
                let dz = this.NV.pv[i*3 + 2] - this.NV.pv[j*3 + 2];
                let d = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (d < 3.0) {

                    this.NV.lv[ vertexPos++ ] = this.NV.pv[ i*3 ];
                    this.NV.lv[ vertexPos++ ] = this.NV.pv[ i*3+1 ];
                    this.NV.lv[ vertexPos++ ] = this.NV.pv[ i*3+2 ];

                    this.NV.lv[ vertexPos++ ] = this.NV.pv[ j*3 ];
                    this.NV.lv[ vertexPos++ ] = this.NV.pv[ j*3+1 ];
                    this.NV.lv[ vertexPos++ ] = this.NV.pv[ j*3+2 ];

                    numConnected++;
                }

            }

        }

        this.NV.lm.geometry.setDrawRange(0, numConnected * 2);
        this.NV.lm.geometry.attributes.position.needsUpdate = true;

        this.NV.pm.geometry.attributes.position.needsUpdate = true;
    }
    updateLines() {

        let ls = this.lines.children;
        for (let i = 0; i < ls.length - 2; i++) {
            ls[i].geometry.vertices[1] = this.dao.getByIndex(i).position;
            ls[i].geometry.verticesNeedUpdate = true;
        }

    }

    reset(){
        let is = this.dao.getActiveIndex();
        for (let i = 0; i < is.length; i++) {
            let obj = this.dao.getByIndex(is[i]);
            let startPos = this.dao.data[is[i]].start;

            new TWEEN.Tween(obj.position)
            .to({x: startPos.x, y: startPos.y, z: startPos.z}, 1900)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
        }
        this.dao.reset();
    }
    fetchAllPages(){
        this.reset();
        let objs = this.dao.getAllPages(true);
        this.alignCamera();
        this.alignPages(objs);
    }
    fetchPagesByCategory(cat){
        this.reset();
        let objs = this.dao.getPagesByCategory(cat, true);
        this.alignCamera();
        this.alignPages(objs);
    }
    fetchAllPosts(){
        this.reset();
        let objs = this.dao.getAllPosts(true);
        this.alignCamera();
        this.alignPages(objs);
    }
    fetchPostsByMonth(y, m){
        this.reset();
        let objs = this.dao.getPostsByMonth(y, m, true);
        this.alignCamera();
        this.alignPosts(objs);
    }
    fetchPostsByYear(y){
        this.reset();
        let objs = this.dao.getPostsByYear(y, true);
        this.alignCamera();
        this.alignPosts(objs);
    }
    alignCamera(){
        new TWEEN.Tween(this.camera.position)
        .to({x: 0, y: 0, z: 200}, 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

        new TWEEN.Tween(this.camera.up)
        .to({x: 0, y: 1, z: 0}, 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
    }
    alignPosts(objs){
        for (let i = 0; i < objs.length; i++) {

            let x, y, z;
            x = 0.0;
            y = (i % 5) * (-14.0) + 20.0;
            z = Math.floor(i / 5) * (-20.0) + 80.0;

            new TWEEN.Tween(objs[i].position)
            .to({ x: x, y: y, z: z }, 2000)
            .delay(Math.random()*1000)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        }
    }
    alignPages(objs){
        for (let i = 0; i < objs.length; i++) {

            let x, y, z;
            x = (i % 9 % 3) * 16.0 - 16.0;
            y = Math.floor(i % 9 / 3) * (-20.0) + 20.0;
            z = Math.floor(i / 9) * (-20.0) + 80.0;

            new TWEEN.Tween(objs[i].position)
            .to({ x: x, y: y, z: z }, 2000)
            .delay(Math.random()*1000)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        }
    }
}
