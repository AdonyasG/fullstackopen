sequenceDiagram
    participant User
    participant Browser
    participant Server
    participant Database

    User->>Browser: Enters text into the note text field
    User->>Browser: Clicks the Save button
    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Server
    Server->>Database: Insert new note into the database
    activate Database
    Database-->>Server: Confirmation of insertion
    deactivate Database
    Server-->>Browser: Redirect to updated notes page
    deactivate Server
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Server
    Server-->>Browser: Updated notes page HTML
    deactivate Server
    Browser-->>User: Displays updated notes page
