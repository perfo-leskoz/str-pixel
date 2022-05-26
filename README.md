# str-pixel

## Content

Package contains:
- app.js - file is simply a content for GTM code extracted to separate file to allow developers working on solution easier
- gtm_html_script.html - GTM script wrapper in <script> tag
  
## Installation
  
  1. Open Google Tag Manager Console
  
  2. From left menu choose "Tag"
  
  ![image](https://user-images.githubusercontent.com/59827919/170425272-cb6ac81d-d89e-42df-915e-8133fcaaa807.png)
  
  3. Click "New" on Tag list
  4. In "Triggering" section please select a trigger "All Pages"
  
  ![image](https://user-images.githubusercontent.com/59827919/170425626-23515b8e-d8cc-4732-b1bc-37a318ce0c11.png)

  5. In Tag Configuration section please select "Custom HTML"
  
  ![image](https://user-images.githubusercontent.com/59827919/170425996-cf0a7d26-c3d1-4a67-a058-e6946e229cba.png)
  
  6. Then in editor you should paste script code wrapper in <script></script> tag. File gtm_html_script.html shows how the code should be wrapper
