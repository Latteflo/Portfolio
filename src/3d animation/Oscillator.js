/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
//import * as PIXI from 'pixi.js'
import "./index.scss";
import * as THREE from "three";


 const Ociliator =() => {
        
let mouse = new THREE.Vector3(0, 0, 1);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

function setPosition(array) {
  for (let i = 0; i < 150; i++) {
    const i3 = i * 3;

    const x = (i / (150 - 1) - 0.5) * 3;
    const y = Math.sin(i / 10.5) * 0.5;

    array[i3] = x;
    array[i3 + 1] = y;
    array[i3 + 2] = 1;
  }
  return array;
}

// Mouse Move
function handleMouseMove(event) {
  mouse.x = (event.clientX / sizes.width) * 2 - 1;
  mouse.y = -(event.clientY / sizes.height) * 2 + 1;
  mouse.z = 1;

  // convert screen coordinates to threejs world position
  // https://stackoverflow.com/questions/13055214/mouse-canvas-x-y-to-three-js-world-x-y-z

  var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
  vector.unproject(camera);
  var dir = vector.sub(camera.position).normalize();
  var distance = -camera.position.z / dir.z;
  var pos = camera.position.clone().add(dir.multiplyScalar(distance));

  mouse = pos;
}

window.addEventListener("mousemove", handleMouseMove);

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const geometry = new THREE.BufferGeometry();

const material = new THREE.MeshBasicMaterial({
  color: 0xffff00
});

const positions = setPosition(new Float32Array(150 * 3));

geometry.addAttribute("position", new THREE.BufferAttribute(positions, 3));

const points = new THREE.Points(geometry, material);
scene.add(points);

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.z = 5;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const tick = () => {
  renderer.render(scene, camera);

  for (let i = 0; i < 150; i++) {
    const i3 = i * 3;
    const previous = (i - 1) * 3;

    if (i3 === 0) {
      positions[0] = mouse.x;
      positions[1] = mouse.y + 0.05;
      positions[2] = mouse.z;
    } else {
      const currentPoint = new THREE.Vector3(
        positions[i3],
        positions[i3 + 1],
        positions[i3 + 2]
      );

      const previousPoint = new THREE.Vector3(
        positions[previous],
        positions[previous + 1],
        positions[previous + 2]
      );

      const lerpPoint = currentPoint.lerp(previousPoint, 0.9);

      positions[i3] = lerpPoint.x;
      positions[i3 + 1] = lerpPoint.y;
      positions[i3 + 2] = mouse.z;
    }
  }
  geometry.attributes.position.needsUpdate = true;

  window.requestAnimationFrame(tick);
};
tick();
 return(
  <div id="app">
  <canvas class="webgl"></canvas>
</div>
 )}

export default Ociliator;





//const initOciliator = (remove) => {


//  if(!remove) {

//      let ctx,
//          hue,
//          form,
//          buffer,
//          target = {},
//          tendrils = [],
//          settings = {};

//      settings.debug = false;
//      settings.friction = 0.5;
//      settings.trails = 30;
//      settings.size = 50;
//      settings.dampening = 0.25;
//      settings.tension = 0.98;

//      Math.TWO_PI = Math.PI * 2;

//      // ========================================================================================
//      // Oscillator
//      // ----------------------------------------------------------------------------------------

//      function Oscillator(options) {
//          this.init(options || {});
//      }

//      Oscillator.prototype = (function () {

//          var value = 0;

//          return {

//              init: function (options) {
//                  this.phase = options.phase || 0;
//                  this.offset = options.offset || 0;
//                  this.frequency = options.frequency || 0.001;
//                  this.amplitude = options.amplitude || 1;
//              },

//              update: function () {
//                  this.phase += this.frequency;
//                  value = this.offset + Math.sin(this.phase) * this.amplitude;
//                  return value;
//              },

//              value: function () {
//                  return value;
//              }
//          };

//      })();

//      // ========================================================================================
//      // Tendril
//      // ----------------------------------------------------------------------------------------

//      function Tendril(options) {
//          this.init(options || {});
//      }

//      Tendril.prototype = (function () {

//          function Node() {
//              this.x = 0;
//              this.y = 0;
//              this.vy = 0;
//              this.vx = 0;
//          }

//          return {

//              init: function (options) {

//                  this.spring = options.spring + (Math.random() * 0.1) - 0.05;
//                  this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
//                  this.nodes = [];

//                  for (var i = 0, node; i < settings.size; i++) {

//                      node = new Node();
//                      node.x = target.x;
//                      node.y = target.y;

//                      this.nodes.push(node);
//                  }
//              },

//              update: function () {

//                  var spring = this.spring,
//                      node = this.nodes[0];

//                  node.vx += (target.x - node.x) * spring;
//                  node.vy += (target.y - node.y) * spring;

//                  for (var prev, i = 0, n = this.nodes.length; i < n; i++) {

//                      node = this.nodes[i];

//                      if (i > 0) {

//                          prev = this.nodes[i - 1];

//                          node.vx += (prev.x - node.x) * spring;
//                          node.vy += (prev.y - node.y) * spring;
//                          node.vx += prev.vx * settings.dampening;
//                          node.vy += prev.vy * settings.dampening;
//                      }

//                      node.vx *= this.friction;
//                      node.vy *= this.friction;
//                      node.x += node.vx;
//                      node.y += node.vy;

//                      spring *= settings.tension;
//                  }
//              },

//              draw: function () {

//                  var x = this.nodes[0].x,
//                      y = this.nodes[0].y,
//                      a, b;

//                  ctx.beginPath();
//                  ctx.moveTo(x, y);

//                  for (var i = 1, n = this.nodes.length - 2; i < n; i++) {

//                      a = this.nodes[i];
//                      b = this.nodes[i + 1];
//                      x = (a.x + b.x) * 0.5;
//                      y = (a.y + b.y) * 0.5;

//                      ctx.quadraticCurveTo(a.x, a.y, x, y);
//                  }

//                  a = this.nodes[i];
//                  b = this.nodes[i + 1];

//                  ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
//                  ctx.stroke();
//                  ctx.closePath();
//              }
//          };

//      })();

//      // ----------------------------------------------------------------------------------------

//      function init(event) {

//          document.removeEventListener('mousemove', init);
//          document.removeEventListener('touchstart', init);

//          document.addEventListener('mousemove', mousemove);
//          document.addEventListener('touchmove', mousemove);
//          document.addEventListener('touchstart', touchstart);

//          mousemove(event);
//          reset();
//          loop();
//      }

//      function reset() {

//          tendrils = [];

//          for (var i = 0; i < settings.trails; i++) {

//              tendrils.push(new Tendril({
//                  spring: 0.45 + 0.025 * (i / settings.trails)
//              }));
//          }
//      }


//      function randomIntFromInterval(min, max) { // min and max included
//          return Math.floor(Math.random() * (max - min + 1) + min);
//      }

//      var color = randomIntFromInterval(1, 2);

//      function loop() {

//          if (!ctx.running) return;

//          ctx.globalCompositeOperation = 'source-over';
//          ctx.fillStyle = '#1D1D1D';
//          ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//          ctx.globalCompositeOperation = 'lighter';
//          ctx.strokeStyle = 'hsla(346,98%,56%,0.25)';
//          ctx.lineWidth = 1;


//          if (color == 1) {
//              ctx.strokeStyle = 'hsla(346,98%,56%,0.25)';
//          } else {
//              ctx.strokeStyle = 'hsla(171,98%,56%,0.25)';
//          }


//          for (var i = 0, tendril; i < settings.trails; i++) {
//              tendril = tendrils[i];
//              tendril.update();
//              tendril.draw();
//          }

//          ctx.frame++;
//          requestAnimationFrame(loop);
//      }

//      function resize() {
//          ctx.canvas.width = window.innerWidth;
//          ctx.canvas.height = window.innerHeight;
//      }

//      function start() {
//          if (!ctx.running) {
//              ctx.running = true;
//              loop();
//          }
//      }

//      function stop() {
//          ctx.running = false;
//      }

//      function mousemove(event) {
//          if (event.touches) {
//              target.x = event.touches[0].pageX;
//              target.y = event.touches[0].pageY;
//          } else {
//              target.x = event.clientX
//              target.y = event.clientY;
//          }
//          event.preventDefault();
//      }

//      function touchstart(event) {
//          if (event.touches.length == 1) {
//              target.x = event.touches[0].pageX;
//              target.y = event.touches[0].pageY;
//          }
//      }

//      //function keyup(event) {

//      //    switch (event.keyCode) {
//      //        case 32:
//      //            save();
//      //            break;
//      //        default:
//      //         console.log(event.keyCode);
//      //    }
//      //}

//      //function letters(id) {

//      //    var el = document.getElementById(id),
//      //        letters = el.innerHTML.replace('&amp;', '&').split(''),
//      //        heading = '';

//      //    for (var i = 0, n = letters.length, letter; i < n; i++) {
//      //        letter = letters[i].replace('&', '&amp');
//      //        heading += letter.trim() ? '<span class="letter-' + i + '">' + letter + '</span>' : '&nbsp;';
//      //    }

//      //    el.innerHTML = heading;
//      //    setTimeout(function () {
//      //        el.className = 'transition-in';
//      //    }, (Math.random() * 500) + 500);
//      //}

//      // eslint-disable-next-line no-unused-vars
//      function save() {

//          if (!buffer) {

//              buffer = document.createElement('canvas');
//              // eslint-disable-next-line no-restricted-globals
//              buffer.width = screen.availWidth;
//              buffer.height = screen.availHeight;
//              buffer.ctx = buffer.getContext('2d');

//              form = document.createElement('form');
//              form.method = 'post';
//              form.input = document.createElement('input');
//              form.input.type = 'hidden';
//              form.input.name = 'data';
//              form.appendChild(form.input);

//              document.body.appendChild(form);
//          }

//          buffer.ctx.fillStyle = 'rgba(8,5,16)';
//          buffer.ctx.fillRect(0, 0, buffer.width, buffer.height);
//          let canvas = document.getElementById('canvas');
//          buffer.ctx.drawImage(canvas,
//              Math.round(buffer.width / 2 - canvas.width / 2),
//              Math.round(buffer.height / 2 - canvas.height / 2)
//          );


//          window.open(buffer.toDataURL(), 'wallpaper', 'top=0,left=0,width=' + buffer.width + ',height=' + buffer.height);

//          // form.input.value = buffer.toDataURL().substr(22);
//          // form.submit();
//      }

//      window.requestAnimationFrame = (function () {
//          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (fn) {
//              window.setTimeout(fn, 1000 / 60)
//          };
//      })();


//      ctx = document.getElementById('canvas').getContext('2d');

//      ctx.running = true;
//      ctx.frame = 1;


//      //hue = new Oscillator({
//      //    phase: Math.random() * Math.TWO_PI,
//      //    amplitude: 85,
//      //    frequency: 0.0015,
//      //    offset: 285
//      //});


//      document.addEventListener('mousemove', init);
//      document.addEventListener('touchstart', init);
//      document.body.addEventListener('orientationchange', resize);
//      window.addEventListener('resize', resize);
//      window.addEventListener('focus', start);
//      window.addEventListener('blur', stop);

//      resize();

//  } else {


//      // eslint-disable-next-line no-undef
//      document.body.removeEventListener('orientationchange', resize);
//      window.removeEventListener('resize', resize);
//      // eslint-disable-next-line no-undef
//      window.removeEventListener('focus', start);
//      window.removeEventListener('blur', stop);

//      document.removeEventListener('mousemove', mousemove);
//      document.removeEventListener('touchmove', mousemove);
//      document.removeEventListener('touchstart', touchstart);
//  }}
//    export default initOciliator;



