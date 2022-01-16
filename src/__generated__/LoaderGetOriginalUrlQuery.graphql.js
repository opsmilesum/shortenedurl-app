/**
 * @generated SignedSource<<5db37357ac36724ce5bd7c5743451634>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type LoaderGetOriginalUrlQuery$variables = {|
  shortenedUrl?: ?string,
|};
export type LoaderGetOriginalUrlQueryVariables = LoaderGetOriginalUrlQuery$variables;
export type LoaderGetOriginalUrlQuery$data = {|
  +getOriginalUrl: ?string,
|};
export type LoaderGetOriginalUrlQueryResponse = LoaderGetOriginalUrlQuery$data;
export type LoaderGetOriginalUrlQuery = {|
  variables: LoaderGetOriginalUrlQueryVariables,
  response: LoaderGetOriginalUrlQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "shortenedUrl"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "shortenedUrl",
        "variableName": "shortenedUrl"
      }
    ],
    "kind": "ScalarField",
    "name": "getOriginalUrl",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoaderGetOriginalUrlQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoaderGetOriginalUrlQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cca10aeaf6074b76963f02f7c0488b5f",
    "id": null,
    "metadata": {},
    "name": "LoaderGetOriginalUrlQuery",
    "operationKind": "query",
    "text": "query LoaderGetOriginalUrlQuery(\n  $shortenedUrl: String\n) {\n  getOriginalUrl(shortenedUrl: $shortenedUrl)\n}\n"
  }
};
})();

(node/*: any*/).hash = "aea6748146f3e5cbf4968cd6b001ffd8";

module.exports = ((node/*: any*/)/*: Query<
  LoaderGetOriginalUrlQuery$variables,
  LoaderGetOriginalUrlQuery$data,
>*/);
