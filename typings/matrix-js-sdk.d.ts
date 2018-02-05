// Type definitions for matrix-js-sdk
// Project: for matrix-js-sdk
// Definitions by: Will Hunt <will@half-shot.uk>


declare namespace Matrix {

    export class MatrixEvent {
        event: any;
        sender: RoomMember;
        target: RoomMember;
        status: EventStatus;
        error: Error;
        forwardLooking: boolean;
        constructor(event:any);
    }

    export class EventStatus {
        NOT_SENT: string;
        ENCRYPTING: string;
        SENDING: string;
        QUEUED: string;
        SENT: string;
        CANCELLED: string;
    }

    export class MatrixInMemoryStore implements IMatrixStore {

    }

    export class IndexedDBStore implements IMatrixStore {

    }

    export class StubStore implements IMatrixStore {
        deleteAllData(): Promise<void>;
        getAccountData(eventType: string);
        getFilter(userId: string, filterId: string);
        getFilterIdByName(filterName: string);
        getGroup(): Group;
        getGroups(): Group[];
        getRoom(roomId: string): Room;
        getRooms(): Room[];
        getRoomSummaries(): RoomSummary[];
        getSavedSync(): Promise<any>;
        getSyncToken(): string;
        getUser(userId: string): User;
        getUsers(): User[];
        removeRoom(roomId: string);
        save();
        scrollback(room: Room, limit: number): any[];
        setFilterIdByName(filterName: string, filterId: string);
        setSyncData(syncData: any): Promise<void>;
        setSyncToken(token: string);
        startup(): Promise<void>;
        storeAccountDataEvents(events: MatrixEvent[]);
        storeEvents(room: Room, events: MatrixEvent[], token: string, toStart: boolean);
        storeFilter(filter: Filter);
        storeGroup(group: Group);
        storeRoom(room: Room);
        storeUser(user: User);
    }

    export class IndexedDBStoreBackend {

    }

    export class SyncAccumulator {
        constructor(opts: SyncAccumulatorOpts);
        getJSON(): any;
    }

    export class MatrixHttpApi {

    }

    export class MatrixError {
        errcode: string;
        name: string;
        message: string;
        data: any;
        httpStatus: number;
        constructor(errorJson: any);
    }

    export class MatrixClient {
        constructor(opts: MatrixClientOpts);
    }

    export class Room {

    }

    export class EventTimeline {

    }

    export class EventTimelineSet {

    }

    export class RoomMember {

    }

    export class RoomState {

    }

    export class User {

    }

    export class MatrixScheduler implements IMatrixScheduler {

    }

    export class WebStorageSessionStore implements MatrixStore {

    }

    export class ContentRepo {

    }

    export class Filter {

    }

    export class TimelineWindow {

    }

    export class InteractiveAuth {

    }

    export class MemoryCryptoStore implements CryptoStore {

    }

    export class IndexedDBCryptoStore implements CryptoStore {

    }

    export class Group {
        groupId: string;
        name: string;
        avatarUrl: string;
        myMembership: string;
        inviter: any;
        constructor(groupId: string);
        setProfile(name: string, avatarUrl: string);
        setMyMembership(membership: string);
        setInviter(inviter: string);
    }

    export class RoomSummary {
        roomId: string;
        info: RoomSummaryInfo;
        constructor(roomId: string, info: RoomSummaryInfo);
    }

    export type RoomSummaryInfo = {
        title: string;
        desc: string;
        numMembers: number;
        aliases: string[];
        timestamp: number;
    }

    export type MatrixClientOpts = {
        baseUrl: string;
        idBaseUrl: string;
        request: requestFunction;
        accessToken: string;
        userId:	string;
        store: IMatrixStore;
        deviceId: string
        sessionStore: ICryptoStore;
        scheduler: IMatrixScheduler;
        queryParams: any;
        localTimeoutMs: number;
        useAuthorizationHeader: boolean;
        timelineSupport: boolean;
        cryptoStore: ICryptoStore;
    }

    export type CreateClientOps = {
        store: IMatrixStore,
        scheduler: IMatrixScheduler,
        request: ()=>void,
        cryptoStore: ICryptoStore
    }

    export type RequestOpts = {

    }

    export type requestCallback = (err: Error, response: any, body: any)=>void;
    export type requestFunction = (opts: RequestOpts, callback: requestCallback)=>void;
    export type MatrixSchedulerProcessFunction = (event: MatrixEvent)=> Promise<void>;

    export type SyncAccumulatorOpts = {
        maxTimelineEntries: number;
    }

    export interface ICryptoStore {

    }

    export interface IMatrixStore {
        deleteAllData(): Promise<void>;
        getAccountData(eventType: string);
        getFilter(userId: string, filterId: string);
        getFilterIdByName(filterName: string);
        getGroup(): Group;
        getGroups(): Group[];
        getRoom(roomId: string): Room;
        getRooms(): Room[];
        getRoomSummaries(): RoomSummary[];
        getSavedSync(): Promise<any>;
        getSyncToken(): string;
        getUser(userId: string): User;
        getUsers(): User[];
        removeRoom(roomId: string);
        save();
        scrollback(room: Room, limit: number): any[];
        setFilterIdByName(filterName: string, filterId: string);
        setSyncData(syncData: any): Promise<void>;
        setSyncToken(token: string);
        startup(): Promise<void>;
        storeAccountDataEvents(events: MatrixEvent[]);
        storeEvents(room: Room, events: MatrixEvent[], token: string, toStart: boolean);
        storeFilter(filter: Filter);
        storeGroup(group: Group);
        storeRoom(room: Room);
        storeUser(user: User);
    }

    export interface IMatrixScheduler {
        getQueueForEvent(event: MatrixEvent): MatrixEvent[]|null;
        queueEvent(event: MatrixEvent): Promise<void>;
        removeEventFromQueue(event: MatrixEvent): boolean;
        setProcessFunction(fn: MatrixSchedulerProcessFunction);
    }

    export function createClient(opts: CreateClientOps|String)
}
