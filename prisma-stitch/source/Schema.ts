/* tslint:disable */

export type DateTime = any
/** An object with an ID */
export interface Node {
  id: string /** The id of the object. */
}

export interface Query {
  users: (User | null)[]
  channels: (Channel | null)[]
  messages: (Message | null)[]
  user?: User | null
  channel?: Channel | null
  message?: Message | null
  usersConnection: UserConnection
  channelsConnection: ChannelConnection
  messagesConnection: MessageConnection
  node?: Node | null /** Fetches an object given its ID */
}

export interface User extends Node {
  id: string
  email: string
  channels?: Channel[] | null
  messages?: Message[] | null
}

export interface Channel extends Node {
  id: string
  created_at: DateTime
  users?: User[] | null
  messages?: Message[] | null
}

export interface Message extends Node {
  id: string
  sent_at: DateTime
  channel: Channel
  content: string
  author: User
}
/** A connection to a list of items. */
export interface UserConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges: (UserEdge | null)[] /** A list of edges. */
  aggregate: AggregateUser
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating forwards, are there more items? */
  hasPreviousPage: boolean /** When paginating backwards, are there more items? */
  startCursor?:
    | string
    | null /** When paginating backwards, the cursor to continue. */
  endCursor?:
    | string
    | null /** When paginating forwards, the cursor to continue. */
}
/** An edge in a connection. */
export interface UserEdge {
  node: User /** The item at the end of the edge. */
  cursor: string /** A cursor for use in pagination. */
}

export interface AggregateUser {
  count: number
}
/** A connection to a list of items. */
export interface ChannelConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges: (ChannelEdge | null)[] /** A list of edges. */
  aggregate: AggregateChannel
}
/** An edge in a connection. */
export interface ChannelEdge {
  node: Channel /** The item at the end of the edge. */
  cursor: string /** A cursor for use in pagination. */
}

export interface AggregateChannel {
  count: number
}
/** A connection to a list of items. */
export interface MessageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges: (MessageEdge | null)[] /** A list of edges. */
  aggregate: AggregateMessage
}
/** An edge in a connection. */
export interface MessageEdge {
  node: Message /** The item at the end of the edge. */
  cursor: string /** A cursor for use in pagination. */
}

export interface AggregateMessage {
  count: number
}

export interface Mutation {
  signup: User
  deactivate: User
  sendMessage?: string | null
}

export interface Subscription {
  user?: UserSubscriptionPayload | null
  channel?: ChannelSubscriptionPayload | null
  message?: MessageSubscriptionPayload | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: string[] | null
  previousValues?: UserPreviousValues | null
}

export interface UserPreviousValues {
  id: string
  email: string
}

export interface ChannelSubscriptionPayload {
  mutation: MutationType
  node?: Channel | null
  updatedFields?: string[] | null
  previousValues?: ChannelPreviousValues | null
}

export interface ChannelPreviousValues {
  id: string
  created_at: DateTime
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message | null
  updatedFields?: string[] | null
  previousValues?: MessagePreviousValues | null
}

export interface MessagePreviousValues {
  id: string
  sent_at: DateTime
  content: string
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null /** Logical AND on all given filters. */
  OR?: UserWhereInput[] | null /** Logical OR on all given filters. */
  NOT?:
    | UserWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  email?: string | null
  email_not?: string | null /** All values that are not equal to given value. */
  email_in?: string[] | null /** All values that are contained in given list. */
  email_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  email_lt?: string | null /** All values less than the given value. */
  email_lte?:
    | string
    | null /** All values less than or equal the given value. */
  email_gt?: string | null /** All values greater than the given value. */
  email_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  email_contains?: string | null /** All values containing the given string. */
  email_not_contains?:
    | string
    | null /** All values not containing the given string. */
  email_starts_with?:
    | string
    | null /** All values starting with the given string. */
  email_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  email_ends_with?:
    | string
    | null /** All values ending with the given string. */
  email_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  channels_every?: ChannelWhereInput | null
  channels_some?: ChannelWhereInput | null
  channels_none?: ChannelWhereInput | null
  messages_every?: MessageWhereInput | null
  messages_some?: MessageWhereInput | null
  messages_none?: MessageWhereInput | null
}

export interface ChannelWhereInput {
  AND?: ChannelWhereInput[] | null /** Logical AND on all given filters. */
  OR?: ChannelWhereInput[] | null /** Logical OR on all given filters. */
  NOT?:
    | ChannelWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  created_at?: DateTime | null
  created_at_not?: DateTime | null /** All values that are not equal to given value. */
  created_at_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  created_at_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  created_at_lt?: DateTime | null /** All values less than the given value. */
  created_at_lte?: DateTime | null /** All values less than or equal the given value. */
  created_at_gt?: DateTime | null /** All values greater than the given value. */
  created_at_gte?: DateTime | null /** All values greater than or equal the given value. */
  users_every?: UserWhereInput | null
  users_some?: UserWhereInput | null
  users_none?: UserWhereInput | null
  messages_every?: MessageWhereInput | null
  messages_some?: MessageWhereInput | null
  messages_none?: MessageWhereInput | null
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | null /** Logical AND on all given filters. */
  OR?: MessageWhereInput[] | null /** Logical OR on all given filters. */
  NOT?:
    | MessageWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */
  id?: string | null
  id_not?: string | null /** All values that are not equal to given value. */
  id_in?: string[] | null /** All values that are contained in given list. */
  id_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  id_lt?: string | null /** All values less than the given value. */
  id_lte?: string | null /** All values less than or equal the given value. */
  id_gt?: string | null /** All values greater than the given value. */
  id_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  id_contains?: string | null /** All values containing the given string. */
  id_not_contains?:
    | string
    | null /** All values not containing the given string. */
  id_starts_with?:
    | string
    | null /** All values starting with the given string. */
  id_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  id_ends_with?: string | null /** All values ending with the given string. */
  id_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  sent_at?: DateTime | null
  sent_at_not?: DateTime | null /** All values that are not equal to given value. */
  sent_at_in?:
    | DateTime[]
    | null /** All values that are contained in given list. */
  sent_at_not_in?:
    | DateTime[]
    | null /** All values that are not contained in given list. */
  sent_at_lt?: DateTime | null /** All values less than the given value. */
  sent_at_lte?: DateTime | null /** All values less than or equal the given value. */
  sent_at_gt?: DateTime | null /** All values greater than the given value. */
  sent_at_gte?: DateTime | null /** All values greater than or equal the given value. */
  content?: string | null
  content_not?:
    | string
    | null /** All values that are not equal to given value. */
  content_in?:
    | string[]
    | null /** All values that are contained in given list. */
  content_not_in?:
    | string[]
    | null /** All values that are not contained in given list. */
  content_lt?: string | null /** All values less than the given value. */
  content_lte?:
    | string
    | null /** All values less than or equal the given value. */
  content_gt?: string | null /** All values greater than the given value. */
  content_gte?:
    | string
    | null /** All values greater than or equal the given value. */
  content_contains?:
    | string
    | null /** All values containing the given string. */
  content_not_contains?:
    | string
    | null /** All values not containing the given string. */
  content_starts_with?:
    | string
    | null /** All values starting with the given string. */
  content_not_starts_with?:
    | string
    | null /** All values not starting with the given string. */
  content_ends_with?:
    | string
    | null /** All values ending with the given string. */
  content_not_ends_with?:
    | string
    | null /** All values not ending with the given string. */
  channel?: ChannelWhereInput | null
  author?: UserWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: string | null
  email?: string | null
}

export interface ChannelWhereUniqueInput {
  id?: string | null
}

export interface MessageWhereUniqueInput {
  id?: string | null
}

export interface UserSubscriptionWhereInput {
  AND?:
    | UserSubscriptionWhereInput[]
    | null /** Logical AND on all given filters. */
  OR?:
    | UserSubscriptionWhereInput[]
    | null /** Logical OR on all given filters. */
  NOT?:
    | UserSubscriptionWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */
  mutation_in?:
    | MutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: UserWhereInput | null
}

export interface ChannelSubscriptionWhereInput {
  AND?:
    | ChannelSubscriptionWhereInput[]
    | null /** Logical AND on all given filters. */
  OR?:
    | ChannelSubscriptionWhereInput[]
    | null /** Logical OR on all given filters. */
  NOT?:
    | ChannelSubscriptionWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */
  mutation_in?:
    | MutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: ChannelWhereInput | null
}

export interface MessageSubscriptionWhereInput {
  AND?:
    | MessageSubscriptionWhereInput[]
    | null /** Logical AND on all given filters. */
  OR?:
    | MessageSubscriptionWhereInput[]
    | null /** Logical OR on all given filters. */
  NOT?:
    | MessageSubscriptionWhereInput[]
    | null /** Logical NOT on all given filters combined by AND. */
  mutation_in?:
    | MutationType[]
    | null /** The subscription event gets dispatched when it's listed in mutation_in */
  updatedFields_contains?:
    | string
    | null /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains_every?:
    | string[]
    | null /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_some?:
    | string[]
    | null /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  node?: MessageWhereInput | null
}
export interface UsersQueryArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface ChannelsQueryArgs {
  where?: ChannelWhereInput | null
  orderBy?: ChannelOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface MessagesQueryArgs {
  where?: MessageWhereInput | null
  orderBy?: MessageOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface UserQueryArgs {
  where: UserWhereUniqueInput
}
export interface ChannelQueryArgs {
  where: ChannelWhereUniqueInput
}
export interface MessageQueryArgs {
  where: MessageWhereUniqueInput
}
export interface UsersConnectionQueryArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface ChannelsConnectionQueryArgs {
  where?: ChannelWhereInput | null
  orderBy?: ChannelOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface MessagesConnectionQueryArgs {
  where?: MessageWhereInput | null
  orderBy?: MessageOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface NodeQueryArgs {
  id: string /** The ID of an object */
}
export interface ChannelsUserArgs {
  where?: ChannelWhereInput | null
  orderBy?: ChannelOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface MessagesUserArgs {
  where?: MessageWhereInput | null
  orderBy?: MessageOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface UsersChannelArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface MessagesChannelArgs {
  where?: MessageWhereInput | null
  orderBy?: MessageOrderByInput | null
  skip?: number | null
  after?: string | null
  before?: string | null
  first?: number | null
  last?: number | null
}
export interface ChannelMessageArgs {
  where?: ChannelWhereInput | null
}
export interface AuthorMessageArgs {
  where?: UserWhereInput | null
}
export interface SignupMutationArgs {
  email: string
}
export interface DeactivateMutationArgs {
  id: string
}
export interface SendMessageMutationArgs {
  content: string
}
export interface UserSubscriptionArgs {
  where?: UserSubscriptionWhereInput | null
}
export interface ChannelSubscriptionArgs {
  where?: ChannelSubscriptionWhereInput | null
}
export interface MessageSubscriptionArgs {
  where?: MessageSubscriptionWhereInput | null
}

export enum UserOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  email_ASC = "email_ASC",
  email_DESC = "email_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
}

export enum ChannelOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  created_at_ASC = "created_at_ASC",
  created_at_DESC = "created_at_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
}

export enum MessageOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  sent_at_ASC = "sent_at_ASC",
  sent_at_DESC = "sent_at_DESC",
  content_ASC = "content_ASC",
  content_DESC = "content_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
}

export enum MutationType {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED",
}
