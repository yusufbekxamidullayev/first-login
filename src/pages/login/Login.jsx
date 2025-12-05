import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage({setIsAuth}) {
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if(e.target[0].value === "+998973434950" && e.target[1].value === "1234567"){
            setIsAuth(true)
            localStorage.setItem("auth" , true)
            navigate("/products")
        }
    }
  return (
      <div
          className="w-full h-screen bg-cover bg-center flex items-center justify-center pl-100"
          style={{ backgroundImage: `url(bg.jpg)` }}
      >
          <div className="w-full max-w-sm p-6 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <form onSubmit={submit} className="space-y-4">
                  <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                      type="password"
                      placeholder="Password"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                      type="submit"
                      className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                      Submit
                  </button>
              </form>
          </div>
      </div>

  )
}

export default LoginPage