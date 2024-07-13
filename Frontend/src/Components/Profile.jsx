import { useEffect } from "react";
import Myimg from "../assets/Myimg.jpg";
import Icons from "../Components/Icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Profile() {
 
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <>
      {/* Small screen */}

      <main className="max-sm:w-full mt-12 ">
        <article className="w-full">
          <img
            src={Myimg}
            className="w-[250px]  rounded-[40px] m-auto object-cover "
            data-aos="fade-up-right"
            alt=""
          />
          <h1 className="font-bold text-4xl text-white text-center mt-3" data-aos="fade-down-left">
            Hey, I'm <br /> Gokulasigamani.
          </h1>
          <div className="w-full back rounded-lg p-4 m-auto ">
            <h2 className="font-semibold text-neutral-200 m-auto text-center ">
              I develop Full Stack Web Applications ,using{" "}
              <span className="text-4xl fonts font-bold ">MERN Stack.</span>
            </h2>
          </div>
          <Icons/>
        </article>
      </main>
    </>
  );
}
export default Profile;
