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
        <div>
          <input
            type="radio"
            name="category"
            id="lost"
            value="lost"
            defaultChecked
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="lost">Lost (Lost Your Pet?)</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="found"
            value="found"
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="found">Found (Find A Lost Pet?)</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="sighting"
            value="sighting"
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="sighting">Sighting (See A Lost Animal?)</label>
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CategoryForm;
