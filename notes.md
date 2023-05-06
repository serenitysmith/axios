# Intro to Axios
    - Axios can be downloaded as a node_module, or attained through a CDN
    - A CDN, or Content Deliver Network, is loaded into your application through a script tag on your html page.
        - The axios CDN can be found on cdnjs.com's website: https://cdnjs.com/libraries/axios
        
    - Axios is a promise based HTTP client.
    - This means it allows us to make HTTP requests, and the handling of those requests and the subsequent responses on the front end is handled with promises.
     axios r AUTOMATICALLY: parses json into js


     # GET request
    - A Get request as we recall is for 'getting' data
    - This can be requesting an entire webpage, or requesting data that we can manipulate for our webpage.
    
    - In the context of this course, we will always be using axios to get and manipulate data rather than receiving an entire webpage.
    
    
    - For these lessons we will be using the V school Todo API as it will allow us to practice all four of the HTTP methods we are learning.  The documentation can be found here:
        - https://coursework.vschool.io/v-schools-todo-api-documentation/

   # Delete Request

    - The delete request is for removing an item that currently exists in the database.
    
    - Delete requests will typically require the id or identifier of the specific resource so that the database knows which item to remove.
    
    
    - V School API documentation: https://coursework.vschool.io/v-schools-todo-api-documentation/     
    
# PUT request

    - The put request is for updating an existing item in a database
    - The method will need both the id of the item to update, and the data in which it will be updated with.

    <!-- <form name="todoform">
            <input name="title" placeholder="Title"/>
            <input name="description" placeholder="Description"/>
            <input name="imgUrl" placeholder="Image Url"/>
            <button>Submit</button>
        </form> -->
        <!-- for axios another src tag goes aboves java scrpt tag, downloads axos package  -->