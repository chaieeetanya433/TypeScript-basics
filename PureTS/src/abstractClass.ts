abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void
    getReelTime() : number {
        //some complex calculations
        return 8
    }
}

class facebook extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

    getSepia(): void {
        console.log("sepia");
    }
}

const chaieee = new facebook("test", "test", 3)

chaieee.getReelTime();
