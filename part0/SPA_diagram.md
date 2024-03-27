sequenceDiagram
    participant User
    participant Browser
    participant SPA
    participant Server

    User->>Browser: Enters the URL https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>SPA: Requests the SPA page
    SPA->>Server: Requests data for the notes
    Server-->>SPA: Sends the notes data
    SPA->>Browser: Renders the notes app interface
    Browser->>User: Displays the notes app interface
