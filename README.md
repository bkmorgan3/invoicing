# Approach
I made some seed data first to make a list of invoices, making the R in CRUD and establishing a base for the rest of the functionality and design.
I used Hooks to manage state, since they are standard issue in the latest CRA.

The second feature I build was adding an invoice. C in CRUD

Maybe I spent too long on styling and should have gotten the functionality built in especially since as I moved forward I didn't want to undo as much because of the stlying.  

My hang up here was getting a total for all inputs.  It was just something I didn't get around to doing because of other bugs.

Following the mock I went to implement an Update page, that had the Delete button with it.  I took of the D in CRUD and was able to get into editing.

##Blocks

Spending too much time early on with style.  I used Styled Components becuase CSS in JS is becoming more popular and I recently read about Styled Components and wanted to practice using the library.  There are still many CSS bugs and unstyled elements I did not get to.

I spent a lot of time on Updating.  I was able to get to render an input field with the populated values but in my input onchange handler I wasnt ablt to update the values.  I think this is because I was passing in props to my call to editInvoice in the InvoiceItem component.  I spent a lot of time trying differnt combinations of data from default from state through passing in Invoice data as it was created or moved around the app.  
Originall I was able to render a form similar to adding an invoice but there was a ternary rendering condtion that i didn't want to alter and I though having the text change was a more slick design.

I think getting the "amounts" and "descriptions" to move with each invoice as well as editing would have been complete.  I wanted to use media queries for multiple breakpoints for different screen resolutions and I had success deploying a frontend application using Amplify on AWS.

I hope to further discuss my approach and mindset.  I enjoyed this project.
