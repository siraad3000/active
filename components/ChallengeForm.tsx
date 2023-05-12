import Image from "next/image";
import { Challenge } from "@/types/challengeTemp";
import { useSession } from "next-auth/react";
import HideForm from "./HideForm";
import { useFormik } from "formik";

type ChallengeFormProps = {
  onSubmitChallenge: (challenge: Challenge) => void;
};
export default function ChallengeForm({
  onSubmitChallenge,
}: ChallengeFormProps) {
  const { data: session, status } = useSession();
  const currentYear = new Date().getFullYear();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
      date: "",
      time: "",
    },
    onSubmit,
  });
  async function onSubmit(values: any) {
    const newChallenge: Challenge = {
      publisher: session?.user?.name,
      title: values.title,
      description: values.description,
      location: values.location,
      time: values.sTime + "-" + values.fTime,
      date: values.date,
      pictureId: session?.user?.image,
      publisherId: session?.user.id,
      attending: [],
    };
    onSubmitChallenge(newChallenge);
  }
  return (
    <div className="bg-active-white">
      <form
        id="challengeForm"
        className="bg-white hidden h-screen pt-24"
        onSubmit={formik.handleSubmit}
      >
        <div className="p-8">
          <div></div>
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="time"
          >
            Skapa aktivitet
          </label>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="challengeTitle"
              required
              maxLength={15}
              {...formik.getFieldProps("title")}
              type="text"
              placeholder="Namnnge din aktivitet"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateTime"
            >
              Datum och tid
            </label>
            <div id="dateTime" className="flex">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-40"
                {...formik.getFieldProps("date")}
                type="date"
                min={`${currentYear}-01-01`}
                max={`${currentYear}-12-31`}
                placeholder="date"
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-40"
                id="start_time"
                type="time"
                required
                {...formik.getFieldProps("sTime")}
                placeholder="Time"
              />
              _
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-40"
                id="finished_time"
                type="time"
                required
                {...formik.getFieldProps("fTime")}
                placeholder="Time"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>

            <div className="flex flex-row items-center">
              <Image
                src="/Location-Icon-Filled-svg.svg"
                alt="Avatar"
                width={24}
                height={24}
              />
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-4 text-sm "
                id="location"
                type="text"
                required
                maxLength={75}
                {...formik.getFieldProps("location")}
                placeholder="Årstaskogen Naturreservat 120 59 Årsta"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Lägg till beskrivning
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              rows={5}
              required
              maxLength={500}
              placeholder="Description"
              {...formik.getFieldProps("description")}
            ></textarea>
          </div>
          <button
            className=" w-full purple1 hover:bg-purple-700 text-active-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
            id="button"
            onClick={() => {
              HideForm();
            }}
          >
            Publicera
          </button>
          <div className="flex items-center justify-between mt-3">
            <button
              className="purple1 hover:bg-purple-700 text-active-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
              type="button"
              id="hide-form-btn"
              onClick={HideForm}
            >
              return
            </button>
            <button
              className="purple1 hover:bg-purple-700 text-active-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
              type="reset"
              id="hide-form-btn"
              onClick={HideForm}
            >
              exit
            </button>
          </div>
        </div>
      </form>
      <div
        className="w-14 h-14 flex justify-center items-center rounded-full fixed bottom-20 right-5 bg-active-purple z-10"
        id="show-form-btn"
        onClick={HideForm}
      >
        <button
          className="flex justify-center items-center  hover:bg-purple-700 w-full h-full rounded-full "
          type="button"
        >
          <Image
            src={"/Plus-Icon-Big-White.png"}
            alt="#"
            width={28}
            height={28}
          ></Image>
        </button>
      </div>
    </div>
  );
}
