declare var mina:any;

export class AnimationFrame {
    public svgId:string;
    public elementId:string;
    public animation = {};
    public duration:number;
    public easing:any;

    constructor(svgId:string, elementId:string, animation:{}, duration:number, easing:any) {
        this.svgId = svgId;
        this.elementId = elementId;
        this.animation = animation;
        this.duration = duration;
        this.easing = easing || mina.easein;
    }
}