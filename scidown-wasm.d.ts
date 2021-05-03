/// <reference types="emscripten" />
/** Above will import declarations from @types/emscripten, including Module etc. */

export interface FS_I {

    ignorePermissions: boolean;
    trackingDelegate: any;
    tracking: any;
    genericErrors: any;

    //
    // paths
    //
    lookupPath(path: string, opts: any): FS.Lookup;
    getPath(node: FS.FSNode): string;

    //
    // nodes
    //
    isFile(mode: number): boolean;
    isDir(mode: number): boolean;
    isLink(mode: number): boolean;
    isChrdev(mode: number): boolean;
    isBlkdev(mode: number): boolean;
    isFIFO(mode: number): boolean;
    isSocket(mode: number): boolean;

    //
    // devices
    //
    major(dev: number): number;
    minor(dev: number): number;
    makedev(ma: number, mi: number): number;
    registerDevice(dev: number, ops: any): void;

    //
    // core
    //
    syncfs(populate: boolean, callback: (e: any) => any): void;
    syncfs(callback: (e: any) => any, populate?: boolean): void;
    mount(type: Emscripten.FileSystemType, opts: any, mountpoint: string): any;
    unmount(mountpoint: string): void;

    mkdir(path: string, mode?: number): any;
    mkdev(path: string, mode?: number, dev?: number): any;
    symlink(oldpath: string, newpath: string): any;
    rename(old_path: string, new_path: string): void;
    rmdir(path: string): void;
    readdir(path: string): any;
    unlink(path: string): void;
    readlink(path: string): string;
    stat(path: string, dontFollow?: boolean): any;
    lstat(path: string): any;
    chmod(path: string, mode: number, dontFollow?: boolean): void;
    lchmod(path: string, mode: number): void;
    fchmod(fd: number, mode: number): void;
    chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;
    lchown(path: string, uid: number, gid: number): void;
    fchown(fd: number, uid: number, gid: number): void;
    truncate(path: string, len: number): void;
    ftruncate(fd: number, len: number): void;
    utime(path: string, atime: number, mtime: number): void;
    open(path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number): FS.FSStream;
    close(stream: FS.FSStream): void;
    llseek(stream: FS.FSStream, offset: number, whence: number): any;
    read(stream: FS.FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;
    write(
        stream: FS.FSStream,
        buffer: ArrayBufferView,
        offset: number,
        length: number,
        position?: number,
        canOwn?: boolean,
    ): number;
    allocate(stream: FS.FSStream, offset: number, length: number): void;
    mmap(
        stream: FS.FSStream,
        buffer: ArrayBufferView,
        offset: number,
        length: number,
        position: number,
        prot: number,
        flags: number,
    ): any;
    ioctl(stream: FS.FSStream, cmd: any, arg: any): any;
    readFile(path: string, opts: { encoding: 'binary'; flags?: string }): Uint8Array;
    readFile(path: string, opts: { encoding: 'utf8'; flags?: string }): string;
    readFile(path: string, opts?: { flags?: string }): Uint8Array;
    writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string }): void;

    //
    // module-level FS code
    //
    cwd(): string;
    chdir(path: string): void;
    init(
        input: null | (() => number | null),
        output: null | ((c: number) => any),
        error: null | ((c: number) => any),
    ): void;

    createLazyFile(
        parent: string | FS.FSNode,
        name: string,
        url: string,
        canRead: boolean,
        canWrite: boolean,
    ): FS.FSNode;
    createPreloadedFile(
        parent: string | FS.FSNode,
        name: string,
        url: string,
        canRead: boolean,
        canWrite: boolean,
        onload?: () => void,
        onerror?: () => void,
        dontCreateFile?: boolean,
        canOwn?: boolean,
    ): void;
    createDataFile(
        parent: string | FS.FSNode,
        name: string,
        data: ArrayBufferView,
        canRead: boolean,
        canWrite: boolean,
        canOwn: boolean,
    ): FS.FSNode;
}

export interface Scidown extends EmscriptenModule {
    // Methoden, die mittels cwrap eingebunden wurden
    scidownStartRender(fileName: string): number;
    scidownGetOutputSize(): number;
    scidownGetOutputBuffer(): number;
    scidownFree(): void;
    scidownGetRuntime(): number;
    // FS ist zusätzlich exportiert
    FS: FS_I;
    // IDBFS ist auch exportiert
    IDBFS: Emscripten.FileSystemType;
}


declare function scidown(config?: any): Promise<Scidown>;

export default scidown;