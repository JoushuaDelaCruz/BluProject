class Chapter {
    private _id: number;
    private _title: string;
    private _content: string;

    constructor(id: number, title: string, content: string) {
        this._id = id;
        this._title = title;
        this._content = content;
    }

    public get id(): number {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public get content(): string {
        return this._content;
    }
}