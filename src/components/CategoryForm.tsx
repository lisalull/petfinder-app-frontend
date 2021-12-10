import { FormEvent, useState } from "react";
import "./CategoryForm.css";

interface Props {
  setCategory: (s: string) => void;
}

const CategoryForm = ({ setCategory }: Props) => {
  const [cat, setCat] = useState("");
  const categorySubmitHandler = (e: FormEvent): void => {
    e.preventDefault();
    setCategory(cat);
  };

  return (
    <form className="CategoryForm" onSubmit={categorySubmitHandler}>
      <div className="field category">
        <input
          type="radio"
          name="category"
          id="lost"
          value="lost"
          defaultChecked
          onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="lost">Lost</label>
        <input
          type="radio"
          name="category"
          id="found"
          value="found"
          onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="found">Found</label>
        <input
          type="radio"
          name="category"
          id="sighting"
          value="sighting"
          onChange={(e) => setCat(e.target.value)}
        />
        <label htmlFor="sighting">Sighting</label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CategoryForm;
