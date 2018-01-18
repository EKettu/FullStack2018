kayttaja->selain:
note left of selain
osoite fullstack-exampleapp.herokuapp.com/spa 
kayttaja kirjottaa muistiinpanon tekstikenttään ja painaa Tallenna-
nappia
end note

selain->palvelin: POST fullstack-exampleapp.herokuapp.com/new_note_spa
palvelin->selain: status 201 created

note left of palvelin
  selain pysyy samalla sivulla, ei muita HTTP-pyyntöjä
end note

note left of palvelin
  selain lisää uuden muistiinpanon listalle, vanhoja ei
  ladata uudelleen
end note

note left of selain
 selain nayttaa palvelimen palauttaman HTML:n,
 jossa on listattuna kaikki palvelimelle lisätyt muistiinpanot
end note