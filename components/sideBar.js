import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";

const Sidebar = (props) => {
  const { categories } = props;
  return (
    <div>
      <Modal>
        <MovieCreateForm />
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
