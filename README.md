# Inlämning för G

## Beskrivning

Denna uppgift innehåller en Express applikation med 4 olika endpoints *GET*, *POST*, *PUT* och *Delete* och databasen är en db.json fil som innehåller en array med books. Uppgiften har i syfte att uppnå G krav.

## För att köra applikation

Kör ``npm start`` och kommer då köras på port **4000**


----

Projektet innehåller en *.rest* fil för att testa alla endpoints. För att göra POST eller en PUT så behöver du skriva följande som **body** då ``Content-Type`` är  application/x-www-form-urlencoded

För **POST**

id=[ID]   
&title=Pippi Långstrump  
&author=Astrid Lindgren  
&published=2006

För **PUT**
  
&title= Nya titeln.   
&author=Nya författaren.  
&published=Nya publiceringsdatumet.

**node_modules** är inte med då det är ignorerat i *.gitignore* filen