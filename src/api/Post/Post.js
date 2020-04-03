import { prisma } from "../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../fragments";

export default {
  Post: {
    isLiked: async (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [
          {
            user: { id: user.id }
          },
          {
            post: { id }
          }
        ]
      });
    },
    likeCount: parent =>
      prisma
        .likesConnection({ where: { post: { id: parent.id } } })
        .aggregate()
        .count(),
    files: ({ id }) => prisma.post({ id }).files(),
    comments: async ({ id }) => {
      const res = await prisma
        .post({ id })
        .comments()
        .$fragment(COMMENT_FRAGMENT);
      return res;
    },
    user: ({ id }) => prisma.post({ id }).user()
  }
};
