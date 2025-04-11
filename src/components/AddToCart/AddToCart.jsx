import React from "react";
import Book4 from '../../images/assets/books/book4.jpg';
import Book6 from '../../images/assets/books/book6.jpg'; 

 import React from 'react'
 
 const AddToCart = () => {
   return (
     <div>
        <div>
            {/* ------ make heading style here  */}
            {/* add here Not icon ❌ */}
        </div>

        <div>
            <div>
                {/* -------- show here book cover image */}
            </div>
            <div>
                {/* -------- show here book title, descriptions, price, rating, discount, discount price, and more according to the book */}
            </div>
        </div>
        <div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Buy Now</button>
        </div>
     </div>
   )
 }
 
 export default AddToCart