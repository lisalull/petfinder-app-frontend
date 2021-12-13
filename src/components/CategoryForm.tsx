import { FormEvent, useState } from "react";
import "./CategoryForm.css";

interface Props {
  setCategory: (s: string) => void;
  showForm: boolean;
  setShowForm: (b: boolean) => void;
}

const CategoryForm = ({ setCategory, showForm, setShowForm }: Props) => {
  const [cat, setCat] = useState("");
  const categorySubmitHandler = (e: FormEvent): void => {
    e.preventDefault();
    setCategory(cat);
  };

  return (
    <div className="CategoryForm">
      {showForm ? (
        <button className="closeButton" onClick={() => setShowForm(false)}>
          X
        </button>
      ) : (
        <button onClick={() => setShowForm(true)}>Click to See Form</button>
      )}
      {showForm && (
        <form onSubmit={categorySubmitHandler}>
          <p className="title">
            Mark the location where you Lost, Found, or Sighted a Pet!
          </p>
          <div className="field category">
            <div>
              <input
                type="radio"
                name="category"
                id="lost"
                value="lost"
                // defaultChecked
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="lost">Lost (You lost your pet.)</label>
            </div>
            <div>
              <input
                type="radio"
                name="category"
                id="found"
                value="found"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="found">
                Found (Pet is contained - looking for the pawrents!)
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="category"
                id="sighting"
                value="sighting"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="sighting">
                Sighting (You spotted a lost pet!)
              </label>
            </div>
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default CategoryForm;
