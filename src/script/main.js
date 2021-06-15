/*jshint esversion: 6 */
import marked from 'marked';

/** Boilerplate **/

const INPUT = document.querySelector('.input');
const OUTPUT = document.querySelector('.output');

marked.setOptions({
  breaks: false,
  mangle: true,
  headerIds: true,
});

INPUT.addEventListener('keyup',  ($event) => {
  OUTPUT.innerHTML = marked($event.target.value);
});
