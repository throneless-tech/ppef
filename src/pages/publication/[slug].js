import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Publication = props => {
  const {
    title = "Untitled",
    name = "Anonymous",
    categories,
    authorImage,
    body = []
  } = props;
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
          />
        </div>
      )}
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        {...client.config()}
      />
    </article>
  );
};

const query = groq`*[_type == "publication" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Publication.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Publication;
