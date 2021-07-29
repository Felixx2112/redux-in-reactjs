import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import casual from "casual";
import HobbyList from "../components/Home/HobbyList/index";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  console.log("hobbyList: ", hobbyList);

  const activeId = useSelector((state) => state.hobby.activeId);

  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    //random hobby object: id + title

    const newId = randomNumber();
    const newHobby = {
      //   id: casual.uuid,
      //   title: casual.title,
      id: newId,
      title: `id: ${newId}`,
    };

    //Dispatch action to add a new hobby to redux store

    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div className="home-page">
      <h1>REDUX _ HOOKS _ HOME PAGE</h1>

      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}

export default HomePage;
