export interface IStorage {
    get(key: string): Promise<string | undefined>;
    set(key: string, value: any): Promise<void> | void;
    toJSON(): Promise<Record<string, any>> | Record<string, any>;
}
export interface DC {
    id: number;
    ip: string;
    port: number;
    test?: true;
}
export interface Parser<T> {
    (this: T): void;
}
