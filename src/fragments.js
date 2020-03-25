export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment {
        id
        text
        user {
            ${USER_FRAGMENT}
        }
    }
`;

export const USER_FRAGMENT = `
    fragment Userparts on User {
        id
        username
    }
`;

export const FILE_FRAGMENT = `
    fragment FileParts on File {
        id
        url
    }
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post {
        id
        location
        caption    
        files {
            id
            url

        }
        comments {
            id
            text
            user {
                id
                username
            }
        }
        user {
           id
           username
        }
    }
`;
