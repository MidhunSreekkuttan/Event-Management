import React from "react";
import { useParams } from 'react-router-dom'
import { FileText, Download, ArrowLeft, Calendar, Circle, LoaderPinwheel } from "lucide-react";
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useContext } from "react";
import { AdminContext } from "../Context";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import Loader from "../components/Loading";
import { useState } from "react";

const RegistrationDataDetails = () => {

  const { backendUrl } = useContext(AdminContext)

  const navigate = useNavigate()

  const { id, type } = useParams()

  const getData = useCallback(async () => {

    try {

      const endPoint = type === "eventmanagers" ? `/api/product/singleList/${id}` : `/api/workers/singleList/${id}`

      const { data } = await axios.get(backendUrl + endPoint)
      if (data.success) {
        return data.singleList
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }, [backendUrl, id, type])

  const { data, isLoading, error } = useQuery({
    queryKey: ["RegData", type, id],
    queryFn: getData
  })

  const getEventmanagerId = useCallback(async () => {

    try {

      const { data } = await axios.get(backendUrl + "/api/eventManagement/getUserDataAdmin")

      if (data.success) {
        return data.eventManagerData || []
      } else {
        return []
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }, [backendUrl])

  const { data: eventManagementData, isLoading: eventManagerLoader, error: eventManagerError } = useQuery({
    queryKey: ["eventManagementId", backendUrl],
    queryFn: getEventmanagerId
  })

  const findEventManager = Array.isArray(eventManagementData) && eventManagementData?.find(item => item._id === data?.owner)

  const getWorkersId = useCallback(async () => {

    try {

      const { data } = await axios.get(backendUrl + "/api/workers/getWorkersList")
      if (data.success) {
        return data.workers || []
      } else {
        return []
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }, [backendUrl])

  const { data: workersId, isLoading: workersLoading, error: workersError } = useQuery({
    queryKey: ["workersId"],
    queryFn: getWorkersId
  })

  const findWorker = Array.isArray(workersId) && workersId?.find(item => data?.user === item._id)

  console.log("worker", findWorker);

  const [status, setStatus] = useState("")
  const [Loading, setIsLoading] = useState(false)

  const queryClient = useQueryClient()

  const changeStatus = useCallback(async () => {
    try {

      setIsLoading(true);

      const endPoint = type === "workers" ? "/api/admin/changeWorkersStatus" : "/api/admin/changeStatus"

      const eventManagerId = findEventManager?._id
      const workersId = findWorker?._id

      const res = await axios.post(
        backendUrl + endPoint,
        {
          userId: type === "workers" ? workersId : eventManagerId,
          status
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);

        // refresh UI
        type === "eventmanagers" ? queryClient.invalidateQueries(["eventManagementId"]) :
          queryClient.invalidateQueries(["workersId"])
      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [backendUrl, findEventManager, status, queryClient, type]);

  const details = [
    { label: type === "eventmanagers" ? "Company Name" : "Name", value: type === "eventmanagers" ? data?.companyName : data?.name },
    { label: type === "eventmanagers" ? "Owner Name" : "Job Role", value: type === "eventmanagers" ? data?.ownerName : data?.jobRole },
    { label: "Contact Number", value: type === "eventmanagers" ? data?.contactNumber : data?.mobileNumber },
    { label: "Email Address", value: data?.email },
    {
      label: type === "eventmanagers" && "Address",
      value: type === "eventmanagers" && data?.address,
    },
  ];

  const fileCards =
    type === "eventmanagers"
      ? [
        {
          title: "Business Registration File",
          file: data?.businessRegistrationFile,
        },
        {
          title: "GST Verification File",
          file: data?.GSTVerificationFile,
        },
      ]
      : [
        {
          title: "Address Proof",
          file: data?.uploadAddressProof,
        },
        {
          title: "ID Proof",
          file: data?.uploadIdProof,
        },
        {
          title: "Resume",
          file: data?.uploadResume,
        },
        {
          title: "Work Permit",
          file: data?.uploadWorkPermit,
        },
      ];

  function FileCard({ title, file }) {
    return (
      <div className="overflow-hidden rounded-2xl border border-red-200/60 bg-white/70 backdrop-blur-xl">
        <div className="flex flex-col gap-3 border-b border-red-200/60 bg-white/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-5">
          <div className="flex items-center gap-3">
            {file && (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white shadow-md">
                <FileText className="h-5 w-5" />
              </div>
            )}
            <h3 className="text-lg font-bold text-black md:text-[22px]">
              {title}
            </h3>
          </div>

          {file && (
            <button onClick={() => window.open(backendUrl + file, "_blank")} className="group inline-flex items-center 
              justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg 
                transition hover:bg-red-600 md:text-lg cursor-pointer">
              <Download className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-120" />
              View
            </button>
          )}
        </div>

        {file && (
          <div className="flex items-start gap-3 px-4 py-4 md:px-5">
            <Circle className="mt-2 h-3 w-3 fill-red-400 text-red-400" />
            <p className="break-all text-sm text-black/70 md:text-[18px]">{file}</p>
          </div>
        )}
      </div>
    );
  }


  const redGlass =
    "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

  if (error) {
    return <div>Error:{error.message}</div>
  }

  return (

    <>

      {isLoading && <Loader />}

      <div
        className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),
            _transparent_24%),radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),
                _transparent_20%),linear-gradient(135deg,_#ffffff,_#fff1f2,_#fee2e2)] text-black"
      >
        <main className="">
          <div className="mx-auto max-w-6xl">

            <div>

              <section className="mt-5 mb-15">

                <div className="overflow-hidden rounded-[22px] border border-red-200/60">

                  <div className="flex items-center gap-3 bg-red-500 px-5 py-5 text-white md:px-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold md:text-[34px]">
                      Company Registration Details
                    </h2>
                  </div>

                  <div className="border-b border-red-200/60 px-5 py-5 md:px-7">
                    <h3 className="text-xl font-bold text-black md:text-[30px]">
                      Registration Info
                    </h3>
                  </div>

                  <div className="px-5 md:px-7">
                    {details.map((item) => (
                      <InfoRow key={item.label} label={item.label} value={item.value} />
                    ))}
                  </div>

                  <div className="space-y-5 px-5 py-5 md:px-7 md:py-7">
                    {fileCards.map((file) => (
                      <FileCard key={file.title} title={file.title} file={file.file} />
                    ))}
                  </div>

                  <div className="grid gap-6 border-t border-red-200/60 px-5 py-6 md:grid-cols-2 md:px-7">
                    <div className="space-y-4">
                      <MetaItem label="Date" value={data?.date} />
                      <MetaItem label="Updated At" value={data?.updatedAt} />
                    </div>

                    <div className="space-y-4 md:border-l md:border-red-200/60 md:pl-8">
                      <MetaItem label="Created" value={data?.createdAt} muted />

                      {/*status update*/}

                      <div className="rounded-2xl border border-red-200 bg-white/70 p-5 shadow-md">
                        <h3 className="mb-4 text-lg font-bold text-black md:text-xl">
                          Verification Status
                        </h3>

                        <div className="flex flex-col justify-between px-6 gap-4 sm:flex-row sm:items-center">

                          <select
                            value={status || findEventManager?.isAdminVerified || findWorker?.isAdminVerified || "pending"}
                            onChange={(e) => setStatus(e.target.value)}
                            disabled={Loading}
                            className="rounded-xl border border-red-200 bg-white px-4 py-3 text-black outline-none
                             focus:border-red-500"
                          >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </select>

                          <button
                            onClick={changeStatus}
                            disabled={Loading}
                            className="group rounded-xl bg-red-500 px-6 py-3 font-semibold text-white shadow-md transition
                             hover:bg-red-600 active:scale-95 cursor-pointer"
                          >
                            {Loading ? (
                              <>
                                <LoaderPinwheel className="relative animate-spin justify-center items-center h-5 w-5" />
                              </>
                            ) : (
                              <h2 className="transition-transform duration-500 group-hover:scale-110">Update Status</h2>
                            )}
                          </button>
                        </div>

                        <p className="mt-3 text-sm text-black/60">
                          Current Status:{" "}
                          <span className="font-semibold text-red-600">
                            {type === "eventmanagers" ? findEventManager ? findEventManager?.isAdminVerified?.[0]?.toUpperCase() +
                              findEventManager?.isAdminVerified?.slice(1) : "" :
                              findWorker ? findWorker?.isAdminVerified?.[0]?.toUpperCase() + findWorker?.isAdminVerified?.slice(1)
                                : ""
                            }
                          </span>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="mt-6 flex justify-end">
                  <button onClick={() => navigate("/RegistrationData")} className="group inline-flex items-center gap-2 rounded-2xl
                   bg-red-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-red-600
                     active:scale-95 cursor-pointer">
                    <ArrowLeft className="h-5 w-5 transition-all duration-400 group-hover:-translate-x-3" />
                    Back
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

    </>

  );
};

function InfoRow({ label, value }) {
  return (
    <div className="grid gap-2 border-b border-red-200/60 py-4 md:grid-cols-[170px_1fr] md:gap-4">
      <p className="text-[15px] font-semibold text-black md:text-xl">
        {label}
      </p>
      <p className="break-words text-[15px] text-black/70 md:text-xl">
        {value}
      </p>
    </div>
  );
}

function MetaItem({ label, value, muted = false }) {
  return (
    <div className="flex items-start gap-3">
      <div className="relative bottom-2 mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-600">
        <Calendar className="h-5 w-5" />
      </div>
      <div className="text-sm md:text-lg">
        <span className="font-bold text-black">{label}: </span>
        <span className={muted ? "text-black/50" : "text-black/70"}>
          {value}
        </span>
      </div>
    </div>
  );
}

export default React.memo(RegistrationDataDetails);