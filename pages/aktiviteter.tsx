import FooterNavbar from "@/components/FooterNavbar";
import Header from "@/components/Header";

const Aktiviteter = () => {
  return (
    <div className="h-screen w-screen bg-active-white ">
      <main>
        <Header />
        <div className="lg:flex justify-center ">
          <div className="pt-28 flex justify-center lg:w-1/2 shadow-lg">
            <div className="w-1/2 flex justify-center  border-b-2 border-active-purple font-bold  ">
              Bokade
            </div>
            <div className=" w-1/2 flex justify-center  ">Sparade</div>
          </div>
        </div>
        <div className="lg:flex justify-center p-5">
          <div className=" bg-active-purple lg:w-1/2">
            <div>Här kommer vänner</div>
          </div>
        </div>
        <FooterNavbar />
      </main>
    </div>
  );
};

export default Aktiviteter;
