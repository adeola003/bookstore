const Form = () => (
  <form action="" id="books-form">
    <label htmlFor="Title">
      <input type="text" id="title" placeholder="Enter the book title" />
    </label>
    <label htmlFor="Author">
      <input type="text" id="auhor" placeholder="Enter the author's name" />
    </label>
    <button className="submit-btn" type="submit">Submit</button>
  </form>
);
export default Form;
