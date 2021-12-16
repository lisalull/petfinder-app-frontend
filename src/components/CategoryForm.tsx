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
          <p className="title">Mark the location where you:</p>
          <div className="field">
            <div>
              <input
                type="radio"
                name="category"
                id="lost"
                value="lost"
                // defaultChecked
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="lost">
                <span className="bold">Lost</span> a pet
              </label>
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
                <span className="bold">Found</span> a pet (Pet is contained -
                looking for pawrents!)
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
                <span className="bold">Sighted</span> a pet (You spotted a lost
                pet!)
              </label>
            </div>
          </div>
          <button className="reportButton">Make a Report</button>
        </form>
      )}
    </div>
  );
};

export default CategoryForm;
