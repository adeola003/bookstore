/* eslint-disable react/prop-types */
import Form from './Form';

const Books = ({ title, author }) => (
  <>
    <div>
      <ul>
        <li>
          Title :
          {title}
        </li>
        <li>
          Author :
          {author}
        </li>
      </ul>
      <button type="submit" className="remove">remove</button>
    </div>
    <div>
      <Form />
    </div>
  </>
);

export default Books;
