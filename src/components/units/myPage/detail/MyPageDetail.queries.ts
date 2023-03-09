import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query {
    fetchUser {
      id
      email
      nickname
      wrong_pass
      liked_artist {
        id
        artist {
          id
          active_name
        }
      }
      userImageURL
    }
  }
`;

export const ARTIST_LIKE_TOGGLE = gql`
  mutation artistLikeToggle($status: Boolean!, $artistId: String!) {
    artistLikeToggle(status: $status, artistId: $artistId)
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      nickname
    }
  }
`;

export const NON_LOGIN_RESET_PASSWORD = gql`
  mutation nonLoginResetPassword(
    $email: String!
    $updatePasswordInput: UpdatePasswordInput!
  ) {
    nonLoginResetPassword(
      email: $email
      updatePasswordInput: $updatePasswordInput
    )
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
