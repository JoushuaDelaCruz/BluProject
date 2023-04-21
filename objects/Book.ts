class Book implements Iterable<Chapter>{
    private _id: number;
    private _title: string;
    private _image: string;
    private _description: string;
    private _chapters: Chapter[];

    constructor(id: number, title: string, image: string = "", description: string = "") {
        this._id = id;
        this._title = title;
        this._image = image;
        this._description = description;
        this._chapters = [];
    }

    public addChapter = (chapter: Chapter) => {
        this._chapters.push(chapter);
    }

    public noChapters = () => {
        return this._chapters.length === 0;
    }

    public get id(): number {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public get image(): string {
        if (this._image === "") {
            return "N/A";
        }
        return this._image;
    }

    public get description(): string {
        if (this._description === "") {
            return "There is currently no description for this book.";
        }
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public set image(image: string) {
        this._image = image;
    }

    public [Symbol.iterator](): Iterator<Chapter> {
        let index = 0;
        return {
            next: () => {
                if (index < this._chapters.length) {
                    return {
                        value: this._chapters[index++],
                        done: false
                    }
                } else {
                    return {
                        value: null,
                        done: true
                    }
                }
            }
        }
    }
}