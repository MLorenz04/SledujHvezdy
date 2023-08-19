import { React, useState, Fragment } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { path_srv } from "../config";
export default function NewPlanet() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");
  const [renamedFile, setRenamedFile] = useState("");
  const [hash, setHash] = useState(
    (Math.random() + 3).toString(36).substring(7)
  );
  const handleSubmit = (e) => {
    setHash((Math.random() + 3).toString(36).substring(7));
    setTimeout(1);
    setRenamedFile(
      new File([renamedFile], renamedFile.name + hash + ".jpg", {
        type: renamedFile.type,
      })
    );
    e.preventDefault();
    var fd = new FormData();
    var img = "/images/planets" + renamedFile.name;
    var planet = { title, nickname, content, img };
    fd.append("photo", renamedFile);
    fd.append("planet", JSON.stringify(planet));
    try {
      axios.post(path_srv + "/api/v1/planet", fd);
      Swal.fire({
        title: "Hvězda přidána!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Hvězdu se nepodařilo přidat",
        icon: "error",
      });
    }
  };
  return (
    <Fragment>
      <div className="main">
        <div className="main_container">
          <form className="main_container_form" onSubmit={handleSubmit}>
            <label> Název planety </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label> Přezdívka </label>
            <input
              type="text"
              required
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <label> Popisek </label>
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label> Náhled </label>
            <input
              type="file"
              required
              onChange={(e) => {
                setRenamedFile(
                  new File(
                    [e.target.files[0]],
                    e.target.files[0].name + hash + ".jpg",
                    {
                      type: e.target.files[0].type,
                    }
                  )
                );
              }}
            />
            <button> Přidat </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
