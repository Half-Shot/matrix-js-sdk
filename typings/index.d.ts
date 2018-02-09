// Type definitions for matrix-js-sdk
// Project: for matrix-js-sdk
// Definitions by: Will Hunt <will@half-shot.uk>


declare namespace Matrix {

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

    export class MatrixScheduler implements IMatrixScheduler {
        getQueueForEvent(event: Models.MatrixEvent): Models.MatrixEvent[]|null;
        queueEvent(event: Models.MatrixEvent): Promise<void>;
        removeEventFromQueue(event: Models.MatrixEvent): boolean;
        setProcessFunction(fn: MatrixSchedulerProcessFunction): void;
    }

    export class ContentRepo {

    }

    export class Filter {

    }

    export class TimelineWindow {

    }

    export class InteractiveAuth {

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
    export type MatrixSchedulerProcessFunction = (event: Models.MatrixEvent)=> Promise<void>;

    export type SyncAccumulatorOpts = {
        maxTimelineEntries: number;
    }

    export interface ICryptoStore {

    }

    export interface IMatrixStore {
        deleteAllData(): Promise<void>;
        getAccountData(eventType: string): void;
        getFilter(userId: string, filterId: string): void;
        getFilterIdByName(filterName: string): void;
        getGroup(): Models.Group;
        getGroups(): Models.Group[];
        getRoom(roomId: string): Models.Room;
        getRooms(): Models.Room[];
        getRoomSummaries(): Models.RoomSummary[];
        getSavedSync(): Promise<any>;
        getSyncToken(): string;
        getUser(userId: string): Models.User;
        getUsers(): Models.User[];
        removeRoom(roomId: string): void;
        save(): void;
        scrollback(room: Models.Room, limit: number): any[];
        setFilterIdByName(filterName: string, filterId: string): void;
        setSyncData(syncData: any): Promise<void>;
        setSyncToken(token: string): void;
        startup(): Promise<void>;
        storeAccountDataEvents(events: Models.MatrixEvent[]): void;
        storeEvents(room: Models.Room, events: Models.MatrixEvent[], token: string, toStart: boolean): void;
        storeFilter(filter: Filter): void;
        storeGroup(group: Models.Group): void;
        storeRoom(room: Models.Room): void;
        storeUser(user: Models.User): void;
    }

    /* Classes */

    /* Opts Types */

    /* Interfaces */

    export interface IMatrixScheduler {
        getQueueForEvent(event: Models.MatrixEvent): Models.MatrixEvent[]|null;
        queueEvent(event: Models.MatrixEvent): Promise<void>;
        removeEventFromQueue(event: Models.MatrixEvent): boolean;
        setProcessFunction(fn: MatrixSchedulerProcessFunction): void;
    }

    /* Global Functions */

    export function createClient(opts: CreateClientOps|String): MatrixClient

    // Export Models and Stores that are global.
}


/*
event-context.js
room-summary.js
search-result.js
 */

declare namespace Matrix.Models {

    /* models/event-timeline.js*/
    export class EventTimeline {

    }

    /* models/event-timeline-set*/
    export class EventTimelineSet {

    }

    /* models/event.js */
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

    /* models/group.js */
    export class Group {
        groupId: string;
        name: string;
        avatarUrl: string;
        myMembership: string;
        inviter: any;
        constructor(groupId: string);
        setProfile(name: string, avatarUrl: string): void;
        setMyMembership(membership: string): void;
        setInviter(inviter: string): void;
    }

    /* models/room.js */
    export class Room {

    }

    /* models/room-member.js*/
    export class RoomMember {

    }

    /* models/room-state.js */
    export class RoomState {

    }

    /* models/user.js*/
    export class User {

    }

    /* models/room-summary.js */
    export class RoomSummary {
        roomId: string;
        info: RoomSummaryInfo;
        constructor(roomId: string, info: RoomSummaryInfo);
    }

}

declare namespace Matrix.Crypto {

    export interface CryptoStore {

    }

    export class MemoryCryptoStore implements CryptoStore {

    }

    export class IndexedDBCryptoStore implements CryptoStore {

    }
}

declare namespace Matrix.Store {

    export class MatrixInMemoryStore implements IMatrixStore {
        //Incomplete
        deleteAllData(): Promise<void>;
        getAccountData(eventType: string): void;
        getFilter(userId: string, filterId: string): void;
        getFilterIdByName(filterName: string): void;
        getGroup(): Models.Group;
        getGroups(): Models.Group[];
        getRoom(roomId: string): Models.Room;
        getRooms(): Models.Room[];
        getRoomSummaries(): Models.RoomSummary[];
        getSavedSync(): Promise<any>;
        getSyncToken(): string;
        getUser(userId: string): Models.User;
        getUsers(): Models.User[];
        removeRoom(roomId: string): void;
        save(): void;
        scrollback(room: Models.Room, limit: number): any[];
        setFilterIdByName(filterName: string, filterId: string): void;
        setSyncData(syncData: any): Promise<void>;
        setSyncToken(token: string): void;
        startup(): Promise<void>;
        storeAccountDataEvents(events: Models.MatrixEvent[]): void;
        storeEvents(room: Models.Room, events: Models.MatrixEvent[], token: string, toStart: boolean): void;
        storeFilter(filter: Filter): void;
        storeGroup(group: Models.Group): void;
        storeRoom(room: Models.Room): void;
        storeUser(user: Models.User): void;
    }

    export class IndexedDBStore implements IMatrixStore {
        //Incomplete
        deleteAllData(): Promise<void>;
        getAccountData(eventType: string): void;
        getFilter(userId: string, filterId: string): void;
        getFilterIdByName(filterName: string): void;
        getGroup(): Models.Group;
        getGroups(): Models.Group[];
        getRoom(roomId: string): Models.Room;
        getRooms(): Models.Room[];
        getRoomSummaries(): Models.RoomSummary[];
        getSavedSync(): Promise<any>;
        getSyncToken(): string;
        getUser(userId: string): Models.User;
        getUsers(): Models.User[];
        removeRoom(roomId: string): void;
        save(): void;
        scrollback(room: Models.Room, limit: number): any[];
        setFilterIdByName(filterName: string, filterId: string): void;
        setSyncData(syncData: any): Promise<void>;
        setSyncToken(token: string): void;
        startup(): Promise<void>;
        storeAccountDataEvents(events: Models.MatrixEvent[]): void;
        storeEvents(room: Models.Room, events: Models.MatrixEvent[], token: string, toStart: boolean): void;
        storeFilter(filter: Filter): void;
        storeGroup(group: Models.Group): void;
        storeRoom(room: Models.Room): void;
        storeUser(user: Models.User): void;
    }

    export class WebStorageSessionStore implements IMatrixStore {
        //Incomplete
        deleteAllData(): Promise<void>;
        getAccountData(eventType: string): void;
        getFilter(userId: string, filterId: string): void;
        getFilterIdByName(filterName: string): void;
        getGroup(): Models.Group;
        getGroups(): Models.Group[];
        getRoom(roomId: string): Models.Room;
        getRooms(): Models.Room[];
        getRoomSummaries(): Models.RoomSummary[];
        getSavedSync(): Promise<any>;
        getSyncToken(): string;
        getUser(userId: string): Models.User;
        getUsers(): Models.User[];
        removeRoom(roomId: string): void;
        save(): void;
        scrollback(room: Models.Room, limit: number): any[];
        setFilterIdByName(filterName: string, filterId: string): void;
        setSyncData(syncData: any): Promise<void>;
        setSyncToken(token: string): void;
        startup(): Promise<void>;
        storeAccountDataEvents(events: Models.MatrixEvent[]): void;
        storeEvents(room: Models.Room, events: Models.MatrixEvent[], token: string, toStart: boolean): void;
        storeFilter(filter: Filter): void;
        storeGroup(group: Models.Group): void;
        storeRoom(room: Models.Room): void;
        storeUser(user: Models.User): void;
    }

    export class StubStore implements IMatrixStore {
        deleteAllData(): Promise<void>;
        getAccountData(eventType: string): void;
        getFilter(userId: string, filterId: string): void;
        getFilterIdByName(filterName: string): void;
        getGroup(): Models.Group;
        getGroups(): Models.Group[];
        getRoom(roomId: string): Models.Room;
        getRooms(): Models.Room[];
        getRoomSummaries(): Models.RoomSummary[];
        getSavedSync(): Promise<any>;
        getSyncToken(): string;
        getUser(userId: string): Models.User;
        getUsers(): Models.User[];
        removeRoom(roomId: string): void;
        save(): void;
        scrollback(room: Models.Room, limit: number): any[];
        setFilterIdByName(filterName: string, filterId: string): void;
        setSyncData(syncData: any): Promise<void>;
        setSyncToken(token: string): void;
        startup(): Promise<void>;
        storeAccountDataEvents(events: Models.MatrixEvent[]): void;
        storeEvents(room: Models.Room, events: Models.MatrixEvent[], token: string, toStart: boolean): void;
        storeFilter(filter: Filter): void;
        storeGroup(group: Models.Group): void;
        storeRoom(room: Models.Room): void;
        storeUser(user: Models.User): void;
    }

}
