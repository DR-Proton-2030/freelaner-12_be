const express = require("express");
const Contact = require("../model/user.model");

const router = express.Router();

router.post("/getOtp", async (req, res) => {
  try {
    const { phone_no } = req.body;
    if (phone_no) {
      // Generate a random 4-digit OTP
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      console.log(otp);
      res.status(200).json({ result: otp });
    } else {
      throw new Error("Phone number is required");
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Error generating OTP",
    });
  }
});

router.post("/saveUserDetails", async (req, res) => {
  try {
    const { name, phone_no, city, acres, practice_organic_farming } = req.body;
    if (
      name &&
      phone_no &&
      city &&
      acres &&
      practice_organic_farming !== undefined
    ) {
      const existingContact = await Contact.findOne({ phone_no });

      if (existingContact) {
        return res
          .status(400)
          .json({ message: "Contact with this phone number already exists" });
      }

      const contact = new Contact({
        name,
        phone_no,
        city,
        acres,
        practice_organic_farming,
      });
      const userDetails = await contact.save();
      res
        .status(200)
        .json({ message: "Contact saved successfully", result: userDetails });
    } else {
      throw new Error("Missing required fields");
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Error saving contact",
    });
  }
});

module.exports = router;
