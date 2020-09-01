import { useState } from "react";

const MovieCreateForm = () => {
  const [form, setForm] = useState({
    name: "Some Name",
    description: "Some description.........",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    setForm({
      ...form,
      [name]: target.value,
    });
  };

  const handleGenreChange = (event) => {
    const { options } = event.target;
    const optionsLen = options.length;
    let values = [];

    for (let i = 0; i < optionsLen; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }

    setForm({
      ...form,
      genre: values.toString(),
    });
  };

  return (
    <form>
      {JSON.stringify(form)}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={form.description}
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Somewhere in Middle-earth..."
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          name="rating"
          placeholder="3"
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          placeholder="http://....."
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          type="text"
          className="form-control"
          id="cover"
          name="cover"
          placeholder="http://......"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          className="form-control"
          id="longDesc"
          name="longDesc"
          rows="3"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple
          className="form-control"
          id="genre"
          name="genre"
          onChange={handleGenreChange}
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
    </form>
  );
};

export default MovieCreateForm;
