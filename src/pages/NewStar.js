import { React, useState, Fragment } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { path_srv } from "../config";
export default function NewStar() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cons, setCons] = useState("");
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
    var img = "/images/stars/" + renamedFile.name;
    var star = { title, cons, desc, img };
    fd.append("photo", renamedFile);
    fd.append("star", JSON.stringify(star));
    try {
      axios.post(path_srv + "/api/v1/star", fd);
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label> Souhvězdí </label>
            <input
              type="text"
              required
              value={cons}
              onChange={(e) => setCons(e.target.value)}
            />
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
