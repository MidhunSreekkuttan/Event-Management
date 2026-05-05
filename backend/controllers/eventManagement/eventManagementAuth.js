import eventManagementModel from "../../dataBase/models/eventManagement/eventManagementModel.js";

export const getEventManagementData = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await eventManagementModel.findById(userId);
    if (user) {
      res.json({
        success: true,
        userData: {
          userId: userId,
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
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export const getEventManagementDataAdmin = async (req, res) => {

  try {

    const eventmanager = await eventManagementModel.find({})
    if (!eventmanager) {
      return res.json({ success: false, message: "eventmanagerId not found" })
    }

    res.json({
      success: true,
      eventManagerData: eventmanager
    })

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }

}
