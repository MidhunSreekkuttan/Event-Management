import eventManagementModel from "../../dataBase/models/eventManagement/eventManagementModel.js";

const getEventManagementData = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await eventManagementModel.findById(userId);
    if (user) {
      res.json({
        success: true,
        userData: {
          name: user.name,
          isAccountVerified: user.isAccountVerified,
          isAdminVerified: user.isAdminVerified,
        },
      });
    } else {
      return res.json({
        success: false,
        message: "User Not Found login again",
      });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default getEventManagementData;
