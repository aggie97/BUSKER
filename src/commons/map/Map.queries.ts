import { gql } from "@apollo/client";

export const FETCH_MAP_BOARDS = gql`
  query fetchMapBoards($lat: Float!, $lng: Float!, $distance: Float!) {
    fetchMapBoards(lat: $lat, lng: $lng, distance: $distance) {
      id
      artist {
        id
        active_name
        artistImageURL
      }
      category {
        id
        name
      }
      boardAddress {
        id
        lat
        lng
      }
      start_time
      end_time
      isShowTime
    }
  }
`;
