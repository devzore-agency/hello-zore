import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";

// ======================================================
// Load Environment Variables
// ======================================================

dotenv.config();

// ======================================================
// Create / Reset Admin
// ======================================================

const createAdmin = async () => {
  try {
    // --------------------------------------------------
    // Check MongoDB URI
    // --------------------------------------------------

    if (!process.env.MONGODB_URI) {
      console.error("❌ MONGODB_URI not found in .env");
      process.exit(1);
    }

    // --------------------------------------------------
    // Connect MongoDB
    // --------------------------------------------------

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("=================================");
    console.log("✅ MongoDB Connected");
    console.log("=================================");

    // --------------------------------------------------
    // Admin Credentials
    // --------------------------------------------------

    const adminEmail = "admin@devzore.com";
    const adminPassword = "Admin@123456";

    // --------------------------------------------------
    // Find Existing Admin/User
    // --------------------------------------------------

    let admin = await User.findOne({
      email: adminEmail.toLowerCase(),
    }).select("+password");

    // ==================================================
    // ADMIN DOES NOT EXIST
    // ==================================================

    if (!admin) {
      admin = new User({
        name: "M Shoukat",
        email: adminEmail.toLowerCase(),
        password: adminPassword,
        role: "admin",
        isActive: true,
      });

      await admin.save();

      console.log("✅ New admin account created.");
    }

    // ==================================================
    // ADMIN ALREADY EXISTS
    // ==================================================

    else {
      admin.name = "M Shoukat";
      admin.role = "admin";
      admin.isActive = true;

      // Password reset
      admin.password = adminPassword;

      await admin.save();

      console.log("✅ Existing admin account updated.");
    }

    // ==================================================
    // Final Result
    // ==================================================

    console.log("");
    console.log("=================================");
    console.log("🎉 ADMIN ACCOUNT READY");
    console.log("=================================");
    console.log("Name:", admin.name);
    console.log("Email:", admin.email);
    console.log("Password:", adminPassword);
    console.log("Role:", admin.role);
    console.log("Active:", admin.isActive);
    console.log("=================================");
    console.log("");

    // --------------------------------------------------
    // Close MongoDB
    // --------------------------------------------------

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("");
    console.error("❌ Create/Reset Admin Error:");
    console.error(error);
    console.error("");

    try {
      await mongoose.connection.close();
    } catch (closeError) {
      console.error("MongoDB close error:", closeError);
    }

    process.exit(1);
  }
};

// ======================================================
// Run
// ======================================================

createAdmin();