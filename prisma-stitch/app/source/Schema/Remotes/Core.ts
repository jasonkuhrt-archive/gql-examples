import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channels: <T = Channel[]>(args: { where?: ChannelWhereInput, orderBy?: ChannelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Message[]>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channel: <T = Channel | null>(args: { where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channelsConnection: <T = ChannelConnection>(args: { where?: ChannelWhereInput, orderBy?: ChannelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChannel: <T = Channel>(args: { data: ChannelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChannel: <T = Channel | null>(args: { data: ChannelUpdateInput, where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChannel: <T = Channel | null>(args: { where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChannel: <T = Channel>(args: { where: ChannelWhereUniqueInput, create: ChannelCreateInput, update: ChannelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChannels: <T = BatchPayload>(args: { data: ChannelUpdateManyMutationInput, where?: ChannelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateManyMutationInput, where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChannels: <T = BatchPayload>(args: { where?: ChannelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    channel: <T = ChannelSubscriptionPayload | null>(args: { where?: ChannelSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Channel: (where?: ChannelWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateChannel {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Channel implements Node {
  id: ID!
  created_at: DateTime!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

"""A connection to a list of items."""
type ChannelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  created_at: DateTime!
  users: UserCreateManyWithoutChannelsInput
  messages: MessageCreateManyWithoutChannelInput
}

input ChannelCreateManyWithoutUsersInput {
  create: [ChannelCreateWithoutUsersInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateOneWithoutMessagesInput {
  create: ChannelCreateWithoutMessagesInput
  connect: ChannelWhereUniqueInput
}

input ChannelCreateWithoutMessagesInput {
  created_at: DateTime!
  users: UserCreateManyWithoutChannelsInput
}

input ChannelCreateWithoutUsersInput {
  created_at: DateTime!
  messages: MessageCreateManyWithoutChannelInput
}

"""An edge in a connection."""
type ChannelEdge {
  """The item at the end of the edge."""
  node: Channel!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  created_at_ASC
  created_at_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ChannelPreviousValues {
  id: ID!
  created_at: DateTime!
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChannelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChannelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChannelSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
}

input ChannelUpdateInput {
  created_at: DateTime
  users: UserUpdateManyWithoutChannelsInput
  messages: MessageUpdateManyWithoutChannelInput
}

input ChannelUpdateManyMutationInput {
  created_at: DateTime
}

input ChannelUpdateManyWithoutUsersInput {
  create: [ChannelCreateWithoutUsersInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  delete: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutUsersInput!]
}

input ChannelUpdateOneRequiredWithoutMessagesInput {
  create: ChannelCreateWithoutMessagesInput
  connect: ChannelWhereUniqueInput
  update: ChannelUpdateWithoutMessagesDataInput
  upsert: ChannelUpsertWithoutMessagesInput
}

input ChannelUpdateWithoutMessagesDataInput {
  created_at: DateTime
  users: UserUpdateManyWithoutChannelsInput
}

input ChannelUpdateWithoutUsersDataInput {
  created_at: DateTime
  messages: MessageUpdateManyWithoutChannelInput
}

input ChannelUpdateWithWhereUniqueWithoutUsersInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutUsersDataInput!
}

input ChannelUpsertWithoutMessagesInput {
  update: ChannelUpdateWithoutMessagesDataInput!
  create: ChannelCreateWithoutMessagesInput!
}

input ChannelUpsertWithWhereUniqueWithoutUsersInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutUsersDataInput!
  create: ChannelCreateWithoutUsersInput!
}

input ChannelWhereInput {
  """Logical AND on all given filters."""
  AND: [ChannelWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChannelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChannelWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  created_at: DateTime

  """All values that are not equal to given value."""
  created_at_not: DateTime

  """All values that are contained in given list."""
  created_at_in: [DateTime!]

  """All values that are not contained in given list."""
  created_at_not_in: [DateTime!]

  """All values less than the given value."""
  created_at_lt: DateTime

  """All values less than or equal the given value."""
  created_at_lte: DateTime

  """All values greater than the given value."""
  created_at_gt: DateTime

  """All values greater than or equal the given value."""
  created_at_gte: DateTime
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
}

input ChannelWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  sent_at: DateTime!
  channel: Channel!
  content: String!
  author: User!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  sent_at: DateTime!
  content: String!
  channel: ChannelCreateOneWithoutMessagesInput!
  author: UserCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutAuthorInput {
  sent_at: DateTime!
  content: String!
  channel: ChannelCreateOneWithoutMessagesInput!
}

input MessageCreateWithoutChannelInput {
  sent_at: DateTime!
  content: String!
  author: UserCreateOneWithoutMessagesInput!
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  sent_at_ASC
  sent_at_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MessagePreviousValues {
  id: ID!
  sent_at: DateTime!
  content: String!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateInput {
  sent_at: DateTime
  content: String
  channel: ChannelUpdateOneRequiredWithoutMessagesInput
  author: UserUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateManyMutationInput {
  sent_at: DateTime
  content: String
}

input MessageUpdateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutAuthorInput!]
}

input MessageUpdateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChannelInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChannelInput!]
}

input MessageUpdateWithoutAuthorDataInput {
  sent_at: DateTime
  content: String
  channel: ChannelUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateWithoutChannelDataInput {
  sent_at: DateTime
  content: String
  author: UserUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutAuthorDataInput!
}

input MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChannelDataInput!
}

input MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutAuthorDataInput!
  create: MessageCreateWithoutAuthorInput!
}

input MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChannelDataInput!
  create: MessageCreateWithoutChannelInput!
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  sent_at: DateTime

  """All values that are not equal to given value."""
  sent_at_not: DateTime

  """All values that are contained in given list."""
  sent_at_in: [DateTime!]

  """All values that are not contained in given list."""
  sent_at_not_in: [DateTime!]

  """All values less than the given value."""
  sent_at_lt: DateTime

  """All values less than or equal the given value."""
  sent_at_lte: DateTime

  """All values greater than the given value."""
  sent_at_gt: DateTime

  """All values greater than or equal the given value."""
  sent_at_gte: DateTime
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  channel: ChannelWhereInput
  author: UserWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createChannel(data: ChannelCreateInput!): Channel!
  createMessage(data: MessageCreateInput!): Message!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  deleteUser(where: UserWhereUniqueInput!): User
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  deleteMessage(where: MessageWhereUniqueInput!): Message
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyChannels(data: ChannelUpdateManyMutationInput!, where: ChannelWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  user(where: UserWhereUniqueInput!): User
  channel(where: ChannelWhereUniqueInput!): Channel
  message(where: MessageWhereUniqueInput!): Message
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  phoneNumber: String
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  deactivated: Boolean!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  phoneNumber: String
  deactivated: Boolean
  channels: ChannelCreateManyWithoutUsersInput
  messages: MessageCreateManyWithoutAuthorInput
}

input UserCreateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChannelsInput {
  email: String!
  phoneNumber: String
  deactivated: Boolean
  messages: MessageCreateManyWithoutAuthorInput
}

input UserCreateWithoutMessagesInput {
  email: String!
  phoneNumber: String
  deactivated: Boolean
  channels: ChannelCreateManyWithoutUsersInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  deactivated_ASC
  deactivated_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  phoneNumber: String
  deactivated: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  phoneNumber: String
  deactivated: Boolean
  channels: ChannelUpdateManyWithoutUsersInput
  messages: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  phoneNumber: String
  deactivated: Boolean
}

input UserUpdateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChannelsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChannelsInput!]
}

input UserUpdateOneRequiredWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
}

input UserUpdateWithoutChannelsDataInput {
  email: String
  phoneNumber: String
  deactivated: Boolean
  messages: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutMessagesDataInput {
  email: String
  phoneNumber: String
  deactivated: Boolean
  channels: ChannelUpdateManyWithoutUsersInput
}

input UserUpdateWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChannelsDataInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChannelsDataInput!
  create: UserCreateWithoutChannelsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  deactivated: Boolean

  """All values that are not equal to given value."""
  deactivated_not: Boolean
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'deactivated_ASC' |
  'deactivated_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ChannelOrderByInput =   'id_ASC' |
  'id_DESC' |
  'created_at_ASC' |
  'created_at_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'sent_at_ASC' |
  'sent_at_DESC' |
  'content_ASC' |
  'content_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ChannelCreateInput {
  created_at: DateTime
  users?: UserCreateManyWithoutChannelsInput
  messages?: MessageCreateManyWithoutChannelInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  deactivated?: Boolean
  deactivated_not?: Boolean
  channels_every?: ChannelWhereInput
  channels_some?: ChannelWhereInput
  channels_none?: ChannelWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
}

export interface ChannelUpdateManyWithoutUsersInput {
  create?: ChannelCreateWithoutUsersInput[] | ChannelCreateWithoutUsersInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  update?: ChannelUpdateWithWhereUniqueWithoutUsersInput[] | ChannelUpdateWithWhereUniqueWithoutUsersInput
  upsert?: ChannelUpsertWithWhereUniqueWithoutUsersInput[] | ChannelUpsertWithWhereUniqueWithoutUsersInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput
  OR?: MessageWhereInput[] | MessageWhereInput
  NOT?: MessageWhereInput[] | MessageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  sent_at?: DateTime
  sent_at_not?: DateTime
  sent_at_in?: DateTime[] | DateTime
  sent_at_not_in?: DateTime[] | DateTime
  sent_at_lt?: DateTime
  sent_at_lte?: DateTime
  sent_at_gt?: DateTime
  sent_at_gte?: DateTime
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  channel?: ChannelWhereInput
  author?: UserWhereInput
}

export interface UserCreateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
}

export interface MessageUpdateWithoutAuthorDataInput {
  sent_at?: DateTime
  content?: String
  channel?: ChannelUpdateOneRequiredWithoutMessagesInput
}

export interface UserCreateWithoutMessagesInput {
  email: String
  phoneNumber?: String
  deactivated?: Boolean
  channels?: ChannelCreateManyWithoutUsersInput
}

export interface ChannelUpdateWithWhereUniqueWithoutUsersInput {
  where: ChannelWhereUniqueInput
  data: ChannelUpdateWithoutUsersDataInput
}

export interface MessageCreateManyWithoutAuthorInput {
  create?: MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface ChannelWhereInput {
  AND?: ChannelWhereInput[] | ChannelWhereInput
  OR?: ChannelWhereInput[] | ChannelWhereInput
  NOT?: ChannelWhereInput[] | ChannelWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  created_at?: DateTime
  created_at_not?: DateTime
  created_at_in?: DateTime[] | DateTime
  created_at_not_in?: DateTime[] | DateTime
  created_at_lt?: DateTime
  created_at_lte?: DateTime
  created_at_gt?: DateTime
  created_at_gte?: DateTime
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
}

export interface MessageCreateWithoutAuthorInput {
  sent_at: DateTime
  content: String
  channel: ChannelCreateOneWithoutMessagesInput
}

export interface ChannelSubscriptionWhereInput {
  AND?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  OR?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  NOT?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChannelWhereInput
}

export interface ChannelCreateOneWithoutMessagesInput {
  create?: ChannelCreateWithoutMessagesInput
  connect?: ChannelWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ChannelCreateWithoutMessagesInput {
  created_at: DateTime
  users?: UserCreateManyWithoutChannelsInput
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateManyWithoutChannelsInput {
  create?: UserCreateWithoutChannelsInput[] | UserCreateWithoutChannelsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ChannelUpdateManyMutationInput {
  created_at?: DateTime
}

export interface UserCreateWithoutChannelsInput {
  email: String
  phoneNumber?: String
  deactivated?: Boolean
  messages?: MessageCreateManyWithoutAuthorInput
}

export interface MessageUpdateInput {
  sent_at?: DateTime
  content?: String
  channel?: ChannelUpdateOneRequiredWithoutMessagesInput
  author?: UserUpdateOneRequiredWithoutMessagesInput
}

export interface UserUpdateManyWithoutChannelsInput {
  create?: UserCreateWithoutChannelsInput[] | UserCreateWithoutChannelsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutChannelsInput[] | UserUpdateWithWhereUniqueWithoutChannelsInput
  upsert?: UserUpsertWithWhereUniqueWithoutChannelsInput[] | UserUpsertWithWhereUniqueWithoutChannelsInput
}

export interface MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutAuthorDataInput
  create: MessageCreateWithoutAuthorInput
}

export interface MessageCreateInput {
  sent_at: DateTime
  content: String
  channel: ChannelCreateOneWithoutMessagesInput
  author: UserCreateOneWithoutMessagesInput
}

export interface UserUpsertWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutChannelsDataInput
  create: UserCreateWithoutChannelsInput
}

export interface UserUpdateInput {
  email?: String
  phoneNumber?: String
  deactivated?: Boolean
  channels?: ChannelUpdateManyWithoutUsersInput
  messages?: MessageUpdateManyWithoutAuthorInput
}

export interface UserUpdateWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutChannelsDataInput
}

export interface ChannelUpdateWithoutMessagesDataInput {
  created_at?: DateTime
  users?: UserUpdateManyWithoutChannelsInput
}

export interface ChannelCreateManyWithoutUsersInput {
  create?: ChannelCreateWithoutUsersInput[] | ChannelCreateWithoutUsersInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
}

export interface ChannelUpdateOneRequiredWithoutMessagesInput {
  create?: ChannelCreateWithoutMessagesInput
  connect?: ChannelWhereUniqueInput
  update?: ChannelUpdateWithoutMessagesDataInput
  upsert?: ChannelUpsertWithoutMessagesInput
}

export interface MessageCreateManyWithoutChannelInput {
  create?: MessageCreateWithoutChannelInput[] | MessageCreateWithoutChannelInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface ChannelUpdateWithoutUsersDataInput {
  created_at?: DateTime
  messages?: MessageUpdateManyWithoutChannelInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface MessageUpdateManyWithoutChannelInput {
  create?: MessageCreateWithoutChannelInput[] | MessageCreateWithoutChannelInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutChannelInput[] | MessageUpdateWithWhereUniqueWithoutChannelInput
  upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput[] | MessageUpsertWithWhereUniqueWithoutChannelInput
}

export interface MessageUpdateManyMutationInput {
  sent_at?: DateTime
  content?: String
}

export interface MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutChannelDataInput
}

export interface ChannelUpdateInput {
  created_at?: DateTime
  users?: UserUpdateManyWithoutChannelsInput
  messages?: MessageUpdateManyWithoutChannelInput
}

export interface MessageUpdateWithoutChannelDataInput {
  sent_at?: DateTime
  content?: String
  author?: UserUpdateOneRequiredWithoutMessagesInput
}

export interface UserUpdateWithoutChannelsDataInput {
  email?: String
  phoneNumber?: String
  deactivated?: Boolean
  messages?: MessageUpdateManyWithoutAuthorInput
}

export interface UserUpdateOneRequiredWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutMessagesDataInput
  upsert?: UserUpsertWithoutMessagesInput
}

export interface ChannelCreateWithoutUsersInput {
  created_at: DateTime
  messages?: MessageCreateManyWithoutChannelInput
}

export interface UserUpdateWithoutMessagesDataInput {
  email?: String
  phoneNumber?: String
  deactivated?: Boolean
  channels?: ChannelUpdateManyWithoutUsersInput
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MessageWhereInput
}

export interface UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput
  create: UserCreateWithoutMessagesInput
}

export interface UserUpdateManyMutationInput {
  email?: String
  phoneNumber?: String
  deactivated?: Boolean
}

export interface MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutAuthorDataInput
}

export interface MessageUpdateManyWithoutAuthorInput {
  create?: MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutAuthorInput[] | MessageUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: MessageUpsertWithWhereUniqueWithoutAuthorInput[] | MessageUpsertWithWhereUniqueWithoutAuthorInput
}

export interface ChannelUpsertWithWhereUniqueWithoutUsersInput {
  where: ChannelWhereUniqueInput
  update: ChannelUpdateWithoutUsersDataInput
  create: ChannelCreateWithoutUsersInput
}

export interface MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutChannelDataInput
  create: MessageCreateWithoutChannelInput
}

export interface ChannelUpsertWithoutMessagesInput {
  update: ChannelUpdateWithoutMessagesDataInput
  create: ChannelCreateWithoutMessagesInput
}

export interface ChannelWhereUniqueInput {
  id?: ID_Input
}

export interface MessageCreateWithoutChannelInput {
  sent_at: DateTime
  content: String
  author: UserCreateOneWithoutMessagesInput
}

export interface UserCreateInput {
  email: String
  phoneNumber?: String
  deactivated?: Boolean
  channels?: ChannelCreateManyWithoutUsersInput
  messages?: MessageCreateManyWithoutAuthorInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface MessagePreviousValues {
  id: ID_Output
  sent_at: DateTime
  content: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface ChannelSubscriptionPayload {
  mutation: MutationType
  node?: Channel
  updatedFields?: String[]
  previousValues?: ChannelPreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface User extends Node {
  id: ID_Output
  email: String
  phoneNumber?: String
  channels?: Channel[]
  messages?: Message[]
  deactivated: Boolean
}

export interface Channel extends Node {
  id: ID_Output
  created_at: DateTime
  users?: User[]
  messages?: Message[]
}

export interface AggregateMessage {
  count: Int
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: MessageEdge[]
  aggregate: AggregateMessage
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface ChannelEdge {
  node: Channel
  cursor: String
}

export interface AggregateUser {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  phoneNumber?: String
  deactivated: Boolean
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface ChannelPreviousValues {
  id: ID_Output
  created_at: DateTime
}

export interface Message extends Node {
  id: ID_Output
  sent_at: DateTime
  channel: Channel
  content: String
  author: User
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message
  updatedFields?: String[]
  previousValues?: MessagePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ChannelConnection {
  pageInfo: PageInfo
  edges: ChannelEdge[]
  aggregate: AggregateChannel
}

export interface AggregateChannel {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean