// ?  ----------- TYPEWRITER ------------------
const typeWriter = document.getElementById('typewriter-text');
const text = 'Projeto da <br> comunidade Codelândia';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
// ?  ----------- TYPEWRITER ------------------