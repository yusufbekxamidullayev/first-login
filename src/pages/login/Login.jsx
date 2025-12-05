import React from 'react'

function LoginPage() {
  return (
      <div
          className="w-full h-screen bg-cover bg-center flex items-center justify-center pl-100"
          style={{ backgroundImage: `url(bg.jpg)` }}
      >
          <div className="w-full max-w-sm p-6 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault();}}>
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