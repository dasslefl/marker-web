
// Modul für WASM deklarieren, damit TypeScript nicht meckert

declare module "*.wasm" {
    const content: string;
    export default content;
}

declare module "*.md" {
    const content: string;
    export default content;
}