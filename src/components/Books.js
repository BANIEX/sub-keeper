import Book from "./Book";
import { listOfBooks2 } from "./utils";
import axios from "axios";
import UsersFeed from "./UsersFeed";

const Books = () => {
  return (
    <div>
      <div>
        <h2>List of Books</h2>
        {listOfBooks2.map((book) => {
          return <Book list={book} key={book.id} />;
        })}
        <UsersFeed/>
      </div>
    </div>
  );
};

export default Books;
