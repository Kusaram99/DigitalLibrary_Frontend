import Book1 from './images/assets/books/book1.jpg'
import Book2 from './images/assets/books/book2.jpg';
import Book3 from './images/assets/books/book3.jpg';
import Book4 from './images/assets/books/book4.jpg';
import Book5 from './images/assets/books/book5.jpg';
import Book6 from './images/assets/books/book6.jpg';
import Book7 from './images/assets/books/book7.jpg';
import Book8 from './images/assets/books/book8.jpg';
import Book9 from './images/assets/books/book9.jpg';
import Person1 from './images/assets/testimonals/person1.jpg'
import Person2 from './images/assets/testimonals/person2.jpg'
import Person3 from './images/assets/testimonals/person3.jpg'
import Person4 from './images/assets/testimonals/person4.jpg'
import Person5 from './images/assets/testimonals/person5.jpg'


export const navlinks = [
    {
        id : 1,
        title : "Home" ,
        link : "/"
    },
    {
        id : 2,
        title : "Store" ,
        link : "/store"
    },
    {
        id : 3,
        title : "My Library" ,
        link : "/library"
    }
]


export const droplist = [
    {
        id:1,
        title : "Trending Books",
        link : "/"
    },
    {
        id:2,
        title : "Best Selling",
        link : "/"
    },
    {
        id:3,
        title : "Authors",
        link : "/"
    },
]

export const bookData = [
    {
        id: 1,
        image: Book1,
        title: "Who's there",
        author: 'J.Doe',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        sequi, vero est veniam quae nihil praesentium sapiente ex
        inventore ab numquam aperiam in veritatis recusandae reiciendis
        quo dolor aliquam neque laborum cum commodi! Corrupti aut iusto
        enim ea alias fugit repudiandae? Atque veritatis assumenda at,
        ratione optio nesciunt aperiam voluptatum.`,
      },
      {
        id: 2,
        image: Book2,
        title: ' His Life will forever be Changed',
        description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        sequi, vero est veniam quae nihil praesentium sapiente ex
        inventore ab numquam aperiam in veritatis recusandae reiciendis
        quo dolor aliquam neque laborum cum commodi!`,
      },
      {
        id: 3,
        image: Book3,
        title: 'Lost Boy',
        author: 'Lost Girl',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        sequi, vero est veniam quae nihil praesentium sapiente ex
        inventore ab numquam aperiam in veritatis recusandae reiciendis
        quo dolor aliquam neque laborum cum commodi! Corrupti aut iusto
        enim ea alias fugit repudiandae? Atque veritatis assumenda at,
        ratione optio nesciunt aperiam voluptatum.`,
      },
      {
        id: 4,
        image: Book9,
        title: 'Iron Gold',
        author: 'Pierce Brown',
        description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        sequi, vero est veniam quae nihil praesentium sapiente ex
        inventore ab numquam aperiam in veritatis recusandae reiciendis
        quo dolor aliquam neque laborum cum commodi!`,
      },
      {
        id: 5,
        image: Book4,
        title: "Twisted Lies",
        author: 'Ana Huang',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        sequi, vero est veniam quae nihil praesentium sapiente ex
        inventore ab numquam aperiam in veritatis recusandae reiciendis
        quo dolor aliquam neque laborum cum commodi! Corrupti aut iusto
        enim ea alias fugit repudiandae?`,
      },
      {
        id: 6,
        image: Book5,
        title: 'The Psychology of money',
        author: 'Morgan Housel',
        description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        sequi, vero est veniam quae nihil praesentium sapiente ex
        inventore ab numquam aperiam in veritatis recusandae reiciendis
        quo dolor aliquam neque laborum cum commodi!`,
      },
]

export const topBookData = [
  {
    id: 1,
    image: Book4,  // Replace with actual image import or path
    title: "Twisted Lies",
    author: 'Ana Huang',
    rating: 4.5,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
    sequi, vero est veniam quae nihil praesentium sapiente ex
    inventore ab numquam aperiam in veritatis recusandae reiciendis
    quo dolor aliquam neque laborum cum commodi! Corrupti aut iusto
    enim ea alias fugit repudiandae?`,
    price: 20.99,
    discountPrice: 15.99,
    discount: 24,
    quickSummary: "<h1>Hello</h1> A thrilling romance with a twist of mystery."
  },
  {
    id: 2,
    image: Book5,  // Replace with actual image import or path
    title: "The Psychology of Money",
    author: 'Morgan Housel',
    rating: 4.7,
    description: `A guide to understanding how people think about money and how emotions and biases shape financial decisions.`,
    price: 25.99,
    discountPrice: 19.99,
    discount: 23,
    quickSummary: "Unlock the secrets behind financial success and emotional wealth."
  },
  {
    id: 3,
    image: Book6,  // Replace with actual image import or path
    title: "Iron Gold",
    author: 'Pierce Brown',
    rating: 4.6,
    description: `The fourth book in the Red Rising series, featuring action, politics, and sci-fi battles.`,
    price: 22.99,
    discountPrice: 17.99,
    discount: 21,
    quickSummary: "An action-packed sci-fi epic filled with betrayal and courage."
  },
  {
    id: 4,
    image: Book7,  // Replace with actual image import or path
    title: "The Silent Patient",
    author: 'Alex Michaelides',
    rating: 4.3,
    description: `A psychological thriller about a woman who shoots her husband and then goes silent.`,
    price: 18.99,
    discountPrice: 14.99,
    discount: 21,
    quickSummary: "A mind-bending thriller that will keep you guessing until the end."
  },
  {
    id: 5,
    image: Book8,  // Replace with actual image import or path
    title: "Educated",
    author: 'Tara Westover',
    rating: 4.8,
    description: `A memoir of a woman who grows up in a strict, survivalist family in Idaho and seeks education.`,
    price: 19.99,
    discountPrice: 16.99,
    discount: 15,
    quickSummary: "A gripping memoir about the pursuit of education and self-discovery."
  },
];


 export const testimonalData = [
    {
      id : 1,
      image : Person1,
      name : "Jolly Dsouza",
      description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
      sequi, vero est veniam quae nihil praesentium sapiente ex
      inventore ab numquam aperiam in veritatis recusandae reiciendis`

    },
    {
      id : 2,
      image : Person2,
      name : "Soniya Thakur",
      description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
      sequi, vero est veniam quae nihil praesentium sapiente ex
      inventore ab numquam aperiam in veritatis recusandae reiciendis`

    },
    {
      id : 3,
      image : Person3,
      name : "Roy Joseph",
      description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
      sequi, vero est veniam quae nihil praesentium sapiente ex
      inventore ab numquam aperiam in veritatis recusandae reiciendis`

    },
    {
      id : 4,
      image : Person4,
      name : "Thomas Berlin",
      description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
      sequi, vero est veniam quae nihil praesentium sapiente ex
      inventore ab numquam aperiam in veritatis recusandae reiciendis`

    },
    {
      id : 5,
      image : Person5,
      name : "Shuzi Yuang",
      description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
      sequi, vero est veniam quae nihil praesentium sapiente ex
      inventore ab numquam aperiam in veritatis recusandae reiciendis`

    },

]

export const ImportantLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

export const Genres = [
  {
    title : "Fiction",
    link : "/"

  },
  {
    title : "Mystery",
    link : "/"

  },
  {
    title : "Narrative",
    link : "/"

  },
  {
    title : "Thriller",
    link : "/"

  },
]

export const location = ["Mumbai" , "Delhi" , "Kolkata" , "Pune"]