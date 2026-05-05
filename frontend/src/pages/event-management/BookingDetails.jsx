import axios from "axios";
import React, { useCallback, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackendContex } from "../../context/ConnectBackendContex";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loading";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCheckCircle,
  FaPrint,
  FaArrowLeft,
  FaClock,
  FaBox,
  FaWallet,
  FaFileAlt,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";

const BookingDetails = () => {
  const { bookingid } = useParams();
  const { backendUrl } = useContext(BackendContex);
  const navigate = useNavigate();

  const getSingleBookingData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        backendUrl + `/api/booking/singleBookingData/${bookingid}`
      );
      if (data.success) {
        return data.getBookingData;
      } else {
        toast.error(data.message);
        return null;
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [backendUrl, bookingid]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleBookingData", bookingid],
    queryFn: getSingleBookingData,
  });

  console.log(data);


  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  const isRejected = data?.bookingStatus === "Rejected";
  const isPaid = data?.paymentStatus === "paid";

  const statusColors = {
    rejected: { bg: "bg-red-100", text: "text-red-600", icon: <FaTimesCircle className="text-red-500 text-xl" /> },
    approved: { bg: "bg-green-100", text: "text-green-600", icon: <FaCheckCircle className="text-green-500 text-xl" /> },
    pending: { bg: "bg-yellow-100", text: "text-yellow-600", icon: <FaClock className="text-yellow-500 text-xl" /> },
  };

  const statusStyle = statusColors[data?.status] || statusColors.Pending;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-5xl mx-auto space-y-5">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-xl font-bold text-gray-800">Booking Details</h1>
          </div>

        </div>

        {/* STATUS BANNER */}
        <div className={`flex items-center justify-between ${statusStyle?.bg} border border-opacity-30 p-4 rounded-2xl`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              {statusStyle.icon}
            </div>
            <div>
              <p className="text-xs text-gray-500">Booking Status</p>
              <p className={`text-lg font-bold ${statusStyle.text}`}>{data?.bookingStatus}</p>
            </div>
          </div>
          <div className="text-right text-xs text-gray-500 space-y-1">
            <div className="flex items-center gap-2 justify-end">
              <FaCalendarAlt className="text-purple-400" />
              <span>Booking ID: <span className="font-medium text-gray-700">{data?._id}</span></span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <FaCalendarAlt className="text-purple-400" />
              <span>Booked On: <span className="font-medium text-gray-700">{new Date(data?.createdAt).toLocaleString()}</span></span>
            </div>
          </div>
        </div>

        {/* CUSTOMER INFO + BOOKING SUMMARY */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Customer */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-purple-500 font-semibold text-sm mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaUser />
              </div>
              Customer Information
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400">Name</p>
                <p className="font-semibold text-gray-800">{data?.userId?.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-gray-600">{data?.userId?.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">User ID</p>
                <p className="text-xs text-gray-400 font-mono">{data?.userId?._id}</p>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-purple-500 font-semibold text-sm mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaFileAlt />
              </div>
              Booking Summary
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500"><FaCalendarAlt className="text-purple-400" /> Event Date</span>
                <span className="font-semibold text-gray-800">{data?.eventDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500"><FaCreditCard className="text-purple-400" /> Payment Method</span>
                <span className="font-semibold text-gray-800">Razorpay</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500"><FaWallet className="text-purple-400" /> Payment Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isPaid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                  {data?.paymentStatus}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500"><FaBox className="text-purple-400" /> Booking Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text}`}>
                  {data?.bookingStatus}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* EVENT / PRODUCT DETAILS */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-purple-500 font-semibold text-sm">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaBox />
              </div>
              Event / Product Details
            </div>
            <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold">{data?.productId?.status}</span>
          </div>

          {/* Main image + details */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-shrink-0">
              <img
                src={data?.productId?.image?.[0]}
                className="w-full md:w-64 h-44 object-cover rounded-xl"
                alt={data?.productId?.company_name}
              />
              {/* Thumbnail row */}
              {data?.productId?.image?.length > 1 && (
                <div className="flex gap-2 mt-2">
                  {data?.productId?.image?.slice(1, 5).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-14 h-14 object-cover rounded-lg border border-gray-100"
                      alt=""
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">{data?.productId?.company_name}</h2>
              <span className="inline-block mt-1 mb-3 text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">
                {data?.productId?.category}
              </span>

              <div className="grid grid-cols-2 gap-y-2 text-sm mb-3">
                <div>
                  <p className="text-xs text-gray-400 flex items-center gap-1"><FaMapMarkerAlt /> Location</p>
                  <p className="text-gray-700 font-medium">{data?.productId?.location}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Price</p>
                  <p className="text-gray-700 font-medium">₹{data?.baseAmount?.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Starting Price</p>
                  <p className="text-gray-700 font-medium">₹{data?.productId?.starting_price}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">Main Services</p>
                <div className="flex flex-wrap gap-2">
                  {data?.productId?.main_services?.map((s, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{s}</span>
                  ))}
                </div>
              </div>

              {data?.productId?.description && (
                <div className="mt-3">
                  <p className="text-xs text-gray-400 mb-1">Description</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{data?.productId?.description}</p>
                </div>
              )}
            </div>
          </div>

          {/* Event time row */}
          <div className="grid grid-cols-3 gap-4 mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-purple-400 text-sm" />
              <div>
                <p className="text-xs text-gray-400">Event Date</p>
                <p className="text-sm font-semibold text-gray-700">{data?.eventDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-purple-400 text-sm" />
              <div>
                <p className="text-xs text-gray-400">Start Time</p>
                <p className="text-sm font-semibold text-gray-700">{data?.productId?.startTime || "—"}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-purple-400 text-sm" />
              <div>
                <p className="text-xs text-gray-400">End Time</p>
                <p className="text-sm font-semibold text-gray-700">{data?.productId?.endTime || "—"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* DELIVERY ADDRESS + PAYMENT BREAKDOWN */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Address */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-purple-500 font-semibold text-sm mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaMapMarkerAlt />
              </div>
              Delivery / Event Address
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <p className="text-xs text-gray-400">Name</p>
                <p className="font-medium text-gray-700">{data?.address?.firstName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">City</p>
                <p className="font-medium text-gray-700">{data?.address?.city}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Street</p>
                <p className="font-medium text-gray-700">{data?.address?.street}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="font-medium text-gray-700 text-xs break-all">{data?.userId?.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Place</p>
                <p className="font-medium text-gray-700">{data?.address?.place}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="font-medium text-gray-700">{data?.address?.phoneNumber || "—"}</p>
              </div>
            </div>
          </div>

          {/* Payment Breakdown */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-purple-500 font-semibold text-sm mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaWallet />
              </div>
              Payment Breakdown
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Base Amount</span>
                <span className="font-medium text-gray-700">₹{data?.baseAmount?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Admin Commission (30%)</span>
                <span className="font-medium text-gray-700">₹{data?.adminCommissionAmount?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Event Manager Amount</span>
                <span className="font-medium text-gray-700">
                  ₹{((data?.baseAmount || 0) - (data?.adminCommissionAmount || 0)).toLocaleString()}
                </span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total Paid</span>
                <span className="font-bold text-purple-600 text-lg">₹{data?.totalPaid?.toLocaleString()}</span>
              </div>
              <div className="pt-1">
                <span className={`inline-flex items-center gap-2 ${data?.paymentMethod === "Razorpay" ?
                  "bg-green-50 text-green-600 border border-green-200" :
                  "bg-yellow-50 text-yellow-600 border border-yellow-200"} px-3 py-1.5 rounded-full text-xs font-medium`}>
                  {data?.paymentMethod === "Razorpay" ? (
                    <>
                      <FaCheckCircle /> Paid via Razorpay
                    </>
                  ) : (
                    <>
                      <h1>Cash On Delivery</h1>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ITEMS BOOKED */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-purple-500 font-semibold text-sm mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <FaBox />
            </div>
            Items Booked
          </div>
          <div className="space-y-3">
            {data?.items?.length > 0 ? (
              data?.items?.map((item, i) => (
                <div key={i} className="flex items-center gap-4 border border-gray-100 rounded-xl p-3">
                  <img
                    src={item?.image[0]}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    alt={item?.name}
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{item?.name || data?.productId?.company_name}</p>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                      {item?.category || data?.productId?.category}
                    </span>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-gray-500">₹{item?.price?.toLocaleString() || data?.baseAmount?.toLocaleString()} × {item?.quantity || 1}</p>
                    <p className="font-bold text-gray-800">₹{(item?.price || data?.baseAmount)?.toLocaleString()}</p>
                  </div>
                </div>
              ))
            ) : (
              /* Fallback: show the single product as an item */
              <div className="flex items-center gap-4 border border-gray-100 rounded-xl p-3">
                <img
                  src={data?.productId?.image?.[0]}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  alt={data?.productId?.company_name}
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">{data?.productId?.company_name}</p>
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                    {data?.productId?.category}
                  </span>
                </div>
                <div className="text-right text-sm">
                  <p className="text-gray-500">₹{data?.baseAmount?.toLocaleString()} × 1</p>
                  <p className="font-bold text-gray-800">₹{data?.baseAmount?.toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingDetails;