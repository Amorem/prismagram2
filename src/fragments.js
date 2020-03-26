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
        id
        username
        avatar
`;

export const FILE_FRAGMENT = `
        id
        url
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
                avatar
            }
        }
        user {
           id
           username
           avatar
        }
    }
`;

export const ROOM_FRAGMENT = `
fragment RoomParts on Room {
    id
    participants {
        ${USER_FRAGMENT}
    }
    messages {
        ${MESSAGE_FRAGMENT}
    }
}
`;

export const MESSAGE_FRAGMENT = `
id
text
to {
    ${USER_FRAGMENT}
}
from {
    ${USER_FRAGMENT}
}
`;
