Questions:

Q. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

A : In BlogList.jsx, I will use useEffect hook as it give you ability to perform side-effects. We can add a asynchronous function to fetch API or use Axios and then the blogList and pagination can be rendered.
We have to consider the rendering error you will receive while data is being fetched. So we can use Logical AND operated to render after the fetch call gets a response.
While data is being fetched we can use a component to indicate that data is loading.

Q. Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?!.

A : Every single time a render happens, every component with a key is deleted and remade which cna cause significant performance issue.
