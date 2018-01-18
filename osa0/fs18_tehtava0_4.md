kayttaja->selain:
note left of selain
osoite fullstack-exampleapp.herokuapp.com/notes 
kayttaja kirjottaa muistiinpanon tekstikenttään ja painaa Tallenna-
nappia
end note
selain->palvelin: POST fullstack-exampleapp.herokuapp.com/new_note
palvelin->selain: status 302, uudelleenohjauspyyntö

note left of palvelin
  palvelin kehoittaa selainta tekemaan uuden GET-pyynnon 
  osoitteeseen notes
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
  muistiinpanoista, mukaan on lisätty uusi muistiinpano
end note

note left of selain
 selain nayttaa palvelimen palauttaman HTML:n,
 jossa on listattuna kaikki palvelimelle lisätyt muistiinpanot
end note