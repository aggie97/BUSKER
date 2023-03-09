import { gql } from "@apollo/client";

export const FETCH_ARTIST_WITHOUT_AUTH = gql`
  query fetchArtistWithoutAuth($artistId: String!) {
    fetchArtistWithoutAuth(artistId: $artistId) {
      id
      active_name
      description
      promotion_url
      artistImageURL
      category {
        name
      }
    }
  }
`;

export const ARTIST_LIKE_TOGGLE = gql`
  mutation artistLikeToggle($artistId: String!, $status: Boolean!) {
    artistLikeToggle(artistId: $artistId, status: $status)
  }
`;

export const FETCH_RECENT_BOARDS = gql`
  query fetchRecentBoards($artistId: String!) {
    fetchRecentBoards(artistId: $artistId) {
      id
      boardImageURL {
        id
        url
      }
      start_time
      end_time
      category {
        id
        name
      }
      boardAddress {
        address
      }
    }
  }
`;

export const FETCH_ARTIST = gql`
  query {
    fetchArtist {
      id
    }
  }
`;

export const FETCH_MEMBERS = gql`
  query fetchMembers($artistId: String!) {
    fetchMembers(artistId: $artistId) {
      id
      name
      role
      memberImageURL
    }
  }
`;

export const FETCH_ARTIST_COUNT = gql`
  query fetchArtistCount($artistId: String!) {
    fetchArtistCount(artistId: $artistId)
  }
`;
