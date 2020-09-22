# MultiLanguage Website with JavaScript

This is a <b>template for MultiLanguage support of a website</b>.
It uses <b>only JavaScript</b> to implement the logic.
It is <b>easy to implement</b> and does not require some extra frameworks or extensions.

<b>Structure of Project:</b>
- <b>Resources Folder</b>
    - Here you can store all files with translations - in this example these are <b>en.js and bg.js</b>. 
    - You simply create a variable with keys and string value with translation.
        - <b>Key values need to be added in data-tag attribute in every HTML element which you want to be translated.</b>
- <b>Scripts Folder</b>
    - <b>defaultValues.js</b>
        - All default values for the template.
    - <b>myFunctions.js</b>
        - All functions that are used.
        - getCookie - it is used to check if cookie with language exists. I prefer to store the language in cookie in order to remember the clients preferences.
        - translateAll - translates all elements in DOM where data-tag exists
            - <b>Note that all html elements need to have data-tag attribute with their key in order to be translated.</b>
    - <b>Translate.js</b>
        - This is the implementation of the Language class. It creates an instance with default language. The default language is set in the defaltValues.js file.
        - getVal - returns the translated value by the key passed. You can pass default value, if no key exists or 'undefined' will be returend.
- <b>Styles Folder</b>
    - style.css - simple styles for presentation page
- <b>index.html</b>
    - Example page where you can test the translation of page.

## Enjoy!