import { Inputs_Labels } from "./Inputs"

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block font-semibold text-center">Login</h1>
            <hr className="mt-3"/>
            <div className="mt-3">
                <Inputs_Labels id={"username"} type={"text"} placeholder={"Enter Username"} textLabel={"Username"}/>             
            </div>
            <div className="mt-3">
            <Inputs_Labels id={"password"} type={"password"} placeholder={"Enter Password..."} textLabel={"Password"}/>
            </div>
            <div className="mt-5">
                <button className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold" type="submit">Login</button>
            </div>
        </div>
    </div>
  )
}
