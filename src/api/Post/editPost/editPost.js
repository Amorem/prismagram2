import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, caption, location } = args;
      const { user } = request;
      const post = await prisma.$exists.post({ id, user: { id: user.id } });
      if (post) {
        return prisma.updatePost({
          where: { id },
          data: { caption, location }
        });
      } else {
        throw Error("You cannot do that");
      }
    }
  }
};
