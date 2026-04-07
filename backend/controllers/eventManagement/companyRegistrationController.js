import CompanyRegistrationModel from "../../dataBase/models/eventManagement/companyRegistration.js";

export const uploadPdf = async (req, res) => {
  try {
    const { companyName, ownerName, contactNumber, email, address } = req.body;

    const eventManagementId = req.userId;

    const businessFile = req.files?.businessRegistrationFile?.[0];
    const gstFile = req.files?.GSTVerificationFile?.[0];

    if (!businessFile || !gstFile) {
      return res.json({ success: false, message: "Files not uploaded" });
    }

    const pdf = new CompanyRegistrationModel({
      businessRegistrationFile: `/uploads/${businessFile.filename}`,
      GSTVerificationFile: `/uploads/${gstFile.filename}`,
      companyName,
      ownerName,
      contactNumber,
      email,
      address,
      owner: eventManagementId,
      date: Date.now(),
    });

    await pdf.save();

    res.json({ success: true, message: "pdf Upload Successfull" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const listPdf = async (req, res) => {
  try {
    const pdf = await CompanyRegistrationModel.find({});
    res.json({ success: true, registrations: pdf });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: error.message });
  }
};
