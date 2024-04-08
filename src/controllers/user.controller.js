import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/CloudinaryService.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details
  // validate data
  // if user already exist username, email
  // check avatar
  // upload to cloudinary
  // create user object
  // remove password and refresh token
  // check user creation
  // return response

  const { fullName, userName, password, email } = req.body;

  if (
    [fullName, userName, password, email].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const userExist = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (userExist) throw new ApiError(409, "User with email or username exist");

  let avatarLocalpath;
  if (
    req.files &&
    Array.isArray(req.files.avatar) &&
    req.files.avatar.length > 0
  ) {
    avatarLocalpath = req.files.avatar[0].path;
  }
  const avatarOnCloudinary = await uploadOnCloudinary(avatarLocalpath);

  const user = await User.create({
    fullName,
    email,
    userName: userName?.toLowerCase(),
    password,
    avatar: avatarOnCloudinary?.url || "",
    role: "user",
    archived: false,
  });

  const createdUser = await User.findById(user?._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while creating the user.");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

export { registerUser };
