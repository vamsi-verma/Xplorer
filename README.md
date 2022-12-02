# XplorerWorld

To import the data use "**_node dev-data/data/import-dev-data.js --import_**"
to delete all data from DB use "**_node dev-data/data/import-dev-data.js --delete_**"

---

### Kinds of Filtering:

The kinds of operations user can do are "_less than or equal[lte]_", "_less than[lt]_","_greater than or equal[gte]_","_greater than[gt]_".

---

### Error Handling

Error handling done for different kinds of errors that like wrong ID search and CRUD operation handled proprly.

### Password encryption

password encryption done with 12 bit bcrypt js module.

### Authenication

Authentication done with JSON Web Token(JWT)

### NodeMailer npm package

development mail box used: mailtrap
Username:
478d527464dfea
Password:
c9b1fe79e0ca61

## Security features implemented

### compromised database

1. Strong encrypted passwords with hash(bcrypt)
2. Strong encrypt password reset token( SHA 256 )

### BRUTE FORCE ATTACKS

1.  Use bcrypt (to make login requests slow)
2.  Implement rate limiting (express-rate-limit)
3.  Implement maximum login attempts

### CROSS-SITE SCRIPTING (XSS) ATTACKS

1. Store JWT in HTTPOnly cookies
2. Sanitize user input data
3. Set special HTTP headers (helmet package)

### DENIAL-OF-SERVICE (DOS) ATTACK

1. Implement rate limiting (express-rate-limit)
2. Limit body payload (in body-parser)
3. Avoid evit regatar expressions
