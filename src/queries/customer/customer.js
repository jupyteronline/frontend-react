import gql from "graphql-tag";

const CUSTOMER_QUERY = gql`
  query Customer($id: ID!) {
    customer(id: $id) {
      id
      image {
        url
      }
      name
      gender
      job
      published_at
    }
  }
`;

export default CUSTOMER_QUERY;
