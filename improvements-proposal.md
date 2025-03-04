Questions:

Q. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

A : In BlogList.jsx, I will use useEffect hook as it give you ability to perform side-effects. We can add a asynchronous function to fetch API or use Axios and then the blogList and pagination can be rendered.
We have to consider the rendering error you will receive while data is being fetched. So we can use Logical AND operated to render after the fetch call gets a response.
While data is being fetched we can use a component to indicate that data is loading.
If the we are dealing with a large dataset, there are multiple ways it can be done. One is, pagination can be impilimented in the backend, so using limit and offeset queries data can be fetched. In the front-end, the maximum number of post that can be rendered at a time is 100. In that case The will not be any performance issues. For better performance of the blog list rendering, we can use virtualization.

Q. Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?!.

A : Every time the component a key re-renders, the nanoid function is called to generate a new id, which can cause significant performance issues on rendering of a larger data. I would rather try to reach for a stable ID inside your list item. In case I don’t have stable IDs I would rather use index as key instead of nanoid as recommended by the Nanoid documentation.
