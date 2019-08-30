export interface IBike {
    id:number;
    make:string;
    model:string;
    year:string;
    mods:string;
    picture:string;
    user_id?:number;
    builder_id?:number;
    created_at?:string;
    updated_at?:string;
}