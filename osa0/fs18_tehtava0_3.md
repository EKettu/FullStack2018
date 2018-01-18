kayttaja->selain:
note left of selain
kayttaja kirjottaa osoiteriville
fullstack-exampleapp.herokuapp.com/notes
end note
selain->palvelin: GET fullstack-exampleapp.herokuapp.com/notes
palvelin->selain: status 200, sivun HTML-koodi

selain->palvelin: GET fullstack-exampleapp.herokuapp.com/main.css
palvelin->selain: status 200, sivun CSS-tiedosto

selain->palvelin: GET fullstack-exampleapp.herokuapp.com/main.js
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
 selain näyttää palvelimen palauttaman HTML:n,
 jossa on listattuna palvelimelle lisätyt muistiinpanot
end note