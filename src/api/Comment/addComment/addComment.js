import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragments";

export default {
  Mutation: {
    addComment: async (_, args, { request }) => {
      console.log(args);
      isAuthenticated(request);
      const { user } = request;
      const { text, postId } = args;
      const comment = await prisma
        .createComment({
          user: { connect: { id: user.id } },
          post: { connect: { id: postId } },
          text
        })
        .$fragment(COMMENT_FRAGMENT);
      console.log(comment);
      return comment;
    }
  }
};
