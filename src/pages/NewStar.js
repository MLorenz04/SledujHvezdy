import { React, useState, Fragment } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function NewStar() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [renamedFile, setRenamedFile] = useState("");
  const [hash, setHash] = useState((Math.random() + 3).toString(36).substring(7));
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    var img = "/images/" + renamedFile.name;
    var star = { title, desc, img };
    fd.append("photo", renamedFile);
    fd.append("star", star);
    try {
      axios.post("http://localhost:3001/api/v1/star", fd);
      axios.post("http://localhost:8000/stars", star);
      Swal.fire({
        title: "Hvězda přidána!",
        icon: "success",
      });
    } catch (error) {
      console.error("Chyba při odesílání:", error);
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
            <label> Název hvězdy </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {title}
            <label> Popisek </label>
            <textarea
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <label> Soubor </label>
            <input
              type="file"
              required
              onChange={(e) => {
                setRenamedFile(
                  new File([e.target.files[0]], e.target.files[0].name + hash + ".jpg", {
                    type: e.target.files[0].type,
                  })
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
