import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  primarySkill: String,
  experience: String,
  availability: String,
  hourlyRate: String,
  acceptedTerms: Boolean,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ["client", "freelancer", "admin"], default: "client" },
  profile: profileSchema,
});

export default mongoose.model("User", userSchema);
