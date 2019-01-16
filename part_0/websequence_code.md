## Code for Web Sequence Diagrams
Used at [WebSequenceDiagram.com](https://www.websequencediagrams.com/).

### 0.4 Saving a note to /notes

```
title FS@HY exercise 0.4

user->browser: Text typed into the field, then click 'Talleta'
browser->server: POST form information
note left of server
Server updates the list with the new item, and tells (i.e. redirects)
the browser back to the page to get it refreshed.
end note
server->browser: STATUS 302 (Found), REDIRECT to https://fullstack-exampleapp.herokuapp.com/notes
note right of browser
Browser follows the redirect and requests the page anew.
end note
browser->server: GET https://fullstack-exampleapp.herokuapp.com/notes
server->browser: STATUS 200, HTML for the page
note right of browser
HTML needs CSS and JS file
end note
browser->server: GET https://fullstack-exampleapp.herokuapp.com/main.css
server->browser: STATUS 200, main.css
browser->server: GET https://fullstack-exampleapp.herokuapp.com/main.js
server->browser: STATUS 200, main.js
note right of browser
main.js needs JSON file
end note
browser->server: GET https://fullstack-exampleapp.herokuapp.com/data.json
server->browser: STATUS 200, data.json
note left of browser
Browser renders the page with the information from the server.
```

### 0.5 Opening /spa
```
title FS@HY exercise 0.5

user->browser: Request page
note right of user
User types address https://fullstack-exampleapp.herokuapp.com/spa
end note
browser->server: GET https://fullstack-exampleapp.herokuapp.com/spa
server->browser: STATUS 200, HTML for the page
note right of browser
HTML needs CSS and JS file
end note
browser->server: GET https://fullstack-exampleapp.herokuapp.com/main.css
server->browser: STATUS 200, main.css
browser->server: GET https://fullstack-exampleapp.herokuapp.com/spa.js
server->browser: STATUS 200, spa.js
note right of browser
spa.js needs JSON file
end note
browser->server: GET https://fullstack-exampleapp.herokuapp.com/data.json
server->browser: STATUS 200, data.json
note left of browser
Browser renders the page with the information from the server.
```

### 0.6 Saving a note in /spa
```
title FS@HY exercise 0.6

user->browser: Type a note and click 'Talleta'
note left of browser:
JS adds item to the list used by browser.
Browser renders the new note to the list on the page.
end note
browser->server: POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
note left of server:
The server adds the item to the list on the server.
end note
server->browser: STATUS 201 (Created)
```
