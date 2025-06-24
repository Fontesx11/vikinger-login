import { useState } from "react";
import LogoVinkinger from "./assets/icons/LogoVinkinger";
import { Button } from "./components/ui/button";
import LoginCard from "./LoginPage/components/LoginCard";
import RegisterCard from "./LoginPage/components/RegisterCard";

function App() {
  const [select, setSelect] = useState<"login" | "register">("login");

  return (
    <>
      <div className="relative min-h-screen">
        {/*Backgrounds*/}
        <div className="bg-[url('/bg.jpg')] inset-0 absolute bg-cover min-h-screen bg-center bg-no-repeat -z-10" />
        <div className="bg-[url('/dot-bg.png')] bg-white w-[615px] min-h-screen z-10 absolute right-0 clip-your-needful-style" />

        <div className="flex justify-between px-[337px] overflow-hidden min-w-screen w-max min-h-screen h-max">
          
          {/*Information and Buttons*/}
          <div className="flex mb-[193px] flex-col justify-center items-center">
            <LogoVinkinger className="w-[42px] h-[60px] text-white" />
            <h2 className="uppercase text-white text-2xl font-medium font-raj mt-9">
              welcome to
            </h2>
            <h1 className="uppercase text-white font-titi text-8xl leading-none font-black mt-[-10px] ">
              VIKINGER
            </h1>
            <p className="font-raj text-white text-[1.125rem] leading-[1.3333em] font-medium w-[384px] mt-[30px] mb-20 text-center">
              The next generation social network & community! Connect with your
              friends and play with our quests and badges gamification system!
            </p>

            <div className="flex min-w-[360px] font-raj">
              <Button
                onClick={() => setSelect("login")}
                className={`w-[180px] h-[54px] rounded-tl-[10px] rounded-bl-[10px] rounded-tr-none  rounded-br-none text-[16px] font-bold transition-all duration-600 ${
                  select === "login"
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-white cursor-pointer"
                }`}
              >
                Login
              </Button>
              <Button
                onClick={() => setSelect("register")}
                className={`w-[180px] h-[54px] rounded-tr-[10px] rounded-br-[10px] rounded-tl-none  rounded-bl-none text-[16px] font-bold transition-all duration-600 ${
                  select === "register"
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-white cursor-pointer"
                }`}
              >
                Register
              </Button>
            </div>
          </div>

          {/*Cards*/}
          <div className="z-40 right-[355px] relative mr-[43px]">
            <div
              className={`absolute top-[103px] w-[484px] h-[740px] transition-all duration-1000 ease-in-out ${
                select === "login" ? "translate-x-[20vw] opacity-0" : "translate-x-0"
              }`}
            >
              <img src="/rocket.png" className="absolute -top-4 -left-20"/>
              <RegisterCard/>
            </div>
            <div
              className={`absolute top-[160px] w-[484px] h-[625px] transition-all duration-1000 ease-in-out ${
                select === "register" ? "translate-x-[20vw] opacity-0" : "translate-x-0"
              }`}
            >
              <img src="/rocket.png" className="absolute -top-17 -left-20"/>
              <LoginCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
