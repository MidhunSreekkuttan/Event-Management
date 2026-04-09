import mongoose from "mongoose";
import EnquiryModel from "../../dataBase/models/user/enquiryModel.js";
import userModel from "../../dataBase/models/user/userModel.js";

export const createEnquiry = async (req, res) => {
  try {
    const {
      phoneNumber,
      eventDate,
      place,
      count,
      additionalDetails,
      productId,
    } = req.body;

    const userData = req.user.id;

    if (
      !eventDate ||
      !place ||
      !count ||
      !productId ||
      !userData
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (phoneNumber && phoneNumber.length !== 10) {
      return res.json({ success: false, message: "you Must enter 10 digit number" })
    }

    // Validate MongoDB ObjectId

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.json({ success: false, message: "Invalid ProductId" });
    }

    const users = await userModel.findById(userData)

    const selectedDate = new Date(eventDate)
    const today = new Date()

    const minDate = new Date()

    const maxDate = new Date()
    maxDate.setFullYear(today.getFullYear() + 1)

    if (selectedDate < minDate || selectedDate > maxDate) {
      return res.json({ success: false, message: "Event date must be within allowed range" })
    }

    const newEnquiry = await EnquiryModel.create({
      name: users.name,
      email: users.email,
      phoneNumber,
      eventDate,
      place,
      count,
      additionalDetails,
      productId,
      userData,
      date: Date.now(),
    });
    res.json({ success: true, message: "Enquiry Sumbitted", newEnquiry });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const listEnquiry = async (req, res) => {
  try {
    const response = await EnquiryModel.find({
      userData: req.user.id,
    })
      .populate("productId") // ✅ get product data
      .populate("userData"); // ✅ get user data
    return res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const listAllEnquiry = async (req, res) => {
  try {
    const response = await EnquiryModel.find({})
      .populate("productId")
      .populate("userData");
    return res.json({ success: true, response });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Update enquiry status staff panel

export const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.json({
        success: false,
        message: "Order ID and Status are required",
      });
    }

    const updatedBooking = await EnquiryModel.findByIdAndUpdate(orderId, {
      status,
    });

    if (!updatedBooking) {
      return res.json({
        success: false,
        message: "Booking not found",
      });
    }

    res.json({
      success: true,
      message: "Status Updated Successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
