import { useContext, useEffect } from "react";
import { StaffContext } from "../context/staffContext";
import Loader from "../components/LoadingPage";
import { useNavigate } from "react-router-dom";

const Clients = () => {

  const navigate = useNavigate()

  const { listUser, getUsersList, loading } = useContext(StaffContext)

  const getStatusClass = (status) => {
    if (status === 'Verified') return 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200';
    if (status === 'Not Verified') return 'bg-rose-100 text-rose-700 ring-1 ring-rose-200';
    return 'bg-violet-100 text-violet-700 ring-1 ring-violet-200';
  };

  const handleClick = (id) => {
    navigate(`/clientDetails/${id}`)
  }

  useEffect(() => {
    getUsersList()
  }, [])

  return (

    <>

      {loading && <Loader />}

      <div className="min-h-screen w-7xl bg-slate-100 p-4 sm:p-6 lg:p-10 mt-1 mb-3 rounded-r-2xl">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Clients List</h1>
            </div>

          </div>

          <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-sm font-semibold text-slate-600 justify-between">
                    <th className="px-6 py-4  relative left-15">Client Name</th>
                    <th className="px-6 py-4  relative left-60">Email</th>
                    <th className="px-6 py-4 relative left-40">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {listUser.map((client) => (
                    <tr key={client._id}>
                      <td className="px-6 py-4 text-sm font-semibold  relative left-20 text-slate-900">{client.name}</td>
                      <td className="px-6 py-4  relative left-40 text-sm text-slate-600">{client.email}</td>
                      <td className="relative right-4 px-6 py-4">
                        <span className={`inline-flex min-w-24 justify-center rounded-xl px-4 py-2 relative left-40
                             text-sm font-semibold ${getStatusClass(client?.isAccountVerified)}`}>
                          {client?.isAccountVerified ? "Verified" : "Not Verified"}
                        </span>
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

  )
}

export default Clients