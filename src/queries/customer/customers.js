import gql from "graphql-tag";

const CUSTOMERS_QUERY = gql`
  query Customers {
    customers {
      id
      image {
        url
      }
      name
      gender
      job
    }
  }
`;

export default CUSTOMERS_QUERY;
