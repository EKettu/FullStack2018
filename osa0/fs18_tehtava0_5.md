kayttaja->selain:
note left of selain
kayttaja kirjottaa osoiteriville
fullstack-exampleapp.herokuapp.com/spa
end note

selain->palvelin: GET fullstack-exampleapp.herokuapp.com/spa
palvelin->selain: status 200, sivun HTML-koodi

selain->palvelin: GET fullstack-exampleapp.herokuapp.com/main.css
palvelin->selain: status 200, sivun CSS-tiedosto

selain->palvelin: GET fullstack-exampleapp.herokuapp.com/spa.js
palvelin->selain: status 200, sivun JavaScript-koodi

note left of palvelin
  selain suorittaa lataamansa JavaScript-koodin, joka lataa
  muistiinpanot JSON-muodossa
end note

selain->palvelin: GET fullstack-exampleapp.herokuapp.com/data.json
palvelin->selain: status 200, sivun muistiinpanot JSON-muodossa

note left of palvelin
  selain generoi data.json-tiedoston perusteella listan
  muistiinpanoista
end note

note left of selain
 selain nayttaa palvelimen palauttaman HTML:n,
 jossa on listattuna kaikki palvelimelle lisätyt muistiinpanot
end note