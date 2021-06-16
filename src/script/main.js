/*jshint esversion: 6 */
import marked from 'marked';
import highlight from 'highlight.js';


/** Boilerplate **/

const INPUT = document.querySelector('.input');
const OUTPUT = document.querySelector('.output');

marked.setOptions({
  breaks: true,
  mangle: true,
  headerIds: true,
  highlight: (code, lang) => {
    const language = highlight.getLanguage(lang) ? lang : 'plaintext';
    return highlight.highlight(code, {language}).value;
  }
});

INPUT.addEventListener('keyup',  ($event) => {
  OUTPUT.innerHTML = marked($event.target.value);
});
