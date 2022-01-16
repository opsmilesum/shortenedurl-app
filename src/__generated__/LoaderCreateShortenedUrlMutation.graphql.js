/**
 * @generated SignedSource<<ae716caae561cef2693ac1dbf019a51b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type LoaderCreateShortenedUrlMutation$variables = {|
  originalUrl?: ?string,
|};
export type LoaderCreateShortenedUrlMutationVariables = LoaderCreateShortenedUrlMutation$variables;
export type LoaderCreateShortenedUrlMutation$data = {|
  +createShortenedUrl: ?string,
|};
export type LoaderCreateShortenedUrlMutationResponse = LoaderCreateShortenedUrlMutation$data;
export type LoaderCreateShortenedUrlMutation = {|
  variables: LoaderCreateShortenedUrlMutationVariables,
  response: LoaderCreateShortenedUrlMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "originalUrl"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "originalUrl",
        "variableName": "originalUrl"
      }
    ],
    "kind": "ScalarField",
    "name": "createShortenedUrl",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoaderCreateShortenedUrlMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoaderCreateShortenedUrlMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a237c0ddfe773a8806dd1d66647a487f",
    "id": null,
    "metadata": {},
    "name": "LoaderCreateShortenedUrlMutation",
    "operationKind": "mutation",
    "text": "mutation LoaderCreateShortenedUrlMutation(\n  $originalUrl: String\n) {\n  createShortenedUrl(originalUrl: $originalUrl)\n}\n"
  }
};
})();

(node/*: any*/).hash = "68bb4ea5ae39fbcbbb0c68ec834c1d7c";

module.exports = ((node/*: any*/)/*: Mutation<
  LoaderCreateShortenedUrlMutation$variables,
  LoaderCreateShortenedUrlMutation$data,
>*/);
