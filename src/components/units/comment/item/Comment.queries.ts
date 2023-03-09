import { gql } from "@apollo/client";

export const UPDATE_COMMENT = gql`
  mutation updateComment($commentId: String!, $content: String!) {
    updateComment(commentId: $commentId, content: $content) {
      id
      content
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;
