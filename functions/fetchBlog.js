import { createClient } from "contentful";
import convertDate from "../src/helpers/convertDate";

exports.handler = async (event, context) => {
  const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
    host: "cdn.contentful.com",
  });

  const entries = await client.getEntries();

  const sanitizedEntries = entries.items.map((item, index) => {
    const blogPostImage = item.fields.blogPostImage.fields.file.url;

    const createdAt = item.sys.createdAt;
    const datePosted = convertDate(createdAt);
    const slug = item.fields.blogPostTitle
      .toLowerCase()
      .replace(":", "")
      .split(" ")
      .join("-");

    return {
      ...item.fields,
      blogPostImage,
      datePosted,
      id: slug,
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: sanitizedEntries,
    }),
  };
};
