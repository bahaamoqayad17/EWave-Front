import { deleteArticle } from "@/store/ArticleSlice";
import { deleteCategory } from "@/store/CategorySlice";
import { deleteMessage } from "@/store/MessageSlice";
import { deleteRecommendation } from "@/store/RecommendationSlice";
import { deleteUser } from "@/store/UserSlice";
import { deleteVideo } from "@/store/VideoSlice";

export const resources = {
  recommendations: {
    headers: ["name", "action", "opening time"],
    fields: ["name", "action", "opening_time"],
    remove: deleteRecommendation,
  },
  articles: {
    headers: ["title", "image"],
    fields: ["title", "image"],
    remove: deleteArticle,
  },
  payments: {},
  users: {
    headers: ["email", "phone", "Is Paid"],
    fields: ["email", "mobile_number", "is_paid"],
    remove: deleteUser,
  },
  videos: {
    headers: ["link", "image", "title"],
    fields: ["url", "image", "title"],
    remove: deleteVideo,
  },
  categories: {
    headers: ["name", "image"],
    fields: ["name", "image"],
    remove: deleteCategory,
  },
  messages: {
    headers: ["name", "email", "Phone", "message"],
    fields: ["name", "email", "mobile_number", "message"],
    remove: deleteMessage,
  },
};
