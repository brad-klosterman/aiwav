import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
}

export interface AcrCloudAlbum {
  langs?: Maybe<Array<AcrCloudLangs>>;
  name: Scalars['String']['output'];
}

export interface AcrCloudAlbumInput {
  langs?: InputMaybe<Array<AcrCloudLangsInput>>;
  name: Scalars['String']['input'];
}

export interface AcrCloudArtist {
  isni?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
}

export interface AcrCloudArtistInput {
  isni?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
}

export interface AcrCloudGenre {
  name: Scalars['String']['output'];
}

export interface AcrCloudGenreInput {
  name: Scalars['String']['input'];
}

export interface AcrCloudLangs {
  languageCode?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
}

export interface AcrCloudLangsInput {
  languageCode?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}

export enum AccountStatus {
  Unverified = 'unverified',
  Verified = 'verified',
}

export interface Activity extends Base, BaseActivity {
  activityType: ActivityType;
  byEntityId: Scalars['String']['output'];
  byPersona: Persona;
  byPersonaId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  durationString?: Maybe<Scalars['String']['output']>;
  end: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  onAsset: Asset;
  onAssetId: Scalars['String']['output'];
  playedFromId: Scalars['String']['output'];
  start: Scalars['Int']['output'];
}

export interface ActivityInput {
  id: Scalars['ID']['input'];
}

export enum ActivityType {
  Listening = 'listening',
}

export interface Asset {
  activities?: Maybe<Array<Activity>>;
  assetType: AssetType;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  durationString: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownedBy: Array<PersonaAssetOwnershipLink>;
  ratings: Array<Rating>;
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  unclaimedWallet?: Maybe<Wallet>;
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWallet: Wallet;
  workingWalletId: Scalars['String']['output'];
}

export interface AssetInput {
  id: Scalars['ID']['input'];
}

export interface AssetListeningDuration extends BaseAssetListeningDuration {
  asset: Asset;
  assetId: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  duration: Scalars['Float']['output'];
  durationString: Scalars['String']['output'];
  playedFromId?: Maybe<Scalars['String']['output']>;
  proportion: Scalars['Float']['output'];
  proportionString: Scalars['String']['output'];
}

export enum AssetType {
  Event = 'event',
  Playlist = 'playlist',
  Set = 'set',
  Track = 'track',
}

export enum AssetValidation {
  Unvalidated = 'unvalidated',
  Validated = 'validated',
}

export enum AssetVisibility {
  Private = 'private',
  Public = 'public',
}

export interface Base {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
}

export interface BaseActivity {
  activityType: ActivityType;
  byEntityId: Scalars['String']['output'];
  byPersonaId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  end: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  onAssetId: Scalars['String']['output'];
  playedFromId: Scalars['String']['output'];
  start: Scalars['Int']['output'];
}

export interface BaseAsset {
  assetType: AssetType;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['output'];
}

export interface BaseAssetListeningDuration {
  assetId: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  duration: Scalars['Float']['output'];
  playedFromId?: Maybe<Scalars['String']['output']>;
  proportion: Scalars['Float']['output'];
}

export interface BaseCompany {
  address: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entityType: EntityType;
  id: Scalars['ID']['output'];
  kycStatus: KycStatus;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneCountryCode: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  registeredName: Scalars['String']['output'];
  registrationDate: Scalars['String']['output'];
  registrationNumber: Scalars['String']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  walletId: Scalars['String']['output'];
}

export interface BaseCompleteListeningPathwayResult {
  assetTransactionCount: Scalars['Int']['output'];
  assetTransactionSum: Scalars['Float']['output'];
  assetTransactions: Array<BaseRevenueFlow>;
  entityTransactionCount: Scalars['Int']['output'];
  entityTransactionSum: Scalars['Float']['output'];
  entityTransactions: Array<BaseRevenueFlow>;
  id: Scalars['ID']['output'];
}

export interface BaseEdge {
  createdAt: Scalars['String']['output'];
  edgeType: EdgeType;
  fromId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  toId: Scalars['String']['output'];
  toNodeType: NodeType;
}

export interface BaseEntity {
  address: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entityType: EntityType;
  id: Scalars['ID']['output'];
  kycStatus: KycStatus;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneCountryCode: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  walletId: Scalars['String']['output'];
}

export interface BaseEvent {
  assetType: AssetType;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['output'];
}

export interface BaseEventLineup {
  createdAt: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  fromDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  setId: Scalars['String']['output'];
  stage: Scalars['String']['output'];
  toDate: Scalars['String']['output'];
}

export interface BaseFingerprint {
  createdAt: Scalars['String']['output'];
  fingerprintData: Array<Maybe<FingerprintData>>;
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
}

export interface BaseIdentity {
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
}

export interface BaseIndividual {
  address: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dateOfBirth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entityType: EntityType;
  id: Scalars['ID']['output'];
  kycStatus: KycStatus;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneCountryCode: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  surname: Scalars['String']['output'];
  walletId: Scalars['String']['output'];
}

export interface BaseInvitation {
  assetType?: Maybe<AssetType>;
  createdAt: Scalars['String']['output'];
  expiresAt: Scalars['String']['output'];
  fromEntityId: Scalars['String']['output'];
  fromPersonaId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invitationState: InvitationState;
  invitationType: InvitationType;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  onAssetId?: Maybe<Scalars['String']['output']>;
  phoneCountryCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  toEmail: Scalars['String']['output'];
}

export interface BaseListeningPathway {
  assetListeningDurations: Array<BaseAssetListeningDuration>;
  closingBalance: Scalars['Float']['output'];
  entityId: Scalars['String']['output'];
  openingBalance: Scalars['Float']['output'];
  revenueFlow: Array<BaseRevenueFlow>;
}

export interface BaseOwnershipEdge {
  createdAt: Scalars['String']['output'];
  edgeType: EdgeType;
  fromId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  ownership: Scalars['Float']['output'];
  toId: Scalars['String']['output'];
  toNodeType: NodeType;
}

export interface BasePersona {
  bio: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageKey: Scalars['String']['output'];
  lastModifiedAt: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: PersonaType;
}

export interface BasePlaylist {
  assetType: AssetType;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  itemIds: Array<Scalars['String']['output']>;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['output'];
}

export interface BaseRating {
  createdAt: Scalars['String']['output'];
  edgeType: EdgeType;
  fromId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  ratingType: RatingType;
  toId: Scalars['String']['output'];
  toNodeType: NodeType;
}

export interface BaseRefCode {
  code: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isUsed: Scalars['Boolean']['output'];
  lastModifiedAt: Scalars['String']['output'];
}

export interface BaseRevenueFlow {
  transaction: Transaction;
  walletId: Scalars['String']['output'];
}

export interface BaseSet {
  assetType: AssetType;
  audioFile: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  event?: Maybe<Scalars['String']['output']>;
  fingerprintIds?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  isrc: Scalars['String']['output'];
  lastModifiedAt: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  playedAt?: Maybe<Scalars['String']['output']>;
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  tracklistId: Scalars['String']['output'];
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['output'];
}

export interface BaseTrack {
  assetType: AssetType;
  audioFile: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isrc?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['output'];
}

export interface BaseTracklist {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  tracklistData: Array<TracklistData>;
}

export interface BaseTransaction {
  amount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  walletId: Scalars['String']['output'];
}

export interface BaseWallet {
  allowNegativeBalance: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  currencyCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  walletType: WalletType;
}

export interface BaseWalletOwnership {
  assetId: Scalars['String']['output'];
  entityId: Scalars['String']['output'];
  ownership: Scalars['Float']['output'];
  walletId: Scalars['String']['output'];
}

export interface ChangePasswordInput {
  email: Scalars['String']['input'];
}

export interface ChangePasswordResponse extends IdentityResponse {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export interface Company extends Base, BaseCompany, BaseEntity, Entity {
  activities: Array<Activity>;
  address: Scalars['String']['output'];
  age: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entityType: EntityType;
  id: Scalars['ID']['output'];
  invitations: Array<Invitation>;
  kycStatus: KycStatus;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownedPersonas: Array<EntityPersonaOwnershipLink>;
  phoneCountryCode: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  registeredName: Scalars['String']['output'];
  registrationDate: Scalars['String']['output'];
  registrationNumber: Scalars['String']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  wallet: Wallet;
  walletId: Scalars['String']['output'];
}

export interface CompanyInput {
  id: Scalars['ID']['input'];
}

export enum CompanyType {
  Company = 'company',
}

export interface CompleteListeningPathwayResult {
  assetTransactionCount: Scalars['Int']['output'];
  assetTransactionSum: Scalars['Float']['output'];
  assetTransactions: Array<RevenueFlow>;
  entityTransactionCount: Scalars['Int']['output'];
  entityTransactionSum: Scalars['Float']['output'];
  entityTransactions: Array<RevenueFlow>;
  id: Scalars['ID']['output'];
}

export interface CreateActivityInput {
  activityType: ActivityType;
  byEntityId: Scalars['String']['input'];
  byPersonaId: Scalars['String']['input'];
  date: Scalars['String']['input'];
  end: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  onAssetId: Scalars['String']['input'];
  playedFromId: Scalars['String']['input'];
  start: Scalars['Int']['input'];
}

export interface CreateAssetCollaborationInvitationInput {
  assetType: AssetType;
  expiresAt: Scalars['String']['input'];
  fromEntityId: Scalars['String']['input'];
  fromPersonaId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  invitationType: InvitationType;
  name: Scalars['String']['input'];
  onAssetId: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  toEmail: Scalars['String']['input'];
}

export interface CreateAuthUserInput {
  dateOfBirth: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  refCode: Scalars['String']['input'];
  surname: Scalars['String']['input'];
}

export interface CreateCompanyInput {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  registeredName: Scalars['String']['input'];
  registrationDate: Scalars['String']['input'];
  registrationNumber: Scalars['String']['input'];
  walletId?: InputMaybe<Scalars['String']['input']>;
}

export interface CreateEventInput {
  assetType: AssetType;
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  releasedAt: Scalars['String']['input'];
  thumbnailFile: Scalars['String']['input'];
  unclaimedWalletId: Scalars['String']['input'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['input'];
}

export interface CreateEventLineupInput {
  createdAt: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  fromDate: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  lastModifiedAt: Scalars['String']['input'];
  setId: Scalars['String']['input'];
  stage: Scalars['String']['input'];
  toDate: Scalars['String']['input'];
}

export interface CreateFingerprintInput {
  fileKey: Scalars['String']['input'];
  fingerprintData: Array<InputMaybe<FingerprintDataInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
}

export interface CreateIndividualInput {
  address: Scalars['String']['input'];
  dateOfBirth: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  surname: Scalars['String']['input'];
  walletId?: InputMaybe<Scalars['String']['input']>;
}

export interface CreatePersonaCollaborationInvitationInput {
  expiresAt: Scalars['String']['input'];
  fromEntityId: Scalars['String']['input'];
  fromPersonaId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  invitationType: InvitationType;
  name: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  toEmail: Scalars['String']['input'];
}

export interface CreatePersonaInput {
  bio: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  imageKey: Scalars['String']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: PersonaType;
}

export interface CreatePlaylistInput {
  assetType: AssetType;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  itemIds: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  releasedAt: Scalars['String']['input'];
  thumbnailFile: Scalars['String']['input'];
  unclaimedWalletId: Scalars['String']['input'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['input'];
}

export interface CreateRatingInput {
  edgeType: EdgeType;
  fromId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  ratingType: RatingType;
  toId: Scalars['String']['input'];
  toNodeType: NodeType;
}

export interface CreateSetInput {
  assetType: AssetType;
  audioFile: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  event?: InputMaybe<Scalars['String']['input']>;
  fingerprintIds?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isrc: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  personaId: Scalars['String']['input'];
  playedAt?: InputMaybe<Scalars['String']['input']>;
  releasedAt: Scalars['String']['input'];
  thumbnailFile: Scalars['String']['input'];
  tracklistId: Scalars['String']['input'];
  unclaimedWalletId: Scalars['String']['input'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['input'];
}

export interface CreateSignedInput {
  expireTime: Scalars['Int']['input'];
  uri: Scalars['String']['input'];
}

export interface CreateSignedOutput {
  result: Scalars['String']['output'];
}

export interface CreateTrackInput {
  artistName?: InputMaybe<Scalars['String']['input']>;
  assetType: AssetType;
  audioFile: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isrc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  releasedAt: Scalars['String']['input'];
  thumbnailFile: Scalars['String']['input'];
  unclaimedWalletId: Scalars['String']['input'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWalletId: Scalars['String']['input'];
}

export interface CreateTracklistInput {
  id?: InputMaybe<Scalars['String']['input']>;
  tracklistData: Array<TracklistDataInput>;
}

export interface CreateTransactionInput {
  amount: Scalars['Float']['input'];
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  walletId: Scalars['String']['input'];
}

export interface CreateUserInvitationInput {
  expiresAt: Scalars['String']['input'];
  fromEntityId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  invitationType: InvitationType;
  name: Scalars['String']['input'];
  toEmail: Scalars['String']['input'];
}

export interface CreateUserResponse extends IdentityResponse {
  authZeroId?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export interface CreateWalletInput {
  allowNegativeBalance: Scalars['Boolean']['input'];
  currencyCode: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  walletType: WalletType;
}

export interface DeleteActivityInput {
  id: Scalars['ID']['input'];
}

export interface DeleteCompanyInput {
  id: Scalars['ID']['input'];
}

export interface DeleteEventInput {
  id: Scalars['ID']['input'];
}

export interface DeleteEventLineupInput {
  id: Scalars['ID']['input'];
}

export interface DeleteFingerprintInput {
  id: Scalars['String']['input'];
}

export interface DeleteIndividualInput {
  id: Scalars['ID']['input'];
}

export interface DeleteInvitationInput {
  id: Scalars['ID']['input'];
}

export interface DeletePersonaInput {
  id: Scalars['ID']['input'];
}

export interface DeletePlaylistInput {
  id: Scalars['ID']['input'];
}

export interface DeleteRatingInput {
  id: Scalars['ID']['input'];
}

export interface DeleteRefCodeInput {
  id: Scalars['String']['input'];
}

export interface DeleteSetInput {
  id: Scalars['ID']['input'];
  isHardDeletion: Scalars['Boolean']['input'];
}

export interface DeleteSetResponse {
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
}

export interface DeleteTrackInput {
  id: Scalars['ID']['input'];
}

export interface DeleteTracklistInput {
  id: Scalars['String']['input'];
}

export interface DeleteTransactionInput {
  id: Scalars['ID']['input'];
}

export interface DeleteWalletInput {
  id: Scalars['ID']['input'];
}

export enum EdgeType {
  Auth = 'auth',
  EventOwnership = 'eventOwnership',
  General = 'general',
  PersonaFollowing = 'personaFollowing',
  PersonaOwnership = 'personaOwnership',
  PlaylistOwnership = 'playlistOwnership',
  Rating = 'rating',
  SetOwnership = 'setOwnership',
  TrackOwnership = 'trackOwnership',
}

export interface Entity {
  activities: Array<Activity>;
  address: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entityType: EntityType;
  id: Scalars['ID']['output'];
  invitations: Array<Invitation>;
  kycStatus: KycStatus;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownedPersonas: Array<EntityPersonaOwnershipLink>;
  phoneCountryCode: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  wallet: Wallet;
  walletId: Scalars['String']['output'];
}

export interface EntityInput {
  id: Scalars['ID']['input'];
}

export interface EntityPersonaOwnership {
  entityId: Scalars['String']['input'];
  ownership: Scalars['Float']['input'];
  personaId: Scalars['String']['input'];
}

export interface EntityPersonaOwnershipLink extends BaseEdge, BaseOwnershipEdge {
  createdAt: Scalars['String']['output'];
  edgeType: EdgeType;
  entity: Entity;
  fromId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  ownership: Scalars['Float']['output'];
  persona: Persona;
  toId: Scalars['String']['output'];
  toNodeType: NodeType;
}

export enum EntityType {
  Company = 'company',
  Identity = 'identity',
  Individual = 'individual',
}

export interface Event extends Asset, Base, BaseAsset, BaseEvent {
  activities: Array<Activity>;
  assetType: AssetType;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  durationString: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  lineup: Array<EventLineup>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownedBy: Array<PersonaAssetOwnershipLink>;
  ratings: Array<Rating>;
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  unclaimedWallet?: Maybe<Wallet>;
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWallet: Wallet;
  workingWalletId: Scalars['String']['output'];
}

export interface EventInput {
  id: Scalars['ID']['input'];
}

export interface EventLineup extends Base, BaseEventLineup {
  createdAt: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  fromDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  set: Set;
  setId: Scalars['String']['output'];
  stage: Scalars['String']['output'];
  toDate: Scalars['String']['output'];
}

export interface Fingerprint extends Base, BaseFingerprint {
  createdAt: Scalars['String']['output'];
  fileKey: Scalars['String']['output'];
  fingerprintData: Array<Maybe<FingerprintData>>;
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
}

export interface FingerprintData {
  acrid: Scalars['String']['output'];
  album?: Maybe<AcrCloudAlbum>;
  artists?: Maybe<Array<Maybe<AcrCloudArtist>>>;
  duration_ms: Scalars['Int']['output'];
  genres?: Maybe<Array<Maybe<AcrCloudGenre>>>;
  label?: Maybe<Scalars['String']['output']>;
  offset: Scalars['Int']['output'];
  release_date?: Maybe<Scalars['String']['output']>;
  score: Scalars['Float']['output'];
  timestamp_utc: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
}

export interface FingerprintDataInput {
  acrid: Scalars['String']['input'];
  album?: InputMaybe<AcrCloudAlbumInput>;
  artists?: InputMaybe<Array<InputMaybe<AcrCloudArtistInput>>>;
  duration_ms: Scalars['Int']['input'];
  genres?: InputMaybe<Array<InputMaybe<AcrCloudGenreInput>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  offset: Scalars['Int']['input'];
  release_date?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['Float']['input'];
  timestamp_utc: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface FingerprintInput {
  id: Scalars['String']['input'];
}

export interface FollowPersonaInpupt {
  actingPersonaId: Scalars['String']['input'];
  followingPersonaId: Scalars['String']['input'];
}

export interface GetAuth0UserInfoInput {
  authZeroId: Scalars['String']['input'];
}

export interface GetAuth0UserInfoResponse {
  birthdate?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['Boolean']['output']>;
  family_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  phone_number_verified?: Maybe<Scalars['Boolean']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  preferred_username?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Scalars['String']['output']>;
  sub?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  zoneinfo?: Maybe<Scalars['String']['output']>;
}

export interface GetInvitationForPersonaInput {
  id: Scalars['ID']['input'];
}

export interface GetRefCodeStatusInput {
  code: Scalars['ID']['input'];
}

export interface GetUserInvitationsInput {
  email: Scalars['String']['input'];
}

export interface Identity extends Base, BaseIdentity {
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
}

export interface IdentityInput {
  id: Scalars['String']['input'];
}

export interface IdentityResponse {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export interface Individual extends Base, BaseEntity, BaseIndividual, Entity {
  activities: Array<Activity>;
  address: Scalars['String']['output'];
  age: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  dateOfBirth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entityType: EntityType;
  id: Scalars['ID']['output'];
  invitations: Array<Invitation>;
  kycStatus: KycStatus;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownedPersonas: Array<EntityPersonaOwnershipLink>;
  phoneCountryCode: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  surname: Scalars['String']['output'];
  wallet: Wallet;
  walletId: Scalars['String']['output'];
}

export interface IndividualInput {
  id: Scalars['ID']['input'];
}

export enum IndividualType {
  Individual = 'individual',
}

export interface Invitation extends Base, BaseInvitation {
  assetType?: Maybe<AssetType>;
  createdAt: Scalars['String']['output'];
  expiresAt: Scalars['String']['output'];
  fromEntity: Entity;
  fromEntityId: Scalars['String']['output'];
  fromPersona?: Maybe<Persona>;
  fromPersonaId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invitationState: InvitationState;
  invitationType: InvitationType;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  onAsset?: Maybe<Asset>;
  onAssetId?: Maybe<Scalars['String']['output']>;
  phoneCountryCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  toEmail: Scalars['String']['output'];
}

export interface InvitationInput {
  id: Scalars['ID']['input'];
}

export enum InvitationState {
  Accepted = 'accepted',
  Pending = 'pending',
  Refused = 'refused',
}

export enum InvitationType {
  AssetCollaborationInvitation = 'assetCollaborationInvitation',
  PersonaCollaborationInvitation = 'personaCollaborationInvitation',
  UserInvitation = 'userInvitation',
}

export interface IsrcDetails {
  artistName: Scalars['String']['output'];
  creationDate: Scalars['String']['output'];
  discNumber: Scalars['String']['output'];
  documentType: Scalars['String']['output'];
  focus: Scalars['Boolean']['output'];
  hit: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isExplicit: Scalars['Boolean']['output'];
  isrc: Scalars['String']['output'];
  isrcFailureCode: Scalars['String']['output'];
  length: Scalars['String']['output'];
  productionDate: Scalars['String']['output'];
  recordingPlace: Scalars['String']['output'];
  recordingVersion: Scalars['String']['output'];
  recordingYear: Scalars['String']['output'];
  releaseArtist: Scalars['String']['output'];
  releaseDate: Scalars['String']['output'];
  releaseLabel: Scalars['String']['output'];
  releaseName: Scalars['String']['output'];
  showReleases: Scalars['Int']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  trackNumber: Scalars['String']['output'];
  trackSourceIds: Array<TrackSource>;
  upcCode: Scalars['String']['output'];
  updateDate: Scalars['String']['output'];
}

export interface ItemCount {
  activities: Scalars['Int']['output'];
  entities: Scalars['Int']['output'];
  entityPersonaOwnership: Scalars['Int']['output'];
  eventLineups: Scalars['Int']['output'];
  events: Scalars['Int']['output'];
  fingerprints: Scalars['Int']['output'];
  invitations: Scalars['Int']['output'];
  personaAssetOwnership: Scalars['Int']['output'];
  personaFollowing: Scalars['Int']['output'];
  personas: Scalars['Int']['output'];
  playlists: Scalars['Int']['output'];
  ratings: Scalars['Int']['output'];
  sets: Scalars['Int']['output'];
  tracklists: Scalars['Int']['output'];
  tracks: Scalars['Int']['output'];
  transactions: Scalars['Int']['output'];
  wallets: Scalars['Int']['output'];
}

export enum KycStatus {
  Rejected = 'rejected',
  Unverified = 'unverified',
  Verified = 'verified',
}

export interface ListeningPathway extends BaseListeningPathway {
  assetListeningDurations: Array<AssetListeningDuration>;
  closingBalance: Scalars['Float']['output'];
  entity: Entity;
  entityId: Scalars['String']['output'];
  openingBalance: Scalars['Float']['output'];
  revenueFlow: Array<RevenueFlow>;
}

export interface ListeningPathwayInput {
  entityId: Scalars['String']['input'];
}

export interface MusicStoryArtist {
  coeffActu?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ipi?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  searchScores?: Maybe<MusicStorySearchScores>;
  type: Scalars['String']['output'];
  updateDate?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
}

export interface MusicStoryArtistInput {
  name: Scalars['String']['input'];
}

export interface MusicStorySearchScores {
  name?: Maybe<Scalars['String']['output']>;
}

export interface MusicStoryTrack {
  creationDate?: Maybe<Scalars['String']['output']>;
  discNumber: Scalars['Int']['output'];
  focus?: Maybe<Scalars['Boolean']['output']>;
  hit?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isrc: Scalars['String']['output'];
  length: Scalars['String']['output'];
  parentalAdvisory?: Maybe<Scalars['Boolean']['output']>;
  productionDate?: Maybe<Scalars['String']['output']>;
  recordingPlace?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  trackNumber: Scalars['Int']['output'];
  updateDate?: Maybe<Scalars['String']['output']>;
}

export interface Mutation {
  _empty?: Maybe<Scalars['String']['output']>;
  changePassword: ChangePasswordResponse;
  changePersonaCollaborationInvitationState: Invitation;
  createActivity: Activity;
  createAssetCollaborationInvitation: Invitation;
  createCompany: Company;
  createEvent: Event;
  createEventLineup: EventLineup;
  createFingerprint: Fingerprint;
  createIndividual: Individual;
  createPersona: Persona;
  createPersonaCollaborationInvitation: Invitation;
  createPlaylist: Playlist;
  createRating: Rating;
  createRefCode: RefCode;
  createSet: Set;
  createSignedCookie: CreateSignedOutput;
  createSignedUri: CreateSignedOutput;
  createSubscription: StripeSubscriptionPaymentSession;
  createTrack: Track;
  createTracklist: Tracklist;
  createTransaction: Transaction;
  createUnion: Company;
  createUser: CreateUserResponse;
  createUserInvitation: Invitation;
  createWallet: Wallet;
  deleteActivity: Scalars['Boolean']['output'];
  deleteCompany: Scalars['Boolean']['output'];
  deleteEvent: Scalars['Boolean']['output'];
  deleteEventLineup: Scalars['Boolean']['output'];
  deleteFingerprint: Scalars['Boolean']['output'];
  deleteIndividual: Scalars['Boolean']['output'];
  deleteInvitation: Scalars['Boolean']['output'];
  deletePersona: Scalars['Boolean']['output'];
  deletePlaylist: Scalars['Boolean']['output'];
  deleteRating: Scalars['Boolean']['output'];
  deleteRefCode: Scalars['Boolean']['output'];
  deleteSet: DeleteSetResponse;
  deleteTrack: Scalars['ID']['output'];
  deleteTracklist: Scalars['Boolean']['output'];
  deleteTransaction: Scalars['Boolean']['output'];
  deleteWallet: Scalars['Boolean']['output'];
  followPersona: Persona;
  importTestData: ItemCount;
  postCompleteListeningPathway: CompleteListeningPathwayResult;
  resendVerificationEmail: Scalars['Boolean']['output'];
  signIn: SignInResponse;
  simulateListeningPathway?: Maybe<ListeningPathway>;
  simulateWorkingWalletDistribution: Array<Maybe<RevenueFlow>>;
  updateActivity: Activity;
  updateAssetCollaborationInvitation: Invitation;
  updateAssetOwnership: Asset;
  updateCompany: Company;
  updateEntity: Individual;
  updateEvent: Event;
  updateEventLineup: EventLineup;
  updateFingerprint: Fingerprint;
  updateIndividual: Individual;
  updatePersona: Persona;
  updatePersonaCollaborationInvitation: Invitation;
  updatePersonaOwnership: Persona;
  updatePlaylist: Playlist;
  updateRating: Rating;
  updateRefCode: RefCode;
  updateSet: Set;
  updateTrack: Track;
  updateTracklist: Tracklist;
  updateTransaction: Transaction;
  updateUserInvitation: Invitation;
  updateWallet: Wallet;
  useRefCode: RefCode;
  verifyEmail: VerifyEmailresponse;
  verifyToken: VerifyTokenResponse;
}

export interface MutationChangePasswordArgs {
  input: ChangePasswordInput;
}

export interface MutationChangePersonaCollaborationInvitationStateArgs {
  input: ChangePersonaCollaborationInvitationStateInput;
}

export interface MutationCreateActivityArgs {
  input: CreateActivityInput;
}

export interface MutationCreateAssetCollaborationInvitationArgs {
  input: CreateAssetCollaborationInvitationInput;
}

export interface MutationCreateCompanyArgs {
  input: CreateCompanyInput;
}

export interface MutationCreateEventArgs {
  input: CreateEventInput;
}

export interface MutationCreateEventLineupArgs {
  input: CreateEventLineupInput;
}

export interface MutationCreateFingerprintArgs {
  input: CreateFingerprintInput;
}

export interface MutationCreateIndividualArgs {
  input: CreateIndividualInput;
}

export interface MutationCreatePersonaArgs {
  input: CreatePersonaInput;
}

export interface MutationCreatePersonaCollaborationInvitationArgs {
  input: CreatePersonaCollaborationInvitationInput;
}

export interface MutationCreatePlaylistArgs {
  input: CreatePlaylistInput;
}

export interface MutationCreateRatingArgs {
  input: CreateRatingInput;
}

export interface MutationCreateSetArgs {
  input: CreateSetInput;
}

export interface MutationCreateSignedCookieArgs {
  input: CreateSignedInput;
}

export interface MutationCreateSignedUriArgs {
  input: CreateSignedInput;
}

export interface MutationCreateSubscriptionArgs {
  entityId: Scalars['ID']['input'];
}

export interface MutationCreateTrackArgs {
  input: CreateTrackInput;
}

export interface MutationCreateTracklistArgs {
  input: CreateTracklistInput;
}

export interface MutationCreateTransactionArgs {
  input: CreateTransactionInput;
}

export interface MutationCreateUnionArgs {
  input: CreateCompanyInput;
}

export interface MutationCreateUserArgs {
  input: CreateAuthUserInput;
}

export interface MutationCreateUserInvitationArgs {
  input: CreateUserInvitationInput;
}

export interface MutationCreateWalletArgs {
  input: CreateWalletInput;
}

export interface MutationDeleteActivityArgs {
  input: DeleteActivityInput;
}

export interface MutationDeleteCompanyArgs {
  input: DeleteCompanyInput;
}

export interface MutationDeleteEventArgs {
  input: DeleteEventInput;
}

export interface MutationDeleteEventLineupArgs {
  input: DeleteEventLineupInput;
}

export interface MutationDeleteFingerprintArgs {
  input: DeleteFingerprintInput;
}

export interface MutationDeleteIndividualArgs {
  input: DeleteIndividualInput;
}

export interface MutationDeleteInvitationArgs {
  input: DeleteInvitationInput;
}

export interface MutationDeletePersonaArgs {
  input: DeletePersonaInput;
}

export interface MutationDeletePlaylistArgs {
  input: DeletePlaylistInput;
}

export interface MutationDeleteRatingArgs {
  input: DeleteRatingInput;
}

export interface MutationDeleteRefCodeArgs {
  input: DeleteRefCodeInput;
}

export interface MutationDeleteSetArgs {
  input: DeleteSetInput;
}

export interface MutationDeleteTrackArgs {
  input: DeleteTrackInput;
}

export interface MutationDeleteTracklistArgs {
  input: DeleteTracklistInput;
}

export interface MutationDeleteTransactionArgs {
  input: DeleteTransactionInput;
}

export interface MutationDeleteWalletArgs {
  input: DeleteWalletInput;
}

export interface MutationFollowPersonaArgs {
  input: FollowPersonaInpupt;
}

export interface MutationResendVerificationEmailArgs {
  input: GetAuth0UserInfoInput;
}

export interface MutationSignInArgs {
  input: SignInInput;
}

export interface MutationSimulateListeningPathwayArgs {
  input: ListeningPathwayInput;
}

export interface MutationSimulateWorkingWalletDistributionArgs {
  input: WorkingWalletDistributionInput;
}

export interface MutationUpdateActivityArgs {
  input: UpdateActivityInput;
}

export interface MutationUpdateAssetCollaborationInvitationArgs {
  input: UpdateAssetCollaborationInvitationInput;
}

export interface MutationUpdateAssetOwnershipArgs {
  input: UpdateAssetOwnership;
}

export interface MutationUpdateCompanyArgs {
  input: UpdateCompanyInput;
}

export interface MutationUpdateEntityArgs {
  input: UpdateEntityInput;
}

export interface MutationUpdateEventArgs {
  input: UpdateEventInput;
}

export interface MutationUpdateEventLineupArgs {
  input: UpdateEventLineupInput;
}

export interface MutationUpdateFingerprintArgs {
  input: UpdateFingerprintInput;
}

export interface MutationUpdateIndividualArgs {
  input: UpdateIndividualInput;
}

export interface MutationUpdatePersonaArgs {
  input: UpdatePersonaInput;
}

export interface MutationUpdatePersonaCollaborationInvitationArgs {
  input: UpdatePersonaCollaborationInvitationInput;
}

export interface MutationUpdatePersonaOwnershipArgs {
  input: UpdatePersonaOwnership;
}

export interface MutationUpdatePlaylistArgs {
  input: UpdatePlaylistInput;
}

export interface MutationUpdateRatingArgs {
  input: UpdateRatingInput;
}

export interface MutationUpdateRefCodeArgs {
  input: UpdateRefCodeInput;
}

export interface MutationUpdateSetArgs {
  input: UpdateSetInput;
}

export interface MutationUpdateTrackArgs {
  input: UpdateTrackInput;
}

export interface MutationUpdateTracklistArgs {
  input: UpdateTracklistInput;
}

export interface MutationUpdateTransactionArgs {
  input: UpdateTransactionInput;
}

export interface MutationUpdateUserInvitationArgs {
  input: UpdateUserInvitationInput;
}

export interface MutationUpdateWalletArgs {
  input: UpdateWalletInput;
}

export interface MutationUseRefCodeArgs {
  input: UseRefCodeInput;
}

export interface MutationVerifyEmailArgs {
  input?: InputMaybe<VerifyEmailInput>;
}

export interface MutationVerifyTokenArgs {
  input: VerifyTokenInput;
}

export enum NodeType {
  Activity = 'activity',
  Asset = 'asset',
  Company = 'company',
  Entity = 'entity',
  EventLineup = 'eventLineup',
  Identity = 'identity',
  Individual = 'individual',
  Invitation = 'invitation',
  Persona = 'persona',
  Rating = 'rating',
  RefCode = 'refCode',
  StripeSubscription = 'stripeSubscription',
  Tracklist = 'tracklist',
  Transaction = 'transaction',
  Wallet = 'wallet',
}

export interface OwnershipById {
  id: Scalars['ID']['input'];
  ownership: Scalars['Float']['input'];
}

export interface Persona extends Base, BasePersona {
  activity: Array<Activity>;
  bio: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  following: Array<Persona>;
  id: Scalars['ID']['output'];
  imageKey: Scalars['String']['output'];
  lastModifiedAt: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownedAssets: Array<PersonaAssetOwnershipLink>;
  ownedByEntities: Array<EntityPersonaOwnershipLink>;
  ratings: Array<Rating>;
  type: PersonaType;
}

export interface PersonaAssetOwnership {
  assetId: Scalars['String']['input'];
  ownership: Scalars['Float']['input'];
  personaId: Scalars['String']['input'];
}

export interface PersonaAssetOwnershipLink extends BaseEdge, BaseOwnershipEdge {
  asset: Asset;
  createdAt: Scalars['String']['output'];
  edgeType: EdgeType;
  fromId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  ownership: Scalars['Float']['output'];
  persona: Persona;
  toId: Scalars['String']['output'];
  toNodeType: NodeType;
}

export interface PersonaInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export enum PersonaType {
  Collaboration = 'collaboration',
  Company = 'company',
  Event = 'event',
  Individual = 'individual',
}

export interface Playlist extends Asset, Base, BaseAsset, BasePlaylist {
  activities: Array<Activity>;
  assetType: AssetType;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  durationString: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  itemIds: Array<Scalars['String']['output']>;
  items: Array<Asset>;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownedBy: Array<PersonaAssetOwnershipLink>;
  ratings: Array<Rating>;
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  unclaimedWallet?: Maybe<Wallet>;
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWallet: Wallet;
  workingWalletId: Scalars['String']['output'];
}

export interface PlaylistInput {
  id: Scalars['ID']['input'];
}

export interface Query {
  _empty?: Maybe<Scalars['String']['output']>;
  activities: Array<Activity>;
  activity: Activity;
  asset: Asset;
  assets?: Maybe<Array<Asset>>;
  companies?: Maybe<Array<Company>>;
  company: Company;
  entities?: Maybe<Array<Entity>>;
  entity: Entity;
  event: Event;
  events: Array<Event>;
  fingerprint: Fingerprint;
  fingerprintByFileKey?: Maybe<Fingerprint>;
  fingerprints: Array<Fingerprint>;
  getAuth0UserInfo: GetAuth0UserInfoResponse;
  getMusicStoryTrack: MusicStoryTrack;
  getRefCodeStatus: RefCodeStatus;
  individual: Individual;
  individuals?: Maybe<Array<Individual>>;
  invitation: Invitation;
  invitations: Array<Invitation>;
  persona: Persona;
  personaInvitations: Array<Invitation>;
  personas?: Maybe<Array<Persona>>;
  phoneVerified: VerifiedResult;
  playlist: Playlist;
  playlists: Array<Playlist>;
  refCode: RefCode;
  searchMusicStoryArtist: Array<MusicStoryArtist>;
  searchMusicStoryTracks: Array<IsrcDetails>;
  set: Set;
  sets: Array<Set>;
  stripeSubscriptions?: Maybe<Array<StripeSubscription>>;
  track: Track;
  tracklist: Tracklist;
  tracklists: Array<Tracklist>;
  tracks: Array<Track>;
  transaction: Transaction;
  transactions?: Maybe<Array<Transaction>>;
  userData: Individual;
  userInvitations: Array<Invitation>;
  wallet: Wallet;
  wallets?: Maybe<Array<Wallet>>;
}

export interface QueryActivityArgs {
  input: ActivityInput;
}

export interface QueryAssetArgs {
  input: AssetInput;
}

export interface QueryCompanyArgs {
  input: CompanyInput;
}

export interface QueryEntityArgs {
  input: EntityInput;
}

export interface QueryEventArgs {
  input: EventInput;
}

export interface QueryFingerprintArgs {
  input: FingerprintInput;
}

export interface QueryFingerprintByFileKeyArgs {
  fileKey: Scalars['String']['input'];
}

export interface QueryGetAuth0UserInfoArgs {
  input: GetAuth0UserInfoInput;
}

export interface QueryGetMusicStoryTrackArgs {
  input: GetMusicStoryTrackInput;
}

export interface QueryGetRefCodeStatusArgs {
  input: GetRefCodeStatusInput;
}

export interface QueryIndividualArgs {
  input: IndividualInput;
}

export interface QueryInvitationArgs {
  input: InvitationInput;
}

export interface QueryPersonaArgs {
  input?: InputMaybe<PersonaInput>;
}

export interface QueryPersonaInvitationsArgs {
  input: GetInvitationForPersonaInput;
}

export interface QueryPhoneVerifiedArgs {
  input: IndividualInput;
}

export interface QueryPlaylistArgs {
  input: PlaylistInput;
}

export interface QueryRefCodeArgs {
  input: RefCodeInput;
}

export interface QuerySearchMusicStoryArtistArgs {
  input: MusicStoryArtistInput;
}

export interface QuerySearchMusicStoryTracksArgs {
  input: SearchMusicStoryTrackInput;
}

export interface QuerySetArgs {
  input: SetInput;
}

export interface QueryTrackArgs {
  input: TrackInput;
}

export interface QueryTracklistArgs {
  input: TracklistInput;
}

export interface QueryTransactionArgs {
  input: TransactionInput;
}

export interface QueryUserDataArgs {
  input: IdentityInput;
}

export interface QueryUserInvitationsArgs {
  input: GetUserInvitationsInput;
}

export interface QueryWalletArgs {
  input: WalletInput;
}

export interface Rating extends Base, BaseEdge, BaseRating {
  asset: Asset;
  createdAt: Scalars['String']['output'];
  edgeType: EdgeType;
  fromId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  persona: Persona;
  ratingType: RatingType;
  toId: Scalars['String']['output'];
  toNodeType: NodeType;
}

export enum RatingType {
  Dislike = 'dislike',
  Like = 'like',
  Love = 'love',
}

export interface RefCode extends Base, BaseRefCode {
  code: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isUsed: Scalars['Boolean']['output'];
  lastModifiedAt: Scalars['String']['output'];
}

export interface RefCodeInput {
  id: Scalars['ID']['input'];
}

export interface RefCodeStatus {
  isUsed: Scalars['Boolean']['output'];
}

export interface RevenueFlow extends BaseRevenueFlow {
  transaction: Transaction;
  wallet: Wallet;
  walletId: Scalars['String']['output'];
}

export interface Set extends Asset, Base, BaseAsset, BaseSet {
  activities: Array<Activity>;
  assetType: AssetType;
  audioFile: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  durationString: Scalars['String']['output'];
  event?: Maybe<Scalars['String']['output']>;
  fingerprintIds?: Maybe<Array<Scalars['String']['output']>>;
  fingerprints?: Maybe<Array<Fingerprint>>;
  id: Scalars['ID']['output'];
  isrc: Scalars['String']['output'];
  lastModifiedAt: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownedBy: Array<PersonaAssetOwnershipLink>;
  playedAt?: Maybe<Scalars['String']['output']>;
  ratings: Array<Rating>;
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  tracklist: Tracklist;
  tracklistId: Scalars['String']['output'];
  unclaimedWallet?: Maybe<Wallet>;
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWallet: Wallet;
  workingWalletId: Scalars['String']['output'];
}

export interface SetInput {
  id: Scalars['ID']['input'];
}

export interface SignInInput {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface SignInResponse extends IdentityResponse {
  accessToken: Scalars['String']['output'];
  authZeroId: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<Individual>;
}

export interface StripeSubscription extends Base {
  createdAt: Scalars['String']['output'];
  entityId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  paid?: Maybe<Scalars['Boolean']['output']>;
  paymentIntentId: Scalars['String']['output'];
  subscriptionId: Scalars['String']['output'];
}

export interface StripeSubscriptionPaymentSession {
  clientSecret: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  ephemeralKey: Scalars['String']['output'];
}

export interface Track extends Asset, Base, BaseAsset, BaseTrack {
  activities: Array<Activity>;
  artistName?: Maybe<Scalars['String']['output']>;
  assetType: AssetType;
  audioFile: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  durationString: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isrc?: Maybe<Scalars['String']['output']>;
  isrcDetails?: Maybe<IsrcDetails>;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownedBy: Array<PersonaAssetOwnershipLink>;
  ratings: Array<Rating>;
  releasedAt: Scalars['String']['output'];
  thumbnailFile: Scalars['String']['output'];
  unclaimedWallet?: Maybe<Wallet>;
  unclaimedWalletId: Scalars['String']['output'];
  validation: AssetValidation;
  visible: AssetVisibility;
  workingWallet: Wallet;
  workingWalletId: Scalars['String']['output'];
}

export interface TrackInput {
  id?: InputMaybe<Scalars['String']['input']>;
  isrc?: InputMaybe<Scalars['String']['input']>;
}

export interface TrackSource {
  id: Scalars['String']['output'];
  source: Scalars['String']['output'];
}

export interface Tracklist extends Base, BaseTracklist {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  tracklistData: Array<TracklistData>;
}

export interface TracklistData {
  startTime: Scalars['String']['output'];
  trackId: Scalars['String']['output'];
}

export interface TracklistDataInput {
  startTime: Scalars['String']['input'];
  trackId: Scalars['String']['input'];
}

export interface TracklistInput {
  id: Scalars['String']['input'];
}

export interface Transaction extends Base, BaseTransaction {
  amount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  walletId: Scalars['String']['output'];
}

export interface TransactionInput {
  id: Scalars['ID']['input'];
}

export enum TransactionType {
  EntityOwned = 'entityOwned',
}

export interface UpdateActivityInput {
  activityType?: InputMaybe<ActivityType>;
  byEntityId?: InputMaybe<Scalars['String']['input']>;
  byPersonaId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  onAssetId?: InputMaybe<Scalars['String']['input']>;
  playedFromId?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
}

export interface UpdateAssetCollaborationInvitationInput {
  assetType: AssetType;
  expiresAt: Scalars['String']['input'];
  fromEntityId: Scalars['String']['input'];
  fromPersonaId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  invitationType: InvitationType;
  name: Scalars['String']['input'];
  onAssetId: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  toEmail: Scalars['String']['input'];
}

export interface UpdateAssetOwnership {
  assetId: Scalars['String']['input'];
  owningPersonas: Array<OwnershipById>;
}

export interface UpdateCompanyInput {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  kycStatus?: InputMaybe<KycStatus>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneCountryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  walletId?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateEntityInput {
  id: Scalars['ID']['input'];
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateEventInput {
  assetType?: InputMaybe<AssetType>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['String']['input']>;
  thumbnailFile?: InputMaybe<Scalars['String']['input']>;
  unclaimedWalletId?: InputMaybe<Scalars['String']['input']>;
  validation?: InputMaybe<AssetValidation>;
  visible?: InputMaybe<AssetVisibility>;
  workingWalletId?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateEventLineupInput {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastModifiedAt?: InputMaybe<Scalars['String']['input']>;
  setId?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateFingerprintInput {
  fingerprintData: Array<InputMaybe<FingerprintDataInput>>;
  id: Scalars['String']['input'];
}

export interface UpdateIndividualInput {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  kycStatus?: InputMaybe<KycStatus>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneCountryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  walletId?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdatePersonaCollaborationInvitationInput {
  expiresAt: Scalars['String']['input'];
  fromEntityId: Scalars['String']['input'];
  fromPersonaId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  invitationType: InvitationType;
  name: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  toEmail: Scalars['String']['input'];
}

export interface UpdatePersonaInput {
  bio?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  imageKey?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PersonaType>;
}

export interface UpdatePersonaOwnership {
  owningEntities: Array<OwnershipById>;
  personaId: Scalars['String']['input'];
}

export interface UpdatePlaylistInput {
  assetType?: InputMaybe<AssetType>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  itemIds?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['String']['input']>;
  thumbnailFile?: InputMaybe<Scalars['String']['input']>;
  unclaimedWalletId?: InputMaybe<Scalars['String']['input']>;
  validation?: InputMaybe<AssetValidation>;
  visible?: InputMaybe<AssetVisibility>;
  workingWalletId?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateRatingInput {
  edgeType?: InputMaybe<EdgeType>;
  fromId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  ratingType?: InputMaybe<RatingType>;
  toId?: InputMaybe<Scalars['String']['input']>;
  toNodeType?: InputMaybe<NodeType>;
}

export interface UpdateRefCodeInput {
  id: Scalars['String']['input'];
  isUsed: Scalars['Boolean']['input'];
}

export interface UpdateSetInput {
  assetType?: InputMaybe<AssetType>;
  audioFile?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  fingerprintIds?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  isrc?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personaId?: InputMaybe<Scalars['String']['input']>;
  playedAt?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['String']['input']>;
  thumbnailFile?: InputMaybe<Scalars['String']['input']>;
  tracklistId?: InputMaybe<Scalars['String']['input']>;
  unclaimedWalletId?: InputMaybe<Scalars['String']['input']>;
  validation?: InputMaybe<AssetValidation>;
  visible?: InputMaybe<AssetVisibility>;
  workingWalletId?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateTrackInput {
  artistName?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<AssetType>;
  audioFile?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  isrc?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['String']['input']>;
  thumbnailFile?: InputMaybe<Scalars['String']['input']>;
  unclaimedWalletId?: InputMaybe<Scalars['String']['input']>;
  validation?: InputMaybe<AssetValidation>;
  visible?: InputMaybe<AssetVisibility>;
  workingWalletId?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateTracklistInput {
  id: Scalars['String']['input'];
  tracklistData: Array<TracklistDataInput>;
}

export interface UpdateTransactionInput {
  amount?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  walletId?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateUserInvitationInput {
  expiresAt: Scalars['String']['input'];
  fromEntityId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  invitationType: InvitationType;
  name: Scalars['String']['input'];
  toEmail: Scalars['String']['input'];
}

export interface UpdateWalletInput {
  allowNegativeBalance: Scalars['Boolean']['input'];
  currencyCode: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  walletType: WalletType;
}

export interface UseRefCodeInput {
  id: Scalars['String']['input'];
  isUsed: Scalars['Boolean']['input'];
}

export interface VerifiedResult {
  verified: Scalars['Boolean']['output'];
}

export interface VerifyEmailInput {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  refCode: Scalars['String']['input'];
}

export interface VerifyEmailresponse extends IdentityResponse {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export interface VerifyTokenInput {
  accessToken: Scalars['String']['input'];
}

export interface VerifyTokenResponse {
  isValid: Scalars['Boolean']['output'];
}

export interface Wallet extends Base, BaseWallet {
  allowNegativeBalance: Scalars['Boolean']['output'];
  balance: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  currencyCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['String']['output'];
  transactions: Array<Transaction>;
  walletType: WalletType;
}

export interface WalletInput {
  id: Scalars['ID']['input'];
}

export interface WalletOwnership extends BaseWalletOwnership {
  asset: Asset;
  assetId: Scalars['String']['output'];
  entity: Entity;
  entityId: Scalars['String']['output'];
  ownership: Scalars['Float']['output'];
  ownershipString: Scalars['String']['output'];
  wallet: Wallet;
  walletId: Scalars['String']['output'];
}

export enum WalletType {
  AssetOwned = 'assetOwned',
  EntityOwned = 'entityOwned',
}

export interface WorkingWalletDistributionInput {
  assetId: Scalars['String']['input'];
}

export interface ChangePersonaCollaborationInvitationStateInput {
  id: Scalars['ID']['input'];
  invitationState: InvitationState;
}

export interface GetMusicStoryTrackInput {
  id: Scalars['ID']['input'];
}

export interface SearchMusicStoryTrackInput {
  isrc: Scalars['String']['input'];
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Asset: Event | Playlist | Set | Track;
  Base:
    | Activity
    | Company
    | Event
    | EventLineup
    | Fingerprint
    | Identity
    | Individual
    | Invitation
    | Persona
    | Playlist
    | Rating
    | RefCode
    | Set
    | StripeSubscription
    | Track
    | Tracklist
    | Transaction
    | Wallet;
  BaseActivity: Activity;
  BaseAsset: Event | Playlist | Set | Track;
  BaseAssetListeningDuration: AssetListeningDuration;
  BaseCompany: Company;
  BaseCompleteListeningPathwayResult: never;
  BaseEdge: EntityPersonaOwnershipLink | PersonaAssetOwnershipLink | Rating;
  BaseEntity: Company | Individual;
  BaseEvent: Event;
  BaseEventLineup: EventLineup;
  BaseFingerprint: Fingerprint;
  BaseIdentity: Identity;
  BaseIndividual: Individual;
  BaseInvitation: Invitation;
  BaseListeningPathway: ListeningPathway;
  BaseOwnershipEdge: EntityPersonaOwnershipLink | PersonaAssetOwnershipLink;
  BasePersona: Persona;
  BasePlaylist: Playlist;
  BaseRating: Rating;
  BaseRefCode: RefCode;
  BaseRevenueFlow: RevenueFlow;
  BaseSet: Set;
  BaseTrack: Track;
  BaseTracklist: Tracklist;
  BaseTransaction: Transaction;
  BaseWallet: Wallet;
  BaseWalletOwnership: WalletOwnership;
  Entity: Company | Individual;
  IdentityResponse: ChangePasswordResponse | CreateUserResponse | SignInResponse | VerifyEmailresponse;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ACRCloudAlbum: ResolverTypeWrapper<AcrCloudAlbum>;
  ACRCloudAlbumInput: AcrCloudAlbumInput;
  ACRCloudArtist: ResolverTypeWrapper<AcrCloudArtist>;
  ACRCloudArtistInput: AcrCloudArtistInput;
  ACRCloudGenre: ResolverTypeWrapper<AcrCloudGenre>;
  ACRCloudGenreInput: AcrCloudGenreInput;
  ACRCloudLangs: ResolverTypeWrapper<AcrCloudLangs>;
  ACRCloudLangsInput: AcrCloudLangsInput;
  AccountStatus: AccountStatus;
  Activity: ResolverTypeWrapper<Activity>;
  ActivityInput: ActivityInput;
  ActivityType: ActivityType;
  Asset: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Asset']>;
  AssetInput: AssetInput;
  AssetListeningDuration: ResolverTypeWrapper<AssetListeningDuration>;
  AssetType: AssetType;
  AssetValidation: AssetValidation;
  AssetVisibility: AssetVisibility;
  Base: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Base']>;
  BaseActivity: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseActivity']>;
  BaseAsset: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseAsset']>;
  BaseAssetListeningDuration: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseAssetListeningDuration']>;
  BaseCompany: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseCompany']>;
  BaseCompleteListeningPathwayResult: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseCompleteListeningPathwayResult']>;
  BaseEdge: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseEdge']>;
  BaseEntity: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseEntity']>;
  BaseEvent: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseEvent']>;
  BaseEventLineup: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseEventLineup']>;
  BaseFingerprint: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseFingerprint']>;
  BaseIdentity: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseIdentity']>;
  BaseIndividual: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseIndividual']>;
  BaseInvitation: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseInvitation']>;
  BaseListeningPathway: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseListeningPathway']>;
  BaseOwnershipEdge: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseOwnershipEdge']>;
  BasePersona: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BasePersona']>;
  BasePlaylist: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BasePlaylist']>;
  BaseRating: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseRating']>;
  BaseRefCode: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseRefCode']>;
  BaseRevenueFlow: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseRevenueFlow']>;
  BaseSet: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseSet']>;
  BaseTrack: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseTrack']>;
  BaseTracklist: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseTracklist']>;
  BaseTransaction: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseTransaction']>;
  BaseWallet: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseWallet']>;
  BaseWalletOwnership: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseWalletOwnership']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ChangePasswordInput: ChangePasswordInput;
  ChangePasswordResponse: ResolverTypeWrapper<ChangePasswordResponse>;
  Company: ResolverTypeWrapper<Company>;
  CompanyInput: CompanyInput;
  CompanyType: CompanyType;
  CompleteListeningPathwayResult: ResolverTypeWrapper<CompleteListeningPathwayResult>;
  CreateActivityInput: CreateActivityInput;
  CreateAssetCollaborationInvitationInput: CreateAssetCollaborationInvitationInput;
  CreateAuthUserInput: CreateAuthUserInput;
  CreateCompanyInput: CreateCompanyInput;
  CreateEventInput: CreateEventInput;
  CreateEventLineupInput: CreateEventLineupInput;
  CreateFingerprintInput: CreateFingerprintInput;
  CreateIndividualInput: CreateIndividualInput;
  CreatePersonaCollaborationInvitationInput: CreatePersonaCollaborationInvitationInput;
  CreatePersonaInput: CreatePersonaInput;
  CreatePlaylistInput: CreatePlaylistInput;
  CreateRatingInput: CreateRatingInput;
  CreateSetInput: CreateSetInput;
  CreateSignedInput: CreateSignedInput;
  CreateSignedOutput: ResolverTypeWrapper<CreateSignedOutput>;
  CreateTrackInput: CreateTrackInput;
  CreateTracklistInput: CreateTracklistInput;
  CreateTransactionInput: CreateTransactionInput;
  CreateUserInvitationInput: CreateUserInvitationInput;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  CreateWalletInput: CreateWalletInput;
  DeleteActivityInput: DeleteActivityInput;
  DeleteCompanyInput: DeleteCompanyInput;
  DeleteEventInput: DeleteEventInput;
  DeleteEventLineupInput: DeleteEventLineupInput;
  DeleteFingerprintInput: DeleteFingerprintInput;
  DeleteIndividualInput: DeleteIndividualInput;
  DeleteInvitationInput: DeleteInvitationInput;
  DeletePersonaInput: DeletePersonaInput;
  DeletePlaylistInput: DeletePlaylistInput;
  DeleteRatingInput: DeleteRatingInput;
  DeleteRefCodeInput: DeleteRefCodeInput;
  DeleteSetInput: DeleteSetInput;
  DeleteSetResponse: ResolverTypeWrapper<DeleteSetResponse>;
  DeleteTrackInput: DeleteTrackInput;
  DeleteTracklistInput: DeleteTracklistInput;
  DeleteTransactionInput: DeleteTransactionInput;
  DeleteWalletInput: DeleteWalletInput;
  EdgeType: EdgeType;
  Entity: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entity']>;
  EntityInput: EntityInput;
  EntityPersonaOwnership: EntityPersonaOwnership;
  EntityPersonaOwnershipLink: ResolverTypeWrapper<EntityPersonaOwnershipLink>;
  EntityType: EntityType;
  Event: ResolverTypeWrapper<Event>;
  EventInput: EventInput;
  EventLineup: ResolverTypeWrapper<EventLineup>;
  Fingerprint: ResolverTypeWrapper<Fingerprint>;
  FingerprintData: ResolverTypeWrapper<FingerprintData>;
  FingerprintDataInput: FingerprintDataInput;
  FingerprintInput: FingerprintInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FollowPersonaInpupt: FollowPersonaInpupt;
  GetAuth0UserInfoInput: GetAuth0UserInfoInput;
  GetAuth0UserInfoResponse: ResolverTypeWrapper<GetAuth0UserInfoResponse>;
  GetInvitationForPersonaInput: GetInvitationForPersonaInput;
  GetRefCodeStatusInput: GetRefCodeStatusInput;
  GetUserInvitationsInput: GetUserInvitationsInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Identity: ResolverTypeWrapper<Identity>;
  IdentityInput: IdentityInput;
  IdentityResponse: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IdentityResponse']>;
  Individual: ResolverTypeWrapper<Individual>;
  IndividualInput: IndividualInput;
  IndividualType: IndividualType;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Invitation: ResolverTypeWrapper<Invitation>;
  InvitationInput: InvitationInput;
  InvitationState: InvitationState;
  InvitationType: InvitationType;
  IsrcDetails: ResolverTypeWrapper<IsrcDetails>;
  ItemCount: ResolverTypeWrapper<ItemCount>;
  KycStatus: KycStatus;
  ListeningPathway: ResolverTypeWrapper<ListeningPathway>;
  ListeningPathwayInput: ListeningPathwayInput;
  MusicStoryArtist: ResolverTypeWrapper<MusicStoryArtist>;
  MusicStoryArtistInput: MusicStoryArtistInput;
  MusicStorySearchScores: ResolverTypeWrapper<MusicStorySearchScores>;
  MusicStoryTrack: ResolverTypeWrapper<MusicStoryTrack>;
  Mutation: ResolverTypeWrapper<{}>;
  NodeType: NodeType;
  OwnershipById: OwnershipById;
  Persona: ResolverTypeWrapper<Persona>;
  PersonaAssetOwnership: PersonaAssetOwnership;
  PersonaAssetOwnershipLink: ResolverTypeWrapper<PersonaAssetOwnershipLink>;
  PersonaInput: PersonaInput;
  PersonaType: PersonaType;
  Playlist: ResolverTypeWrapper<Playlist>;
  PlaylistInput: PlaylistInput;
  Query: ResolverTypeWrapper<{}>;
  Rating: ResolverTypeWrapper<Rating>;
  RatingType: RatingType;
  RefCode: ResolverTypeWrapper<RefCode>;
  RefCodeInput: RefCodeInput;
  RefCodeStatus: ResolverTypeWrapper<RefCodeStatus>;
  RevenueFlow: ResolverTypeWrapper<RevenueFlow>;
  Set: ResolverTypeWrapper<Set>;
  SetInput: SetInput;
  SignInInput: SignInInput;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StripeSubscription: ResolverTypeWrapper<StripeSubscription>;
  StripeSubscriptionPaymentSession: ResolverTypeWrapper<StripeSubscriptionPaymentSession>;
  Track: ResolverTypeWrapper<Track>;
  TrackInput: TrackInput;
  TrackSource: ResolverTypeWrapper<TrackSource>;
  Tracklist: ResolverTypeWrapper<Tracklist>;
  TracklistData: ResolverTypeWrapper<TracklistData>;
  TracklistDataInput: TracklistDataInput;
  TracklistInput: TracklistInput;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionInput: TransactionInput;
  TransactionType: TransactionType;
  UpdateActivityInput: UpdateActivityInput;
  UpdateAssetCollaborationInvitationInput: UpdateAssetCollaborationInvitationInput;
  UpdateAssetOwnership: UpdateAssetOwnership;
  UpdateCompanyInput: UpdateCompanyInput;
  UpdateEntityInput: UpdateEntityInput;
  UpdateEventInput: UpdateEventInput;
  UpdateEventLineupInput: UpdateEventLineupInput;
  UpdateFingerprintInput: UpdateFingerprintInput;
  UpdateIndividualInput: UpdateIndividualInput;
  UpdatePersonaCollaborationInvitationInput: UpdatePersonaCollaborationInvitationInput;
  UpdatePersonaInput: UpdatePersonaInput;
  UpdatePersonaOwnership: UpdatePersonaOwnership;
  UpdatePlaylistInput: UpdatePlaylistInput;
  UpdateRatingInput: UpdateRatingInput;
  UpdateRefCodeInput: UpdateRefCodeInput;
  UpdateSetInput: UpdateSetInput;
  UpdateTrackInput: UpdateTrackInput;
  UpdateTracklistInput: UpdateTracklistInput;
  UpdateTransactionInput: UpdateTransactionInput;
  UpdateUserInvitationInput: UpdateUserInvitationInput;
  UpdateWalletInput: UpdateWalletInput;
  UseRefCodeInput: UseRefCodeInput;
  VerifiedResult: ResolverTypeWrapper<VerifiedResult>;
  VerifyEmailInput: VerifyEmailInput;
  VerifyEmailresponse: ResolverTypeWrapper<VerifyEmailresponse>;
  VerifyTokenInput: VerifyTokenInput;
  VerifyTokenResponse: ResolverTypeWrapper<VerifyTokenResponse>;
  Wallet: ResolverTypeWrapper<Wallet>;
  WalletInput: WalletInput;
  WalletOwnership: ResolverTypeWrapper<WalletOwnership>;
  WalletType: WalletType;
  WorkingWalletDistributionInput: WorkingWalletDistributionInput;
  changePersonaCollaborationInvitationStateInput: ChangePersonaCollaborationInvitationStateInput;
  getMusicStoryTrackInput: GetMusicStoryTrackInput;
  searchMusicStoryTrackInput: SearchMusicStoryTrackInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ACRCloudAlbum: AcrCloudAlbum;
  ACRCloudAlbumInput: AcrCloudAlbumInput;
  ACRCloudArtist: AcrCloudArtist;
  ACRCloudArtistInput: AcrCloudArtistInput;
  ACRCloudGenre: AcrCloudGenre;
  ACRCloudGenreInput: AcrCloudGenreInput;
  ACRCloudLangs: AcrCloudLangs;
  ACRCloudLangsInput: AcrCloudLangsInput;
  Activity: Activity;
  ActivityInput: ActivityInput;
  Asset: ResolversInterfaceTypes<ResolversParentTypes>['Asset'];
  AssetInput: AssetInput;
  AssetListeningDuration: AssetListeningDuration;
  Base: ResolversInterfaceTypes<ResolversParentTypes>['Base'];
  BaseActivity: ResolversInterfaceTypes<ResolversParentTypes>['BaseActivity'];
  BaseAsset: ResolversInterfaceTypes<ResolversParentTypes>['BaseAsset'];
  BaseAssetListeningDuration: ResolversInterfaceTypes<ResolversParentTypes>['BaseAssetListeningDuration'];
  BaseCompany: ResolversInterfaceTypes<ResolversParentTypes>['BaseCompany'];
  BaseCompleteListeningPathwayResult: ResolversInterfaceTypes<ResolversParentTypes>['BaseCompleteListeningPathwayResult'];
  BaseEdge: ResolversInterfaceTypes<ResolversParentTypes>['BaseEdge'];
  BaseEntity: ResolversInterfaceTypes<ResolversParentTypes>['BaseEntity'];
  BaseEvent: ResolversInterfaceTypes<ResolversParentTypes>['BaseEvent'];
  BaseEventLineup: ResolversInterfaceTypes<ResolversParentTypes>['BaseEventLineup'];
  BaseFingerprint: ResolversInterfaceTypes<ResolversParentTypes>['BaseFingerprint'];
  BaseIdentity: ResolversInterfaceTypes<ResolversParentTypes>['BaseIdentity'];
  BaseIndividual: ResolversInterfaceTypes<ResolversParentTypes>['BaseIndividual'];
  BaseInvitation: ResolversInterfaceTypes<ResolversParentTypes>['BaseInvitation'];
  BaseListeningPathway: ResolversInterfaceTypes<ResolversParentTypes>['BaseListeningPathway'];
  BaseOwnershipEdge: ResolversInterfaceTypes<ResolversParentTypes>['BaseOwnershipEdge'];
  BasePersona: ResolversInterfaceTypes<ResolversParentTypes>['BasePersona'];
  BasePlaylist: ResolversInterfaceTypes<ResolversParentTypes>['BasePlaylist'];
  BaseRating: ResolversInterfaceTypes<ResolversParentTypes>['BaseRating'];
  BaseRefCode: ResolversInterfaceTypes<ResolversParentTypes>['BaseRefCode'];
  BaseRevenueFlow: ResolversInterfaceTypes<ResolversParentTypes>['BaseRevenueFlow'];
  BaseSet: ResolversInterfaceTypes<ResolversParentTypes>['BaseSet'];
  BaseTrack: ResolversInterfaceTypes<ResolversParentTypes>['BaseTrack'];
  BaseTracklist: ResolversInterfaceTypes<ResolversParentTypes>['BaseTracklist'];
  BaseTransaction: ResolversInterfaceTypes<ResolversParentTypes>['BaseTransaction'];
  BaseWallet: ResolversInterfaceTypes<ResolversParentTypes>['BaseWallet'];
  BaseWalletOwnership: ResolversInterfaceTypes<ResolversParentTypes>['BaseWalletOwnership'];
  Boolean: Scalars['Boolean']['output'];
  ChangePasswordInput: ChangePasswordInput;
  ChangePasswordResponse: ChangePasswordResponse;
  Company: Company;
  CompanyInput: CompanyInput;
  CompleteListeningPathwayResult: CompleteListeningPathwayResult;
  CreateActivityInput: CreateActivityInput;
  CreateAssetCollaborationInvitationInput: CreateAssetCollaborationInvitationInput;
  CreateAuthUserInput: CreateAuthUserInput;
  CreateCompanyInput: CreateCompanyInput;
  CreateEventInput: CreateEventInput;
  CreateEventLineupInput: CreateEventLineupInput;
  CreateFingerprintInput: CreateFingerprintInput;
  CreateIndividualInput: CreateIndividualInput;
  CreatePersonaCollaborationInvitationInput: CreatePersonaCollaborationInvitationInput;
  CreatePersonaInput: CreatePersonaInput;
  CreatePlaylistInput: CreatePlaylistInput;
  CreateRatingInput: CreateRatingInput;
  CreateSetInput: CreateSetInput;
  CreateSignedInput: CreateSignedInput;
  CreateSignedOutput: CreateSignedOutput;
  CreateTrackInput: CreateTrackInput;
  CreateTracklistInput: CreateTracklistInput;
  CreateTransactionInput: CreateTransactionInput;
  CreateUserInvitationInput: CreateUserInvitationInput;
  CreateUserResponse: CreateUserResponse;
  CreateWalletInput: CreateWalletInput;
  DeleteActivityInput: DeleteActivityInput;
  DeleteCompanyInput: DeleteCompanyInput;
  DeleteEventInput: DeleteEventInput;
  DeleteEventLineupInput: DeleteEventLineupInput;
  DeleteFingerprintInput: DeleteFingerprintInput;
  DeleteIndividualInput: DeleteIndividualInput;
  DeleteInvitationInput: DeleteInvitationInput;
  DeletePersonaInput: DeletePersonaInput;
  DeletePlaylistInput: DeletePlaylistInput;
  DeleteRatingInput: DeleteRatingInput;
  DeleteRefCodeInput: DeleteRefCodeInput;
  DeleteSetInput: DeleteSetInput;
  DeleteSetResponse: DeleteSetResponse;
  DeleteTrackInput: DeleteTrackInput;
  DeleteTracklistInput: DeleteTracklistInput;
  DeleteTransactionInput: DeleteTransactionInput;
  DeleteWalletInput: DeleteWalletInput;
  Entity: ResolversInterfaceTypes<ResolversParentTypes>['Entity'];
  EntityInput: EntityInput;
  EntityPersonaOwnership: EntityPersonaOwnership;
  EntityPersonaOwnershipLink: EntityPersonaOwnershipLink;
  Event: Event;
  EventInput: EventInput;
  EventLineup: EventLineup;
  Fingerprint: Fingerprint;
  FingerprintData: FingerprintData;
  FingerprintDataInput: FingerprintDataInput;
  FingerprintInput: FingerprintInput;
  Float: Scalars['Float']['output'];
  FollowPersonaInpupt: FollowPersonaInpupt;
  GetAuth0UserInfoInput: GetAuth0UserInfoInput;
  GetAuth0UserInfoResponse: GetAuth0UserInfoResponse;
  GetInvitationForPersonaInput: GetInvitationForPersonaInput;
  GetRefCodeStatusInput: GetRefCodeStatusInput;
  GetUserInvitationsInput: GetUserInvitationsInput;
  ID: Scalars['ID']['output'];
  Identity: Identity;
  IdentityInput: IdentityInput;
  IdentityResponse: ResolversInterfaceTypes<ResolversParentTypes>['IdentityResponse'];
  Individual: Individual;
  IndividualInput: IndividualInput;
  Int: Scalars['Int']['output'];
  Invitation: Invitation;
  InvitationInput: InvitationInput;
  IsrcDetails: IsrcDetails;
  ItemCount: ItemCount;
  ListeningPathway: ListeningPathway;
  ListeningPathwayInput: ListeningPathwayInput;
  MusicStoryArtist: MusicStoryArtist;
  MusicStoryArtistInput: MusicStoryArtistInput;
  MusicStorySearchScores: MusicStorySearchScores;
  MusicStoryTrack: MusicStoryTrack;
  Mutation: {};
  OwnershipById: OwnershipById;
  Persona: Persona;
  PersonaAssetOwnership: PersonaAssetOwnership;
  PersonaAssetOwnershipLink: PersonaAssetOwnershipLink;
  PersonaInput: PersonaInput;
  Playlist: Playlist;
  PlaylistInput: PlaylistInput;
  Query: {};
  Rating: Rating;
  RefCode: RefCode;
  RefCodeInput: RefCodeInput;
  RefCodeStatus: RefCodeStatus;
  RevenueFlow: RevenueFlow;
  Set: Set;
  SetInput: SetInput;
  SignInInput: SignInInput;
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
  StripeSubscription: StripeSubscription;
  StripeSubscriptionPaymentSession: StripeSubscriptionPaymentSession;
  Track: Track;
  TrackInput: TrackInput;
  TrackSource: TrackSource;
  Tracklist: Tracklist;
  TracklistData: TracklistData;
  TracklistDataInput: TracklistDataInput;
  TracklistInput: TracklistInput;
  Transaction: Transaction;
  TransactionInput: TransactionInput;
  UpdateActivityInput: UpdateActivityInput;
  UpdateAssetCollaborationInvitationInput: UpdateAssetCollaborationInvitationInput;
  UpdateAssetOwnership: UpdateAssetOwnership;
  UpdateCompanyInput: UpdateCompanyInput;
  UpdateEntityInput: UpdateEntityInput;
  UpdateEventInput: UpdateEventInput;
  UpdateEventLineupInput: UpdateEventLineupInput;
  UpdateFingerprintInput: UpdateFingerprintInput;
  UpdateIndividualInput: UpdateIndividualInput;
  UpdatePersonaCollaborationInvitationInput: UpdatePersonaCollaborationInvitationInput;
  UpdatePersonaInput: UpdatePersonaInput;
  UpdatePersonaOwnership: UpdatePersonaOwnership;
  UpdatePlaylistInput: UpdatePlaylistInput;
  UpdateRatingInput: UpdateRatingInput;
  UpdateRefCodeInput: UpdateRefCodeInput;
  UpdateSetInput: UpdateSetInput;
  UpdateTrackInput: UpdateTrackInput;
  UpdateTracklistInput: UpdateTracklistInput;
  UpdateTransactionInput: UpdateTransactionInput;
  UpdateUserInvitationInput: UpdateUserInvitationInput;
  UpdateWalletInput: UpdateWalletInput;
  UseRefCodeInput: UseRefCodeInput;
  VerifiedResult: VerifiedResult;
  VerifyEmailInput: VerifyEmailInput;
  VerifyEmailresponse: VerifyEmailresponse;
  VerifyTokenInput: VerifyTokenInput;
  VerifyTokenResponse: VerifyTokenResponse;
  Wallet: Wallet;
  WalletInput: WalletInput;
  WalletOwnership: WalletOwnership;
  WorkingWalletDistributionInput: WorkingWalletDistributionInput;
  changePersonaCollaborationInvitationStateInput: ChangePersonaCollaborationInvitationStateInput;
  getMusicStoryTrackInput: GetMusicStoryTrackInput;
  searchMusicStoryTrackInput: SearchMusicStoryTrackInput;
};

export type AcrCloudAlbumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ACRCloudAlbum'] = ResolversParentTypes['ACRCloudAlbum'],
> = {
  langs?: Resolver<Maybe<Array<ResolversTypes['ACRCloudLangs']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AcrCloudArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ACRCloudArtist'] = ResolversParentTypes['ACRCloudArtist'],
> = {
  isni?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AcrCloudGenreResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ACRCloudGenre'] = ResolversParentTypes['ACRCloudGenre'],
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AcrCloudLangsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ACRCloudLangs'] = ResolversParentTypes['ACRCloudLangs'],
> = {
  languageCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  activityType?: Resolver<ResolversTypes['ActivityType'], ParentType, ContextType>;
  byEntityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  byPersona?: Resolver<ResolversTypes['Persona'], ParentType, ContextType>;
  byPersonaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durationString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onAsset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  onAssetId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playedFromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  __resolveType: TypeResolveFn<'Event' | 'Playlist' | 'Set' | 'Track', ParentType, ContextType>;
  activities?: Resolver<Maybe<Array<ResolversTypes['Activity']>>, ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durationString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedBy?: Resolver<Array<ResolversTypes['PersonaAssetOwnershipLink']>, ParentType, ContextType>;
  ratings?: Resolver<Array<ResolversTypes['Rating']>, ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AssetListeningDurationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AssetListeningDuration'] = ResolversParentTypes['AssetListeningDuration'],
> = {
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  assetId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  durationString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playedFromId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proportion?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  proportionString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Base'] = ResolversParentTypes['Base']> = {
  __resolveType: TypeResolveFn<
    | 'Activity'
    | 'Company'
    | 'Event'
    | 'EventLineup'
    | 'Fingerprint'
    | 'Identity'
    | 'Individual'
    | 'Invitation'
    | 'Persona'
    | 'Playlist'
    | 'Rating'
    | 'RefCode'
    | 'Set'
    | 'StripeSubscription'
    | 'Track'
    | 'Tracklist'
    | 'Transaction'
    | 'Wallet',
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseActivity'] = ResolversParentTypes['BaseActivity'],
> = {
  __resolveType: TypeResolveFn<'Activity', ParentType, ContextType>;
  activityType?: Resolver<ResolversTypes['ActivityType'], ParentType, ContextType>;
  byEntityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  byPersonaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onAssetId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playedFromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type BaseAssetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseAsset'] = ResolversParentTypes['BaseAsset'],
> = {
  __resolveType: TypeResolveFn<'Event' | 'Playlist' | 'Set' | 'Track', ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseAssetListeningDurationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseAssetListeningDuration'] = ResolversParentTypes['BaseAssetListeningDuration'],
> = {
  __resolveType: TypeResolveFn<'AssetListeningDuration', ParentType, ContextType>;
  assetId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playedFromId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proportion?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type BaseCompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseCompany'] = ResolversParentTypes['BaseCompany'],
> = {
  __resolveType: TypeResolveFn<'Company', ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityType?: Resolver<ResolversTypes['EntityType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kycStatus?: Resolver<ResolversTypes['KycStatus'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneCountryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumberVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  registeredName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registrationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registrationNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseCompleteListeningPathwayResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseCompleteListeningPathwayResult'] = ResolversParentTypes['BaseCompleteListeningPathwayResult'],
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  assetTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetTransactionSum?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  assetTransactions?: Resolver<Array<ResolversTypes['BaseRevenueFlow']>, ParentType, ContextType>;
  entityTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entityTransactionSum?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  entityTransactions?: Resolver<Array<ResolversTypes['BaseRevenueFlow']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type BaseEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseEdge'] = ResolversParentTypes['BaseEdge']> = {
  __resolveType: TypeResolveFn<'EntityPersonaOwnershipLink' | 'PersonaAssetOwnershipLink' | 'Rating', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edgeType?: Resolver<ResolversTypes['EdgeType'], ParentType, ContextType>;
  fromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toNodeType?: Resolver<ResolversTypes['NodeType'], ParentType, ContextType>;
};

export type BaseEntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseEntity'] = ResolversParentTypes['BaseEntity'],
> = {
  __resolveType: TypeResolveFn<'Company' | 'Individual', ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityType?: Resolver<ResolversTypes['EntityType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kycStatus?: Resolver<ResolversTypes['KycStatus'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneCountryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumberVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseEventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseEvent'] = ResolversParentTypes['BaseEvent'],
> = {
  __resolveType: TypeResolveFn<'Event', ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseEventLineupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseEventLineup'] = ResolversParentTypes['BaseEventLineup'],
> = {
  __resolveType: TypeResolveFn<'EventLineup', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseFingerprintResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseFingerprint'] = ResolversParentTypes['BaseFingerprint'],
> = {
  __resolveType: TypeResolveFn<'Fingerprint', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fingerprintData?: Resolver<Array<Maybe<ResolversTypes['FingerprintData']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseIdentityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseIdentity'] = ResolversParentTypes['BaseIdentity'],
> = {
  __resolveType: TypeResolveFn<'Identity', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type BaseIndividualResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseIndividual'] = ResolversParentTypes['BaseIndividual'],
> = {
  __resolveType: TypeResolveFn<'Individual', ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityType?: Resolver<ResolversTypes['EntityType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kycStatus?: Resolver<ResolversTypes['KycStatus'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneCountryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumberVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseInvitationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseInvitation'] = ResolversParentTypes['BaseInvitation'],
> = {
  __resolveType: TypeResolveFn<'Invitation', ParentType, ContextType>;
  assetType?: Resolver<Maybe<ResolversTypes['AssetType']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromEntityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromPersonaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitationState?: Resolver<ResolversTypes['InvitationState'], ParentType, ContextType>;
  invitationType?: Resolver<ResolversTypes['InvitationType'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onAssetId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneCountryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseListeningPathwayResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseListeningPathway'] = ResolversParentTypes['BaseListeningPathway'],
> = {
  __resolveType: TypeResolveFn<'ListeningPathway', ParentType, ContextType>;
  assetListeningDurations?: Resolver<Array<ResolversTypes['BaseAssetListeningDuration']>, ParentType, ContextType>;
  closingBalance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openingBalance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  revenueFlow?: Resolver<Array<ResolversTypes['BaseRevenueFlow']>, ParentType, ContextType>;
};

export type BaseOwnershipEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseOwnershipEdge'] = ResolversParentTypes['BaseOwnershipEdge'],
> = {
  __resolveType: TypeResolveFn<'EntityPersonaOwnershipLink' | 'PersonaAssetOwnershipLink', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edgeType?: Resolver<ResolversTypes['EdgeType'], ParentType, ContextType>;
  fromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownership?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  toId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toNodeType?: Resolver<ResolversTypes['NodeType'], ParentType, ContextType>;
};

export type BasePersonaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BasePersona'] = ResolversParentTypes['BasePersona'],
> = {
  __resolveType: TypeResolveFn<'Persona', ParentType, ContextType>;
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PersonaType'], ParentType, ContextType>;
};

export type BasePlaylistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BasePlaylist'] = ResolversParentTypes['BasePlaylist'],
> = {
  __resolveType: TypeResolveFn<'Playlist', ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseRatingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseRating'] = ResolversParentTypes['BaseRating'],
> = {
  __resolveType: TypeResolveFn<'Rating', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edgeType?: Resolver<ResolversTypes['EdgeType'], ParentType, ContextType>;
  fromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ratingType?: Resolver<ResolversTypes['RatingType'], ParentType, ContextType>;
  toId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toNodeType?: Resolver<ResolversTypes['NodeType'], ParentType, ContextType>;
};

export type BaseRefCodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseRefCode'] = ResolversParentTypes['BaseRefCode'],
> = {
  __resolveType: TypeResolveFn<'RefCode', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isUsed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseRevenueFlowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseRevenueFlow'] = ResolversParentTypes['BaseRevenueFlow'],
> = {
  __resolveType: TypeResolveFn<'RevenueFlow', ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseSet'] = ResolversParentTypes['BaseSet']> = {
  __resolveType: TypeResolveFn<'Set', ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  audioFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fingerprintIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isrc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracklistId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseTrackResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseTrack'] = ResolversParentTypes['BaseTrack'],
> = {
  __resolveType: TypeResolveFn<'Track', ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  audioFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseTracklistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseTracklist'] = ResolversParentTypes['BaseTracklist'],
> = {
  __resolveType: TypeResolveFn<'Tracklist', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracklistData?: Resolver<Array<ResolversTypes['TracklistData']>, ParentType, ContextType>;
};

export type BaseTransactionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseTransaction'] = ResolversParentTypes['BaseTransaction'],
> = {
  __resolveType: TypeResolveFn<'Transaction', ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type BaseWalletResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseWallet'] = ResolversParentTypes['BaseWallet'],
> = {
  __resolveType: TypeResolveFn<'Wallet', ParentType, ContextType>;
  allowNegativeBalance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  walletType?: Resolver<ResolversTypes['WalletType'], ParentType, ContextType>;
};

export type BaseWalletOwnershipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseWalletOwnership'] = ResolversParentTypes['BaseWalletOwnership'],
> = {
  __resolveType: TypeResolveFn<'WalletOwnership', ParentType, ContextType>;
  assetId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownership?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ChangePasswordResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChangePasswordResponse'] = ResolversParentTypes['ChangePasswordResponse'],
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityType?: Resolver<ResolversTypes['EntityType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitations?: Resolver<Array<ResolversTypes['Invitation']>, ParentType, ContextType>;
  kycStatus?: Resolver<ResolversTypes['KycStatus'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedPersonas?: Resolver<Array<ResolversTypes['EntityPersonaOwnershipLink']>, ParentType, ContextType>;
  phoneCountryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumberVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  registeredName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registrationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registrationNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompleteListeningPathwayResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CompleteListeningPathwayResult'] = ResolversParentTypes['CompleteListeningPathwayResult'],
> = {
  assetTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetTransactionSum?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  assetTransactions?: Resolver<Array<ResolversTypes['RevenueFlow']>, ParentType, ContextType>;
  entityTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entityTransactionSum?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  entityTransactions?: Resolver<Array<ResolversTypes['RevenueFlow']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSignedOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateSignedOutput'] = ResolversParentTypes['CreateSignedOutput'],
> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse'],
> = {
  authZeroId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteSetResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeleteSetResponse'] = ResolversParentTypes['DeleteSetResponse'],
> = {
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  __resolveType: TypeResolveFn<'Company' | 'Individual', ParentType, ContextType>;
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityType?: Resolver<ResolversTypes['EntityType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitations?: Resolver<Array<ResolversTypes['Invitation']>, ParentType, ContextType>;
  kycStatus?: Resolver<ResolversTypes['KycStatus'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedPersonas?: Resolver<Array<ResolversTypes['EntityPersonaOwnershipLink']>, ParentType, ContextType>;
  phoneCountryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumberVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type EntityPersonaOwnershipLinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EntityPersonaOwnershipLink'] = ResolversParentTypes['EntityPersonaOwnershipLink'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edgeType?: Resolver<ResolversTypes['EdgeType'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['Entity'], ParentType, ContextType>;
  fromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownership?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  persona?: Resolver<ResolversTypes['Persona'], ParentType, ContextType>;
  toId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toNodeType?: Resolver<ResolversTypes['NodeType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  durationString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lineup?: Resolver<Array<ResolversTypes['EventLineup']>, ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedBy?: Resolver<Array<ResolversTypes['PersonaAssetOwnershipLink']>, ParentType, ContextType>;
  ratings?: Resolver<Array<ResolversTypes['Rating']>, ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventLineupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EventLineup'] = ResolversParentTypes['EventLineup'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  set?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FingerprintResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Fingerprint'] = ResolversParentTypes['Fingerprint'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fingerprintData?: Resolver<Array<Maybe<ResolversTypes['FingerprintData']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FingerprintDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FingerprintData'] = ResolversParentTypes['FingerprintData'],
> = {
  acrid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  album?: Resolver<Maybe<ResolversTypes['ACRCloudAlbum']>, ParentType, ContextType>;
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['ACRCloudArtist']>>>, ParentType, ContextType>;
  duration_ms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['ACRCloudGenre']>>>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  release_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  timestamp_utc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetAuth0UserInfoResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetAuth0UserInfoResponse'] = ResolversParentTypes['GetAuth0UserInfoResponse'],
> = {
  birthdate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  family_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  given_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number_verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferred_username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zoneinfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Identity'] = ResolversParentTypes['Identity']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentityResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['IdentityResponse'] = ResolversParentTypes['IdentityResponse'],
> = {
  __resolveType: TypeResolveFn<
    'ChangePasswordResponse' | 'CreateUserResponse' | 'SignInResponse' | 'VerifyEmailresponse',
    ParentType,
    ContextType
  >;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type IndividualResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Individual'] = ResolversParentTypes['Individual'],
> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityType?: Resolver<ResolversTypes['EntityType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitations?: Resolver<Array<ResolversTypes['Invitation']>, ParentType, ContextType>;
  kycStatus?: Resolver<ResolversTypes['KycStatus'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedPersonas?: Resolver<Array<ResolversTypes['EntityPersonaOwnershipLink']>, ParentType, ContextType>;
  phoneCountryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumberVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvitationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Invitation'] = ResolversParentTypes['Invitation'],
> = {
  assetType?: Resolver<Maybe<ResolversTypes['AssetType']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromEntity?: Resolver<ResolversTypes['Entity'], ParentType, ContextType>;
  fromEntityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromPersona?: Resolver<Maybe<ResolversTypes['Persona']>, ParentType, ContextType>;
  fromPersonaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitationState?: Resolver<ResolversTypes['InvitationState'], ParentType, ContextType>;
  invitationType?: Resolver<ResolversTypes['InvitationType'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  onAssetId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneCountryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IsrcDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['IsrcDetails'] = ResolversParentTypes['IsrcDetails'],
> = {
  artistName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  focus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isExplicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isrc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isrcFailureCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productionDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recordingPlace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recordingVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recordingYear?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseArtist?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  showReleases?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subtitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackSourceIds?: Resolver<Array<ResolversTypes['TrackSource']>, ParentType, ContextType>;
  upcCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ItemCount'] = ResolversParentTypes['ItemCount'],
> = {
  activities?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entities?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entityPersonaOwnership?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eventLineups?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  events?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fingerprints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  invitations?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  personaAssetOwnership?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  personaFollowing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  personas?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playlists?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracklists?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wallets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListeningPathwayResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListeningPathway'] = ResolversParentTypes['ListeningPathway'],
> = {
  assetListeningDurations?: Resolver<Array<ResolversTypes['AssetListeningDuration']>, ParentType, ContextType>;
  closingBalance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['Entity'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openingBalance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  revenueFlow?: Resolver<Array<ResolversTypes['RevenueFlow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MusicStoryArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MusicStoryArtist'] = ResolversParentTypes['MusicStoryArtist'],
> = {
  coeffActu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ipi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchScores?: Resolver<Maybe<ResolversTypes['MusicStorySearchScores']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MusicStorySearchScoresResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MusicStorySearchScores'] = ResolversParentTypes['MusicStorySearchScores'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MusicStoryTrackResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MusicStoryTrack'] = ResolversParentTypes['MusicStoryTrack'],
> = {
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  focus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isrc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentalAdvisory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  productionDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recordingPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  changePassword?: Resolver<
    ResolversTypes['ChangePasswordResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationChangePasswordArgs, 'input'>
  >;
  changePersonaCollaborationInvitationState?: Resolver<
    ResolversTypes['Invitation'],
    ParentType,
    ContextType,
    RequireFields<MutationChangePersonaCollaborationInvitationStateArgs, 'input'>
  >;
  createActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationCreateActivityArgs, 'input'>>;
  createAssetCollaborationInvitation?: Resolver<
    ResolversTypes['Invitation'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAssetCollaborationInvitationArgs, 'input'>
  >;
  createCompany?: Resolver<ResolversTypes['Company'], ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'input'>>;
  createEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'input'>>;
  createEventLineup?: Resolver<
    ResolversTypes['EventLineup'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateEventLineupArgs, 'input'>
  >;
  createFingerprint?: Resolver<
    ResolversTypes['Fingerprint'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateFingerprintArgs, 'input'>
  >;
  createIndividual?: Resolver<ResolversTypes['Individual'], ParentType, ContextType, RequireFields<MutationCreateIndividualArgs, 'input'>>;
  createPersona?: Resolver<ResolversTypes['Persona'], ParentType, ContextType, RequireFields<MutationCreatePersonaArgs, 'input'>>;
  createPersonaCollaborationInvitation?: Resolver<
    ResolversTypes['Invitation'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePersonaCollaborationInvitationArgs, 'input'>
  >;
  createPlaylist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, RequireFields<MutationCreatePlaylistArgs, 'input'>>;
  createRating?: Resolver<ResolversTypes['Rating'], ParentType, ContextType, RequireFields<MutationCreateRatingArgs, 'input'>>;
  createRefCode?: Resolver<ResolversTypes['RefCode'], ParentType, ContextType>;
  createSet?: Resolver<ResolversTypes['Set'], ParentType, ContextType, RequireFields<MutationCreateSetArgs, 'input'>>;
  createSignedCookie?: Resolver<
    ResolversTypes['CreateSignedOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSignedCookieArgs, 'input'>
  >;
  createSignedUri?: Resolver<
    ResolversTypes['CreateSignedOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSignedUriArgs, 'input'>
  >;
  createSubscription?: Resolver<
    ResolversTypes['StripeSubscriptionPaymentSession'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSubscriptionArgs, 'entityId'>
  >;
  createTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationCreateTrackArgs, 'input'>>;
  createTracklist?: Resolver<ResolversTypes['Tracklist'], ParentType, ContextType, RequireFields<MutationCreateTracklistArgs, 'input'>>;
  createTransaction?: Resolver<
    ResolversTypes['Transaction'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTransactionArgs, 'input'>
  >;
  createUnion?: Resolver<ResolversTypes['Company'], ParentType, ContextType, RequireFields<MutationCreateUnionArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUserInvitation?: Resolver<
    ResolversTypes['Invitation'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserInvitationArgs, 'input'>
  >;
  createWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<MutationCreateWalletArgs, 'input'>>;
  deleteActivity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteActivityArgs, 'input'>>;
  deleteCompany?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCompanyArgs, 'input'>>;
  deleteEvent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteEventArgs, 'input'>>;
  deleteEventLineup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteEventLineupArgs, 'input'>>;
  deleteFingerprint?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteFingerprintArgs, 'input'>>;
  deleteIndividual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteIndividualArgs, 'input'>>;
  deleteInvitation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteInvitationArgs, 'input'>>;
  deletePersona?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePersonaArgs, 'input'>>;
  deletePlaylist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePlaylistArgs, 'input'>>;
  deleteRating?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteRatingArgs, 'input'>>;
  deleteRefCode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteRefCodeArgs, 'input'>>;
  deleteSet?: Resolver<ResolversTypes['DeleteSetResponse'], ParentType, ContextType, RequireFields<MutationDeleteSetArgs, 'input'>>;
  deleteTrack?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteTrackArgs, 'input'>>;
  deleteTracklist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteTracklistArgs, 'input'>>;
  deleteTransaction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteTransactionArgs, 'input'>>;
  deleteWallet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteWalletArgs, 'input'>>;
  followPersona?: Resolver<ResolversTypes['Persona'], ParentType, ContextType, RequireFields<MutationFollowPersonaArgs, 'input'>>;
  importTestData?: Resolver<ResolversTypes['ItemCount'], ParentType, ContextType>;
  postCompleteListeningPathway?: Resolver<ResolversTypes['CompleteListeningPathwayResult'], ParentType, ContextType>;
  resendVerificationEmail?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationResendVerificationEmailArgs, 'input'>
  >;
  signIn?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'input'>>;
  simulateListeningPathway?: Resolver<
    Maybe<ResolversTypes['ListeningPathway']>,
    ParentType,
    ContextType,
    RequireFields<MutationSimulateListeningPathwayArgs, 'input'>
  >;
  simulateWorkingWalletDistribution?: Resolver<
    Array<Maybe<ResolversTypes['RevenueFlow']>>,
    ParentType,
    ContextType,
    RequireFields<MutationSimulateWorkingWalletDistributionArgs, 'input'>
  >;
  updateActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationUpdateActivityArgs, 'input'>>;
  updateAssetCollaborationInvitation?: Resolver<
    ResolversTypes['Invitation'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAssetCollaborationInvitationArgs, 'input'>
  >;
  updateAssetOwnership?: Resolver<
    ResolversTypes['Asset'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAssetOwnershipArgs, 'input'>
  >;
  updateCompany?: Resolver<ResolversTypes['Company'], ParentType, ContextType, RequireFields<MutationUpdateCompanyArgs, 'input'>>;
  updateEntity?: Resolver<ResolversTypes['Individual'], ParentType, ContextType, RequireFields<MutationUpdateEntityArgs, 'input'>>;
  updateEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'input'>>;
  updateEventLineup?: Resolver<
    ResolversTypes['EventLineup'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEventLineupArgs, 'input'>
  >;
  updateFingerprint?: Resolver<
    ResolversTypes['Fingerprint'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFingerprintArgs, 'input'>
  >;
  updateIndividual?: Resolver<ResolversTypes['Individual'], ParentType, ContextType, RequireFields<MutationUpdateIndividualArgs, 'input'>>;
  updatePersona?: Resolver<ResolversTypes['Persona'], ParentType, ContextType, RequireFields<MutationUpdatePersonaArgs, 'input'>>;
  updatePersonaCollaborationInvitation?: Resolver<
    ResolversTypes['Invitation'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePersonaCollaborationInvitationArgs, 'input'>
  >;
  updatePersonaOwnership?: Resolver<
    ResolversTypes['Persona'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePersonaOwnershipArgs, 'input'>
  >;
  updatePlaylist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, RequireFields<MutationUpdatePlaylistArgs, 'input'>>;
  updateRating?: Resolver<ResolversTypes['Rating'], ParentType, ContextType, RequireFields<MutationUpdateRatingArgs, 'input'>>;
  updateRefCode?: Resolver<ResolversTypes['RefCode'], ParentType, ContextType, RequireFields<MutationUpdateRefCodeArgs, 'input'>>;
  updateSet?: Resolver<ResolversTypes['Set'], ParentType, ContextType, RequireFields<MutationUpdateSetArgs, 'input'>>;
  updateTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationUpdateTrackArgs, 'input'>>;
  updateTracklist?: Resolver<ResolversTypes['Tracklist'], ParentType, ContextType, RequireFields<MutationUpdateTracklistArgs, 'input'>>;
  updateTransaction?: Resolver<
    ResolversTypes['Transaction'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTransactionArgs, 'input'>
  >;
  updateUserInvitation?: Resolver<
    ResolversTypes['Invitation'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserInvitationArgs, 'input'>
  >;
  updateWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<MutationUpdateWalletArgs, 'input'>>;
  useRefCode?: Resolver<ResolversTypes['RefCode'], ParentType, ContextType, RequireFields<MutationUseRefCodeArgs, 'input'>>;
  verifyEmail?: Resolver<ResolversTypes['VerifyEmailresponse'], ParentType, ContextType, Partial<MutationVerifyEmailArgs>>;
  verifyToken?: Resolver<ResolversTypes['VerifyTokenResponse'], ParentType, ContextType, RequireFields<MutationVerifyTokenArgs, 'input'>>;
};

export type PersonaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Persona'] = ResolversParentTypes['Persona']> = {
  activity?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  following?: Resolver<Array<ResolversTypes['Persona']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedAssets?: Resolver<Array<ResolversTypes['PersonaAssetOwnershipLink']>, ParentType, ContextType>;
  ownedByEntities?: Resolver<Array<ResolversTypes['EntityPersonaOwnershipLink']>, ParentType, ContextType>;
  ratings?: Resolver<Array<ResolversTypes['Rating']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PersonaType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonaAssetOwnershipLinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PersonaAssetOwnershipLink'] = ResolversParentTypes['PersonaAssetOwnershipLink'],
> = {
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edgeType?: Resolver<ResolversTypes['EdgeType'], ParentType, ContextType>;
  fromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownership?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  persona?: Resolver<ResolversTypes['Persona'], ParentType, ContextType>;
  toId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toNodeType?: Resolver<ResolversTypes['NodeType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaylistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  durationString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedBy?: Resolver<Array<ResolversTypes['PersonaAssetOwnershipLink']>, ParentType, ContextType>;
  ratings?: Resolver<Array<ResolversTypes['Rating']>, ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  activity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<QueryActivityArgs, 'input'>>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, RequireFields<QueryAssetArgs, 'input'>>;
  assets?: Resolver<Maybe<Array<ResolversTypes['Asset']>>, ParentType, ContextType>;
  companies?: Resolver<Maybe<Array<ResolversTypes['Company']>>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType, RequireFields<QueryCompanyArgs, 'input'>>;
  entities?: Resolver<Maybe<Array<ResolversTypes['Entity']>>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['Entity'], ParentType, ContextType, RequireFields<QueryEntityArgs, 'input'>>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<QueryEventArgs, 'input'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  fingerprint?: Resolver<ResolversTypes['Fingerprint'], ParentType, ContextType, RequireFields<QueryFingerprintArgs, 'input'>>;
  fingerprintByFileKey?: Resolver<
    Maybe<ResolversTypes['Fingerprint']>,
    ParentType,
    ContextType,
    RequireFields<QueryFingerprintByFileKeyArgs, 'fileKey'>
  >;
  fingerprints?: Resolver<Array<ResolversTypes['Fingerprint']>, ParentType, ContextType>;
  getAuth0UserInfo?: Resolver<
    ResolversTypes['GetAuth0UserInfoResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryGetAuth0UserInfoArgs, 'input'>
  >;
  getMusicStoryTrack?: Resolver<
    ResolversTypes['MusicStoryTrack'],
    ParentType,
    ContextType,
    RequireFields<QueryGetMusicStoryTrackArgs, 'input'>
  >;
  getRefCodeStatus?: Resolver<ResolversTypes['RefCodeStatus'], ParentType, ContextType, RequireFields<QueryGetRefCodeStatusArgs, 'input'>>;
  individual?: Resolver<ResolversTypes['Individual'], ParentType, ContextType, RequireFields<QueryIndividualArgs, 'input'>>;
  individuals?: Resolver<Maybe<Array<ResolversTypes['Individual']>>, ParentType, ContextType>;
  invitation?: Resolver<ResolversTypes['Invitation'], ParentType, ContextType, RequireFields<QueryInvitationArgs, 'input'>>;
  invitations?: Resolver<Array<ResolversTypes['Invitation']>, ParentType, ContextType>;
  persona?: Resolver<ResolversTypes['Persona'], ParentType, ContextType, Partial<QueryPersonaArgs>>;
  personaInvitations?: Resolver<
    Array<ResolversTypes['Invitation']>,
    ParentType,
    ContextType,
    RequireFields<QueryPersonaInvitationsArgs, 'input'>
  >;
  personas?: Resolver<Maybe<Array<ResolversTypes['Persona']>>, ParentType, ContextType>;
  phoneVerified?: Resolver<ResolversTypes['VerifiedResult'], ParentType, ContextType, RequireFields<QueryPhoneVerifiedArgs, 'input'>>;
  playlist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, RequireFields<QueryPlaylistArgs, 'input'>>;
  playlists?: Resolver<Array<ResolversTypes['Playlist']>, ParentType, ContextType>;
  refCode?: Resolver<ResolversTypes['RefCode'], ParentType, ContextType, RequireFields<QueryRefCodeArgs, 'input'>>;
  searchMusicStoryArtist?: Resolver<
    Array<ResolversTypes['MusicStoryArtist']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchMusicStoryArtistArgs, 'input'>
  >;
  searchMusicStoryTracks?: Resolver<
    Array<ResolversTypes['IsrcDetails']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchMusicStoryTracksArgs, 'input'>
  >;
  set?: Resolver<ResolversTypes['Set'], ParentType, ContextType, RequireFields<QuerySetArgs, 'input'>>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType>;
  stripeSubscriptions?: Resolver<Maybe<Array<ResolversTypes['StripeSubscription']>>, ParentType, ContextType>;
  track?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<QueryTrackArgs, 'input'>>;
  tracklist?: Resolver<ResolversTypes['Tracklist'], ParentType, ContextType, RequireFields<QueryTracklistArgs, 'input'>>;
  tracklists?: Resolver<Array<ResolversTypes['Tracklist']>, ParentType, ContextType>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType, RequireFields<QueryTransactionArgs, 'input'>>;
  transactions?: Resolver<Maybe<Array<ResolversTypes['Transaction']>>, ParentType, ContextType>;
  userData?: Resolver<ResolversTypes['Individual'], ParentType, ContextType, RequireFields<QueryUserDataArgs, 'input'>>;
  userInvitations?: Resolver<
    Array<ResolversTypes['Invitation']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserInvitationsArgs, 'input'>
  >;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<QueryWalletArgs, 'input'>>;
  wallets?: Resolver<Maybe<Array<ResolversTypes['Wallet']>>, ParentType, ContextType>;
};

export type RatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']> = {
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edgeType?: Resolver<ResolversTypes['EdgeType'], ParentType, ContextType>;
  fromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  persona?: Resolver<ResolversTypes['Persona'], ParentType, ContextType>;
  ratingType?: Resolver<ResolversTypes['RatingType'], ParentType, ContextType>;
  toId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toNodeType?: Resolver<ResolversTypes['NodeType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefCode'] = ResolversParentTypes['RefCode']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isUsed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefCodeStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RefCodeStatus'] = ResolversParentTypes['RefCodeStatus'],
> = {
  isUsed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevenueFlowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RevenueFlow'] = ResolversParentTypes['RevenueFlow'],
> = {
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Set'] = ResolversParentTypes['Set']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  audioFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  durationString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fingerprintIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  fingerprints?: Resolver<Maybe<Array<ResolversTypes['Fingerprint']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isrc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedBy?: Resolver<Array<ResolversTypes['PersonaAssetOwnershipLink']>, ParentType, ContextType>;
  playedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ratings?: Resolver<Array<ResolversTypes['Rating']>, ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracklist?: Resolver<ResolversTypes['Tracklist'], ParentType, ContextType>;
  tracklistId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse'],
> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  authZeroId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['Individual']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeSubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StripeSubscription'] = ResolversParentTypes['StripeSubscription'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  paymentIntentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subscriptionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeSubscriptionPaymentSessionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StripeSubscriptionPaymentSession'] = ResolversParentTypes['StripeSubscriptionPaymentSession'],
> = {
  clientSecret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ephemeralKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>;
  artistName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetType?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  audioFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  durationString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isrcDetails?: Resolver<Maybe<ResolversTypes['IsrcDetails']>, ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedBy?: Resolver<Array<ResolversTypes['PersonaAssetOwnershipLink']>, ParentType, ContextType>;
  ratings?: Resolver<Array<ResolversTypes['Rating']>, ParentType, ContextType>;
  releasedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailFile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unclaimedWallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  unclaimedWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validation?: Resolver<ResolversTypes['AssetValidation'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['AssetVisibility'], ParentType, ContextType>;
  workingWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  workingWalletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackSourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TrackSource'] = ResolversParentTypes['TrackSource'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TracklistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tracklist'] = ResolversParentTypes['Tracklist'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracklistData?: Resolver<Array<ResolversTypes['TracklistData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TracklistDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TracklistData'] = ResolversParentTypes['TracklistData'],
> = {
  startTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction'],
> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifiedResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VerifiedResult'] = ResolversParentTypes['VerifiedResult'],
> = {
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifyEmailresponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VerifyEmailresponse'] = ResolversParentTypes['VerifyEmailresponse'],
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifyTokenResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VerifyTokenResponse'] = ResolversParentTypes['VerifyTokenResponse'],
> = {
  isValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = {
  allowNegativeBalance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastModifiedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType>;
  walletType?: Resolver<ResolversTypes['WalletType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletOwnershipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WalletOwnership'] = ResolversParentTypes['WalletOwnership'],
> = {
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  assetId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['Entity'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownership?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ownershipString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ACRCloudAlbum?: AcrCloudAlbumResolvers<ContextType>;
  ACRCloudArtist?: AcrCloudArtistResolvers<ContextType>;
  ACRCloudGenre?: AcrCloudGenreResolvers<ContextType>;
  ACRCloudLangs?: AcrCloudLangsResolvers<ContextType>;
  Activity?: ActivityResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetListeningDuration?: AssetListeningDurationResolvers<ContextType>;
  Base?: BaseResolvers<ContextType>;
  BaseActivity?: BaseActivityResolvers<ContextType>;
  BaseAsset?: BaseAssetResolvers<ContextType>;
  BaseAssetListeningDuration?: BaseAssetListeningDurationResolvers<ContextType>;
  BaseCompany?: BaseCompanyResolvers<ContextType>;
  BaseCompleteListeningPathwayResult?: BaseCompleteListeningPathwayResultResolvers<ContextType>;
  BaseEdge?: BaseEdgeResolvers<ContextType>;
  BaseEntity?: BaseEntityResolvers<ContextType>;
  BaseEvent?: BaseEventResolvers<ContextType>;
  BaseEventLineup?: BaseEventLineupResolvers<ContextType>;
  BaseFingerprint?: BaseFingerprintResolvers<ContextType>;
  BaseIdentity?: BaseIdentityResolvers<ContextType>;
  BaseIndividual?: BaseIndividualResolvers<ContextType>;
  BaseInvitation?: BaseInvitationResolvers<ContextType>;
  BaseListeningPathway?: BaseListeningPathwayResolvers<ContextType>;
  BaseOwnershipEdge?: BaseOwnershipEdgeResolvers<ContextType>;
  BasePersona?: BasePersonaResolvers<ContextType>;
  BasePlaylist?: BasePlaylistResolvers<ContextType>;
  BaseRating?: BaseRatingResolvers<ContextType>;
  BaseRefCode?: BaseRefCodeResolvers<ContextType>;
  BaseRevenueFlow?: BaseRevenueFlowResolvers<ContextType>;
  BaseSet?: BaseSetResolvers<ContextType>;
  BaseTrack?: BaseTrackResolvers<ContextType>;
  BaseTracklist?: BaseTracklistResolvers<ContextType>;
  BaseTransaction?: BaseTransactionResolvers<ContextType>;
  BaseWallet?: BaseWalletResolvers<ContextType>;
  BaseWalletOwnership?: BaseWalletOwnershipResolvers<ContextType>;
  ChangePasswordResponse?: ChangePasswordResponseResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompleteListeningPathwayResult?: CompleteListeningPathwayResultResolvers<ContextType>;
  CreateSignedOutput?: CreateSignedOutputResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  DeleteSetResponse?: DeleteSetResponseResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  EntityPersonaOwnershipLink?: EntityPersonaOwnershipLinkResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventLineup?: EventLineupResolvers<ContextType>;
  Fingerprint?: FingerprintResolvers<ContextType>;
  FingerprintData?: FingerprintDataResolvers<ContextType>;
  GetAuth0UserInfoResponse?: GetAuth0UserInfoResponseResolvers<ContextType>;
  Identity?: IdentityResolvers<ContextType>;
  IdentityResponse?: IdentityResponseResolvers<ContextType>;
  Individual?: IndividualResolvers<ContextType>;
  Invitation?: InvitationResolvers<ContextType>;
  IsrcDetails?: IsrcDetailsResolvers<ContextType>;
  ItemCount?: ItemCountResolvers<ContextType>;
  ListeningPathway?: ListeningPathwayResolvers<ContextType>;
  MusicStoryArtist?: MusicStoryArtistResolvers<ContextType>;
  MusicStorySearchScores?: MusicStorySearchScoresResolvers<ContextType>;
  MusicStoryTrack?: MusicStoryTrackResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Persona?: PersonaResolvers<ContextType>;
  PersonaAssetOwnershipLink?: PersonaAssetOwnershipLinkResolvers<ContextType>;
  Playlist?: PlaylistResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rating?: RatingResolvers<ContextType>;
  RefCode?: RefCodeResolvers<ContextType>;
  RefCodeStatus?: RefCodeStatusResolvers<ContextType>;
  RevenueFlow?: RevenueFlowResolvers<ContextType>;
  Set?: SetResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
  StripeSubscription?: StripeSubscriptionResolvers<ContextType>;
  StripeSubscriptionPaymentSession?: StripeSubscriptionPaymentSessionResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  TrackSource?: TrackSourceResolvers<ContextType>;
  Tracklist?: TracklistResolvers<ContextType>;
  TracklistData?: TracklistDataResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  VerifiedResult?: VerifiedResultResolvers<ContextType>;
  VerifyEmailresponse?: VerifyEmailresponseResolvers<ContextType>;
  VerifyTokenResponse?: VerifyTokenResponseResolvers<ContextType>;
  Wallet?: WalletResolvers<ContextType>;
  WalletOwnership?: WalletOwnershipResolvers<ContextType>;
};
