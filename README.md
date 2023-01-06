# Inlämning för G krav

Denna inlämning innehåller en struktur för Express för att
starta projektet på port 4000. 

Det finns 4 olika routes med endpointen /books som är där datan
för böckerna ligger (db.json).

Jag använder JSON-server som laddats ner från npmjs.org
och nodemeon och kör dem samtidigt med ett paket som heter
concurrently från npmjs. Detta för att starta båda samtidigt.

Uppgiften testades med Rest Client och det går att läsa alla böcker,
lägga till en bok, uppdater och radera böcker.

Alla anrop till databas filen sker med hjälp av javascript apiet
(fetch).