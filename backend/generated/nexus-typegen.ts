/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as ctx from "../src/types"
import * as photon from "@generated/photon"
import { core } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostCreateManyWithoutPostsInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
  }
  PostCreateWithoutAuthorInput: { // input type
    content?: string | null; // String
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  PostWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Post: photon.Post;
  Query: {};
  User: photon.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostCreateManyWithoutPostsInput: NexusGenInputs['PostCreateManyWithoutPostsInput'];
  PostCreateWithoutAuthorInput: NexusGenInputs['PostCreateWithoutAuthorInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post']; // Post!
    deleteOnePost: NexusGenRootTypes['Post'] | null; // Post
    publish: NexusGenRootTypes['Post'] | null; // Post
    signupUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    filterPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    post: NexusGenRootTypes['Post'] | null; // Post
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      authorEmail?: string | null; // String
      content?: string | null; // String
      title?: string | null; // String
    }
    deleteOnePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    publish: { // args
      id?: string | null; // ID
    }
    signupUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Query: {
    feed: { // args
      published?: boolean | null; // Boolean
    }
    filterPosts: { // args
      searchString?: string | null; // String
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
  }
  User: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Post" | "Query" | "User";

export type NexusGenInputNames = "PostCreateManyWithoutPostsInput" | "PostCreateWithoutAuthorInput" | "PostWhereUniqueInput" | "UserCreateInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}