import ResponseModel from "../../dataBase/models/staffs/responseModel.js";

const sendResponse = async (req, res) => {
  try {
    const { enquiryId, relatedEvents, respondMessage } = req.body;

    if (!enquiryId) {
      return res.json({ success: false, message: "Enquiry Id not found" });
    }

    if (!relatedEvents) {
      return res.json({ success: false, message: "relatedEvents not found" });
    }

    if (!respondMessage) {
      return res.json({
        success: false,
        message: "respondMessage is not found",
      });
    }

    const newResponse = new ResponseModel({
      enquiryId,
      relatedEvents,
      respondMessage,
      date: Date.now(),
    });

    await newResponse.save();

    const populateResponse = await ResponseModel.findById(newResponse._id)
      .populate("enquiryId")
      .populate("relatedEvents");

    return res.json({
      success: true,
      message: "Enquiry sended",
      data: populateResponse,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default sendResponse;
