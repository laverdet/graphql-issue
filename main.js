import { Fragment } from "./fragments.gql";
import { gql } from "graphql-tag";
import { print } from "graphql";

const query = gql`query Hello {
	...Fragment
}
${Fragment}`;
console.log(print(query));