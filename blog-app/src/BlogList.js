import React from 'react';
import TextContent from "./TextContent/TextContent";

const BlogList = () => {
    // const data = [1, 2, 1, 3, 4, 5, 6, 8, 9, 7];

    const data = [{ title: "bla bla bla", description: "This is a blog about JS" },
    { title: "bla bla", description: "React is fucking hell" },
    { title: "bla", description: "Some random text" },
    { title: "something", description: "Some other text" },
    { title: "lunch break", description: "chicken brest filled with bacon and cheese" }
    ];


    const array = data.map((item, i) => <TextContent key={i} blog={item} />);


    return (
        <div>
            {array}
        </div>
    )
}


export default BlogList
