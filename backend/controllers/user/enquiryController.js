import mongoose from "mongoose";
import EnquiryModel from "../../dataBase/models/user/enquiryModel.js";

const createEnquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      eventDate,
      place,
      count,
      additionalDetails,
      productId,
    } = req.body;

    const userData = req.user.id;

    if (
      !name ||
      !email ||
      !eventDate ||
      !place ||
      !count ||
      !productId ||
      !userData
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Validate MongoDB ObjectId

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.json({ success: false, message: "Invalid ProductId" });
    }
    const newEnquiry = await EnquiryModel.create({
      name,
      email,
      phoneNumber,
      eventDate,
      place,
      count,
      additionalDetails,
      productId,
      userData,
    });
    res.json({ success: true, message: "Enquiry Sumbitted", newEnquiry });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default createEnquiry;
