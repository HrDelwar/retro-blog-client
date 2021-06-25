import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../App";

const SeeAllUser = () => {
  document.title = "users || Retro Blog";

  const [user, setUser] = useContext(authContext);
  const [registerUser, setRegisterUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://young-badlands-81640.herokuapp.com/seeAllUser/${user.email}`)
      .then((response) => {
        setRegisterUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email]);
  console.log(registerUser);
  return (
    <div className="container mx-auto px-4 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left  text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  
                  <th
                    scope="col"
                    className="relative px-6 py-3 text-right text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {registerUser.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.coverImage}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.firstName + " " + person.lastName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 uppercase py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.rule}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllUser;
