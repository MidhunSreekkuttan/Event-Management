import ResponseModel from "../../dataBase/models/staffs/responseModel.js";

export const sendResponse = async (req, res) => {
  try {
    const { enquiryId, relatedEvents, respondMessage, userId } = req.body;

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
      userId,
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

export const getResponse = async (req, res) => {
  try {
    const responsedata = await ResponseModel.find({ userId: req.userId })
      .populate("enquiryId")
      .populate("relatedEvents");

    if (responsedata.length === 0) {
      return res.json({ success: false, message: "User Not found" });
    }

    res.json({ success: true, responsedata });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
