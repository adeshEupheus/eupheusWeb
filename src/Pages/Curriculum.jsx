import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import duck from "../assets/curriculum/duck.png";
import Sidebar from "../Components/Sidebar";
import Zoom from "../Components/Curriculum/prePrimary/Zoom";
import Alpha_fun from "../Components/Curriculum/prePrimary/Alpha_fun";
import Dot_dash from "../Components/Curriculum/prePrimary/Dot_dash";
import Number_maxx from "../Components/Curriculum/prePrimary/Number_maxx";
import Splash from "../Components/Curriculum/prePrimary/Splash";
import Pitara from "../Components/Curriculum/prePrimary/Pitara";
import Radiant_way from "../Components/Curriculum/prePrimary/Radiant_way";
import Wow_english from "../Components/Curriculum/prePrimary/Wow_english";
import English_vibes from "../Components/Curriculum/prePrimary/English_vibes";
import Wow_grammer_com from "../Components/Curriculum/prePrimary/Wow_grammer_com";
import Grammer_com_vibes from "../Components/Curriculum/prePrimary/Grammer_com_vibes";
import New_radiant_literature from "../Components/Curriculum/prePrimary/New_radiant_literature";
import The_radiant_way from "../Components/Curriculum/prePrimary/The_radiant_way";
import My_world_my_earth from "../Components/Curriculum/prePrimary/My_world_my_earth";
import Wow_maths from "../Components/Curriculum/prePrimary/Wow_maths";
import Wow_menta_maths from "../Components/Curriculum/prePrimary/Wow_menta_maths";
import Wow_science from "../Components/Curriculum/prePrimary/Wow_science";
import { Wow_compu_bytes } from "../Components/Curriculum/prePrimary/Wow_compu_bytes";
import { Compu_app } from "../Components/Curriculum/prePrimary/Compu_app";
import { Vallari_hindi } from "../Components/Curriculum/prePrimary/Vallari_hindi";
import { Surbhika_hindi } from "../Components/Curriculum/prePrimary/Surbhika_hindi";
import { Silver_bells } from "../Components/Curriculum/prePrimary/Silver_bells";
import Chemistry6_8 from "../Components/Curriculum/Icsesolution/Chemistry6_8";
import Chemisrty9_10 from "../Components/Curriculum/Icsesolution/Chemisrty9_10";
import Icse_physics from "../Components/Curriculum/Icsesolution/Icse_physics";
import Icsebiology from "../Components/Curriculum/Icsesolution/Icsebiology";
import Icse_mathsmatics from "../Components/Curriculum/Icsesolution/Icse_mathsmatics";
import Icse_wow_grammer_com from "../Components/Curriculum/Icsesolution/Icse_wow_grammer_com";
import New_radiant_reader from "../Components/Curriculum/Icsesolution/New_radiant_reader";
import Radiant_enviromental_studies from "../Components/Curriculum/Icsesolution/Radiant_enviromental_studies";
import New_radiant_science from "../Components/Curriculum/Icsesolution/New_radiant_science";
import Icse_wow_compu_bytes from "../Components/Curriculum/Icsesolution/Icse_wow_compu_bytes";
import Wow_mind_map from "../Components/Curriculum/Skill_develoment_solution/Wow_mind_map";
import Value_first from "../Components/Curriculum/Skill_develoment_solution/Value_first";
import Time_to_learn_arts from "../Components/Curriculum/Skill_develoment_solution/Time_to_learn_arts";
import Wow_art_carft from "../Components/Curriculum/Skill_develoment_solution/Wow_art_carft";
import Handwriting from "../Components/Curriculum/Skill_develoment_solution/Handwriting";
import Merry_go_round from "../Components/Curriculum/Skill_develoment_solution/Merry_go_round";
import Wow_within_worlds from "../Components/Curriculum/Skill_develoment_solution/Wow_within_worlds";
import Eupheus_school_atlas from "../Components/Curriculum/References/Eupheus_school_atlas";
import Young_set_deictionaries from "../Components/Curriculum/References/Young_set_deictionaries";
import Nector from "../Components/Curriculum/State_Board_Solutions/Nector";
import Nector_second from "../Components/Curriculum/State_Board_Solutions/Nector_second";

const Curriculum = () => {
  const [sOpen, setSopen] = useState(true);
  const [page, setPage] = useState("default");
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const changePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full 2xl:ml-[10rem] ml-8 xl:ml-[6rem] flex flex-col sm:pl-[3rem] sm:pt-4 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4">
            <div className="  text-gray-700 w-full items-start flex flex-col  md:text-2xl text-base">
              <span>To wade through</span>
              <span>difficult concepts,</span>
            </div>
            <div className=" text-red-700 font-bold flex flex-col items-start w-full md:text-5xl text-base">
              <span>Your Power to</span>
              <span>Navigate ...</span>
            </div>

            <div className=" text-gray-700 flex flex-col items-start  md:text-2xl text-base">
              <span>Your Learning Partner</span>
              <span>Preparing you for the future!</span>
            </div>
            <div className="flex justify-center w-full">
              <img
                src={duck}
                className="lg:w-[30vw] w-[50vw] 2xl:w-[38vw] h-auto"
                alt=""
              />
            </div>
          </div>
        );
        break;
      case "zoom":
        return <Zoom sOpen={sOpen} />;
        break;
      case "alpha_fun":
        return <Alpha_fun sOpen={sOpen} />;
        break;
      case "dot_dash":
        return <Dot_dash sOpen={sOpen} />;
        break;
      case "number_maxx":
        return <Number_maxx sOpen={sOpen} />;
        break;
      case "splash":
        return <Splash sOpen={sOpen} />;
        break;
      case "pitara":
        return <Pitara sOpen={sOpen} />;
        break;
      case "radiant_way":
        return <Radiant_way sOpen={sOpen} />;
        break;
      case "wow_english":
        return <Wow_english sOpen={sOpen} />;
        break;
      case "english_vibes":
        return <English_vibes sOpen={sOpen} />;
        break;
      case "wow_grammar_com":
        return <Wow_grammer_com sOpen={sOpen} />;
        break;
      case "grammar_com_vibes":
        return <Grammer_com_vibes sOpen={sOpen} />;
        break;
      case "new_radiant_liter":
        return <New_radiant_literature sOpen={sOpen} />;
        break;
      case "the_radiant_way":
        return <The_radiant_way sOpen={sOpen} />;
        break;
      case "my_world_my_earth":
        return <My_world_my_earth sOpen={sOpen} />;
        break;
      case "wow_maths":
        return <Wow_maths sOpen={sOpen} />;
        break;
      case "wow_mental_maths":
        return <Wow_menta_maths sOpen={sOpen} />;
        break;
      case "wow_science":
        return <Wow_science sOpen={sOpen} />;
        break;
      case "wow_compu_bytes":
        return <Wow_compu_bytes sOpen={sOpen} />;
        break;
      case "compu_app":
        return <Compu_app sOpen={sOpen} />;
        break;
      case "vallari_hindi":
        return <Vallari_hindi sOpen={sOpen} />;
        break;
      case "surbhika_hindi":
        return <Surbhika_hindi sOpen={sOpen} />;
        break;
      case "silver_bells":
        return <Silver_bells sOpen={sOpen} />;
        break;
      case "chemistry_6_8":
        return <Chemistry6_8 sOpen={sOpen} />;
        break;
      case "chemistry_9_10":
        return <Chemisrty9_10 sOpen={sOpen} />;
        break;
      case "icse_physics":
        return <Icse_physics sOpen={sOpen} />;
        break;
      case "icse_biology":
        return <Icsebiology sOpen={sOpen} />;
        break;
      case "icse_maths":
        return <Icse_mathsmatics sOpen={sOpen} />;
        break;
      case "icse_wow_grammer_com":
        return <Icse_wow_grammer_com sOpen={sOpen} />;
        break;
      case "new_radiant_reader":
        return <New_radiant_reader sOpen={sOpen} />;
        break;
      case "radiant_enviromentnal_studies":
        return <Radiant_enviromental_studies sOpen={sOpen} />;
        break;
      case "new_radiant_science":
        return <New_radiant_science sOpen={sOpen} />;
        break;
      case "icse_wow_compu_bytes":
        return <Icse_wow_compu_bytes sOpen={sOpen} />;
        break;
      case "wow_mind_map":
        return <Wow_mind_map sOpen={sOpen} />;
        break;
      case "value_first":
        return <Value_first sOpen={sOpen} />;
        break;
      case "time_to_learn_art":
        return <Time_to_learn_arts sOpen={sOpen} />;
        break;
      case "wow_art_carft":
        return <Wow_art_carft sOpen={sOpen} />;
        break;
      case "handwriting":
        return <Handwriting sOpen={sOpen} />;
        break;
      case "merry_go_round":
        return <Merry_go_round sOpen={sOpen} />;
        break;
      case "wow_within_worlds":
        return <Wow_within_worlds sOpen={sOpen} />;
        break;
      case "eupheus_school_atuls":
        return <Eupheus_school_atlas sOpen={sOpen} />;
        break;
      case "young_set_deictionaries":
        return <Young_set_deictionaries sOpen={sOpen} />;
        break;
      case "nector":
        return <Nector sOpen={sOpen} />;
        break;
      case "nector_second":
        return <Nector_second sOpen={sOpen} />;
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] flex">
        <Sidebar
          sOpen={sOpen}
          setSopen={setSopen}
          type={"curriculum"}
          setPage={setPage}
        />
        {changePage()}
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default Curriculum;
