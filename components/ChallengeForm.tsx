import Image from "next/image"
import { Challenge } from "@/types/challengeTemp"
import { useSession } from "next-auth/react"
import HideForm from "./HideForm"
import { useFormik } from "formik"

type ChallengeFormProps = {
  onSubmitChallenge: (challenge: Challenge) => void
}
export default function ChallengeForm({
  onSubmitChallenge,
}: ChallengeFormProps) {
  const { data: session, status } = useSession()
  const currentYear = new Date().getFullYear()

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
      date: "",
      sTime: "",
      fTime: "",
      level: "",
      showFor: "",
    },
    onSubmit,
  })
  async function onSubmit(values: any) {
    formik.resetForm()
    HideForm()
    const newChallenge: Challenge = {
      publisher: session?.user?.name,
      title: values.title,
      description: values.description,
      location: values.location,
      time: values.sTime + "-" + values.fTime,
      date: values.date,
      level: values.level,
      showFor: values.showFor,
      pictureId: session?.user?.image,
      publisherId: session?.user.id,
      attending: [],
      marked: [],
    }
    onSubmitChallenge(newChallenge)
  }
  return (
    <div className="bg-active-white">
      <form
        id="challengeForm"
        className="bg-white hidden h-screen pt-24"
        onSubmit={formik.handleSubmit}
      >
        <div className="p-8">
          <div className="flex justify-between">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="time"
            >
              Skapa aktivitet
            </label>
            <button
              className="flex align-top mb-5 "
              type="reset"
              id="hide-form-btn"
              onClick={() => {
                formik.resetForm()
                HideForm()
              }}
            >
              <Image
                src="/Cross-Icon-Purple.png"
                alt="Avatar"
                width={25}
                height={25}
              />
            </button>
          </div>
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
                className=" mx-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-40 "
                {...formik.getFieldProps("date")}
                type="date"
                min={`${currentYear}-01-01`}
                max={`${currentYear}-12-31`}
                placeholder="date"
              />
              <input
                className="mx-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-40"
                id="start_time"
                type="time"
                required
                {...formik.getFieldProps("sTime")}
                placeholder="Time"
              />
              _
              <input
                className="mx-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-40"
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
                minLength={5}
                maxLength={75}
                {...formik.getFieldProps("location")}
                placeholder="Årstaskogen Naturreservat 120 59 Årsta"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="level"
            >
              Välj nivå
            </label>
            <div className="flex flex-row items-center justify-start ">
              <div className="flex items-center w-32 h-7">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/lätt"
                  type="radio"
                  name="level"
                  id="level"
                  value={"Lätt"}
                  checked={formik.values.level === "Lätt"}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="level"
                  className="w-full h-full py-3 text-sm font-medium text-center peer-checked/lätt:bg-active-purple
                    peer-checked/lätt:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center "
                >
                  Lätt
                </label>
              </div>

              <div className="flex items-center pl-4  w-32 h-7">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/medel"
                  type="radio"
                  name="level"
                  id="level2"
                  value={"Medel"}
                  checked={formik.values.level === "Medel"}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="level2"
                  className="w-full h-full py-3 text-sm font-medium text-center peer-checked/medel:bg-active-purple 
           peer-checked/medel:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
                >
                  medel
                </label>
              </div>

              <div className="flex items-center pl-4  w-32 h-7">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/test"
                  type="radio"
                  name="level"
                  id="level3"
                  value={"Hög"}
                  checked={formik.values.level === "Hög"}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="level3"
                  className="w-full h-full py-3 text-sm font-medium text-center  peer-checked/test:bg-active-purple
                 peer-checked/test:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
                >
                  intensivt
                </label>
              </div>
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="showFor"
            >
              Visas för
            </label>
            <div className="flex flex-row items-center justify-start">
              <div className="flex items-center w-32 h-7">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 peer/friends hidden"
                  type="radio"
                  name="showFor"
                  id="friends"
                  value={"Vänner"}
                  checked={formik.values.showFor === "Vänner"}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="friends"
                  className="w-full h-full py-3 text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/friends:bg-active-purple peer-checked/friends:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
                >
                  Vänner
                </label>
              </div>

              <div className="flex items-center pl-4 w-32 h-7">
                <input
                  className="text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/grupper"
                  type="radio"
                  name="showFor"
                  id="grupper"
                  value={"Grupper"}
                  checked={formik.values.showFor === "Grupper"}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="grupper"
                  className="w-full h-full py-3 ml-2 text-sm font-medium peer-cheaked:text-red-500 text-center peer-checked/grupper:bg-active-purple peer-checked/grupper:text-active-white border border-gray-200 rounded dark:border-gray-700 flex items-center justify-center"
                >
                  Grupper
                </label>
              </div>
              <div className="flex items-center pl-4  w-32 h-7 ">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 2 dark:bg-gray-700 dark:border-gray-600 hidden peer/all"
                  type="radio"
                  name="showFor"
                  id="all"
                  value={"Offentligt"}
                  checked={formik.values.showFor === "Offentligt"}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="all"
                  className="w-full h-full py-3 text-sm font-medium  text-center peer-checked/all:bg-active-purple
                   peer-checked/all:text-active-white border border-gray-200 
                   rounded dark:border-gray-700 flex items-center justify-center"
                >
                  Offentligt
                </label>
              </div>
            </div>
          </div>
          <button
            className="w-full mt-5 purple1 hover:bg-purple-700 text-active-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
            id="button"
          >
            Publicera
          </button>
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
  )
}
