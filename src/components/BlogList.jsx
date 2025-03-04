import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState, useMemo } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageData = useMemo(() => {
    const firstBlog = (currentPage - 1) * pageSize;
    const lastBlog = currentPage * pageSize;
    return blogs.posts.slice(firstBlog, lastBlog);
  }, [currentPage, pageSize]);

  const updateRowsPerPage = (blogsPerPage) => {
    setPageSize(Number(blogsPerPage));
    setCurrentPage(1);
  };
  const updatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPageData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
