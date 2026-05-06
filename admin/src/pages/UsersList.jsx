import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../Context";
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Loader from "../components/Loading";
import { Trash2 } from 'lucide-react';
import { toast } from "react-toastify";

const UsersList = () => {
  const navigate = useNavigate();

  const { backendUrl } = useContext(AdminContext)

  const queryClient = useQueryClient()

  const getUserList = useCallback(async () => {

    const { data } = await axios.get(backendUrl + "/api/user/listUser")
    if (data.success) {
      return data.userList
    }

  }, [backendUrl])

  const { data, isLoading, error } = useQuery({
    queryKey: ["userList"],
    queryFn: getUserList
  })

  const getStatusClass = (status) => {
    if (status) {
      return "bg-emerald-100/80 text-emerald-700 ring-1 ring-emerald-200";
    }
    return "bg-rose-100/80 text-rose-700 ring-1 ring-rose-200";
  };

  const handleClick = useCallback(async (id) => {

    try {

      const { data } = await axios.delete(backendUrl + "/api/user/deleteUser", { data: { id } })
      if (data.success) {
        toast.info(data.message)
        queryClient.invalidateQueries(["userList"])
      } else {
        return toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }, [backendUrl, queryClient])

  const redGlass =
    "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

  if (error) return <div>Error:{error.message}</div>

  return (
    <>

      {isLoading && <Loader />}

      <div
        className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),
            _transparent_24%),radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),
                _transparent_20%),linear-gradient(135deg,_#ffffff,_#fff1f2,_#fee2e2)] text-black pt-3"
      >
        <div className={`mx-auto max-w-7xl rounded-[32px] p-6 sm:p-8 ${redGlass}`}>
          <div className="flex flex-col gap-5 border-b border-red-200/60 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-black">
                Clients List
              </h1>
              <p className="mt-2 text-sm text-black/55">
                View all registered clients and their verification status.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[24px] border border-red-200/60 bg-white/60 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-white/50">
                  <tr className="text-left text-sm font-semibold text-black/70">
                    <th className="px-6 py-4">Client Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-red-100/70 bg-transparent">
                  {data?.map((client) => (
                    <tr
                      key={client._id}
                      className="transition hover:bg-white/40"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-black">
                        {client.name}
                      </td>

                      <td className="px-6 py-4 text-sm text-black/60">
                        {client.email}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex min-w-28 justify-center rounded-xl px-4 py-2 text-sm font-semibold ${getStatusClass(
                            client?.isAccountVerified
                          )}`}
                        >
                          {client?.isAccountVerified
                            ? "Verified"
                            : "Not Verified"}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleClick(client._id)}
                          className="rounded-2xl border border-red-200/60 bg-white/70 px-4 py-2 text-sm font-semibold
                             text-red-700 transition hover:bg-red-50 cursor-pointer"
                        >
                          <Trash2 color="red" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;