# MultiLanguage Website with JavaScript

This is a template for MultiLanguage support of a website.
It uses only JavaScript to implement the logic.

Structure of Project:
- Resources Folder
    - here you can store all files with translations - in example en.js and bg.js. 
    - you simply create a variable with keys and string value with translation.
- Scripts Folder
    - defaultValues.js
        - all default values for the template
    - myFunctions.js
        - all functions that are used
        - getCookie - it is used to check if cookie with language exists
        - translateAll - translates all elements in DOM where data-tag exists
            - note that all html elements need to have data-tag attribute with their key in order to be translated.
    - Translate.js
        - this is the implementation of the Language class. It creates an instance with default language. The default language is set in the defaltValues.js file.
        - getVal - returns the translated value by the key passed. You can pass default value, if no key exists or 'undefined' will be returend.
- Styles Folder
    - style.css - simple styles for presentation page
- index.html
    - Example page where you can test the translation of page.

## Enjoy!