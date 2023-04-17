import { sendEmail } from "../utils/SendEmail.js";
export const SendMessage = async (req, res) => {
    try {
      const { name,email,message } = req.body;
      await sendEmail("umair.xmair@gmail.com", "Message from Porfolio", `${name} \n${email} \n${message}`);
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };