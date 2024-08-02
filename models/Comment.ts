import mongoose from "mongoose";

export interface Comment extends mongoose.Document {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
  likes: number;
  postId: string;
  answers?: {
    id: string;
    author: string;
    content: string;
    createdAt: Date;
    likes: number;
  }[];
}

const CommentSchema = new mongoose.Schema<Comment>({
  id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: [true, "Please provide your name."],
  },
  content: {
    type: String,
    required: [true, "Please provide your opinion."],
  },
  createdAt: {
    type: Date,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  answers: {
    type: {
      id: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        required: true,
      },
      likes: {
        type: Number,
        required: true,
      },
    },
    required: false,
  },
});

export default mongoose.models.Comment ||
  mongoose.model<Comment>("Comment", CommentSchema);
