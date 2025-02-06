import { BlogCard } from "./BlogCard";
import "../styles/BlogList.css";

import img01 from "../assets/images/img01.jpg";
import img02 from "../assets/images/img02.jpg";
import img03 from "../assets/images/img03.jpg";
import img04 from "../assets/images/img04.jpg";
import img05 from "../assets/images/img05.jpg";
import img06 from "../assets/images/img06.jpg";

const blogData = [
  { id: 1, image: img01, title: "記事1", text: "これは記事1の概要です。" },
  { id: 2, image: img02, title: "記事2", text: "これは記事2の概要です。" },
  { id: 3, image: img03, title: "記事3", text: "これは記事3の概要です。" },
  { id: 4, image: img04, title: "記事4", text: "これは記事4の概要です。" },
  { id: 5, image: img05, title: "記事5", text: "これは記事5の概要です。" },
  { id: 6, image: img06, title: "記事6", text: "これは記事6の概要です。" }
];


export const BlogList = () => {
  return (
    <ul className="blog-list">
      {blogData.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </ul>
  );
};

