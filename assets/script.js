if(window.SimpleSlide){
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    time: 5000  // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: 'portifolio', // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    nav: true  // abiliata a navegação
  });
}

if(window.SimpleAnime){
  new SimpleAnime();
}