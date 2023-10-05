export const BookUpdatePage = () => {
    !window.localStorage.getItem("bookId") && window.localStorage.setItem("bookId", 1);
    console.log(`The current book id is ${window.localStorage.getItem("bookId")}`);
    return <h1>BookUpdatePage</h1>
}