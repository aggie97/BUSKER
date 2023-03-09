import { gql } from "@apollo/client";

export const DELETE_MEMBER = gql`
  mutation deleteMember($memberId: String!) {
    deleteMember(memberId: $memberId)
  }
`;

export const UPDATE_MEMBER = gql`
  mutation updateMember(
    $memberId: String!
    $updateMemberInput: UpdateMemberInput!
  ) {
    updateMember(memberId: $memberId, updateMemberInput: $updateMemberInput)
  }
`;
