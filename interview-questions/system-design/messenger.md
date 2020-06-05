## Functional Specs
- 1:1 chat(while starting out its a single threaded chat system)
- User can send text, photos, videos, files(limit of 1GB)
- Username will be their email-id(must be unique)
- User can search for another user
- Able to check if a user is online or offline.
- Even if offline, one can still send them a message
- Read vs unread status
- Store 5 years of history

## Non-functional requirements
Service is highly available
100M users using the application(20M DAU)

## Workflow
- User creates an account(onboarding)
- Sending messages
- user searches for another user(minimum 3 chars)
- User creation

## Common Questions
- How would the queueing system work?
- How would servers scale?
- How  do you maintain the sequence of messages?
- What happens when the user goes offline? How will that be handled?
- Data structure to model the system? What about the tables in dB?
