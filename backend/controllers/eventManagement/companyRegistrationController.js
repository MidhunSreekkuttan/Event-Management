import CompanyRegistrationModel from "../../dataBase/models/eventManagement/companyRegistration.js";

export const uploadPdf = async (req, res) => {
  try {
    const { pdfTitle, companyName, ownerName, contactNumber, email, address } =
      req.body;

    const eventManagementId = req.userId;

    const pdf = new CompanyRegistrationModel({
      pdfTitle,
      pdfPath: `/uploads/${req.file.filename}`,
      companyName,
      ownerName,
      contactNumber,
      email,
      address,
      owner: eventManagementId,
    });

    await pdf.save();

    res.json({ success: true, message: "pdf Upload Successfull", data: pdf });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const listPdf = async (req, res) => {
  try {
    const pdf = await CompanyRegistrationModel.find({});
    res.json({ success: true, data: pdf });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: error.message });
  }
};
