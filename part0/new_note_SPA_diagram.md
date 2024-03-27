sequenceDiagram
    participant User
    participant Browser
    participant SPA
    participant Server
    participant Database

    User->>Browser: Enters text into the note text field
    User->>Browser: Clicks the Save button
    Browser->>SPA: Triggers saveNote function with note content
    SPA->>Server: POST request to save the new note
    Server->>Database: Insert new note into the database
    Database-->>Server: Confirmation of insertion
    Server-->>SPA: Confirmation of note creation
    SPA-->>Browser: Updates the notes list with the new note
    Browser-->>User: Displays updated notes list
