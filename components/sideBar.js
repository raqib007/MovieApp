import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../action";

const Sidebar = (props) => {

  const { categories } = props;
  let modal = null;
  
  const handleFormSubmit = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(movies);
    });
    modal.closeModal();
  };

  return (
    <div>
      <Modal hasSubmit={false} ref={(ele) => (modal = ele)}>
        <MovieCreateForm handleSubmit={handleFormSubmit} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {categories.map((category) => (
          <a href="#" className="list-group-item" key={category.id}>
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
