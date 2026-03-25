import WorkersRegistrationModel from "../../dataBase/models/workers/WorkersRegistrationModel.js";

const workersRegistration = async (req, res) => {
  try {
    const { name, mobileNumber, email, jobRole } = req.body;

    const uploadIdProof = req.files?.uploadIdProof?.[0];
    const uploadWorkPermit = req.files?.uploadWorkPermit?.[0];
    const uploadAddressProof = req.files?.uploadAddressProof?.[0];
    const uploadResume = req.files?.uploadResume?.[0];

    if (
      !uploadIdProof ||
      !uploadWorkPermit ||
      !uploadAddressProof ||
      !uploadResume
    ) {
      res.json({ success: false, message: "missing details" });
    }

    const registration = new WorkersRegistrationModel({
      name,
      mobileNumber,
      email,
      jobRole,
      uploadIdProof: `uploads/${uploadIdProof.filename}`,
      uploadWorkPermit: `uploads/${uploadWorkPermit.filename}`,
      uploadAddressProof: `uploads/${uploadAddressProof.filename}`,
      uploadResume: `uploads/${uploadResume.filename}`,
      date: Date.now(),
    });
    await registration.save();

    res.json({ success: true, message: "Documents Uploaded" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default workersRegistration;
