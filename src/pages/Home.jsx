import React, { useState } from "react";
import "../App.css";
import Login from "../pages/Login";
import { Link } from "react-router-dom";
import travel from "../Images/travel.jpg"

function Home() {
  const [isClicked, setClicked] = useState("");

  function showLogin() {
    setClicked(1);
  }

  return (
    <div>
      <div className="container-fluid background">
        <div className="row text-white ">
          <div className="col-9 my-3">
            <h2>Welcome to Edunomics</h2>
          </div>
          <div className="col-1 mx-1 my-3">
            <Link to="/signup">
              <button 
              className="btn btn-outline-light"
              variant="outlined">Sign up</button>
            </Link>
          </div>
          <div className="col-1 mx-1 my-3">
          <Link to="/account">
              <button 
              className="btn btn-outline-light"
              onClick={showLogin}
              variant="outlined">Sign up</button>
            </Link>
          </div>
        </div>
        {isClicked && (
          <div className="login">
            <Login />
          </div>
        )}
        <div className="text-white text-center my-5 py-5">
          <h1 className="display-2">
            <strong>
              Where Do You Want <br /> To Go Today?
            </strong>
          </h1>
          <h3 className="my-3" style={{ color: "#a6a6a6" }}>
            Share your travel bucket list with us
          </h3>
        </div>
      </div>
      <div className=" container my-5 ">
        <h2 className="text-center">Whatever your style, travel your way</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic
          expedita provident accusantium, temporibus explicabo, sapiente
          corrupti, at nam reprehenderit eius in voluptatum consectetur ipsa
          ipsum ducimus aperiam sint eos libero ab voluptate rerum facilis.
          Totam sint aspernatur temporibus expedita pariatur blanditiis in quis
          fugiat commodi dolores cum beatae reiciendis quas magnam porro
          possimus debitis officia iure maiores sapiente, facilis id!
          Repudiandae tempora vero delectus, architecto consequuntur excepturi
          aperiam numquam harum eius perspiciatis consequatur? In ad debitis
          nulla cum hic, reprehenderit minus suscipit veritatis ipsum ea, id
          quae necessitatibus atque excepturi recusandae odit voluptatibus
          quidem nostrum, fugit esse quo repudiandae. Accusantium, deserunt qui
          nostrum a assumenda pariatur.
          <br /> Officia fugit sint incidunt ipsam beatae. Exercitationem vitae
          illum magnam, quaerat, nobis error eligendi sint laborum soluta optio
          dolorum autem aut deleniti, ullam quam facere accusantium sed et.
          Unde, quod quisquam animi nostrum accusantium similique voluptatibus
          minus quo. Incidunt et corrupti hic doloribus officia a voluptatum
          cumque error. Repellat, laborum. Vitae, voluptatum. Aliquid voluptas
          debitis incidunt atque rem temporibus dolorum, voluptatem soluta
          voluptatibus laborum maxime, quisquam necessitatibus tempora veniam.
          Expedita excepturi, amet repudiandae aut non consequuntur laudantium
          sapiente accusantium! Praesentium earum dignissimos maiores, alias hic
          porro ducimus reiciendis doloribus itaque eum! Dolorem sequi quas amet
          temporibus asperiores, quis autem. Ratione exercitationem aliquam
          earum non, doloribus magni, nam quam eveniet odit neque corrupti
          voluptatem laborum assumenda repudiandae impedit porro atque maiores
          adipisci <br />
        </p>

        <img src={travel} 
        className="travel img-thumbnail"
        alt="abc"/>

        <p>
          {" "}
          est dolores a. Reprehenderit nostrum ad tenetur atque voluptate sit
          corporis magnam quo itaque. Magni, dolores vero sequi voluptas,
          provident natus totam odit saepe corrupti ex velit asperiores
          molestias illo labore, ratione doloremque enim a incidunt numquam.
          Molestiae, commodi labore quasi neque in aut aperiam reprehenderit
          voluptas laudantium molestias repellat suscipit ut debitis dolorum
          eum, voluptatum id quaerat porro accusamus. Impedit mollitia excepturi
          illum delectus, non cum sed beatae unde dolores perspiciatis enim
          dolor animi rerum at ex, commodi numquam. Nam eveniet, fugit pariatur
          quis cupiditate suscipit ex voluptatem sed nobis praesentium dicta
          quaerat, in alias sapiente molestias temporibus, molestiae placeat!
          Tempore <br /> modi quidem repellendus earum odit placeat sapiente
          ratione itaque libero. Officiis perspiciatis commodi eos excepturi
          laudantium rem error temporibus sint hic esse, tempora numquam,
          dignissimos adipisci ad beatae. Non saepe rerum doloribus. Pariatur,
          aspernatur. Architecto, nisi modi in eveniet temporibus, mollitia hic
          exercitationem, tempore molestias nostrum perspiciatis? Laboriosam quo
          hic quidem deleniti sapiente quia repudiandae id totam recusandae in
          doloribus, qui nam dolore <br /> consectetur suscipit explicabo
          aperiam, officia eos illum excepturi fuga dolorem? Quo, ex deleniti?
          Odit unde cum natus consequuntur in ex cumque vitae laudantium. Est
          laboriosam velit sapiente sed officia adipisci, molestiae incidunt
          omnis enim earum nostrum ut pariatur quae, cumque quo qui doloribus
          natus. Provident tempore sed aperiam omnis repellendus alias totam
          illo temporibus qui dolores? Blanditiis officiis similique corrupti
          atque voluptas, iure minus at. Tempore rerum incidunt, obcaecati
          accusamus molestiae quae reiciendis provident iusto deserunt hic sed
          dolor, ad qui quam laudantium. Quae tempore nesciunt recusandae nobis
          est assumenda ab cum totam omnis placeat facere consequatur molestiae
          neque distinctio natus adipisci velit dolores nihil inventore ex,
          expedita dolorum. Neque delectus dolorum doloribus possimus
          perferendis cumque, quo quaerat maiores quam velit id iusto maxime
          architecto exercitationem error a autem odit amet harum dolor debitis
          rerum omnis. Maxime ducimus fuga laborum qui aut! Nemo illum iusto
          ipsum voluptatibus asperiores architecto cupiditate omnis consequatur
          quia sunt quidem debitis veniam aperiam tempora inventore fugiat id
          perferendis quos facilis maxime, dignissimos ut qui. Quaerat veritatis
          ea <br /> tempore reiciendis voluptatum? Incidunt exercitationem odio
          itaque voluptates distinctio harum eos eveniet tempora ipsam obcaecati
          eum, culpa delectus expedita consequuntur nulla suscipit. Pariatur,
          dicta id! Fuga consequuntur odio ut amet aspernatur culpa vitae atque
          placeat?
        </p>
      </div>
    </div>
    
  );
}

export default Home;
